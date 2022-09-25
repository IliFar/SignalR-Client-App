import {useContext} from "react";
import { AppContext } from "../Data";
import capitalizeFirstLetter from "../../services/capitalizeFirstLetter";

export default function DeviceByRoom(){
    const { currentDevices, roomNameList} = useContext(AppContext);
    function OneDevice(props){
        if(props.metricType==1){
            return <li key={props.id}>Temperature: {props.value} {props.unit}</li>
        }else{
            return <li key={props.id}>Humidity: {props.value} {props.unit}</li>
        }
    }
    if(currentDevices && roomNameList){
        return (
        <> All devices
            {roomNameList.map((roomName, i) => (
                <ul key = {i} className='room'>
                    <div className="room_name">{capitalizeFirstLetter(roomName)}</div>
                    {currentDevices.map((device)=>(               
                        device.name == roomName && OneDevice(device)
                    ))}
                </ul> 
            ))}
        </>
        )
    }else{
        return (<p>Loading...</p>)
    }    
}