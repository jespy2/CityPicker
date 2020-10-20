import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = theme => ({
    root: {
        marginTop: theme.spacing(1),
        padding: '5px',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    }
});

class ResultsTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes, myFilteredCities } = this.props;
        var myCitiesNumb = myFilteredCities.index.length;
        var cellList = [];
        var i;
        const { index, city, state, population, avgTemp, party } = myFilteredCities

        //convert myFilteredCities into an array of arrays for rendering
        for (i = 0; i < city.length; i++) {
            cellList[i] = [index[i], city[i], state[i], population[i], avgTemp[i], party[i]]
        };

        //generate rows of filtered cities for table
        const makeCells = cellList.map((elem, i) => {
            return (
                <TableRow key={cellList[i][0]} >
                    <TableCell className="ResultsTable-Cell" > {cellList[i][1]} </TableCell>
                    <TableCell className="ResultsTable-Cell"> {cellList[i][2]} </TableCell>
                    <TableCell className="ResultsTable-Cell"> {cellList[i][3]} </TableCell>
                    <TableCell className="ResultsTable-Cell"> {cellList[i][4]} </TableCell>
                    <TableCell className="ResultsTable-Cell"> {cellList[i][5]} </TableCell>
                </TableRow >
            )
        })

        return (
            <React.Fragment >
                <div classname="ResultsTable" style={{ maxWidth: "95vw" }} >
                    <Paper
                        style={{
                            padding: '1rem',
                            margin: '1rem',
                            backgroundColor: '#fafafa',
                            marginTop: ".4em",
                            backgroundColor: '#fafafa',
                            maxHeight: '50vh'
                        }}
                        elevation={10}
                    >
                        <Typography
                            classname="yourCityInfo"
                            gutterBottom
                            mx="auto"
                            variant="h2"
                            style={{
                                width: "100%",
                                padding: 5,
                                fontSize: "1.4em",
                                fontWeight: "bold",
                                textAlign: "left"
                            }}
                        >
                            We have found {myCitiesNumb} cities for you:
                    <TableContainer
                                component={Paper}
                                style={{
                                    backgroundColor: '#fafafa',
                                    marginTop: ".4em",
                                    backgroundColor: '#fafafa',
                                    maxHeight: '40vh',
                                    overflow: 'scroll',
                                }}
                            >
                                <Table
                                    className="ResultsTable-Table"
                                    stickyHeader
                                    aria-label="a dense table"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="ResultsTable-Cell">City</TableCell>
                                            <TableCell className="ResultsTable-Cell">State</TableCell>
                                            <TableCell className="ResultsTable-Cell">Population</TableCell>
                                            <TableCell className="ResultsTable-Cell">Avg Annual Temp</TableCell>
                                            <TableCell className="ResultsTable-Cell">Voting</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {makeCells}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Typography>
                    </Paper>
                </div>
            </React.Fragment >
        )
    }
};

export default withStyles(useStyles)(ResultsTable);