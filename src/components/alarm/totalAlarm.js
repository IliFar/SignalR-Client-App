export default function totalAlarm (alarmList){
    return alarmList.length==0 ?'All is ok'
        :alarmList.length==1? `There is ${alarmList.length} alarm`
        :`There are ${alarmList.length} alarms`
}