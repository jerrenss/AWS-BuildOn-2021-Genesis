import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
import Moment from 'moment';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import lightBlue from '@material-ui/core/colors/lightBlue';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Rating from '@material-ui/lab/Rating';
import Badge from '@material-ui/core/Badge';

// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import MomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import styles from 'assets/jss/nextjs-material-dashboard/components/customTabsStyle.js';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomTabs(props) {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(null);
  const [date, setDate] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const useStyles = makeStyles(styles);
  const useStylesForDropdown = makeStyles(theme => ({
    formControl: {
      minWidth: 200,
    },
    select: {
      background: '#ffffff',
    },
    label: { color: 'black' },
    datepicker: { background: 'white' },
  }));

  const classes = useStyles();
  const classesForDropdown = useStylesForDropdown();
  const {
    headerColor,
    plainTabs,
    tabs,
    title,
    rtlActive,
    isTabs,
    isDoctorList,
  } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });
  const materialTheme = createMuiTheme({
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: '#3781F5',
        },
      },
      MuiPickersDay: {
        day: {
          color: '#3174dc',
        },
        daySelected: {
          backgroundColor: '#3781F5',
        },
        dayDisabled: {
          color: '#c3d9fc',
        },
        current: {
          color: lightBlue['900'],
        },
      },
      MuiPickersModal: {
        dialogAction: {
          color: '#ffffff',
        },
      },
    },
  });

  const handleRating = event => {
    setRating(event.target.value);
  };

  const CustomBadge = (props) => {
    const { badgeLabel, badgeValue } = props;
    return (
      <Badge badgeContent={badgeValue} color="secondary">
        {badgeLabel}
      </Badge>
    )
  }

  const DoctorList = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                marginRight: '30px',
                marginTop: '10px',
              }}
            >
              <FormControl
                variant="outlined"
                className={classesForDropdown.formControl}
              >
                <InputLabel className={classesForDropdown.label}>
                  Rating
                </InputLabel>
                <Select
                  onChange={handleRating}
                  value={rating}
                  autoWidth
                  className={classesForDropdown.select}
                >
                  <MenuItem value={1}>
                    <Rating name="read-only" value={1} readOnly />
                  </MenuItem>
                  <MenuItem value={2}>
                    <Rating name="read-only" value={2} readOnly />
                  </MenuItem>
                  <MenuItem value={3}>
                    <Rating name="read-only" value={3} readOnly />
                  </MenuItem>
                  <MenuItem value={4}>
                    <Rating name="read-only" value={4} readOnly />
                  </MenuItem>
                  <MenuItem value={5}>
                    <Rating name="read-only" value={5} readOnly />
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ marginTop: '10px' }}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <ThemeProvider theme={materialTheme}>
                  <KeyboardDatePicker
                    variant="inline"
                    inputVariant="outlined"
                    value={date}
                    format="MM/D/yyyy"
                    onChange={date => setDate(date)}
                    disablePast
                    className={classesForDropdown.datepicker}
                    emptyLabel="Earliest Date"
                    clearable
                  />
                </ThemeProvider>
              </MuiPickersUtilsProvider>
            </div>
          </div>
    )
  }

  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        {isDoctorList ? <DoctorList /> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop, key) => {
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: isTabs ? classes.tabSelected : null,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName === 'Pending' ? <CustomBadge badgeLabel={prop.tabName} badgeValue={prop.numOfTasks} /> : prop.tabName}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose',
    'dark',
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
};
