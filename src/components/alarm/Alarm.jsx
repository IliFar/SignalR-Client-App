import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Data";

const allUpperLetters = (string) => {
  return string.toUpperCase();
};

const Alarm = () => {
  const { devices, sensorsData } = React.useContext(AppContext);

  const info = "";

  const listSensorData = devices.map((device) => {
    sensorsData[0] != null &&
      allUpperLetters(device.id) == sensorsData[0].deviceId &&
      console.log(
        // info = sensorsData[0].value
        `${sensorsData[0].deviceId} && ${allUpperLetters(device.id)}`
      );
    return sensorsData;
  });

  return (
    <div className="alarm">
      Alarm
      {sensorsData.map((sensor) => sensor.value)}
      <p></p>
    </div>
  );
};

export default Alarm;
