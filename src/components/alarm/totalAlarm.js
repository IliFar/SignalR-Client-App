export default function totalAlarm (alarmList){
    // return alarmList.length==0 ?'All is ok'
    //     :alarmList.length==1? `There is ${alarmList.length} alarm`
    //     :`There are ${alarmList.length} alarms`

    return (
        <>
            {alarmList.length == 0 ? (<h3 className="ok">All is Ok</h3>) 
                : alarmList.length == 1 ?(<h3 className="alarm-length">There is {alarmList.length} Alarm</h3>)
                : (<h1 className="alarm-length">There are {alarmList.length} Alarms</h1>)}
        </>
    )
}