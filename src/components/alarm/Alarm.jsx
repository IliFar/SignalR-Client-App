import React from 'react'

//Config för vad som ska filtreras 
const GetAlarmedCensors = (ApiCensor) => {

  var tempLowOK = 20;
  var tempHighOK = 25;
  var HumidLowOK = 50;
  var HumidHighOK = 80;

    if (tempLowOK >= ApiCensor[1] || ApiCensor[1] >= tempHighOK) {

      return ApiCensor;
    }
    
    if (HumidLowOK >= ApiCensor[2] || ApiCensor[2] >= HumidHighOK) {
      
      return ApiCensor;
    }
}

//Skriver ut alarm och för tillfället skapar datan 
const Alarm = () => {

  //Namn , temp, most
  let ApiCensor = [
    ["Sensor 1", 35, 20 ],
    ["Sensor 2", 13, 53 ],
    ["Sensor 3", 23, 45 ],
    ["Sensor 4", 22, 55 ],
    ["Sensor 5", 24, 51 ],
    ["Sensor 6", 25, 53 ],
    ["Sensor 7", 22, 55 ],
    ["Sensor 8", 16, 52 ]
  ]

  return (
    <div className='alarm'>
      {ApiCensor.slice(0, ApiCensor.length).map((item, index) => {
        return (
          <tr>
            {GetAlarmedCensors(item)}
          </tr>
        );
      })}
    </div>
  );
}

export default Alarm


      /* {test.map((items, index) => {
            return <p> {items} </p>
    })} */
// {ApiCensor.map((items, index) => {
//   return (
//     <ol>
//       {items.map((subItems, sIndex)=> {
//         return <li> {subItems} </li>
//       })}
//     </ol>
//   );
// })}

// {ApiCensor.slice(0, ApiCensor.length).map((item, index) => {
//   return (
//     <tr>
//       {/* { getWrongAlarm(item[1], item[2]) } */}
//       {/* {item[1]} */}
//       {test}
//     </tr>
//   );
// })}

