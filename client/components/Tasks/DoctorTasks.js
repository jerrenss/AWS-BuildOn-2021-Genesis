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

export default function DoctorTasks(props) {
  const [uploadScanModal, setUploadScanModal] = useState(false);
  const [scan, setScan] = useState(null);
  const [showMoreInfoModal, setShowMoreInfoModal] = useState(false);
  const [showMoreInfoPatientName, setShowMoreInfoPatientName] = useState('');
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tasks, rtlActive, isPendingTab, isCompletedTab } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

  const UPLOAD_SCAN_ENDPOINT = '/api/doctors/upload-scan';

  const uploadImage = () => {
    const formData = new FormData()
    formData.append('patientId', 1)
    formData.append('scanFile', scan[0])
    axios({
      method: 'post',
      url: UPLOAD_SCAN_ENDPOINT,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(res => {
        console.log(res.data)
        setUploadScanModal(false)
      })
      .catch(err => console.log(err));
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

  const UploadScanButtom = () => {
    return <Button color="info" onClick={() => setUploadScanModal(true)}>Upload Scan</Button>
  }

  const modalActions = (
    <>
      <Button color="warning" onClick={() => setUploadScanModal(false)}>Cancel</Button>
      <Button color="info" onClick={uploadImage}>Done</Button>
    </>
  )

  const content = (
    <>
      <ImageUploader onUploadHandle={handleImage} />
    </>
  )

  const PendingActionButtons = () => {
    return (
      <div>
        <Button color='success'>Accept</Button>
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
      <IconButton>
        <DescriptionIcon fontSize="large" style={{color: '#3781F5'}}/>
      </IconButton>
    )
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
              <TableCell className={tableCellClasses} align="center" style={{minWidth: '150px'}}>
                {tasks[value].patient}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {!isPendingTab && (tasks[value].image === true ? <FileIcon /> : <UploadScanButtom />)}
                {isPendingTab && tasks[value].date}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {!isPendingTab && tasks[value].date}
                {isPendingTab && tasks[value].symptoms}
              </TableCell>
              <TableCell align="center" size="small" style={{padding:'0px'}}>
                {isPendingTab && <PendingActionButtons />}
                {!isPendingTab && <ActionButtons isCompletedTab={isCompletedTab} patientName={tasks[value].patient}/>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {uploadScanModal && <Modal content={content} actions={modalActions} />}
      {showMoreInfoModal && (
        <Modal 
          color="#3781F5" 
          headerColor="white" 
          content={<AppointmentInfo doctorName={showMoreInfoPatientName} />}
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
