const signalR = require("@microsoft/signalr");

const connectSignalR = async (setSensorData, url, token) => {
  let connection = new signalR.HubConnectionBuilder()
    .withUrl(`${url}`, { accessTokenFactory: () => token })
    .build();

  connection.start();

  connection.on("newTelemetry", (data) => {
    setSensorData(data);
    console.log('signalR', data)
  });

}

export default connectSignalR;
