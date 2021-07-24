import React, { useState } from 'react';
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
// core components
import Button from '../../components/CustomButtons/Button';
import Modal from '../../components/Modal/Modal';
import DoctorInfo from '../../components/Modal/DoctorInfo';
import BookingFrom from '../../components/BookingForm/BookingForm';
import AppointmentInfo from '../../components/AppointmentInfo/AppointmentInfo'
import styles from 'assets/jss/nextjs-material-dashboard/components/tasksStyle.js';
// utils
import { StatusUtil } from '../../utils/StatusUtil';

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
                onClick={onDoctorButtonClick}
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
  const [moreInfoModalDoctor, setMoreInfoModalDoctor] = useState('');
  const [statusValue, setStatusValue] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  console.log(selectedDoctor);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tasksIndexes, tasks, rtlActive, headers, isDoctorList } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

  const handleBookingButtonClick = event => {
    setSelectedDoctor(event.target.value);
    setShowBookingModal(true);
  };

  const handleDoctorButtonClick = event => {
    setSelectedDoctor(event.target.value);
    setShowDoctorModal(true);
  };

  const handleMoreInfoClick = event => {
    setMoreInfoModalDoctor(event);
    setShowMoreInfoModal(true);
  }

  const handleOnCloseClick = () => {
    setShowMoreInfoModal(false);
  }

  const doctorModalButton = (
    <>
      <Button color="warning" onClick={() => setShowDoctorModal(false)}>
        Back
      </Button>
    </>
  );

  const bookingModalButtons = (
    <>
      <Button color="warning" onClick={() => setShowBookingModal(false)}>
        Back
      </Button>
      <Button color="info">Submit</Button>
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

  const status = StatusUtil.getStatusType(statusValue);

  const doctorModaldescription = <>About Dr Bukayo Saka</>;

  const bookingModaldescription = <>Virtual Consultation Appointment Form</>;

  const appointmentInfoDescription = <>More Information About Appointment</>

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
          tasksIndexes.map(value => (
            <TableRow key={value} className={classes.tableRow}>
              <TableCell className={tableCellClasses} align="center" style={{minWidth: '200px'}}>
                {tasks[value].doctor}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {tasks[value].image === true ? 'true' : '-'}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {tasks[value].date}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {status}
              </TableCell>
              <TableCell align="center">
                <ActionsButtons doctor={tasks[value].doctor}/>
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
          />
        )}
        {showBookingModal && (
          <Modal
            content={<BookingFrom selectedDoctor={selectedDoctor} />}
            color="#3781F5"
            headerColor="white"
            style={{ height: '600px' }}
            actions={bookingModalButtons}
            description={bookingModaldescription}
          />
        )}
        {showMoreInfoModal && (
          <Modal
            color="#3781F5"
            headerColor="white"
            style={{ height: '600px' }}
            handleOnCloseClick={handleOnCloseClick}
            content={<AppointmentInfo doctorName={moreInfoModalDoctor}/>}
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
