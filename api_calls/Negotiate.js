import axios from "axios";

const negotiate = async (setSensors, userEmail) => {
  return await axios({
    method: "get",
    url: "https://smarthut.azurewebsites.net/api/negotiate",
    headers: { "X-MS-SIGNALR-USERID": `${userEmail}` },
  })
    .then((res) => {
      setSensors(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default negotiate;
