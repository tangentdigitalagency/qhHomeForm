import React from 'react';
import { makeStyles } from '@material-ui/styles';
import '../../App.css';
import { Landingpage } from './components';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Landingpage />
    </div>
  );
};

export default Dashboard;
