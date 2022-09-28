import { useContext } from "react";
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
    // console.log('currDvs',currentDevices);
    
    if(currentDevices.length>0 && roomNameList.length>0){
        return (
            <div className="devices">
            <h1>All Devices</h1>
                {roomNameList.map((roomName, i) => (
                    <>
                    <ul key = {i} className='room'>
                        <div className="room_name">{capitalizeFirstLetter(roomName)}</div>
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
        return (<p>Loading...</p>)
    }    
}