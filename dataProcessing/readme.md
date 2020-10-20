
# Data Processing How-to

## Initial requirements:
1. Download population-by-city data:  https://www2.census.gov/programs-surveys/popest/tables/2010-2019/cities/totals/SUB-IP-EST2019-ANNRES.xlsx
Downloaded counties.csv from https://github.com/grammakov/USA-cities-and-states.  Convert to population.json in node.js using csvtojson.  Used commandline.
2. Download county/city data:  https://github.com/grammakov/USA-cities-and-states.  Convert to counties.json in node.js using csvtojson.  Used commandline.
3. Downloaded countypres_2000-2016.csv from https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ.  Convert to rawElectionData.json in node.js using csvtojson.  Used commandline.

## Steps for processing data:
1. Run processData1.js to create 01electionSorted.json.  
2. Run processData2.js to create 02temperaturesAdded.json.  
3. Run processData3.js to create 03populationAdded.json.
4. Run processData4.js to create fullDataset.json.
5. Copy fullDataset.json into src/data folder in react project.

fullDataset.json key:
* index
* city
* state 
* population
* avgTemp
* party (Deep Red to Deep Blue)
* partyNumb (numeric representation for party: Deep Blue = 1 => Deep Red = 7)