import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { LUNG_COMPLICATIONS } from 'variables/general';

const useStyles = makeStyles(() =>
    createStyles({
        imageContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        image: {
            height: '300px',
            width: '300px',
        },
        sectionWrapper: {
            marginTop: '24px',
        },
        sectionTitle: {
            textDecoration: "underline",
        },
        disclaimerText: {
            color: 'red',
            fontStyle: 'italic',
            marginTop: 8,
        },
        tableWrapper: {
            marginTop: 8,
            height: 250,
            overflowY: 'scroll',
        },
    }),
)

function createData(complication, probability) {
    return { complication, probability };
}

const rows = LUNG_COMPLICATIONS.map(row => createData(row.complication, row.probability))

export default function ScanResult(props) {
    const classes = useStyles()
    const { image } = props

    return (
        <>
            <Box className={classes.imageContainer}>
                <img className={classes.image} src={image} alt="scan-image" />
            </Box>
            <Box className={classes.sectionWrapper}>
                <Typography className={classes.sectionTitle} variant="h5">Prediction Results</Typography>
                <Typography className={classes.disclaimerText}>The image recognition engine aims to provide an insight into possible illness diagnosis only, the medical
                    expert should still analyse and determine the most appropriate diagnosis
                </Typography>
            </Box>
            <TableContainer className={classes.tableWrapper} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lung Complication</TableCell>
                            <TableCell>Probability</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>
                                    {row.complication}
                                </TableCell>
                                <TableCell>{row.probability}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}