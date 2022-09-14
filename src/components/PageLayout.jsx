import React, {useState, useEffect} from "react";
import { useIsAuthenticated, useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Alarm from "./alarm/Alarm";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Search from "./search/Search";
import "../App.css";
import { loginRequest } from "../../authentication/authConfig";
import {getBuildingInfo, getAllDevices } from "../data/apis";


export function PageLayout (props){
    const isAuthenticated = useIsAuthenticated();
    const { instance, accounts, inProgress } = useMsal();
    const name = isAuthenticated? accounts[0].name : ' ';
    const request = {
        ...loginRequest,
        account: accounts[0]
    };
    const [accessToken, setAccessToken] = useState(null);
    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
    setAccessToken(response.accessToken);
    }).catch((e) => {
    instance.acquireTokenPopup(request).then((response) => {
        setAccessToken(response.accessToken);
    });
}); 

// const [bldInfo, setBldInfo] = useState(null);

// useEffect( () => {
//     async function fetchBldInfo(accessToken){
//         const res = await getBuildingInfo(accessToken);
//         setBldInfo(res);
//         console.log(res);
//     };
//     fetchBldInfo(accessToken) 
// }, [])
// console.log('buildInfo', bldInfo);

// const res = getBuildingInfo(accessToken);
//         console.log('res', res);

    return (
        <>
            {/* Signed and Unsigned user can see Menu and Header  */}
            <Header name={name} isAuthenticated={isAuthenticated}/>
        
            {/* Only signed in user can see content in AuthenticatedTemplate */}
            <AuthenticatedTemplate>
                
                <Alarm />
                <Search />  
            </AuthenticatedTemplate>

            {/* Unsigned in user see content in UnauthenticatedTemplate */}
            <UnauthenticatedTemplate>
                <p> You are not signed in! Please do sign in to use Luma Climate App</p>
            </UnauthenticatedTemplate>
            
            <Menu isAuthenticated={isAuthenticated}/>
            
        </>
    );
};