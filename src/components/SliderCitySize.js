import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider'
import { red, lightBlue } from '@material-ui/core/colors';
import HouseIcon from '@material-ui/icons/House';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import './SliderCitySize.css';

class SliderCitySize extends Component {
    constructor(props) {
        super(props);
        this.handleSlider = this.handleSlider.bind(this);
    }
    //user modifies temperature range with slider
    handleSlider(e, val) {
        e.preventDefault();
        this.props.handleSizeSlider(val)
    }

    render() {
        return (
            <div className="SliderCitySize">
                <div className="SliderCitySize-Container">
                    <Typography
                        id="continuous-slider"
                        className="SliderCitySize-Slider-Title"
                        gutterBottom
                        style={{ fontSize: ".7em" }}
                    >
                        <h2>Would you like to live where in a city that is smaller or bigger?</h2>
                    </Typography>
                    <Grid container
                        xs={12}
                        spacing={0}
                        alignItems="center"
                        justify="center"
                        style={{ marginTop: -15 }}
                    >
                        <Grid item>
                            <HouseIcon className="SliderCitySize-Icon" style={{ color: lightBlue[900], fontSize: 40 }} />
                        </Grid>
                        <Grid item xs>
                            <div className="SliderCitySize-Slider">
                                <Slider
                                    aria-labelledby="range-slider"
                                    min={6000}
                                    max={2000000}
                                    defaultValue={[300000, 1000000]}
                                    onChange={this.handleSlider}
                                />
                            </div>
                        </Grid>
                        <Grid item>
                            <LocationCityIcon className="SliderCitySize-Icon" style={{ color: red[900], fontSize: 40 }} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
};

export default SliderCitySize;