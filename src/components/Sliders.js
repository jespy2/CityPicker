import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import SliderTemperature from './SliderTemperature';
import SliderPolitics from './SliderPolitics';
import SliderCitySize from './SliderCitySize';
import './Sliders.css';


const useStyles = theme => ({
    root: {
        marginTop: theme.spacing(3),
        margin: 'auto',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
});

class Sliders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleTempSlider, handleSizeSlider, handlePartySlider } = this.props;

        return (
            <div className="Sliders" style={{ maxWidth: "100vw" }}>
                <Paper
                    style={{
                        padding: '1rem',
                        margin: '1rem',
                        backgroundColor: '#fafafa'
                    }}
                    elevation={10}
                >
                    <div className="Sliders-Container">
                        <SliderTemperature handleTempSlider={handleTempSlider} />
                        <SliderCitySize handleSizeSlider={handleSizeSlider} />
                        <SliderPolitics handlePartySlider={handlePartySlider} />
                    </div>
                </Paper>

            </div >
        )
    }
};

export default withStyles(useStyles)(Sliders);