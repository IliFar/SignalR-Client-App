import React from "react";
import { useMsal } from "@azure/msal-react";
import icons from "./icons/Icons";

function handleLogout(instance) {
  instance.logoutPopup().catch((e) => {
    console.error(e);
  });
}

export const SignOutButton = () => {
  const { instance } = useMsal();

  return <i onClick={() => handleLogout(instance)}>{icons.logout}</i>;
};
