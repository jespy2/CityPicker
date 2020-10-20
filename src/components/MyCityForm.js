import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { spacing } from '@material-ui/system';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import MyCityInfo from './MyCityInfo';
import Header from './Header';
import './MyCityForm.css'

const theme = createMuiTheme();

const useStyles = theme => ({
    root: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
    },
    form: {
        marginTop: theme.spacing(1),
    },
});

class MyCityForm extends Component {
    constructor(props) {
        super(props);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleStateInput = this.handleStateInput.bind(this);
    }

    handleCityInput(e) {
        e.preventDefault();
        this.props.onCityInput(e.target.value);
    }

    handleStateInput(e) {
        e.preventDefault();
        var myCityIndex;
        let tempIndex = 0;
        // if input state matches state in stateOptions, pull data for that city by index
        this.props.stateOptions.state.forEach(
            element => {
                myCityIndex = (e.target.value === element) ? tempIndex : myCityIndex;
                tempIndex++;
            }
        )
        let myState = {
            index: this.props.stateOptions.index[myCityIndex],
            city: this.props.stateOptions.city[myCityIndex],
            state: this.props.stateOptions.state[myCityIndex],
            population: this.props.stateOptions.population[myCityIndex],
            avgTemp: this.props.stateOptions.avgTemp[myCityIndex],
            demVote: this.props.stateOptions.demVote[myCityIndex],
            repVote: this.props.stateOptions.repVote[myCityIndex],
            party: this.props.stateOptions.party[myCityIndex]
        }
        // pass data for selected city/state combination to UI.js to set state for currCity
        this.props.onStateInput(myState);
    }

    render() {
        const { currCity, stateOptions } = this.props;
        let ShowStateField = "NoStateField";
        let ShowMyCityInfo = "NoMyCityInfo"
        //show state options when city entered
        ShowStateField = currCity.city !== '' ? "ShowStateField" : "NoStateField";
        //show data for selected city once state is choosen
        ShowMyCityInfo = currCity.state !== '' ? "ShowMyCityInfo" : "NoMyCityInfo";

        return (
            <div className="MyCityForm">
                <Header />
                <Paper
                    item xs={12} sm={12} md={10}
                    style={{
                        padding: "1em",
                        marginTop: '3vh',
                        backgroundColor: '#fafafa'
                    }}
                    elevation={10}
                >
                    <Typography
                        gutterBottom
                        style={{ fontSize: "1em" }}
                    >
                        <h2>Where do you live now?</h2>
                    </Typography>
                    <div className="MyCityForm-Container">
                        <form className="MyCityForm-City">
                            <TextField
                                className="MyCityForm-City-Field"
                                id="myCityName"
                                label="Enter your current city"
                                style={{
                                    width: "12em",
                                    marginLeft: 10
                                }}
                                value={currCity.city}
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onChange={this.handleCityInput}
                            />
                        </form>
                        <FormControl className={`myState-formControl ${ShowStateField}`}>
                            <InputLabel id="myState">State</InputLabel>
                            <Select
                                labelId="myState-label"
                                id="myState-select"
                                style={{
                                    width: "5em",
                                    marginLeft: 50, backgroundColor: '#fafafa'
                                }}
                                value={currCity.state}
                                onChange={this.handleStateInput}
                            >
                                {stateOptions.state.map((state, index) =>
                                    <MenuItem key={index} value={state}>{state}</MenuItem>

                                )}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={`${ShowMyCityInfo}`}>
                        <MyCityInfo
                            currCity={this.props.currCity}
                            myFilteredCities={this.props.myFilteredCities}
                        />
                    </div>
                </Paper>
            </div>
        );
    }
};

export default withStyles(useStyles)(MyCityForm);