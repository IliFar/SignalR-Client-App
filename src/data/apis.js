// const axios = require('axios');

async function getBuildingInfo(token){

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    await fetch("https://api.smarthut.se/BuildingInfo/GetMyBuilding", requestOptions)
    .then(response => JSON.stringify(response.data))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//     axios({
//         method: 'get',
//         url: 'https://api.smarthut.se/BuildingInfo/GetMyBuilding',
//         headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(function (response) {
//         console.log(response);
//     return JSON.stringify(response.data);
//     })
//     .catch(function (error) {
//     console.log(error);
//     });
}


// function getAllDevices(token, buildingId){
//     axios({
//         method: 'get',
//         url: 'https://api.smarthut.se/DeviceInfo/GetBuildingDevices/'+ buildingId,
//         headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     return JSON.stringify(response.data);
//     })
//     .catch(function (error) {
//     console.log(error);
// });
// }




export {getBuildingInfo, getAllDevices };

