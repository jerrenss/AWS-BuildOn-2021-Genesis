import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Tasks from 'components/Tasks/Tasks.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';

import { bugs, doctors } from 'variables/general.js';
function DoctorList() {
  const ratingOptions = [
    {
      value: '1',
      label: <Rating name="read-only" value={1} readOnly />,
    },
    {
      value: '2',
      label: <Rating name="read-only" value={2} readOnly />,
    },
    {
      value: '3',
      label: <Rating name="read-only" value={3} readOnly />,
    },
    {
      value: '4',
      label: <Rating name="read-only" value={4} readOnly />,
    },
    {
      value: '5',
      label: <Rating name="read-only" value={5} readOnly />,
    },
  ];
  return (
    <div style={{ marginTop: '50px' }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div style={{ fontSize: '26px', fontWeight: '500', color: 'black' }}>
            Available Doctors:
          </div>
          <CustomTabs
            isTabs={false}
            isDoctorList={true}
            ratingOptions={ratingOptions}
            headerColor="dark"
            tabs={[
              {
                tabContent: (
                  <Tasks
                    isDoctorList={true}
                    tasks={doctors}
                    headers={[
                      'Doctor Name',
                      'Earliest Available Date',
                      'Rating',
                      '',
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

DoctorList.layout = Admin;

export default DoctorList;
