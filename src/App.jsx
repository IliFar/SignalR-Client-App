import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout";
import "./App.css";
import Search from "./components/search/Search";
import Alarm from "./components/alarm/Alarm";
import Menu from "./components/menu/Menu";
import {
  useIsAuthenticated,
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginRequest } from "../authentication/authConfig";
import Signin from "./components/Signin.jsx/Signin";
import { SignOutButton } from "./components/SignOutButton";
import Header from "./components/header/Header";

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const name = isAuthenticated ? accounts[0].name : " ";
  const request = {
    ...loginRequest,
    account: accounts[0],
  };
  const [accessToken, setAccessToken] = useState(null);
  // Silently acquires an access token which is then attached to a request for Microsoft Graph data
  // instance
  //   .acquireTokenSilent(request)
  //   .then((response) => {
  //     setAccessToken(response.accessToken);
  //   })
  //   .catch((e) => {
  //     instance.acquireTokenPopup(request).then((response) => {
  //       setAccessToken(response.accessToken);
  //     });
  //   });
  return (
    // <PageLayout />
    <>
      {!isAuthenticated ? (
        <Signin />
      ) : (
        <>
          <Header name={accounts[0].name}/>
          <Search />
          <Alarm />
          <Menu isAuthenticated = {isAuthenticated}/>
          <SignOutButton/>
        </>
      )}
    </>
  );
};

export default App;
