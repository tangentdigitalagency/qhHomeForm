import React, { forwardRef } from 'react';
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
import { NavLink as RouterLink } from 'react-router-dom';
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
      backgroundColor: '#101820FF',
      color: 'white'
    },
    width: '25vh',
    color: 'white',
    borderRadius: '25px',
    '@media (max-width:800px)': {
      width: '16vh',
      fontSize: '12px'
    }
  },
  logo: {
    // marginTop: '-15vh',
    // '@media (max-width:800px)': {
    //   marginTop: '-8vh',
    // },
    // '@media (max-width:600px)': {
    //   marginTop: '-10vh',
    // },
  },
  Question: {
    color: 'rgb(25, 34, 31)',
    fontSize: '20px',
    fontWeight: 'bold',
    '& a': {
      color: 'rgb(25, 34, 31)',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    '@media (max-width:600px)': {
      fontSize: '12px',
      lineHeight: '14px',
      margin: '0 4vh',
      marginBottom: '1vh'
    }
  },
  LogoImg: {
    width: '250px',
    '@media (max-width:787px)': {
      width: '180px'
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
    title: 'book now',
    href: '/booknow'
  }
];

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const mouse = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext');
    el.style.color = white;
  };
  const mouse1 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext1');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout1 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext1');
    el.style.color = white;
  };

  const mouse2 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext2');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout2 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext2');
    el.style.color = white;
  };

  const mouse3 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext3');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout3 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext3');
    el.style.color = white;
  };
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
      <Grid container xs={12} id="headerWrapper" style={{ height: '17vh' }}>
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
          <Grid
            container
            xs={6}
            sm={3}
            lg={3}
            align="center"
            style={{ marginTop: '0vh' }}>
            <Grid container xs={12} align="center">
              <Grid item xs={12}>
                <Typography className={classes.Question}>
                  <a href="tel:+7879558832">
                    Questions? Call us at 787-955-8832
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {pages.map(page => (
                  <Grid item xs={12} sm={12} style={{ paddingBottom: '12vh' }}>
                    <Button
                      activeClassName={classes.active}
                      className={classes.Button}
                      key={page.title}
                      component={CustomRouterLink}
                      to={page.href}
                      variant="contained"
                      color="primary">
                      {page.title}
                    </Button>
                  </Grid>
                ))}
              </Grid>
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
