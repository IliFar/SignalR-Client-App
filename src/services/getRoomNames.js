import cleanName from "./cleanName";

export default function getRoomNames(arr, setRoomList){
    //get all room names from devices
    const array1= arr.map(device =>{
        let cleanname= cleanName(device.name, 'Temperature ', 'Humidity ')
        return cleanname;
    })
    //Get unique set of names
    const array2 = new Set(array1);
    
    //Sort and convert names to array
    const result = [...array2].sort();
    setRoomList(result);
}