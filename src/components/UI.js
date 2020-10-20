import React, { Component } from 'react';
import Intro from './Intro';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sliders from './Sliders';
import MyCityForm from './MyCityForm';
import ResultsTable from './ResultsTable';
import Data from '../data/fullDataset.json';

const useStyles = (theme => ({
    root: {
        display: 'flex',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}), { withTheme: true });

class UI extends Component {
    static defaultProps = {
        data: Data
    }
    constructor(props) {
        super(props);
        this.state = {
            begin: false,
            currCity: {
                index: null,
                city: '',
                state: '',
                population: 0,
                avgTemp: 0,
                demVote: 0,
                repVote: 0,
                party: '',
                partyNum: 0
            },
            stateOptions: {
                index: [],
                city: [],
                state: [],
                population: [],
                avgTemp: [],
                demVote: [],
                repVote: [],
                party: [],
                partyNum: []
            },
            myFilteredCities: {
                index: this.props.data.index,
                city: this.props.data.city,
                state: this.props.data.state,
                population: this.props.data.population,
                avgTemp: this.props.data.avgTemp,
                party: this.props.data.party,
                partyNum: this.props.data.partyNum
            },
            tempRange: [40, 55],
            sizeRange: [300000, 1000000],
            partyRange: [3, 5]
        }
        this.toggleBegin = this.toggleBegin.bind(this);
        this.findMyState = this.findMyState.bind(this);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleStateInput = this.handleStateInput.bind(this);
        this.handleTempSlider = this.handleTempSlider.bind(this);
        this.handleSizeSlider = this.handleSizeSlider.bind(this);
        this.handlePartySlider = this.handlePartySlider.bind(this);
        this.filterCities = this.filterCities.bind(this);
    }

    // hide intro screen and show app
    toggleBegin() {
        this.setState({ begin: !this.state.begin })
    }

    // Find states based on city from imported data set
    findMyState(myCity) {
        let cityOptions = {
            index: [],
            city: [],
            state: [],
            population: [],
            avgTemp: [],
            demVote: [],
            repVote: [],
            party: [],
            partyNum: []
        };
        const { data } = this.props;
        var cityIndices = [];
        // console.log(data.city)
        var idx = data.city.indexOf(myCity.trim());
        // generate an index to each city
        while (idx !== -1) {
            cityIndices.push(idx);
            console.log(data)
            idx = data.city.indexOf(myCity, idx + 1);
        }
        // push indices into data set
        cityIndices.forEach(
            element => {
                const { city, state, population, avgTemp, party, partyNum } = data;
                cityOptions.index.push(element);
                cityOptions.city.push(city[element]);
                cityOptions.state.push(state[element]);
                cityOptions.population.push(population[element]);
                cityOptions.avgTemp.push(avgTemp[element]);
                cityOptions.party.push(party[element]);
                cityOptions.partyNum.push(partyNum[element]);
            }
        )
        this.setState({ stateOptions: cityOptions })
    }
    //store user's city
    handleCityInput(cityInput) {
        const { index, city, state, population, avgTemp, demVote, repVote, party, partyNum } = this.state.currCity;
        const stateUpdate = {
            index: index,
            city: cityInput,
            state: state,
            avgTemp: avgTemp,
            population: population,
            avgTemp: avgTemp,
            demVote: demVote,
            repVote: repVote,
            party: party,
            partyNum: partyNum
        }
        this.findMyState(cityInput);//create list of states based on city
        this.setState({ currCity: stateUpdate })//store the city
    }
    //user selects state from options in drop-down list
    handleStateInput(stateInput) {
        const { index, city, state, population, avgTemp, demVote, repVote, party, partyNum } = stateInput;
        const stateUpdate = {
            index: index,
            city: city,
            state: state,
            avgTemp: avgTemp,
            population: population,
            avgTemp: avgTemp,
            demVote: demVote,
            repVote: repVote,
            party: party,
            partyNum: partyNum
        }
        this.setState({ currCity: stateUpdate })
    }

    //update tempRange based on tempSlider change
    handleTempSlider(val) {
        this.setState({ tempRange: val });
        this.filterCities();
    };

    //update sizeRange based on tempSlider change
    //note: 1.5M is changed to 8.6M because there are few cities over 1.5M
    //and the slider would look weird if this isn't done.
    //note of the note:  slider marks were removed to clean up UI for mobile
    handleSizeSlider(val) {
        let size = val;
        size[1] = size[1] >= 1500000 ? 8600000 : size[1];
        this.setState({ sizeRange: size });
        this.filterCities();
    };

    //update partyRange based on tempSlider change
    handlePartySlider(val) {
        this.setState({ partyRange: val });
        this.filterCities();
    };

    //filter cities
    filterCities() {
        let filteredCities = {
            index: [],
            city: [],
            state: [],
            population: [],
            avgTemp: [],
            party: [],
            partyNum: []
        };
        const { data } = this.props;
        const { tempRange, sizeRange, partyRange } = this.state;
        let dataLength = this.props.data.index.length;
        var i;
        for (i = 0; i < dataLength; i++) {
            let city;
            if (data.avgTemp[i] >= tempRange[0] && data.avgTemp[i] <= tempRange[1] &&
                data.population[i] >= sizeRange[0] && data.population[i] <= sizeRange[1] &&
                data.partyNum[i] >= partyRange[0] && data.partyNum[i] <= partyRange[1]
            ) {
                city = {
                    index: data.index[i],
                    city: data.city[i],
                    state: data.state[i],
                    population: data.population[i],
                    avgTemp: data.avgTemp[i],
                    party: data.party[i],
                    partyNum: data.partyNum[i]
                }
                filteredCities.index.push(city.index);
                filteredCities.city.push(city.city);
                filteredCities.state.push(city.state);
                filteredCities.population.push(city.population);
                filteredCities.avgTemp.push(city.avgTemp);
                filteredCities.party.push(city.party);
                filteredCities.partyNum.push(city.partyNum);

            }

        }

        this.setState({ myFilteredCities: filteredCities })
    }



    render() {
        let startApp;
        const { begin, currCity, cityFound } = this.state;
        const { classes, data } = this.props;

        if (!begin) {
            startApp =
                <div>
                    <div className="UI-Intro">
                        <Intro
                            toggleBegin={this.toggleBegin}
                            data={data}
                        />
                    </div>
                </div>
        }

        if (begin) {
            startApp =
                <div>
                    <div className={classes.root}>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />
                            <Container maxWidth="lg" className={classes.container}>
                                <Grid container >
                                    <Grid item xs={12} md={4} lg={4}>
                                        <MyCityForm
                                            currCity={currCity}
                                            onCityInput={this.handleCityInput}
                                            onStateInput={this.handleStateInput}
                                            stateOptions={this.state.stateOptions}
                                            myFilteredCities={this.state.myFilteredCities}
                                        />
                                    </Grid>
                                    <Grid item item xs={12} md={8} lg={8} container direction="column" >
                                        <Sliders
                                            handleTempSlider={this.handleTempSlider}
                                            handleSizeSlider={this.handleSizeSlider}
                                            handlePartySlider={this.handlePartySlider}
                                        />
                                        <ResultsTable myFilteredCities={this.state.myFilteredCities} />
                                    </Grid>
                                </Grid>
                            </Container>
                        </main>
                    </div>
                </div>
        }

        return (
            <div className="UI">
                {startApp}
            </div>
        );
    }
}

export default withStyles(useStyles)(UI);