import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import Alarm from "./components/alarm/Alarm";
import Menu from "./components/menu/Menu";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import Signin from "./components/Signin.jsx/Signin";
import Header from "./components/header/Header";
import BuildingAndDevices from "./components/BuildingAndDevices";
import { BuildingAndDevicesContext } from "../context/BuidlingAndDevicesContext";

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();
  const { bldInfo, devices } = BuildingAndDevices();

  return (
    // <PageLayout />
    <>
      {!isAuthenticated ? (
        <Signin />
      ) : (
        <>
          <BuildingAndDevicesContext.Provider value={{ bldInfo, devices }}>
            <Header name={accounts[0].name} />
            <Search />
            <Alarm />
            <Menu />
          </BuildingAndDevicesContext.Provider>
        </>
      )}
    </>
  );
};

export default App;
