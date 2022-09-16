import { useMsal } from "@azure/msal-react";
import React, { useEffect, useState } from "react";
import { loginRequest } from "../../authentication/authConfig";
import { getAllDevices, getBuildingInfo } from "../data/apis";

const GetBuilding = () => {
  const [bldInfo, setBldInfo] = useState([]);
  const [devices, setDevices] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
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
    .catch((e) => {
      instance.acquireTokenPopup(request).then((response) => {
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
  }, [accessToken]);

  return (
    <>
      <p>{bldInfo.id}</p>
      {devices.map((device) => device.name)}
    </>
  );
};

export default GetBuilding;
