import {getBuildingInfo, getAllDevices} from './apis'



function GetInfo(props){
    
    const bld = getBuildingInfo(props.accessToken);
    const id = '33c144db-a99a-4067-aeea-0d28c03236d7';
    const devices = getAllDevices(props.accessToken, id)
    return (
        <>
        <p>{bld}</p>
        <p>{devices}</p>
        </>
)}

export {GetInfo}