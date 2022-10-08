import axios from "axios";

const negotiate = async (userEmail) => {
  return await axios({
    method: "get",
    url: "https://smarthut.azurewebsites.net/api/negotiate",
    headers: { "X-MS-SIGNALR-USERID": `${userEmail}` },
  })
    .then((res) => {
      const url = res.data.url;
      const token = res.data.accessToken;
      sessionStorage.setItem("url", url);
      sessionStorage.setItem("token", token);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default negotiate;
