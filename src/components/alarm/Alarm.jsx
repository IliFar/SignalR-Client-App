import { useContext } from "react";
import { AppContext } from "../Data";
import { restoreAlarm } from "../../../api_calls/restoreAlarm";
import totalAlarm from "./totalAlarm";
import "./Alarm.css";
import capitalizeFirstLetter from "../../services/capitalizeFirstLetter";
import { TiWarningOutline } from "react-icons/ti";

const Alarm = (props) => {
  const { alarmList } = useContext(AppContext);

  const username = props.username;

  const ShowOneAlarm = (alarm, username) => {
    if (alarm != null) {
      let roomname = capitalizeFirstLetter(alarm.name);
      let type = alarm.metricType == 1 ? "Temperature " : "Humidity ";
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
          <button className="reset">Reset</button>
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
    <div className="alarm">
      {totalAlarm(alarmList)}
      {alarmList.length > 0 && <p className="alarm-list-p">Alarm list :</p>}
      <hr className="line" />
      <div className="alarms-container">{ShowAllAlarms(alarmList)}</div>
    </div>
  );
};

export default Alarm;
