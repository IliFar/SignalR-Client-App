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
    const [bldInfo, setBldInfo] = useState(null);
    const [devices, setDevices] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    
    const name = accounts[0]?.name?? '';

    function getToken(){   
        const request = {
            ...loginRequest,
            account: accounts[0]
        };
        let name = accounts[0].name;
    
        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
        setAccessToken(response.accessToken);
        }).catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
            setAccessToken(response.accessToken);
            });
        });
        return name;
    }
    
    useEffect(()=>{
        if(isAuthenticated){
            getToken();
        }
    }, [accessToken])
    
    console.log('acc', accounts[0]);
    

    function fetchBldInfo(accessToken){
        getBuildingInfo(accessToken).then(function (response) {
            setBldInfo(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });   
    };

    function fetchDevicesInfo(accessToken){
        try {
            getAllDevices(accessToken, bldInfo.id).then(function (response) {
                setDevices(response.data);
            })
            .catch(function (error) {
            console.log(error);
            }) } 
        catch(err) {console.log(err)}    
    }
        
    useEffect(() =>{
        if(accessToken != null){
            fetchBldInfo(accessToken)
        }
    }, [accessToken])

    useEffect(() =>{
        if(accessToken != null && bldInfo.id != null){
            fetchDevicesInfo(accessToken, bldInfo.id)
        }
    }, [bldInfo])

    console.log('bld', bldInfo);
    console.log('devices', devices);

    return (
        <>
            {/* Signed and Unsigned user can see Menu and Header  */}
            
            <Header  name = {name} isAuthenticated={isAuthenticated}/>
            
            {/* Only signed in user can see content in AuthenticatedTemplate */}
            <AuthenticatedTemplate>
            
                <Alarm />
                <Search />  
            </AuthenticatedTemplate>

            {/* Unsigned in user see content in UnauthenticatedTemplate */}
            <UnauthenticatedTemplate>
                <p> You are not signed in! Please do sign in to use Luma Climate App</p>
            </UnauthenticatedTemplate>
            
            <Menu />
            
        </>
    );
};