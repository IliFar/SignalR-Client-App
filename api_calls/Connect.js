import { emit } from "process";

const signalR = require("@microsoft/signalr");

const connectSignalR = async (setSensorData, url, token, restoreAlarm) => {
  let connection = new signalR.HubConnectionBuilder()
    .withUrl(`${url}`, { accessTokenFactory: () => token })
    .build();

  connection.start();

  connection.on("newTelemetry", (data) => {
    setSensorData(data);
  });

  try{connection.on("alarmNeutralized", () => {
    restoreAlarm(id, userEmail);
    });
  }catch(err){
  console.error(err)
}}

export default connectSignalR;
