import React from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
// layout for this page
import Doctor from 'layouts/Doctor.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import DoctorTasks from 'components/Tasks/DoctorTasks.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';

import { DOCTOR_ONGOING, DOCTOR_PENDING, DOCTOR_COMPLETED } from 'variables/general.js';

function Dashboard() {
    return (
        <div style={{ marginTop: '50px' }}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <div style={{ fontSize: '26px', fontWeight: '600', color: 'black' }}>
                        Your Appointments:
                    </div>
                    <CustomTabs
                        headerColor="dark"
                        tabs={[
                            {
                                tabName: 'Ongoing',
                                tabValue: 0,
                                tabContent: <DoctorTasks tasks={DOCTOR_ONGOING} />,
                            },
                            {
                                tabName: 'Pending',
                                tabValue: 1,
                                tabContent: <DoctorTasks tasks={DOCTOR_PENDING} isPendingTab={true} />,
                            },
                            {
                                tabName: 'Completed',
                                tabValue: 2,
                                tabContent: <DoctorTasks tasks={DOCTOR_COMPLETED} isCompletedTab={true} />,
                            },
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}

Dashboard.layout = Doctor;

export default Dashboard;
