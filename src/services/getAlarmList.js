

export default function getAlarmList(currentDevices, setAlarmList){   
    let tempAlarm = [];
    if(currentDevices){
        currentDevices.map(dev => {
            dev.hasAlarm && tempAlarm.push(dev)
        })  
    }
    setAlarmList(tempAlarm);
}