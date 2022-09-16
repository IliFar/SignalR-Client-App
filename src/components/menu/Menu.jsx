import React from "react";
import "./Menu.css";
import { SignInButton } from "../SignInButton";
import { SignOutButton } from "../SignOutButton";

const Menu = (props) => {
  return( 
    <div className='menu' bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Home</a>
                { props.isAuthenticated ? <span><SignOutButton /></span> : <SignInButton /> }
            </div>);
};

export default Menu;
