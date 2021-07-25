import React, { useState } from 'react';
// layout for this page
import Doctor from 'layouts/Doctor.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import DoctorTasks from 'components/Tasks/DoctorTasks.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';

import { DOCTOR_ONGOING, DOCTOR_PENDING, DOCTOR_COMPLETED } from 'variables/general.js';

function Dashboard() {
    const [ongoingTasks, setOngoingTasks] = useState(DOCTOR_ONGOING);
    const [pendingTasks, setPendingTasks] = useState(DOCTOR_PENDING);
    const [completedTasks, setCompletedTasks] = useState(DOCTOR_COMPLETED);

    const handleConfirmationOfBooking = (newOngoingTask) => {
        setOngoingTasks([...ongoingTasks, newOngoingTask]);
        let newPendingTasks = pendingTasks.filter(task => {
            return task.patientId !== newOngoingTask.patientId
        })
        setPendingTasks(newPendingTasks)
    }


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
                                numOfTasks: ongoingTasks.length,
                                tabContent: <DoctorTasks tasks={ongoingTasks} />,
                            },
                            {
                                tabName: 'Pending',
                                tabValue: 1,
                                numOfTasks: pendingTasks.length,
                                tabContent: <DoctorTasks tasks={pendingTasks} isPendingTab={true} handleBookingConfirmation={handleConfirmationOfBooking}/>,
                            },
                            {
                                tabName: 'Completed',
                                tabValue: 2,
                                numOfTasks: completedTasks.length,
                                tabContent: <DoctorTasks tasks={completedTasks} isCompletedTab={true} />,
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
