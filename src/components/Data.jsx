import { useMsal } from "@azure/msal-react";
import React, { createContext } from "react";
import {
  getAllDevices,
  getBuildingInfo,
  getUnit,
} from "../../api_calls/BuildingAndDevice";
import { loginRequest } from "../../authentication/authConfig";
import initDevices from "../services/initDevices";
import React, { useState, useEffect } from "react";
import getExtraArr from "../services/getExtraArr";
import updateCurrentDevices from "../services/updateCurrentDevices";
import getRoomNames from "../services/getRoomNames";
import getAlarmList from "../services/getAlarmList";
import axios from "axios";

export const AppContext = createContext({});

export default function Data(props){
  const [accessToken, setAccessToken] = React.useState(null);
  const [devices, setDevices] = React.useState([]);
  const [bldInfo, setBldInfo] = React.useState({});
  const [units, setUnits] = React.useState([]);
  const [unitList, setUnitList] = useState([]);
  const [deviceList, setDeviceList] = useState([]);
  const [roomNameList, setRoomNameList] = useState([]);
  const [sensorsData, setSensorData] = React.useState([]);
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

  useEffect(() => {
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

    if (accessToken != null) {
      getBuildingInfo(accessToken, setBldInfo)
      .then(getUnit(accessToken, setUnits)
      );

      axios({
        method: "get",
        url: "https://smarthut.azurewebsites.net/api/negotiate",
        headers: { "X-MS-SIGNALR-USERID": `${accounts[0].username}` },
      })
        .then((res) => {
          url = res.data.url;
          const token = res.data.accessToken;
          const signalR = require("@microsoft/signalr");
          let connection = new signalR.HubConnectionBuilder()
          .withUrl(`${url}`, { accessTokenFactory: () => token })
          .build();

          connection.start();

          connection.on("newTelemetry", (data) => {
            setSensorData(data);
            console.log('signalR',data)
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    if (units.length>0) {
      getExtraArr(units, setUnitList);
    }
    
    if (accessToken != null && bldInfo.id != null) {
      getAllDevices(accessToken, bldInfo.id, setDevices);
    }
  }, [accessToken, accounts[0], bldInfo.id]);

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
    if (currentDevices.length > 0 && sensorsData[0] != null) {
      updateCurrentDevices(currentDevices, deviceList, sensorsData[0]);
      getAlarmList(currentDevices, setAlarmList);
    }
  }, [sensorsData[0]]);

  return (
    <>
      <AppContext.Provider
        value={{
          handleLogin,
          handleLogout,
          currentDevices,
          roomNameList,
          alarmList,
          setAlarmList
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
};

