import cleanName from "./cleanName"

export default function initDevices(devices, setCurerntDevices, units, unitList){
    if(unitList.length!=0){
        const temp = 
        devices.map(p => {
            let index = unitList.indexOf(p.unitId);
                return{
                    id:(p.id).toUpperCase(),
                    maxValue: p.maxValue,
                    minValue: p.minValue,
                    name: cleanName(p.name, 'Temperature ', 'Humidity '),
                    value:'',
                    time:'',                    
                    unit: units[index].unit,
                    metricType: p.metricType,
                    hasAlarm:false,
            }}
        );     
    setCurerntDevices(temp)
    }
}