import { useContext } from "react";
import { AppContext } from "../Data";

function ShowOneAlarm(props){
  let isTooHigh = (props.value > props.maxValue)? ' is too high ': ' is too low ';
  if(props.metricType==1){    
      return <li key={props.id}>Temperature in {props.name} {isTooHigh}, {props.value} {props.unit}</li>   
  }else{
      return <li key={props.id}>Humidity in {props.name} {isTooHigh}, {props.value} {props.unit}</li>
  }
}

const Alarm = () => {
  const { alarmList} = useContext(AppContext);
  const totalLarm = alarmList? `There is/are ${alarmList.length} alarm(s)` :'All is ok'

  const ShowAllAlarms = ()=> {
    if(alarmList){
    alarmList.map(alarm=> ShowOneAlarm(alarm))
  }}
  return (
    <div className="alarm">
    {totalLarm}
    {ShowAllAlarms}
    </div>
  );
};

export default Alarm;
