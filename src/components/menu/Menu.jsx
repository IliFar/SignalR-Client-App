import React from "react";
import "./Menu.css";
import { SignInButton } from "../SignInButton";
import { SignOutButton } from "../SignOutButton";
import icons from "../icons/Icons";

const Menu = () => {
  return (
    <div className="menu">
      <i>{icons.device}</i>
      <i>{icons.home}</i>
      <SignOutButton />
    </div>
  );
};

export default Menu;
