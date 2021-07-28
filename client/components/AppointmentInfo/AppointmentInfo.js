import React, { useState, forwardRef } from 'react';
import NextLink from "next/link"
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button'
import Modal from '../../components/Modal/Modal'
import BookingFrom from '../../components/BookingForm/BookingForm'
import { StatusUtil } from '../../utils/StatusUtil';
import { useAppContext } from '../../context/state';
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
import DescriptionIcon from '@material-ui/icons/Description';
import { MAIN_CHARACTER_SPECIALIST } from '../../variables/general'

export default function AppointmentInfo(props) {
    const { isSpecialist } = props
    console.log(isSpecialist);
    const [paperValue, setPaperValue] = useState(isSpecialist ? 5 : 2);
    const [booking, setBooking] = useState({});
    const [showBookingModal, setShowBookingModal] = useState(false);
    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: '6px 16px',
        },
        secondaryTail: {
            backgroundColor: theme.palette.secondary.main,
        },
    }));
    const classes = useStyles();
    const STATUS = StatusUtil.getStatusType(paperValue);
    const value = useAppContext();

    const handleOnFormChange = (booking) => {
        setBooking(booking);
    }

    const handleOnCloseBookingClick = () => {
        setShowBookingModal(false);
    }

    const handleBookingSubmit = () => {
        value.setNewBooking(booking);
    }

    const SubmitButton = forwardRef(({ onClick, href }, ref) => {
        return (
          <Button color="info" onClick={onClick} ref={ref} href={href}>
            Submit
          </Button>
        )
    })

    const bookingModalButtons = (
        <>
          <Button color="warning" onClick={() => setShowBookingModal(false)}>
            Back
          </Button>
          <NextLink href="/doctor/doctor/dashboard" passHref>
            <SubmitButton onClick={handleBookingSubmit} />
          </NextLink>
        </>
    );

    const FurtherActionsButton = () => {
        return (
            <div>
                <Button size="small" color="warning">End Session</Button>
                <Button size="small" color="info" onClick={() => setShowBookingModal(true)}>Refer to Specialist</Button>
            </div>
        );
    }

    const FileImages = () => {
        return (
            <div style={{display: 'flex', flexDirection:'row', marginTop:'10px', marginBottom:'10px'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '10px'}}>
                    <DescriptionIcon />
                    <span>Prescription</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <DescriptionIcon />
                    <span>Diagnosis</span>
                </div>
            </div>
        )
    }

    const LabScans = () => {
        return (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: '10px'}}>
                <DescriptionIcon />
                <span>Lab Scan</span>
            </div>
        )
    }

    const FirstCard = (props) => {
        return (
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
        )
    }

    const SecondCard = (props) => {
        const { isCurrent, currpaperValue } = props;
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        20th July 2021, 11.00am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={isCurrent ? `secondary` : `grey`}>
                    </TimelineDot>
                    {!isCurrent && <TimelineConnector className={currpaperValue - 1 === 2 ? classes.secondaryTail : null}/>}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                            Virtual Consultation Booking
                        </Typography>
                        <Typography variant="body2">
                            Booking has been successfully confirmed by Dr Ron Weasley, please click&nbsp;
                            <Link href="/conferencing/randomFixedString" style={{ color: 'blue' }}>here </Link>
                            for video consultation link
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        )
    }

    const ThirdCard = (props) => {
        const { isCurrent, currpaperValue } = props;
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        22nd July 2021, 3.00pm
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={isCurrent ? `secondary` : `grey`}>
                    </TimelineDot>
                    {!isCurrent && <TimelineConnector className={currpaperValue - 1 === 3 ? classes.secondaryTail : null} />}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                            Virtual Consultation
                        </Typography>
                        <Typography variant="body2">Virtual Consultation with Dr Ron Weasley has successfully completed</Typography>
                        <FileImages />
                        <FurtherActionsButton />
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        )
    }

    const FourthCard = (props) => {
        const { isCurrent, currpaperValue } = props;
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        22nd July 2021, 5.30pm
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={isCurrent ? `secondary` : `grey`}>
                    </TimelineDot>
                    {!isCurrent && <TimelineConnector className={currpaperValue - 1 === 4 ? classes.secondaryTail : null} />}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                            Specialist Referral
                        </Typography>
                        <Typography variant="body2">Dr Hermoine has successfully confirmed the referral made by Dr Ron Weasley and scheduled a initial virtual consultation on 23rd July 2021 at 2.30pm</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        )
    }

    const FifthCard = (props) => {
        const { isCurrent, currpaperValue } = props;
        console.log(props)
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        23rd July 2021, 2.30pm
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={isCurrent ? `secondary` : `grey`}>
                    </TimelineDot>
                    {!isCurrent && <TimelineConnector className={currpaperValue - 1 === 5 ? classes.secondaryTail : null} />}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                            Initial Specialist Virtual Consultation
                        </Typography>
                        <Typography variant="body2">
                            Booking has been successfully confirmed by Dr Hermoine, please click&nbsp;
                            <Link href="/conferencing/randomFixedString" style={{ color: 'blue' }}>here </Link>
                            for video consultation link
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        )
    }

    const SixthCard = (props) => {
        const { isCurrent, currpaperValue } = props;
        console.log(props)
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        25th July 2021, 3.30pm
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={isCurrent ? `secondary` : `grey`}>
                    </TimelineDot>
                    {!isCurrent && <TimelineConnector className={currpaperValue - 1 === 5 ? classes.secondaryTail : null} />}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1" style={{ color: '#3781F5' }}>
                            Lab Scans
                        </Typography>
                        <Typography variant="body2">Lab Scans Have Been Uploaded and Results Are Back</Typography>
                        <LabScans />
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        )
    }

    const isFirstCardPresent = paperValue >= 1;
    const isSecondCardPresent = paperValue >= 2;
    const isThirdCardPresent = paperValue >= 3;
    const isFourthCardPresent = paperValue >= 4;
    const isFifthCardPresent = paperValue >= 5;
    const isSixthCardPresent = paperValue >= 6;

    return (
        <>
            <GridContainer>
                <GridItem>
                    <span style={{ fontSize: '22px', fontWeight: '500' }}>
                        Attending Doctor: &nbsp;
                    </span>
                    <span style={{ fontSize: '22px', fontWeight: '500', color: '#3781F5' }}>
                        Dr Ron Weasley
                    </span>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem>
                    <span style={{ fontSize: '22px', fontWeight: '500' }}>
                        Current Status: &nbsp;
                    </span>
                    <span style={{ fontSize: '22px', fontWeight: '500', color: '#3781F5' }}>
                        {STATUS}
                    </span>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem>
                    <span style={{ fontSize: '22px', fontWeight: '500' }}>
                        History of Appointment:
                    </span>
                </GridItem>
            </GridContainer>
            <GridContainer style={{maxHeight: '40vh', overflow: 'auto'}} onClick={() => setPaperValue(paperValue + 1)}>
                <GridItem xs={12} sm={12} md={12}>
                    <Timeline align="alternate">
                        {isFirstCardPresent && <FirstCard isCurrent={paperValue === 1} currpaperValue={paperValue} />}
                        {isSecondCardPresent && <SecondCard isCurrent={paperValue === 2} currpaperValue={paperValue} />}
                        {isThirdCardPresent && <ThirdCard isCurrent={paperValue === 3} currpaperValue={paperValue} />}
                        {isFourthCardPresent && <FourthCard isCurrent={paperValue === 4} currpaperValue={paperValue} />}
                        {isFifthCardPresent && <FifthCard isCurrent={paperValue === 5} currpaperValue={paperValue} />}
                        {isSixthCardPresent && <SixthCard isCurrent={paperValue === 6} currpaperValue={paperValue} />}
                    </Timeline>
                </GridItem>
            </GridContainer>
            {showBookingModal && 
                <Modal 
                    content={<BookingFrom selectedDoctor={MAIN_CHARACTER_SPECIALIST} onFormChange={handleOnFormChange} />}
                    actions={bookingModalButtons}
                    color="#3781F5"
                    headerColor="white"
                    style={{ height: '300px', width: '200px' }}
                    handleOnCloseClick={handleOnCloseBookingClick}
                />
            }
        </>
    )
}