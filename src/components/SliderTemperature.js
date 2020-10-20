import React, { Component } from 'react';
import AcUnit from '@material-ui/icons/AcUnit';
import WbSunny from '@material-ui/icons/WbSunny';
import { red, lightBlue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './SliderTemperature.css';

class SliderTemperature extends Component {
    constructor(props) {
        super(props);
        this.handleSlider = this.handleSlider.bind(this);
    }

    //user modifies temperature range with slider
    handleSlider(e, val) {
        e.preventDefault();
        this.props.handleTempSlider(val)
    }

    render() {
        return (
            <div className="SliderTemperature">
                <Typography
                    id="range-slider"
                    className="SliderTemperature-Title"
                    gutterBottom
                    style={{ fontSize: ".7em" }}
                >
                    <h2>Would you like to live where it is warmer or cooler?</h2>
                </Typography>
                <div className="SliderTemperature-Container">
                    <Grid container
                        spacing={0}
                        alignItems="center"
                        justify="center"
                        style={{ marginTop: -15 }}
                    >
                        <Grid item>
                            <AcUnit className="SliderTemperature-Icon" style={{ color: lightBlue[900], fontSize: 40 }} />
                        </Grid>
                        <Grid item xs>
                            <div className="SliderTemperature-Slider">
                                <Slider
                                    aria-labelledby="range-slider"
                                    valueLabelDisplay="auto"
                                    min={10}
                                    max={85}
                                    defaultValue={[40, 55]}
                                    onChange={this.handleSlider}
                                />
                            </div>
                        </Grid>
                        <Grid item>
                            <WbSunny className="SliderTemperature-Icon" style={{ color: red[900], fontSize: 40 }} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
};

export default SliderTemperature;