import React from "react";
import { useMsal } from "@azure/msal-react";

function handleLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <div 
            className="button" 
            onClick={() => handleLogout(instance)}>
                Sign out
        </div>
    );
}