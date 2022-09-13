import React from "react";
import Alarm from "./components/alarm/Alarm";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Search from "./components/search/Search";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Alarm />
      <Menu />
    </div>
  );
};

export default App;
