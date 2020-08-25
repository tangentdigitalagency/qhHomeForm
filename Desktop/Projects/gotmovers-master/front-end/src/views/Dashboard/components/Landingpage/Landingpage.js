import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import CarouselFooter from './CarouselFooter';
import { NavLink as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Switch
} from '@material-ui/core';
import '../../../../App.css';
import { render } from 'react-dom';
import { Widget } from 'react-chat-widget';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: '3.7rem',
    color: '#101820FF',
    '@media (max-width:787px)': {
      fontSize: '1.5rem',
      lineHeight: '1rem'
    }
  },
  subTitle: {
    fontSize: '1.6rem',
    lineHeight: '30px',
    color: '#101820FF',
    '@media (max-width:787px)': {
      fontSize: '1rem'
    }
  },
  resize: {
    fontSize: 50
  },
  movingFont: {
    fontSize: '20px'
  },
  Button: {
    width: '35vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    },
    '@media (max-width:1000px)': {
      margin: '10px 0px',
      width: '25vh',
      fontSize: '18px'
    },

    '@media (max-width:1000px)': {
      margin: '10px 0px',
      fontSize: '14px'
    }
  },

  blueBorder: {
    paddingTop: '3vh',
    marginTop: '10vh',
    height: '30vh',
    borderRadius: '20px',

    color: 'white',
    paddingLeft: '4vh'
  },
  Autocomplete: {
    backgroundColor: 'white',
    color: 'white'
  },
  MainContentWrapper: {
    marginTop: '10vh',

    '@media (max-width:1000px)': {
      marginTop: '3vh'
    }
  },
  carouselFooterWrapper: {
    // top: '59vh',
    height: '25vh',
    bottom: 0,
    marginLeft: '-10vh',
    position: 'absolute',
    '@media (max-width:600px)': {
      bottom: '0',
      marginLeft: '0'
    }
  },
  carouselFooter: {
    // marginTop: '20vh',
    textAlign: 'right',
    '@media (max-width:600px)': {
      marginTop: '0'
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
    title: 'Residential',
    href: '/reserve'
  },
  {
    title: 'Commercial',
    href: '/reserve'
  }
];

const Towns = [
  'Alaska',
  'Alabama',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  'North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico'
];

const Landingpage = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Grid
      container
      xs={12}
      class="background"
      align="center"
      class={classes.MainContentWrapper}>
      <Grid item xs={12}>
        <Typography className={classes.title}>
          Know the cost of your move
        </Typography>
        <Grid item xs={12} style={{ marginTop: '4vh' }}>
          <Typography className={classes.subTitle}>
            Islandwide Coverage with Low Rates
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          id="buttonWrapper"
          style={{ marginTop: '10vh' }}>
          <Grid item xs={12} sm={0} style={{ marginLeft: '5vh' }} />
          <Grid container xs={12} sm={12} align="center" justify="space-around">
            {pages.map(page => (
              <Grid item xs={12} sm={6}>
                <Button
                  activeClassName={classes.active}
                  className={classes.Button}
                  key={page.title}
                  component={CustomRouterLink}
                  // to={page.href}
                  to={{ pathname: page.href, state: { fromLink: page.title } }}
                  variant="contained"
                  color="primary">
                  {page.title}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid container xs={12} style={{ marginTop: '5vh' }}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container xs={12} style={{ marginTop: '5vh' }}>
          <Grid item xs={12} style={{ zIndex: '40' }}></Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} className={classes.carouselFooterWrapper}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={10} className={classes.carouselFooter}>
          <CarouselFooter />
          <Widget
            launcherCloseLabel="Chat with us"
            title="Welcome"
            subtitle="Ask us anything"
          />
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
    </Grid>
  );
};
Landingpage.propTypes = {
  className: PropTypes.string
};

export default Landingpage;
