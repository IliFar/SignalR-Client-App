import React from 'react'

const AlarmCount = (ApiCensor) => {

  var count = 0;

  ApiCensor.forEach(item => {
    var minValue = item.minValue;
    var maxValue = item.maxValue;

    if (minValue >= 20 || 28 <= maxValue) {

      count++;
    }
  });

  return count;
}

//Config för vad som ska filtreras 
const GetAlarmedCensors = (ApiCensor) => {

  var minValue = ApiCensor.minValue;
  var maxValue = ApiCensor.maxValue;

    if (minValue >= 45 || 45 <= maxValue) {

      return (
        <div className='alarm'>
          <p>{ApiCensor.name}</p>
          <p>To Cold or warm</p>
          <button>Reset</button>
        </div>
      );
    }

    return null;
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

  return (
    
    <div classId='alarmContainer'>

      {/* <p>{ApiCensor.devices[0].name}</p> */}
      <div id="AlarmCountText">
        <p>{AlarmCount(ApiCensor.devices)} Alarms now</p>
      </div>
      
      {ApiCensor.devices.slice(0, ApiCensor.devices.length).map((item, index) => {

        return GetAlarmedCensors(item);       
        
      })}
    </div>
  );
}

export default Alarm