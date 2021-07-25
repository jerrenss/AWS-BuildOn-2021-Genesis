import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styles from 'assets/jss/nextjs-material-dashboard/components/headerStyle.js';

export default function Header(props) {
  // used for checking current route
  const router = useRouter();
  // create styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { color } = props;
  const appBarClasses = classNames({
    [' ' + classes[color]]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div style={{ margin: '20px' }}>
          <div style={{ fontWeight: '500', marginBottom: '25px' }}>
            <span style={{ fontSize: '34px', color: 'black' }}>
              Greetings&nbsp;
            </span>
            <span style={{ fontSize: '34px', color: '#3781F5' }}>Mary</span>
            <span style={{ fontSize: '34px', color: 'black' }}>,</span>
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: '500',
              color: 'black',
              fontStyle: 'italic'
            }}
          >
            How are you feeling today?
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
