import React from "react";
import { useIsAuthenticated, useMsal, AuthenticatedTemplate } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import Alarm from "./alarm/Alarm";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Search from "./search/Search";
import "../App.css";
/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const {accounts} = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const name = isAuthenticated? accounts[0].name : '';
    return (
        <>
            <Header />
            <Search />
            <Alarm />
            <Menu />
            <div className='menu' bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Home</a>
                { isAuthenticated ? <span><SignOutButton />Hi {name}</span> : <SignInButton /> }
            </div>
        
        
        </>
    );
};