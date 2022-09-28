import React from "react";
import { useMsal } from "@azure/msal-react";
import icons from "./icons/Icons";
import { AppContext } from "./Data";
import { BiLogIn } from "react-icons/bi";



export const SignOutButton = () => {
  const {handleLogout} = React.useContext(AppContext)

  return <BiLogIn className="menu-icon" onClick={() => handleLogout()}/>;
};
