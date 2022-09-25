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

async function getUnit(token, setUnits) {
  return await axios({
    method: "get",
    url: "https://api.smarthut.se/Unit",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      setUnits(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function neutralizeAlarm(id, userEmail) {
  return await axios({
    method: "post",
    url: "https://smarthut.azurewebsites.net/api/restorealarm",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      setUnits(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getBuildingInfo, getAllDevices, getUnit };
