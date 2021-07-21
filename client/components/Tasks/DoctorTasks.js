import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// @material-ui/icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
// core components
import Button from '../../components/CustomButtons/Button';
import Modal from '../../components/Modal/Modal';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import styles from 'assets/jss/nextjs-material-dashboard/components/tasksStyle.js';

export default function DoctorTasks(props) {
  const [uploadScanModal, setUploadScanModal] = useState(false);
  const [scan, setScan] = useState(null);
  console.log(scan);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tasks, rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

  const UPLOAD_SCAN_ENDPOINT = '/api/doctors/upload-scan';

  const uploadImage = () => {
    axios({
      method: 'post', 
      url: UPLOAD_SCAN_ENDPOINT,
      data: { patientId: 1 }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  const UploadScanButtom = () => {
    return <Button color="info" onClick={() => setUploadScanModal(true)}>Upload Scan</Button>
  }

  const handleImage = (image) => {
    setScan(image);
  }
 
  const modalActions =  (
      <>
        <Button color="warning" onClick={() => setUploadScanModal(false)}>Cancel</Button>
        <Button color="info" onClick={uploadImage}>Done</Button> 
      </>
  )

  const content = (
    <>
      <ImageUploader onUploadHandle={handleImage}/>
    </>
  )

  return (
    <>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell align="center">Patient Name</TableCell>
          <TableCell align="center">Scans</TableCell>
          <TableCell align="center">Consultation Date</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((index, value) => (
          <TableRow key={index} className={classes.tableRow}>
            <TableCell className={tableCellClasses} align="center">
              {tasks[value].patient}
            </TableCell>
            <TableCell className={tableCellClasses} align="center">
              {tasks[value].image === true ? 'Uploaded' : <UploadScanButtom />}
            </TableCell>
            <TableCell className={tableCellClasses} align="center">
              {tasks[value].date}
            </TableCell>
            <TableCell align="center">
              <Tooltip
                id="tooltip-top"
                title="Edit Appointment"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Edit"
                  className={classes.tableActionButton}
                >
                  <MoreVertIcon
                    className={
                      classes.tableActionButtonIcon + ' ' + classes.edit
                    }
                  />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {uploadScanModal && <Modal content={content} actions={modalActions}/>}
    </Table>
    </>
  );
}

DoctorTasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
