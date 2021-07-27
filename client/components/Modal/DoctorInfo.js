import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core';
import { MAIN_CHARACTER_DOCTOR } from 'variables/general';

const useStyles = makeStyles(() =>
    createStyles({
        imageContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        image: {
            height: '300px',
            width: '250px',
        },
        sectionWrapper: {
            marginTop: '24px',
        },
        sectionTitle: {
            textDecoration: "underline",
        },
    }),
)

export default function DoctorInfo(props) {
    const classes = useStyles()
    const { selectedDoctor } = props;

    return (
        <>
            <Box className={classes.imageContainer}>
                <img className={classes.image} src="https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png" alt="doctor-image" />
            </Box>
            <Box className={classes.sectionWrapper}>
                <Typography className={classes.sectionTitle} variant="h5">Hospital / Clinic</Typography>
                <Typography>Hospital Hogwarts</Typography>
            </Box>
            <Box className={classes.sectionWrapper}>
                <Typography className={classes.sectionTitle} variant="h5">About</Typography>
                <Typography>
                    {`Dr ${MAIN_CHARACTER_DOCTOR} is a French national who began working in Singapore in
                    2010. He has published many medical papers and finds passion in research of
                    human neurology. Aside from career and academics, Dr Ron is also an avid football
                    fan, notably of Arsenal Football Club.`}
                </Typography>
            </Box>
            <Box className={classes.sectionWrapper}>
                <Typography className={classes.sectionTitle} variant="h5">Qualification</Typography>
                <Typography>PhD in Medicine</Typography>
            </Box>
            <Box className={classes.sectionWrapper}>
                <Typography className={classes.sectionTitle} variant="h5">Expertise</Typography>
                <Typography>General Practitioner</Typography>
            </Box>
            <Box className={classes.sectionWrapper}>
                <Typography className={classes.sectionTitle} variant="h5">Rating</Typography>
                <Typography>5</Typography>
            </Box>
        </>
    );
}
