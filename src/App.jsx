import React from "react";
import "./App.css";
import Search from "./components/search/Search";
import Alarm from "./components/alarm/Alarm";
import Menu from "./components/menu/Menu";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import Signin from "./components/Signin.jsx/Signin";
import Header from "./components/header/Header";
import DevicesByRoom from "./components/allDevices/DevicesByRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Search />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Alarm />} />
              <Route path="/allDevices" element={<DevicesByRoom />} />
            </Routes>
          </BrowserRouter> 
          <Menu />
          
        </>
      )}
    </>
  );
};

export default App;
