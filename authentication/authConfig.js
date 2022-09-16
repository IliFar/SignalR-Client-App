export const msalConfig= {
    auth:{
        clientId:'86c88538-2e16-46d1-b3f4-e26cd8d8eabc',
        authority:'https://login.microsoftonline.com/{9bfa1706-1ffc-494d-a63e-dbbb34c4796b}',
        protocolMode:'AAD',
        redirectUri: '/signin_callback',
    },
    cache:{
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookies: false
    } 
};

export const loginRequest = {
    scopes: [`api://957fee47-d75a-4f21-a073-f68815061809/access_as_a_user`]
}

export const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com'
};