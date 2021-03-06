import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// core components
import Button from '../../components/CustomButtons/Button';
import Modal from '../../components/Modal/Modal';
import AppointmentInfo from '../../components/AppointmentInfo/AppointmentInfo'
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import styles from 'assets/jss/nextjs-material-dashboard/components/tasksStyle.js';
import ScanResult from '../../components/Modal/ScanResult';

export default function DoctorTasks(props) {
  const [uploadScanModal, setUploadScanModal] = useState(false);
  const [scanResultModal, setScanResultModal] = useState(false);
  const [scan, setScan] = useState(null);
  const [showMoreInfoModal, setShowMoreInfoModal] = useState(false);
  const [showMoreInfoPatientName, setShowMoreInfoPatientName] = useState('');
  const [scanImageURL, setScanImageURL] = useState('https://i0.wp.com/www.aliem.com/wp-content/uploads/2020/04/LobarPNA.png?fit=559%2C425&ssl=1')
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tasks, rtlActive, isPendingTab, isCompletedTab, handleBookingConfirmation, handleUpdatePatientScan, isSpecialist } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });
  const UPLOAD_SCAN_ENDPOINT = '/api/doctors/upload-scan';

  const uploadImage = () => {
    const formData = new FormData()
    const patientId = 4
    formData.append('patientId', patientId)
    formData.append('scanFile', scan[0])
    axios({
      method: 'post',
      url: UPLOAD_SCAN_ENDPOINT,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(res => {
        console.log(res.data)
        setScanImageURL(res.data.location)
        setUploadScanModal(false)
        handleUpdatePatientScan(patientId)
      })
      .catch(err => console.log(err));
  }

  const displayImage = () => {
    // window.open(scanImageURL, '_blank');
    setScanResultModal(true)
  }

  const handleImage = (image) => {
    setScan(image);
  }

  const handleOnMoreInfoClick = (patientName) => {
    setShowMoreInfoPatientName(patientName);
    setShowMoreInfoModal(true);
  }

  const handleOnCloseClick = () => {
    setShowMoreInfoModal(false);
  }

  const UploadScanButton = (props) => {
    return <Button color="info" onClick={() => setUploadScanModal(true)}>Upload Scan</Button>
  }

  const handleAcceptBooking = (acceptedTask) => {
    const task = {
      patientId: acceptedTask.patientId,
      patient: acceptedTask.patient,
      image: false,
      date: acceptedTask.date
    };
    handleBookingConfirmation(task)
  }

  const modalActions = (
    <>
      <Button color="warning" onClick={() => setUploadScanModal(false)}>Cancel</Button>
      <Button color="info" onClick={uploadImage}>Done</Button>
    </>
  )

  const scanModalActions = (
    <>
      <Button color="warning" onClick={() => setScanResultModal(false)}>
        Back
      </Button>
    </>
  );

  const content = (
    <>
      <ImageUploader onUploadHandle={handleImage} />
    </>
  )

  const PendingActionButtons = (props) => {
    const { task } = props;
    return (
      <div>
        <Button color='success' onClick={() => handleAcceptBooking(task)}>Accept</Button>
        <Button color='warning'>Decline</Button>
      </div>
    );
  }

  const ActionButtons = (props) => {
    const { isCompletedTab, patientName } = props;
    return (
      <div>
        <Button color='success' onClick={() => handleOnMoreInfoClick(patientName)}>More Info</Button>
        {!isCompletedTab && <Button color='warning'>Edit Appointment</Button>}
      </div>
    )
  }

  const FileIcon = (props) => {
    return (
      <IconButton onClick={displayImage}>
        <DescriptionIcon fontSize="large" style={{ color: '#3781F5' }} />
      </IconButton>
    )
  }

  const handleSessionEndClick = () => {
    setShowMoreInfoModal(false);
  }

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Patient Name</TableCell>
            <TableCell align="center">{isPendingTab ? `Consultation Date` : `Scans`}</TableCell>
            <TableCell align="center">{isPendingTab ? `Symptoms` : `Consultation Date`}</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((index, value) => (
            <TableRow key={index} className={classes.tableRow}>
              <TableCell className={tableCellClasses} align="center" style={{ minWidth: '150px' }}>
                {tasks[value].patient}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {!isPendingTab && (tasks[value].image === true ? <FileIcon /> : <UploadScanButton index={index} />)}
                {isPendingTab && tasks[value].date}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {!isPendingTab && tasks[value].date}
                {isPendingTab && tasks[value].symptoms}
              </TableCell>
              <TableCell align="center" size="small" style={{ padding: '0px' }}>
                {isPendingTab && <PendingActionButtons task={tasks[value]} />}
                {!isPendingTab && <ActionButtons isCompletedTab={isCompletedTab} patientName={tasks[value].patient} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        uploadScanModal && 
          <Modal 
            content={content} 
            actions={modalActions} 
            handleOnCloseClick={() => setUploadScanModal(false)}
          />
      }
      {
        scanResultModal && 
          <Modal
            content={<ScanResult image={scanImageURL} />}
            color="#3781F5"
            headerColor="white"
            actions={scanModalActions}
            description={"Scan Result"}
            handleOnCloseClick={() => setScanResultModal(!scanResultModal)}
          />
      }
      {showMoreInfoModal && (
        <Modal
          color="#3781F5"
          headerColor="white"
          content={<AppointmentInfo doctorName={showMoreInfoPatientName} isSpecialist={isSpecialist} onEndSessionClick={handleSessionEndClick}/>}
          handleOnCloseClick={handleOnCloseClick}
        />
      )}
    </>
  );
}

DoctorTasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
