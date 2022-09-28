import React from "react";
import "./Menu.css";
import { SignInButton } from "../SignInButton";
import { SignOutButton } from "../SignOutButton";
import { HiHome } from "react-icons/hi";
import { BiDevices } from "react-icons/bi";
import { AppContext } from "../Data";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { alarmList } = React.useContext(AppContext);
  let navigate = useNavigate();
  return (
    <div className="menu">
      <div className="menu-icons">
        <BiDevices className="menu-icon" onClick={() => navigate("/allDevices")} />
        <div className="home-icon">
          <HiHome className="menu-icon" onClick={() => navigate("/")} /> 
          {alarmList.length > 0 && <span>{alarmList.length}</span>}
        </div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default Menu;
