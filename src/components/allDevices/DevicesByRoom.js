import { useContext, useEffect } from "react";
import { AppContext } from "../Data";
import capitalizeFirstLetter from "../../services/capitalizeFirstLetter";
import "./Devices.css";

export default function DeviceByRoom(){
    const { currentDevices, roomNameList} = useContext(AppContext);

    function OneDevice(props){
        if(props.metricType==1){
            return <li key={props.id}>Temperature: {props.value} {props.unit}</li>
        }else{
            return <li key={props.id}>Humidity: {props.value} {props.unit}</li>
        }
    }
    //console.log('currDvs',currentDevices);
    if(roomNameList.length>0){
        return (
            <div className="devices">
            <h2>All Devices</h2>
                {roomNameList.map((roomName, i) => (
                    <>
                    <ul key = {i.toString()} className='room'>
                        <div key={roomName} className="room_name">{capitalizeFirstLetter(roomName)}</div>
                        {currentDevices?.map((device)=>(               
                            device.name == roomName && OneDevice(device)
                        ))}
                    </ul>
                    <hr />
                    </>
                    
                ))}
            </div>
        )
    }else{
        return (<span class="loader"></span>)
    }    
}