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
import GetBuilding from "./components/GetBuilding";

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts} = useMsal();
  return (
    // <PageLayout />
    <>
      {!isAuthenticated ? (
        <Signin />
      ) : (
        <> 
          <Header name={accounts[0].name} />
          <Search />
          <Alarm />
          <Menu />
        </>
      )}
    </>
  );
};

export default App;
