const axios = require('axios');

async function getBuildingInfo(token){
    return await axios({
        method: 'get',
        url: 'https://api.smarthut.se/BuildingInfo/GetMyBuilding',
        headers: { Authorization: `Bearer ${token}` }
    })
    
}


async function getAllDevices(token, buildingId){
    return await axios({
        method: 'get',
        url: 'https://api.smarthut.se/DeviceInfo/GetBuildingDevices/'+ buildingId,
        headers: { Authorization: `Bearer ${token}` }
    })
}




export {getBuildingInfo, getAllDevices };

