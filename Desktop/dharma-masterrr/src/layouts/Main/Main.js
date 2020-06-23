import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: 'white' }}
      className={clsx({
        [classes.root]: true
      })}>
      <Topbar />

      <main className={classes.content} style={{ backgroundColor: 'white' }}>
        {children}
        <Footer style={{}} />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
