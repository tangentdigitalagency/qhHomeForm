import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import '../../../../App.css';
import PropTypes from 'prop-types';
import PhoneIcon from '@material-ui/icons/Phone';
import { Widget } from 'react-chat-widget';
import { NavLink as RouterLink} from 'react-router-dom';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  Button: {
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF'
    },
    width: '25vh',
    color: 'white',
    borderRadius: '25px'
  },
  logo:{
    // marginTop: '-15vh',
    // '@media (max-width:800px)': {
    //   marginTop: '-8vh',
    // },
    // '@media (max-width:600px)': {
    //   marginTop: '-10vh',
    // },
  },
  Question:{
    color: 'rgb(25, 34, 31)',
    fontSize: '20px',
    fontWeight: 'bold',
    '& a':{
      color: 'rgb(25, 34, 31)',
      '&:hover':{
        textDecoration:'none'
      }
    },
    '@media (max-width:787px)': {
      fontSize: '12px',lineHeight:'12px', margin: '0 4vh'
    },
  },
  LogoImg:{
    width:'250px',
    '@media (max-width:787px)': {
      width:'180px',
    },
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const NavBarHome = ['Home'];
  const NavBar = [
    'Moving Companies',
    'Long Distance Moving',
    'Moving Reviews',
    'Moving Quotes',
    'Moving Truck Rental'
  ];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} style={{ height: '17vh' }}>
        <Grid container xs={12} style={{ marginTop: '2vh' }} align="center">
          <Grid item xs={0} style={{ marginTop: '.8vh' }} />
          <Grid item xs={6} sm={2} lg={2} className={classes.logo}>
            <RouterLink to="/">
            <img
              src={require('../../../../assets/logotest.png')}
              className={classes.LogoImg}
            />
            </RouterLink>
          </Grid>
          <Grid item xs={0} sm={7} lg={7} />
          <Grid container xs={6} sm={3} lg={3} align="center" style={{ marginTop: '0vh' }}>
            <Grid item xs={12} align="center">
              <Typography
              className={classes.Question}
                style={{
                  
                }}>
                  <a href="tel:+7879558832">Questions? Call us at 787-955-8832</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
