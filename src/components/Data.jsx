import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import React, { createContext } from "react";
import {
  getAllDevices,
  getBuildingInfo,
} from "../../api_calls/BuildingAndDevice";
import connectSignalR from "../../api_calls/Connect";
import negotiate from "../../api_calls/Negotiate";
import { loginRequest } from "../../authentication/authConfig";

export const AppContext = createContext({});

const Data = (props) => {
  const [accessToken, setAccessToken] = React.useState(null);
  const [devices, setDevices] = React.useState([]);
  const [bldInfo, setBldInfo] = React.useState({});
  const [handShake, setHandShake] = React.useState({});
  const [sensorsData, setSensorData] = React.useState([]);
  const { instance, accounts } = useMsal();

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
        getBuildingInfo(accessToken, setBldInfo);
      }
      if (accessToken != null && bldInfo.id != null) {
        getAllDevices(accessToken, bldInfo.id, setDevices);
      }
      if (accounts[0] != null) {
        negotiate(setHandShake, accounts[0].username);
      }

      if (handShake != null) {
        connectSignalR(setSensorData, handShake.url, handShake.accessToken);
      }
    }
  }, [accessToken, instance, bldInfo.id]);

  return (
    <>
      <AppContext.Provider
        value={{
          accounts,
          bldInfo,
          devices,
          sensorsData,
          instance,
          handleLogin,
          handleLogout,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default Data;
