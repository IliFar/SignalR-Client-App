import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import Alarm from "./components/alarm/Alarm";
import Menu from "./components/menu/Menu";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import Signin from "./components/Signin.jsx/Signin";
import Header from "./components/header/Header";
import DevicesByRoom from "./components/allDevices/DevicesByRoom";

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();

  return (
    <>
      {!isAuthenticated ? (
        <Signin />
      ) : (
        <>
          <Header name={accounts[0]?.name} />
          <Alarm username={accounts[0]?.username} />
          <Search />
          <DevicesByRoom />
          <Menu />
          
        </>
      )}
    </>
  );
};

export default App;
