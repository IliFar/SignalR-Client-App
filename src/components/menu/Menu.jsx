import React from "react";
import "./Menu.css";
import { SignInButton } from "../SignInButton";
import { SignOutButton } from "../SignOutButton";
import { HiHome } from "react-icons/hi";
import { BiDevices } from "react-icons/bi";
import { AppContext } from "../Data";

const Menu = () => {
  const { alarmList } = React.useContext(AppContext);
  return (
    <div className="menu">
      <div className="menu-icons">
        <BiDevices className="menu-icon" />
        <div className="home-icon">
          <HiHome className="menu-icon" />
          {alarmList.length > 0 && <span>{alarmList.length}</span>}
        </div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default Menu;
