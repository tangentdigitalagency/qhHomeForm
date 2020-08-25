import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import '../../App.css';
import background from '../../assets/background.png';
import { FinalCostPage } from './components';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const FinalCost = () => {
  const classes = useStyles();

  return (
    <div>
      <FinalCostPage />
    </div>
  );
};

export default FinalCost;
