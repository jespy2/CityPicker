import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import elephant from '../img/elephant.png';
import donkey from '../img/donkey.png';
import './SliderPolitics.css';

const theme = createMuiTheme();


const useStyles = theme => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
});

class SliderPolitics extends Component {
    constructor(props) {
        super(props);
        this.handleSlider = this.handleSlider.bind(this);
    }

    //user modifies temperature range with slider
    handleSlider(e, val) {
        e.preventDefault();
        this.props.handlePartySlider(val)
    }

    render() {
        return (
            <div className="SliderPolitics">
                <div className="SliderPolitics-Container">
                    <ThemeProvider theme={theme}>
                        <Typography
                            id="continuous-slider"
                            className="SliderPolitics-Slider-Title"
                            gutterBottom
                            style={{ fontSize: ".7em" }}
                        >
                            <h2>Would you like to live where it is more red or more blue?</h2>
                        </Typography>
                        <Grid container
                            spacing={0}
                            alignItems="center"
                            justify="center"
                            style={{ marginTop: -15 }}
                        >
                            <Grid item>
                                <img
                                    src={donkey}
                                    alt="democrat logo" className="SliderPolitics-Logo Donkey"
                                    style={{ height: "5vh" }}
                                />
                            </Grid>
                            <Grid item xs>
                                <div className="SliderPolitics-Slider">
                                    <Slider
                                        aria-labelledby="range-slider"
                                        min={1}
                                        max={7}
                                        defaultValue={[3, 5]}
                                        onChange={this.handleSlider}
                                    />
                                </div>
                            </Grid>
                            <Grid item>
                                <img
                                    src={elephant}
                                    alt="republican logo"
                                    className="SliderPolitics-Logo Elephant"
                                    style={{ height: "5vh" }}
                                />
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </div>
            </div>
        )
    }
};

export default SliderPolitics;