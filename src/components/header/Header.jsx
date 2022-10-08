import React from "react";
import "./Header.css";
import SignInButton from "../SignInButton";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const Header = (props) => {
const isAuthenticated = useIsAuthenticated();
const { accounts } = useMsal();
const name= accounts[0]?.name;

  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://www.lumahotels.com/sites/default/files/2021-05/TimesSquareLogo.png"
          alt=""
          className="logo-img"
        />
      </div>
      
      <div className="user-avatar">
      { isAuthenticated ? 
        <>
          <h4 className="username">Hi, {name}</h4>
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            alt=""
            className="user-img"
          />
        </>: <SignInButton /> }
        
      </div>
    </div>
  );
};

export default Header
