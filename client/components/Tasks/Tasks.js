import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Rating from '@material-ui/lab/Rating';
// @material-ui/icons
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// core components
import Button from '../../components/CustomButtons/Button';
import styles from 'assets/jss/nextjs-material-dashboard/components/tasksStyle.js';

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

const DoctorList = (doctorList, rtlActive) => {
  console.log(doctorList);
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
              <Button color="info" fontSize="12px">
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
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tasksIndexes, tasks, rtlActive, headers, isDoctorList } = props;
  console.log(headers);
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

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
              <TableCell className={tableCellClasses} align="center">
                {tasks[value].doctor}
              </TableCell>
              <TableCell className={tableCellClasses} align="center">
                {tasks[value].image === true ? 'true' : '-'}
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
        {isDoctorList && DoctorList(tasks, rtlActive)}
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
