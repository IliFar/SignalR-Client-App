import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Alarm from "./components/alarm/Alarm";
import Menu from "./components/menu/Menu";
import DevicesByRoom from "./components/allDevices/DevicesByRoom";

const App = () => {

  return (
    <>      
      <Header />
      <UnauthenticatedTemplate>
        <p>Welcome to Luma alarm center! Please log in!</p>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Search />
        <Router>
          <Routes>
            <Route path="/" element={<Alarm />} />
            <Route path="allDevices" element={<DevicesByRoom />} />
          </Routes>
          <Menu />
        </Router>
      </AuthenticatedTemplate>      
    </>      
  );
}

export default App
