import axios from "axios";

const restoreAlarm = async (deviceId, userEmail) => {
return await axios({
    method: "POST",
    url: "https://smarthut.azurewebsites.net/api/restorealarm",
    data: { "deviceId": deviceId,
        "userName": userEmail },
})
    .then((res) => {
    console.log(res.data);
    })
    .catch((error) => {
    console.log(error);
    });
};

export default restoreAlarm;