const fs = require('fs');
const { stringify } = require('querystring');
const _ = require('underscore');
const election = require('../input/rawElectionData.json');
const counties = require('../input/counties.json');

//***   -------------------  ***/
//***    ADD ELECTION DATA   ***/
//***   -------------------  ***/

let holder1 = [];
var i;
// keep only republican and democrat votes
election.forEach(i => {
    if (i.party === "democrat" || i.party === 'republican') {
        let temp = {
            year: i.year,
            state: i.state,
            county: i.county.toLowerCase(),
            candidate: i.candidate,
            party: i.party,
            candidatevotes: i.candidatevotes,
            totalvotes: i.totalvotes
        }
        holder1.push(temp);
    };
});
// add city based on county and cityState single variable
let holder2 = [];
countyLength = counties.length;
for (i = 0; i < countyLength; i++) {
    holder1.forEach(e => {

        if (e.county === counties[i].county.toLowerCase() && e.state === counties[i].state) {
            let temp = {
                year: e.year,
                city: counties[i].city,
                state: e.state,
                cityState: counties[i].city + e.state,
                county: e.county,
                candidate: e.candidate,
                party: e.party,
                candidatevotes: e.candidatevotes,
                totalvotes: e.totalvotes
            };
            holder2.push(temp);
        }
    })
}

//function to put data into separate objects by election year and party
let separatePartyYear = (array, year, party) => {
    let thisArray = [];

    array.forEach(e => {
        if (e.year === year && e.party === party) {
            thisArray.push(e)
        }
    });

    return thisArray;
}

let dems2000 = separatePartyYear(holder2, "2000", "democrat");
let repubs2000 = separatePartyYear(holder2, "2000", "republican");
let dems2004 = separatePartyYear(holder2, "2004", "democrat");
let repubs2004 = separatePartyYear(holder2, "2004", "republican");
let dems2008 = separatePartyYear(holder2, "2008", "democrat");
let repubs2008 = separatePartyYear(holder2, "2008", "republican");
let dems2012 = separatePartyYear(holder2, "2012", "democrat");
let repubs2012 = separatePartyYear(holder2, "2012", "republican");
let dems2016 = separatePartyYear(holder2, "2016", "democrat");
let repubs2016 = separatePartyYear(holder2, "2016", "republican");

// Create objects for each city that contains weighted percentages for elections
// Weighting Formula:  sum(2000 * 1, 2004 * 2.5, 2008 * 5, 2012 * 7.5, 2016 * 10)
// Weighting is designed to show trends by emphasizing more recent elections
// Weighted totals for dems, repubs and totalvotes are used to get a weighted percentage
// of votes per party.  These values are used to determine if a city is more red or blue.

let iter = dems2000.length;
let electionSorted = [];
for (i = 0; i < iter; i++) {
    let demstotal =
        (dems2000[i].candidatevotes * 1) +
        (dems2004[i].candidatevotes * 2.5) +
        (dems2008[i].candidatevotes * 5) +
        (dems2012[i].candidatevotes * 7.5) +
        (dems2016[i].candidatevotes * 10)

    let repubstotal =
        (repubs2000[i].candidatevotes * 1) +
        (repubs2004[i].candidatevotes * 2.5) +
        (repubs2008[i].candidatevotes * 5) +
        (repubs2012[i].candidatevotes * 7.5) +
        (repubs2016[i].candidatevotes * 10)

    let total =
        (dems2000[i].totalvotes * 1) +
        (dems2004[i].totalvotes * 2.5) +
        (dems2008[i].totalvotes * 5) +
        (dems2012[i].totalvotes * 7.5) +
        (dems2016[i].totalvotes * 10)

    let demspercent = demstotal / total
    let repubspercent = repubstotal / total

    let party;
    let partyNum;
    if (repubspercent > 59.2) {
        party = "Deep Red";
        partyNum = 7;
    } else if (repubspercent <= .592 && repubspercent > .556) {
        party = "Red"
        partyNum = 6;
    } else if (repubspercent <= .556 && repubspercent > .52) {
        party = "Reddish Purple"
        partyNum = 5;
    } else if (repubspercent <= .52 && repubspercent > .46) {
        party = "Purple"
        partyNum = 4;
    } else if (repubspercent <= .56 && repubspercent > .397) {
        party = "Bluish Purple"
        partyNum = 3;
    } else if (repubspercent <= .397 && repubspercent > .334) {
        party = "Blue"
        partyNum = 2;
    } else if (repubspercent <= .34) {
        party = "Deep Blue"
        partyNum = 1;
    }

    electionSorted[i] = [
        dems2000[i].city,
        dems2000[i].state,
        dems2000[i].cityState,
        party,
        partyNum
    ]
};

fs.writeFileSync('01electionSorted.json', JSON.stringify(electionSorted));