import React, { useState, forwardRef } from 'react';
import Link from "next/link"
import PropTypes from 'prop-types';
import classnames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Rating from '@material-ui/lab/Rating';
import DescriptionIcon from '@material-ui/icons/Description';
import IconButton from '@material-ui/core/IconButton';
// core components
import Button from '../../components/CustomButtons/Button';
import Modal from '../../components/Modal/Modal';
import DoctorInfo from '../../components/Modal/DoctorInfo';
import BookingFrom from '../../components/BookingForm/BookingForm';
import AppointmentInfo from '../../components/AppointmentInfo/AppointmentInfo'
import styles from 'assets/jss/nextjs-material-dashboard/components/tasksStyle.js';
// utils
import { StatusUtil } from '../../utils/StatusUtil';
import { useAppContext } from '../../context/state';
import { MAIN_CHARACTER_DOCTOR } from 'variables/general';

const rating = value => {
  switch (value) {
    case 1:
      return <Rating name="read-only" value={1} readOnly />;
    case 2:
      return <Rating name="read-only" value={2} readOnly />;
    case 3:
      return <Rating name="read-only" value={3} readOnly />;
    case 4:
      return <Rating name="read-only" value={4} readOnly />;
    case 5:
      return <Rating name="read-only" value={5} readOnly />;
  }
};

const DoctorList = props => {
  const { doctorList, rtlActive, onBookingButtonClick, onDoctorButtonClick } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

  return (
    <>
      {doctorList.map(doctor => {
        return (
          <TableRow key={doctor.name} className={classes.tableRow}>
            <TableCell className={tableCellClasses} align="center">
              {doctor.name}
            </TableCell>
            <TableCell className={tableCellClasses} align="center">
              {doctor.earliestDate}
            </TableCell>
            <TableCell className={tableCellClasses} align="center">
              {rating(doctor.rating)}
            </TableCell>
            <TableCell align="center">
              <Button
                color="info"
                onClick={event => onDoctorButtonClick(event.target.value)}
                style={{ width: "130px", marginLeft: "16px" }}
                value={doctor.name}
              >
                Doctor Info
              </Button>
              <Button
                color="info"
                style={{ width: "130px", marginLeft: "16px" }}
                onClick={onBookingButtonClick}
                value={doctor.name}
              >
                Book Now
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default function Tasks(props) {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showDoctorModal, setShowDoctorModal] = useState(false);
  const [showMoreInfoModal, setShowMoreInfoModal] = useState(false);
  const [booking, setBooking] = useState({});
  const [moreInfoModalDoctor, setMoreInfoModalDoctor] = useState('');
  const [statusValue, setStatusValue] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tasks, rtlActive, headers, isDoctorList } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });
  const value = useAppContext();
  const status = StatusUtil.getStatusType(statusValue);
  const doctorModaldescription = `About ${MAIN_CHARACTER_DOCTOR}`;
  const bookingModaldescription = <>Virtual Consultation Appointment Form</>;
  const appointmentInfoDescription = <>More Information About Appointment</>

  const handleBookingButtonClick = event => {
    setSelectedDoctor(event.target.value);
    setShowBookingModal(true);
  };

  const handleDoctorButtonClick = event => {
    setSelectedDoctor(event);
    setShowDoctorModal(true)
  };

  const handleMoreInfoClick = event => {
    setMoreInfoModalDoctor(event);
    setShowMoreInfoModal(true);
  }

  const handleOnCloseClick = () => {
    setShowMoreInfoModal(false);
    setShowDoctorModal(false);
  }

  const handleOnCloseDoctorModalClick = () => {
    setShowDoctorModal(false);
  }

  const handleOnCloseBookingClick = () => {
    setShowBookingModal(false);
  }

  const handleOnFormChange = (booking) => {
    setBooking(booking);
  }

  const handleBookingSubmit = () => {
    value.setNewBooking(booking);
  }

  const doctorModalButton = (
    <>
      <Button color="warning" onClick={() => setShowDoctorModal(false)}>
        Back
      </Button>
    </>
  );

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
      <Link href="/admin/dashboard" passHref>
        <SubmitButton onClick={handleBookingSubmit} />
      </Link>
    </>
  );

  const ActionsButtons = (props) => {
    const { doctor } = props;
    return (
      <div>
        <Button color='success' onClick={() => handleMoreInfoClick(doctor)}>More Info</Button>
        <Button color='warning'>Edit Appointment</Button>
      </div>
    );
  }

  const FileIcon = (props) => {
    return (
      <IconButton>
        <DescriptionIcon fontSize="large" style={{ color: '#3781F5' }} />
      </IconButton>
    )
  }

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {headers.map(header => {
            return <TableCell align="center">{header}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {!isDoctorList &&
          tasks.map(task => (
            <TableRow key={task.patientId} className={classes.tableRow}>
              <TableCell className={tableCellClasses} align="center" style={{ minWidth: '200px' }}>
                {task.doctor}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {task.image === true ? <FileIcon /> : '-'}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {task.date}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {status}
              </TableCell>
              <TableCell align="center">
                <ActionsButtons doctor={task.doctor} />
              </TableCell>
            </TableRow>
          ))}
        {isDoctorList && (
          <DoctorList
            doctorList={tasks}
            rtlActive={rtlActive}
            onBookingButtonClick={handleBookingButtonClick}
            onDoctorButtonClick={handleDoctorButtonClick}
          />
        )}
        {showDoctorModal && (
          <Modal
            content={<DoctorInfo selectedDoctor={selectedDoctor} />}
            color="#3781F5"
            headerColor="white"
            style={{ height: '600px' }}
            actions={doctorModalButton}
            description={doctorModaldescription}
            handleOnCloseClick={handleOnCloseDoctorModalClick}
          />
        )}
        {showBookingModal && (
          <Modal
            content={<BookingFrom selectedDoctor={selectedDoctor} onFormChange={handleOnFormChange} />}
            color="#3781F5"
            headerColor="white"
            style={{ height: '600px' }}
            actions={bookingModalButtons}
            description={bookingModaldescription}
            handleOnCloseClick={handleOnCloseBookingClick}
          />
        )}
        {showMoreInfoModal && (
          <Modal
            color="#3781F5"
            headerColor="white"
            style={{ height: '600px' }}
            handleOnCloseClick={handleOnCloseClick}
            content={<AppointmentInfo doctorName={moreInfoModalDoctor} />}
            description={appointmentInfoDescription}
          />
        )}
      </TableBody>
    </Table>
  );
}

Tasks.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
