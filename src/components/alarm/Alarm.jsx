import { useContext } from "react";
import { AppContext } from "../Data";
import { restoreAlarm } from "../../../api_calls/BuildingAndDevice";
import totalAlarm from "./totalAlarm";
import "./Alarm.css";
import capitalizeFirstLetter from "../../services/capitalizeFirstLetter";
import { TiWarningOutline } from "react-icons/ti";
import DeviceByRoom from "../allDevices/DevicesByRoom";
import { useMsal } from "@azure/msal-react";

const Alarm = () => {
  const { alarmList, setAlarmList } = useContext(AppContext);
  const { accounts } = useMsal();
  const username = accounts[0]?.username;

  const removeAlarm = (alarmList, alarm) => {
    const newArr = alarmList.filter((al) => {
      return al.id != alarm.id;
    });
    setAlarmList(newArr);
  };

  const ShowOneAlarm = (alarm, username) => {
    if (alarm != null) {
      let roomname = capitalizeFirstLetter(alarm.name);
      let type = alarm.metricType == 1 ? "Temperature " : "Humidity ";
      function handleClick() {
        restoreAlarm(alarm.id, username);
        removeAlarm(alarmList, alarm);
      }
      // console.log(alarmList)
      return (
        <div className="alarms">
          <TiWarningOutline className="icon" />
          <div className="alarms-body">
            <div className="room_name">{roomname}</div>
            <div className="value">
              {type} {alarm.value}
              {alarm.unit}
            </div>
            <div className="range">
              Max: {alarm.maxValue} / Min: {alarm.minValue}
            </div>
          </div>
          <button className="reset" onClick={handleClick}>
            Reset
          </button>          
        </div>
      );
    }
  };

  const ShowAllAlarms = (alarmList) => {
    if (alarmList) {
      return <>{alarmList.map((alarm) => ShowOneAlarm(alarm, username))}</>;
    }
  };
  return (
    <>
    <div className="alarm">
      {totalAlarm(alarmList)}
      {alarmList.length > 0 && <p className="alarm-list-p">Alarm list :</p>}

      <div className="alarms-container">{ShowAllAlarms(alarmList)}</div>
      {!alarmList.length > 0 && <DeviceByRoom/>}
    </div>
    </>
    
  );
};

export default Alarm;
