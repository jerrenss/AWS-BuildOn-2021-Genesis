import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        imageContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        image: {
            height: '300px',
            width: '200px',
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

    return (
        <>
            <Box className={classes.imageContainer}>
                <img className={classes.image} src="https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png" alt="doctor-image" />
            </Box>
            <Box className={classes.sectionWrapper}>
                <Typography className={classes.sectionTitle} variant="h5">Hospital / Clinic</Typography>
                <Typography>Hospital Del Luna</Typography>
            </Box>
            <Box className={classes.sectionWrapper}>
                <Typography className={classes.sectionTitle} variant="h5">About</Typography>
                <Typography>Dr Bukayo Saka is a French national who began working in Singapore in
                    2010. He has published many medical papers and finds passion in research of
                    human neurology. Aside from career and academics, Dr Bukayo is also an avid football
                    fan, notably of Arsenal Football Club.
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
