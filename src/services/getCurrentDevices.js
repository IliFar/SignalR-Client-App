export default function getCurrentDevices(currentDevices, deviceList, sensor){
    let index = deviceList.indexOf((sensor.deviceId).toLowerCase());
    let curr = currentDevices[index]
    let min = curr.minValue;
    let max = curr.maxValue;
    let isNormal = min<= sensor.value && sensor.value <= max;
    curr.value = (sensor.value).toFixed(1);
    curr.time = sensor.time;
    curr.hasAlarm = isNormal;
}
