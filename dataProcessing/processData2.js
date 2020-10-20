const fs = require('fs');
const { stringify } = require('querystring');
const election = require('./01electionSorted.json');
const temperatures = require('./inputs/temperatureData.json');

//***   -------------------  ***/
//***   ADD TEMPERATURE DATA  ***/
//***   -------------------  ***/

// add cityState single variable to temperature data
let tempsCityState = [];
temperatures.forEach(e => {
    let temp = {
        city: e[0],
        state: e[1],
        cityState: e[0] + e[1],
        avgTemp: e[4]
    }
    tempsCityState.push(temp);
})


let addTemps = [];
tempsCityState.forEach(e => {
    let thisCity = election.find(x => e.cityState === x[2])
    if (thisCity != undefined && thisCity[3] != null && thisCity[4] != null && thisCity[5] === undefined) {
        thisCity.push(e.avgTemp)// avg annual temp
        addTemps.push(thisCity);
    }
});

fs.writeFileSync('02temperaturesAdded.json', JSON.stringify(addTemps));