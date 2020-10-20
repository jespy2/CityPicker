import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import logo from '../logo.png';

// create a copywrite link for the app
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://espywebdesins.com/" target="blank">
                Espy Web Designs
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createMuiTheme();

theme.typography.h3 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    textAlign: 'center',

};

const useStyles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: '90%',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    smallIcon: {
        fontSize: "2em"
    },
});

class Intro extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    // start app when button clicked
    handleClick(e) {
        e.preventDefault();
        this.props.toggleBegin();
    }

    render() {
        const { classes, data } = this.props;
        let citiesNumb = data.index.length;
        return (
            <ThemeProvider theme={theme}>
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className={classes.image} />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Typography gutterBottom variant="h3">
                                Welcome To The CityPicker App!
                            </Typography>
                            <Typography variant="body1" gutterBottom align="left">
                                We will help you find the best new city for your needs based on three criteria:
                            </Typography>
                            <form className={classes.form} noValidate>
                                <List component="nav" aria-label="main mailbox folders" align="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Average annual temperature" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Population size" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Politics (Democrat vs. Republican)" />
                                    </ListItem>
                                </List>
                                <Typography variant="body1" gutterBottom align="left">
                                    As you enter your preferences, The CityPicker App will techno-magically show you which of {citiesNumb} US cities best meets your needs!
                                </Typography>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.handleClick}
                                >
                                    Let's Begin!
                            </Button>

                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    }
};

export default withStyles(useStyles)(Intro);