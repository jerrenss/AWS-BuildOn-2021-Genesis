import React, { useState, useEffect } from 'react';
// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Tasks from 'components/Tasks/Tasks.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';
import Button from '../../components/CustomButtons/Button';
import { useAppContext } from '../../context/state';
import Link from '@material-ui/core/Link';
import { MAIN_CHARACTER_DOCTOR } from 'variables/general';
import { useRouter } from 'next/router'

function Dashboard() {
  const [ongoingAppt, setOngoingAppt] = useState([]);
  const [completedAppt, setCompletedAppt] = useState([]);
  const router = useRouter()
  const value = useAppContext();
  const { newBooking } = value;

  const handleClickBookingBtn = (e) => {
    e.preventDefault()
    router.push("/admin/doctor-list")
  }

  useEffect(() => {
    if (newBooking !== null) {
      let newAppt = { patientId: 2, doctor: MAIN_CHARACTER_DOCTOR, image: false, date: newBooking.date };
      let filteredOnGoingAppt = ongoingAppt.filter(appt => {
        return appt.patientId !== 2
      })
      filteredOnGoingAppt = [...filteredOnGoingAppt, newAppt];
      setOngoingAppt([...ongoingAppt, newAppt]);
    }
  }, [newBooking])

  return (
    <div style={{ marginTop: '50px' }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="info" onClick={handleClickBookingBtn}><span style={{ fontSize: '14px' }}>Book a virtual consultation now</span></Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div style={{ fontSize: '26px', fontWeight: '500', color: 'black' }}>
            Your Appointments:
          </div>
          <CustomTabs
            headerColor="dark"
            tabs={[
              {
                tabName: 'Ongoing',
                tabContent: (
                  <Tasks
                    tasks={ongoingAppt}
                    headers={[
                      'Doctor Name',
                      'Scans',
                      'Consultation Date',
                      'Status',
                      'Actions',
                    ]}
                  />
                ),
              },
              {
                tabName: 'Completed',
                tabContent: (
                  <Tasks
                    tasks={completedAppt}
                    headers={[
                      'Doctor Name',
                      'Scans',
                      'Consultation Date',
                      'Status',
                      'Actions',
                    ]}
                  />
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
