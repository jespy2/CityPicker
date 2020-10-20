const fs = require('fs');
const { stringify } = require('querystring');
const tempsAndElection = require('./02temperaturesAdded.json');
const population = require('./inputs/population.json');

//***   -------------------  ***/
//***   ADD POPULATION DATA  ***/
//***   -------------------  ***/

// add cityState single variable to population data
let popsCityState = [];
population.forEach(e => {
    let temp = {
        city: e.city,
        state: e.state,
        cityState: e.city + e.state,
        population: e.population
    }
    popsCityState.push(temp);
})


let addPops = [];
popsCityState.forEach(e => {
    let thisCity = tempsAndElection.find(x => e.cityState === x[2])
    if (thisCity != undefined && e.population != null) {
        // console.log(thisCity)
        thisCity.push(e.population)// avg annual temp
        addPops.push(thisCity);
    }
});

fs.writeFileSync('03populationAdded.json', JSON.stringify(addPops));