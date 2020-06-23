import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import '../../../../../src/App.css';
import Button from '@material-ui/core/Button';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const useStyles = makeStyles(theme => ({
  transparencyBox: {
    backgroundImage:
      'linear-gradient(to right, rgba(255,255,255,1),rgba(255,255,255,.85), rgba(255,255,255,1))',
    zIndex: '44 !important',
    boxShadow: '0px 0px 10px 15px white',
    borderRadius: '25px'
  },
  ContentLine: {
    margin: '0'
  },
  ContentLine2: {
    margin: '0'
  },
  BottomLine: {
    margin: '0'
  }
}));

const SubHeading = () => {
  const classes = useStyles();
  return (
    <Grid
      style={{ justifyContent: 'center' }}
      container
      id="aadesktop"
      align="center"
      xs={12}>
      <Grid
        item
        xs={7}
        lg={7}
        align="center"
        className={classes.transparencyBox}>
        <div class="cssanimation sequence fadeInBottom" id="topbarAnim">
          <Grid item xs={12} align="center" lg={12}>
            <Typography class="SendMoneyTo" className={classes.Content}>
              Send money to
            </Typography>
          </Grid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={12} style={{ zIndex: '4' }}>
              <Typography class="anyone" className={classes.ContentLine1}>
                anyone.
              </Typography>
              <Typography
                class="EarnInterest"
                style={{ lineHeight: '66px', margin: '0' }}>
                {' '}
                Earn interest
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ marginTop: '0vh' }}>
            <Grid item xs={12} style={{ zIndex: '4000' }}>
              <Typography class="From" className={classes.BottomLine}>
                {'from '}
              </Typography>
              <Typography id="transition" class="anywhere">
                anywhere.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};
export default SubHeading;
