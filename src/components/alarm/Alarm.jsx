import { useContext } from "react";
import { AppContext } from "../Data";
import { restoreAlarm } from "../../../api_calls/restoreAlarm";
import totalAlarm from "./totalAlarm";
import "./Alarm.css";
import { TiWarningOutline } from "react-icons/ti";

const Alarm = (props) => {
  const { alarmList } = useContext(AppContext);

  const username = props.username;

  const ShowOneAlarm = (alarm, username) => {
    if (alarm) {
      let type = alarm.metricType == 1 ? "Temperature " : "Humidity ";
      return (
        <div className="alarms">
          <TiWarningOutline className="icon" />
          <div className="alarms-body">
            <div className="room_name">{alarm.name}</div>
            <div className="value">
              {type} {alarm.value}
              {alarm.unit}
            </div>
            <div className="range">
              Max: {alarm.maxValue} / Min: {alarm.minValue}
            </div>
          </div>
          <button className="reset" onClick={restoreAlarm(alarm.id, username)}>
            Reset
          </button>
        </div>
      );
    }
  };

  const ShowAllAlarms = (alarmList) => {
    if (alarmList) {
      return (
        <>
          {alarmList.length > 0 && <p> Alarm list:</p>}
          {alarmList.map((alarm) => ShowOneAlarm(alarm, username))}
        </>
      );
    }
  };
  return (
    <div className="alarm">
      {totalAlarm(alarmList)}
      {ShowAllAlarms(alarmList)}
    </div>
  );
};

export default Alarm;
