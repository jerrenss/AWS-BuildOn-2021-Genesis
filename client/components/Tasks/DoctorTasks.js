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
// @material-ui/icons
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// core components
import styles from 'assets/jss/nextjs-material-dashboard/components/tasksStyle.js';

export default function DoctorTasks(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { tasks, rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });
  return (
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
              {tasks[value].image === true ? 'Uploaded' : '-'}
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
    </Table>
  );
}

DoctorTasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
