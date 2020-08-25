import React, { forwardRef, useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { StepperDataContext } from '../../../../contexts/StepperDataContext'
import '../../../../App.css';
import ErrorModal from '../../../../layouts/ErrorModal/index'
import { render } from 'react-dom';

const SelectDateAndTime = [
  '23 May 5:00 PM',
  '24 May 7:00 AM',
  '25 May 1:00 AM',
  '26 May 3:00 PM',
  '27 May 4:00 PM',
  '28 May 4:00 AM'
];

const useStyles = makeStyles(theme => ({
  root: {}, 
  title: {
    fontSize: '3rem',
    color: '#101820FF',
    lineHeight: '40px',
    marginLeft: '5vh',
    '@media (max-width:780px)':{
      fontSize: '1.5rem',
      marginLeft: '0',
      lineHeight: '30px'
    }
  },
  subTitle: {
    fontSize: '29px',
    fontWeight: '400',
    lineHeight: '30px',

    color: '#101820FF',
    '@media (max-width:780px)':{
      fontSize: '22px',
    }

  },

  FooterTitle: {
    fontSize: '35px',
    color: '#101820FF'
  },
  Button: {
    width: '15vh',
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
    width: '38vh',
    marginTop: '.8vh',
    height: '7vh',
    fontSize: '20px',
    color: '#101820FF',
    borderRadius: '25px',
    background: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#101820FF'
    },
    '@media (max-width:800px) and (min-width:700px)':{
      width: '16vh',
      height: '3.5vh'
    },
    '@media (max-width:600px)':{
      width: '33vh',
      height: '5.5vh'
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
  ,
  MT:{
    marginTop:'12vh',
    '@media (max-width:780px)':{
      marginTop:'2vh'
    }
  },
  MB:{
    '@media (max-width:780px)':{
      marginBottom:'2vh'
    }
  },
  ML:{
    marginLeft: '8vh',
    '@media (max-width:780px)':{
      marginLeft: '0vh',
    }
  },
  MainContainer: {
    marginTop: '5vh',
    '@media (max-width:780px)':{
      marginTop: '1vh',
    }
  },
  MainFormContainer: {
    marginTop: '9vh',
    '@media (max-width:780px)':{
      marginTop: '2vh',
    }
  },
  MainLoader:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#00000073',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:'9999999'
  },
}));
const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const pages = [
  {
    title: 'Next',
    href: '/thankyou'
  }
];

const ReservePage = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [name, setName]  = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');


  return (
  <StepperDataContext>{(context) => {
    return(
      <Grid container xs={12} align="center" className={classes.MainContainer} style={{ }}>
      {context.loader ?  <div className={classes.MainLoader}>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> : null}
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography className={classes.title}>
            Full Concierge Service to Commercial Customers
          </Typography>
        </Grid>
        <Grid container xs={12} style={{ marginTop: '4vh' }}>
          <Grid item xs={12}>
            <Typography className={classes.subTitle}>
              We want to find the best price for you... Let's Talk
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} lg={12} className={classes.MainFormContainer} style={{ }}>
          <Grid item xs={0} sm={4} lg={4} />
          <Grid container xs={12} sm={8} justify="space-evenly">
            <Grid item xs={12} sm={6} lg={4}  className={classes.MB}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  required
                  value={context.contactName}
                  name="contactName"
                  onChange={(e)=> context.contactDetailsHandler(e.target.name,e.target.value)}
                  id="outlined-basic"
                  label="Contact Name"
                  variant="outlined"
                  align="left"
                  style={{ width: 250, backgroundColor:'#fff' }}
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  required
                  value={context.contactEmail}
                  name="contactEmail"
                  onChange={(e)=> context.contactDetailsHandler(e.target.name,e.target.value)}
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  align="left"
                  style={{ width: 250,backgroundColor:'#fff' }}
                />
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.MB} className={classes.MT}>
          <Grid item xs={0} sm={4} lg={4} />
          <Grid container xs={12} sm={8} justify="space-evenly">
            <Grid item xs={12} sm={6} lg={4}  className={classes.MB}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  required
                  value={context.contactBusinessName}
                  name="contactBusinessName"
                  onChange={(e)=> context.contactDetailsHandler(e.target.name,e.target.value)}
                  id="outlined-basic"
                  label="Business Name"
                  variant="outlined"
                  align="left"
                  style={{ width: 250,backgroundColor:'#fff' }}
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <Autocomplete
                 value={context.contactDate}
                 name="contactDate"
                 onChange={(e,v)=> context.contactDetailsHandler('contactDate', v)}
                className={classes.Autocomplete}
                inputStyle={{ color: 'white',
                  padding: '0 40px'
              }}
                align="left"
                InputProps={{
                  className: classes.inputColor
                }}
                id="outlined-basic"
                options={SelectDateAndTime}
                style={{ width: 250, margin: '0 40px' }}
                renderInput={params => (
                  <TextField
                  required
                    InputProps={{
                      classes: {
                        input: classes.resize,
                        root: classes.label,
                        focused: classes.focusedLabel,
                        error: classes.erroredLabel
                      }
                    }}
                    {...params}
                    label="Time to Contact you"
                    variant="outlined"
                  />
                )}
              />
              {/* </form> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.MB} className={classes.MT}>
          <Grid item xs={0} sm={4} lg={4} />
          <Grid container xs={12} sm={8} justify="space-evenly">
            <Grid item xs={12} sm={6} lg={4}  className={classes.MB}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  required
                  value={context.contactPhone}
                  name="contactPhone"
                  onChange={(e)=> context.contactDetailsHandler(e.target.name, e.target.value)}
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  align="left"
                  style={{ width: 250,backgroundColor:'#fff' }}
                />
              </form>
            </Grid>
            <Grid container xs={12} sm={6} lg={4} style={{}}>
              {pages.map(page => (
                <Grid item xs={12} sm={4} className={classes.ML}>
                  <Button
                    disabled={context.contactName === '' || context.contactEmail  === '' || context.contactBusinessName === '' || context.contactDate == '' ||context.contactPhone === ''}
                    activeClassName={classes.active}
                    className={classes.Button}
                    key={page.title}
                    // component={CustomRouterLink}
                    // to={page.href}
                    onClick={context.submitContactHandler}
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
      {
        context.errorMsg ? ( <ErrorModal msg={context.errorMsg}/>) : null
      }
    </Grid>
      )
  }}</StepperDataContext>
   );
};
ReservePage.propTypes = {
  className: PropTypes.string
};

export default ReservePage;
