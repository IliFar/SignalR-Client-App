import { useMsal } from "@azure/msal-react";
import React, { useEffect, useState } from "react";
import { loginRequest } from "../../authentication/authConfig";
import {
  getAllDevices,
  getBuildingInfo,
} from "../../api_calls/BuildingAndDevice";

const BuildingAndDevices = () => {
  const [bldInfo, setBldInfo] = useState([]);
  const [devices, setDevices] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const { instance, accounts } = useMsal();

  const request = {
    ...loginRequest,
    account: accounts[0],
  };

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

  useEffect(() => {
    if (accessToken != null) {
      getBuildingInfo(accessToken, setBldInfo);
    }
    if (accessToken != null && bldInfo.id != null) {
      getAllDevices(accessToken, bldInfo.id, setDevices);
    }
  }, [accessToken, bldInfo.id]);

  return { bldInfo, devices };
};

export default BuildingAndDevices;
