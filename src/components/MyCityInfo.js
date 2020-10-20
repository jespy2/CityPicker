import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = theme => ({
    root: {
        marginTop: theme.spacing(5),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3em'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
});


class MyCityInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currCity } = this.props;

        return (
            <div className="MyCityInfo">
                <Typography
                    classname="yourCityInfo"
                    gutterBottom
                    mx="auto"
                    variant="h2"
                    style={{
                        paddingTop: 10,
                        marginBottom: "-1em",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                        textAlign: "center"
                    }}
                >
                    {currCity.city}, {currCity.state}:
                    <List component="nav" aria-label="main mailbox folders" align="left" style={{ padding: 0 }}>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="5" />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body2" color="textSecondary" style={{ marginLeft: "-1em" }}>
                                    Has an average annual temperature of {currCity.avgTemp}
                                </Typography>
                            } />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="5" />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body2" color="textSecondary" style={{ marginLeft: "-1em" }} >
                                    The population is {currCity.population.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </Typography>
                            } />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="5" />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body2" color="textSecondary" style={{ marginLeft: "-1em" }} >
                                    The people there tend to vote {currCity.party}
                                </Typography>
                            } />
                        </ListItem>
                    </List>
                </Typography>
            </div>
        );
    }
};

export default withStyles(useStyles)(MyCityInfo);