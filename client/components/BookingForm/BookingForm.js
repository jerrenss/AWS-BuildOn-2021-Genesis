import React, { useState } from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import MomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { AVAILABLE_TIMINGS } from '../../variables/general';

export default function BookingForm(props) {
  const [consultationDate, setConsultationDate] = useState(null);
  const [consultationTime, setConsultationTime] = useState('');
  console.log(consultationTime);
  const [symptoms, setSymptoms] = useState('');
  const [medication, setMedication] = useState('');
  const [allergies, setAllergies] = useState('');
  const { selectedDoctor } = props;
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
    },
  });

  const useStylesForDropdown = makeStyles(theme => ({
    formControl: {
      minWidth: 200,
    },
    select: {
      background: '#ffffff',
    },
    label: { color: 'black' },
    datepicker: { background: 'white' },
    input: { minWidth: 500 },
  }));
  const classesForDropdown = useStylesForDropdown();

  const handleConsultationTiming = event => {
    setConsultationTime(event.target.value);
  };

  const onSymptomChange = event => {
    setSymptoms(event.target.value);
  };

  const onMedicationChange = event => {
    setMedication(event.target.value);
  };

  const onAllergiesChange = event => {
    setAllergies(event.target.value);
  };

  return (
    <>
      <GridContainer>
        <GridItem xs={12}>
          <span style={{ fontSize: '24px', fontWeight: '500' }}>
            Choose Your Doctor:
          </span>
          &nbsp;{' '}
          <span
            style={{ fontSize: '24px', fontWeight: '500', color: '#3781F5' }}
          >
            {selectedDoctor}
          </span>
        </GridItem>
        <GridItem xs={6}>
          <span style={{ fontSize: '20px', fontWeight: '500' }}>
            Please Choose Your Appointment Date:
          </span>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <ThemeProvider theme={materialTheme}>
              <KeyboardDatePicker
                inputVariant="outlined"
                value={consultationDate}
                format="MM/DD/yyyy"
                onChange={date => setConsultationDate(date)}
                disablePast
                emptyLabel="Appointment Date"
                clearable
              />
            </ThemeProvider>
          </MuiPickersUtilsProvider>
        </GridItem>
        <GridItem xs={6}>
          <div>
            <span style={{ fontSize: '20px', fontWeight: '500' }}>
              Please Choose Your Appointment Timing:
            </span>
            <FormControl
              variant="outlined"
              className={classesForDropdown.formControl}
              disabled={consultationDate === null}
            >
              <Select
                onChange={handleConsultationTiming}
                value={consultationTime}
                autoWidth
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Consultation Timing
                </MenuItem>
                {consultationDate !== null &&
                  AVAILABLE_TIMINGS[
                    AVAILABLE_TIMINGS.findIndex(
                      value =>
                        value.date === consultationDate.format('DD/MM/YYYY')
                    )
                  ].timings.map(timing => {
                    return <MenuItem value={timing}>{timing}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', fontWeight: '500' }}>
              Current Symptoms You Are Experiencing (If Any):
            </span>
            <TextField
              variant="outlined"
              value={symptoms}
              onChange={onSymptomChange}
              className={classesForDropdown.input}
            />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', fontWeight: '500' }}>
              Current Medication You Are Taking (If Any):
            </span>
            <TextField
              variant="outlined"
              value={medication}
              onChange={onMedicationChange}
              className={classesForDropdown.input}
            />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', fontWeight: '500' }}>
              Allergies (If Any):
            </span>
            <TextField
              variant="outlined"
              value={allergies}
              onChange={onAllergiesChange}
              className={classesForDropdown.input}
            />
          </div>
        </GridItem>
      </GridContainer>
    </>
  );
}
