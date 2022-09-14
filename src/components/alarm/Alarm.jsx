import React from 'react'

//Config för vad som ska filtreras 
const GetAlarmedCensors = (ApiCensor) => {

  var minValue = ApiCensor.minValue;
  var maxValue = ApiCensor.maxValue;



    if (minValue >= 16 || 28 <= maxValue) {

      return (
        <tr>
          {/* {ApiCensor[0]}
          {ApiCensor[1]} */}
          <p>{ApiCensor.name}</p>
          <p>To Cold or warm</p>
          <button>Reset</button>
        </tr>
      );
    }
    
    // if (HumidLowOK >= ApiCensor[2] || ApiCensor[2] >= HumidHighOK) {
      
    //   return (
    //     <tr>
    //       {ApiCensor[0]}
    //       {ApiCensor[1]}
    //       <p>To low or high humidity</p>
    //       <button>Reset</button>
    //     </tr>
    //   );
    // }
    return ApiCensor;
}

//Skriver ut alarm och för tillfället skapar datan 
const Alarm = () => {

  //name , temp, most, 
  let ApiCensor = 
    {
      "address": "120 West 41st Street",
      "postalCode": "10036-7315",
      "city": "New York",
      "country": "USA",
      "azureAdGroupId": "cdd91775-0d9b-4ef5-b37d-0072566860d0",
      "devices": [
        {
          "buildingId": "33c144db-a99a-4067-aeea-0d28c03236d7",
          "minValue": 19,
          "maxValue": 22,
          "unitId": "9b6724b8-54fb-48f8-912f-2ed2bfec24bd",
          "metricType": 1,
          "id": "34d0d00a-17bd-48a9-b846-155c0d5ae20d",
          "name": "Temperature Conference room 2"
        },
        {
          "buildingId": "33c144db-a99a-4067-aeea-0d28c03236d7",
          "minValue": 19,
          "maxValue": 22,
          "unitId": "9b6724b8-54fb-48f8-912f-2ed2bfec24bd",
          "metricType": 1,
          "id": "5178fbbd-4cc7-47e5-ac75-411862d901a5",
          "name": "Temperature Conference room 1"
        },
        {
          "buildingId": "33c144db-a99a-4067-aeea-0d28c03236d7",
          "minValue": 30,
          "maxValue": 70,
          "unitId": "d1e41451-783f-432f-b200-da6d335745ee",
          "metricType": 2,
          "id": "077c3db8-8ac4-41bf-b277-7ec193d3bfde",
          "name": "Humidity Conference room 2"
        },
        {
          "buildingId": "33c144db-a99a-4067-aeea-0d28c03236d7",
          "minValue": 25,
          "maxValue": 28,
          "unitId": "9b6724b8-54fb-48f8-912f-2ed2bfec24bd",
          "metricType": 1,
          "id": "834cc2db-26be-408f-ad52-8d02cc2c5bbf",
          "name": "Temperature swimming pool 5"
        },
        {
          "buildingId": "33c144db-a99a-4067-aeea-0d28c03236d7",
          "minValue": 30,
          "maxValue": 70,
          "unitId": "d1e41451-783f-432f-b200-da6d335745ee",
          "metricType": 2,
          "id": "cda4eadf-7643-4b03-bb4c-e48cbad6185e",
          "name": "Humidity Conference room 3"
        },
        {
          "buildingId": "33c144db-a99a-4067-aeea-0d28c03236d7",
          "minValue": 19,
          "maxValue": 22,
          "unitId": "9b6724b8-54fb-48f8-912f-2ed2bfec24bd",
          "metricType": 1,
          "id": "05c20a74-96f1-42cb-97c7-f5d053fc8ef3",
          "name": "Temperature Conference room 3"
        }
      ],
      "id": "33c144db-a99a-4067-aeea-0d28c03236d7",
      "name": "LUMA Hotel - Times Square"
    }
    // ["Temperature Conference room 3", 35, 20 ],
    // ["Humidity Conference room 3 2", 13, 53 ],
    // ["Temperature swimming pool 5", 23, 45 ],
    // ["Humidity Conference room 2", 22, 55 ],
    // ["Temperature Conference room 1", 24, 51 ],
    // ["Sensor 6", 25, 53 ],
    // ["Sensor 7", 22, 55 ],
    // ["Sensor 8", 16, 52 ]
  



  return (
    
    <div className='alarm'>
      
      {ApiCensor.devices.slice(0, ApiCensor.devices.length).map((item, index) => {

        return GetAlarmedCensors(item);
        
        
        return (
          <tr>
            {ApiCensor.name}
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

