import React, { useContext, useEffect, useState } from "react";
import { BuildingAndDevicesContext } from "../../../context/BuidlingAndDevicesContext";

import connectSignalR from "../../../api_calls/Connect";
import Connection from "../sensors/Connection";


const Alarm = () => {
  const { bldInfo, devices } = useContext(BuildingAndDevicesContext);
  const [sensorData, setSensorData] = useState({});
  const { url, token } = Connection();


  useEffect(() => {
    connectSignalR(setSensorData, url, token);
  }, [url, token])

  return (
    <div className="alarm">
      Alarm
      <p></p>
    </div>
  );
};

export default Alarm;
