import React from "react";
import "./Menu.css";
import { SignInButton } from "../SignInButton";
import { SignOutButton } from "../SignOutButton";
import icons from "../icons/Icons";
import { AppContext } from "../Data";

const Menu = () => {
  const { alarmList } = React.useContext(AppContext);
  return (
    <div className="menu">
      <i>{icons.device}</i>
      <i>{icons.home}</i>
      <SignOutButton />
      {alarmList && <div className="alarm-home">
        <span className="alarm-count">{alarmList.length}</span>
      </div>}
    </div>
  );
};

export default Menu;
