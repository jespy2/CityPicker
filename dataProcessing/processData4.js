const fs = require('fs');
const { stringify } = require('querystring');
const fullData = require('./03populationAdded.json');

//***      -------------------     ***/
//***   FORMAT DATA FOR REACT APP  ***/
//***      -------------------     ***/
let finalData = {
    index: [],
    city: [],
    state: [],
    population: [],
    avgTemp: [],
    party: [],
    partyNum: []
};
//add key for each record based on index and generate object
for (n = 0; n < fullData.length; n++) {
    finalData.index.push(n),
        finalData.city.push(fullData[n][0]),
        finalData.state.push(fullData[n][1]),
        finalData.population.push(fullData[n][6]),
        finalData.avgTemp.push(fullData[n][5]),
        finalData.party.push(fullData[n][3]),
        finalData.partyNum.push(fullData[n][4])
}

//export full dataset to JSON file for React app
fs.writeFileSync('fullDataset.json', JSON.stringify(finalData));

