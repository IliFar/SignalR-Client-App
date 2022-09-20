import React, { useContext, useEffect, useState } from "react";
import { BuildingAndDevicesContext } from "../../../context/BuidlingAndDevicesContext";

import connectSignalR from "../../../api_calls/Connect";
import Connection from "../sensors/Connection";

const allUpperLetters = (string) => {

  return string.toUpperCase();

}

const Alarm = () => {
  const { bldInfo, devices } = useContext(BuildingAndDevicesContext);
  const [sensorData, setSensorData] = useState({});
  const { url, token } = Connection();

  const info = ""; 


  useEffect(() => {
    connectSignalR(setSensorData, url, token);
  }, [url, token])

  console.log(devices);

  const listSensorData = devices.map((device) => 

    { sensorData[0] != null && allUpperLetters(device.id) == sensorData[0].deviceId &&
      // info = sensorData[0].value
      console.log(`${sensorData[0].deviceId} && ${allUpperLetters(device.id)}` )
      
    }
  );

  return (
    <div className="alarm">
      Alarm
      {/* {sensorData[0].value} */}
      {/* {listSensorData} */}
      <p></p>
    </div>
  );
};

export default Alarm;
