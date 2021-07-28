import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
// layout for this page
import Doctor from 'layouts/Doctor.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import DoctorTasks from 'components/Tasks/DoctorTasks.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';

import { DOCTOR_ONGOING, DOCTOR_PENDING, DOCTOR_COMPLETED, SPECIALIST_ONGOING, SPECIALIST_PENDING } from 'variables/general.js';

function Dashboard() {
    const router = useRouter()
    const { doctorId } = router.query;
    let ONGOING_TASKS = doctorId === 'doctor' ? DOCTOR_ONGOING : SPECIALIST_ONGOING;
    let PENDING_TASKS = doctorId === 'doctor' ? DOCTOR_PENDING : SPECIALIST_PENDING;
    const [ongoingTasks, setOngoingTasks] = useState(ONGOING_TASKS);
    const [pendingTasks, setPendingTasks] = useState(PENDING_TASKS);
    const [completedTasks, setCompletedTasks] = useState(DOCTOR_COMPLETED);

    const handleConfirmationOfBooking = (newOngoingTask) => {
        setOngoingTasks([...ongoingTasks, newOngoingTask]);
        let newPendingTasks = pendingTasks.filter(task => {
            return task.patientId !== newOngoingTask.patientId
        })
        setPendingTasks(newPendingTasks)
    }

    const handleUpdatePatientScan = (patientId) => {
        const currOngoingTasks = [...ongoingTasks]
        // Use patientId as index to update image flag
        currOngoingTasks[patientId - 1].image = true
        setOngoingTasks(currOngoingTasks)
    }

    return (
        <div style={{ marginTop: '50px' }}>
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
                                tabValue: 0,
                                numOfTasks: ongoingTasks.length,
                                tabContent: <DoctorTasks tasks={ongoingTasks} handleUpdatePatientScan={handleUpdatePatientScan} isSpecialist={doctorId === 'specialist'}/>,
                            },
                            {
                                tabName: 'Pending',
                                tabValue: 1,
                                numOfTasks: pendingTasks.length,
                                tabContent: <DoctorTasks tasks={pendingTasks} isPendingTab={true} handleBookingConfirmation={handleConfirmationOfBooking} isSpecialist={doctorId === 'specialist'} />,
                            },
                            {
                                tabName: 'Completed',
                                tabValue: 2,
                                numOfTasks: completedTasks.length,
                                tabContent: <DoctorTasks tasks={completedTasks} isCompletedTab={true} isSpecialist={doctorId === 'specialist'} />,
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
