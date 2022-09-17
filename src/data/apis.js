const axios = require('axios');

async function getBuildingInfo(token){
    return axios({
        method: 'get',
        url: 'https://api.smarthut.se/BuildingInfo/GetMyBuilding',
        headers: { Authorization: `Bearer ${token}` }
    })
    
}


function getAllDevices(token, buildingId){
    return axios({
        method: 'get',
        url: 'https://api.smarthut.se/DeviceInfo/GetBuildingDevices/'+ buildingId,
        headers: { Authorization: `Bearer ${token}` }
    })
}

function getHandShaking(userId){
    return axios({
        method: 'get',
        url: 'https://smarthut.azurewebsites.net/api/negotiate',
        headers: `X-MS-SIGNALR${userId}`
    })
}




export {getBuildingInfo, getAllDevices, getHandShaking };

