const axios = require("axios");

async function getBuildingInfo(token, setBldInfo) {
  return await axios({
    method: "get",
    url: "https://api.smarthut.se/BuildingInfo/GetMyBuilding",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      setBldInfo(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function getAllDevices(token, buildingId, setDevices) {
  return await axios({
    method: "get",
    url: "https://api.smarthut.se/DeviceInfo/GetBuildingDevices/" + buildingId,
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      setDevices(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getBuildingInfo, getAllDevices };
