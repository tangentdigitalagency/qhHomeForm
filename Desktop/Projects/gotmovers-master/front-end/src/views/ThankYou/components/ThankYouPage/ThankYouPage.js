import React, { forwardRef } from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink as RouterLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import '../../../../App.css';
import { render } from 'react-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontSize: '3rem',
    lineHeight: '50px',
    color: '#101820FF',
    '@media (max-width:787px)':{
      fontSize: '1.5rem',
      lineHeight: '30px'
    }
  },
  subTitle: {
    fontSize: '30px',
    color: '#101820FF',
    '@media (max-width:787px)':{
      fontSize: '20px'
    }
  },

  FooterTitle: {
    fontSize: '35px',
    color: '#101820FF'
  },
  Button: {
    width: '35vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF'
    }
  },
  resize: {
    color: 'white'
  },
  inputColor: {
    color: 'white',
    fontWeight: 'bold'
  },
  movingFont: {
    fontSize: '20px'
  },
  Button: {
    width: '43vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF'
    }
  },
  ThankYou: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '80px',
    '@media (max-width:787px)':{
      fontSize: '50px',
    }
  },

  Autocomplete: {
    backgroundColor: 'white',

    color: 'white'
  },
  label: {
    '&$focusedLabel': {
      color: 'cyan'
    },
    '&$erroredLabel': {
      color: 'orange'
    }
  },
  focusedLabel: {},
  erroredLabel: {},
  underline: {
    '&$error:after': {
      borderBottomColor: 'orange'
    },
    '&:after': {
      borderBottom: `2px solid cyan`
    }
  }
  ,MainContainer:{
    marginTop:'8vh',
    '@media (max-width:787px)':{
      marginTop:'3vh',
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));
const pages = [
  {
    title: 'Next',
    href: '/contact'
  }
];

const ThankYouPage = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Grid container xs={12} align="center" className={classes.MainContainer} style={{ }}>
      <Grid container xs={12}>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              We have received your Information
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ marginTop: '6vh' }}>
          <Grid item xs={12}>
            <Typography className={classes.subTitle}>
              Now one of our representatives will contact you
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ marginTop: '7vh' }}>
          <Grid item xs={12} className={classes.ThankYou}>
            Thank you!
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
ThankYouPage.propTypes = {
  className: PropTypes.string
};

export default ThankYouPage;
