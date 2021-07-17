import React from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Tasks from 'components/Tasks/Tasks.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';
import Button from '../../components/CustomButtons/Button';

import { bugs, website } from 'variables/general.js';

function Dashboard() {
  return (
    <div style={{ marginTop: '50px' }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="info">Book a virtual consultation now</Button>
        </GridItem>
      </GridContainer>
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
                tabContent: <Tasks tasksIndexes={[0]} tasks={bugs} />,
              },
              {
                tabName: 'Completed',
                tabContent: <Tasks tasksIndexes={[0, 1]} tasks={website} />,
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
