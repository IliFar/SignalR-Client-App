export default function(arr, setIndexArr){
    let temp = [];
    arr.map(a => temp.push(a.id));
    setIndexArr(temp)
}