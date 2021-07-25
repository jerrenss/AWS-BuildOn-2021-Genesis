import React from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
//Material-UI components
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function AppointmentInfo(props) {
    const { doctorName } = props;

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: '6px 16px',
        },
        secondaryTail: {
            backgroundColor: theme.palette.secondary.main,
        },
    }));
    const classes = useStyles();

    return (
        <>
            <GridContainer>
                <GridItem>
                    <span style={{ fontSize: '22px', fontWeight: '500' }}>
                        Attending Doctor: &nbsp;
                    </span>
                    <span style={{ fontSize: '22px', fontWeight: '500', color: '#3781F5' }}>
                        {doctorName}
                    </span>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem>
                    <span style={{ fontSize: '22px', fontWeight: '500' }}>
                        Current Status: &nbsp;
                    </span>
                    <span style={{ fontSize: '22px', fontWeight: '500', color: '#3781F5' }}>
                        {doctorName}
                    </span>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem>
                    <span style={{ fontSize: '22px', fontWeight: '500' }}>
                        History of Appointment:
                    </span>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    20th July 2021, 11.00am
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                                        Virtual Consultation Booking
                                    </Typography>
                                    <Typography variant="body2">Booking has been made for 22nd July 2021 at 3.00PM</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    20th July 2021, 11.00am
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                                        Virtual Consultation Booking
                                    </Typography>
                                    <Typography variant="body2">Booking has been successfully confirmed by {doctorName}, please click
                                        <Link href="/conferencing/randomFixedString" style={{ color: 'blue' }}> here </Link>for video consultation link</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    22nd July 2021, 3.00pm
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                                        Virtual Consultation
                                    </Typography>
                                    <Typography variant="body2">Virtual Consultation with {doctorName} has successfully completed</Typography>
                                    <Typography variant="body2">Due to the complexity of the symptoms, {doctorName} has referred patient to a pulmonologist for further examniation</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    22nd July 2021, 5.30pm
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                                        Specialist Referral
                                    </Typography>
                                    <Typography variant="body2">Dr Wendy Williams has successfully confirmed the referral made by {doctorName} and scheduled a initial virtual consultation on 23rd July 2021 at 2.30pm</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    23rd July 2021, 2.30pm
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                                        Initial Specialist Virtual Consultation
                                    </Typography>
                                    <Typography variant="body2">Upcoming initial specialist virtual consultation with Dr Wendy Williams</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </GridItem>
            </GridContainer>
        </>
    )
}