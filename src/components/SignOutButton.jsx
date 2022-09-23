import React from "react";
import { useMsal } from "@azure/msal-react";
import icons from "./icons/Icons";
import { AppContext } from "./Data";



export const SignOutButton = () => {
  const {handleLogout} = React.useContext(AppContext)

  return <i onClick={() => handleLogout()}>{icons.logout}</i>;
};
