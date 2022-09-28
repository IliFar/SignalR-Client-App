import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import React, { createContext } from "react";
import {
  getAllDevices,
  getBuildingInfo,
  getUnit,
} from "../../api_calls/BuildingAndDevice";
import connectSignalR from "../../api_calls/Connect";
import negotiate from "../../api_calls/Negotiate";
import { loginRequest } from "../../authentication/authConfig";
import initDevices from "../services/initDevices";
import React, { useState, useEffect } from "react";
import getExtraArr from "../services/getExtraArr";
import getCurrentDevices from "../services/getCurrentDevices";
import getRoomNames from "../services/getRoomNames";
import getAlarmList from "../services/getAlarmList";

export const AppContext = createContext({});

const Data = (props) => {
  const [accessToken, setAccessToken] = React.useState(null);
  const [devices, setDevices] = React.useState([]);
  const [bldInfo, setBldInfo] = React.useState({});
  const [units, setUnits] = React.useState({});
  const [unitList, setUnitList] = useState([]);
  const [deviceList, setDeviceList] = useState([]);
  const [roomNameList, setRoomNameList] = useState([]);
  // const [handShake, setHandShake] = React.useState({});
  const [sensorsData, setSensorData] = React.useState(null);
  const { instance, accounts } = useMsal();
  const [currentDevices, setCurrentDevices] = useState([]);
  const [alarmList, setAlarmList] = useState([]);

  const request = {
    ...loginRequest,
    account: accounts[0],
  };

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  const handleLogout = () => {
    instance.logoutPopup().catch((e) => {
      console.error(e);
    });
  };

  React.useEffect(() => {
    if (request.account) {
      instance
        .acquireTokenSilent(request)
        .then((response) => {
          setAccessToken(response.accessToken);
        })
        .catch(async (e) => {
          await instance.acquireTokenPopup(request).then((response) => {
            setAccessToken(response.accessToken);
          });
        });
    }
    
    if (useIsAuthenticated) {
      if (accessToken != null) {
        getBuildingInfo(accessToken, setBldInfo).then(
          getUnit(accessToken, setUnits)
        );
        console.log('units', units)
      }
      
      if (units.length>0) {
        getExtraArr(units, setUnitList);
      }
      
      if (accessToken != null && bldInfo.id != null) {
        getAllDevices(accessToken, bldInfo.id, setDevices);
      }
      if (accounts[0] != null) {
        negotiate(accounts[0].username);
      }

      if (accounts[0] != null) {
        const url = sessionStorage.getItem("url");
        const token = sessionStorage.getItem("token");
        connectSignalR(setSensorData, url, token);
      }
    }
  }, [accessToken, instance, bldInfo.id], units);

  useEffect(() => {
    if (unitList.length != 0) {
      initDevices(devices, setCurrentDevices, units, unitList);
    }
  }, [devices, units, unitList]);

  useEffect(() => {
    if (devices[0] != null) {
      getExtraArr(devices, setDeviceList);
      getRoomNames(devices, setRoomNameList);
    }
  }, [devices]);

  useEffect(() => {
    if (currentDevices.length>0 && sensorsData != null ) {
      getCurrentDevices(currentDevices, deviceList, sensorsData[0]);
      getAlarmList(currentDevices, setAlarmList);
    }
  }, [currentDevices, sensorsData]);

  return (
    <>
      <AppContext.Provider
        value={{
          handleLogin,
          handleLogout,
          currentDevices,
          roomNameList,
          alarmList,
          setAlarmList,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default Data;
