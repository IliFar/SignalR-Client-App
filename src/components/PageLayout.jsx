import React, { useState, useEffect } from "react";
import {
  useIsAuthenticated,
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Alarm from "./alarm/Alarm";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Search from "./search/Search";
import "../App.css";
import { loginRequest } from "../../authentication/authConfig";
import { getBuildingInfo, getAllDevices } from "../../api_calls/BuildingAndDevice";
import * as signalR from "@microsoft/signalr";

export function PageLayout(props) {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const name = isAuthenticated ? accounts[0].name : " ";
  const request = {
    ...loginRequest,
    account: accounts[0],
  };
  const [accessToken, setAccessToken] = useState(null);
  // Silently acquires an access token which is then attached to a request for Microsoft Graph data
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

  const [bldInfo, setBldInfo] = useState(null);
  const [devices, setDevices] = useState(null);

  function fetchBldInfo(accessToken) {
    getBuildingInfo(accessToken)
      .then(function (response) {
        setBldInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchDevicesInfo(accessToken) {
    try {
      getAllDevices(accessToken, bldInfo.id)
        .then(function (response) {
          setDevices(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (accessToken != null) {
      fetchBldInfo(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken != null && bldInfo.id != null) {
      fetchDevicesInfo(accessToken, bldInfo.id);
    }
  }, [bldInfo]);

  console.log("bld", bldInfo);
  console.log("devices", devices);

  return (
    <>
      {/* Signed and Unsigned user can see Menu and Header  */}
      <Header name={name} isAuthenticated={isAuthenticated} />

      {/* Only signed in user can see content in AuthenticatedTemplate */}
      <AuthenticatedTemplate>
        <Alarm />
        <Search />
      </AuthenticatedTemplate>

      {/* Unsigned in user see content in UnauthenticatedTemplate */}
      <UnauthenticatedTemplate>
        <p> You are not signed in! Please do sign in to use Luma Climate App</p>
      </UnauthenticatedTemplate>

      <Menu isAuthenticated={isAuthenticated} />
    </>
  );
}
