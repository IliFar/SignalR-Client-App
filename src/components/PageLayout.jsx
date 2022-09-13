import React from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */


export const PageLayout = (props) => {
    const {accounts} = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const username = isAuthenticated? accounts[0].name : '';
    return (
        <>
            <div className='navbar' bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Home</a>
                { isAuthenticated ? <span><SignOutButton />  Hi {username}!</span> : <SignInButton /> }
            </div>
            <h5><center>Welcome to Luma Hotel</center></h5>
            <br />
            <br />
            {props.children}
        </>
    );
};