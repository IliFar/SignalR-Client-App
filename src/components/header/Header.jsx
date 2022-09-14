import React from "react";
// import User from "../user/User";
import "./Header.css";

const Header = () => {
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
        <h4 className="username">Hi, User</h4>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt=""
          className="user-img"
        />
      </div>
    </div>
  );
};

export default Header;
