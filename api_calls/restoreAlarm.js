import axios from "axios";

// const restoreAlarm = async (id, userEmail) => {
// return await axios({
//     method: "POST",
//     url: "https://smarthut.azurewebsites.net/api/restorealarm",
//     data: { 
//         deviceId: `${id}`,
//         userName: `${userEmail}` },
// })
//     .then((res) => {
//     console.log(res.data);
//     })
//     .catch((error) => {
//     console.log(error);
//     });
// };
//export default restoreAlarm;

export default async function restoreAlarm (id, userEmail){
    await axios({
        method: "POST",
        url: "https://smarthut.azurewebsites.net/api/restorealarm",
        data: { 
            deviceId: id,
            userName: userEmail },
    })
        .then((res) => {
        console.log(res.data);
        })
        .catch((error) => {
        console.log(error);
        });
    };

