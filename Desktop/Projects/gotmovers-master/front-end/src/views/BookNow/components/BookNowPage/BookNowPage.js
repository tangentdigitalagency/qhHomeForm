import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { NavLink as RouterLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import '../../../../App.css';
import { render } from 'react-dom';
import { Widget } from 'react-chat-widget';
import { StepperDataContext } from '../../../../contexts/StepperDataContext';
import cities from '../../../../pr.json';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontSize: '3rem',
    color: '#101820FF',
    lineHeight: '50px',
    '@media (max-width:787px)': {
      fontSize: '1.5rem'
    }
  },
  subTitle: {
    fontSize: '19px',
    lineHeight: '100px',
    color: '#101820FF',
    '@media (max-width:787px)': {
      lineHeight: '30px'
    }
  },

  FooterTitle: {
    lineHeight: '130px',
    fontSize: '35px',
    color: '#101820FF'
  },

  movingFont: {
    fontSize: '20px'
  },
  Button: {
    width: '52vh',
    height: '7vh',
    fontSize: '20px',
    color: 'white',
    borderRadius: '25px',
    background: '#101820FF',
    '&:hover': {
      backgroundColor: '#101820FF',
      color: 'white'
    }
    // '@media (max-width:780px)':{
    //   width: '36vh',
    //   height:'6vh'
    // }
  },

  Autocomplete: {
    backgroundColor: 'white',
    width: '52vh',
    color: 'white'
  },
  ML: {
    paddingLeft: '13vh',
    '@media (max-width:780px)': {
      paddingLeft: '0vh'
    }
  },
  PT: {
    paddingTop: '4vh',
    textAlign: 'left',
    '@media (max-width:780px)': {
      textAlign: 'center'
    }
  },
  PLT: {
    paddingLeft: '13vh',
    paddingTop: '3vh',
    '@media (max-width:780px)': {
      paddingLeft: '0vh',
      paddingTop: '0'
    }
  },
  MuiGridGridSm6: {
    '@media (min-width: 600px)': {
      maxWidth: '100%'
    }
  },
  CommercialBTN: {
    paddingTop: '4vh',
    textAlign: 'left',
    '@media (max-width:780px)': {
      textAlign: 'center'
    }
  },
  DDTO: {
    width: '52vh',
    backgroundColor: '#fff',
    '@media (max-width:780px)': {
      margin: 'auto'
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));
const pages1 = [
  {
    title: 'Residential',
    href: '/moreinfo'
  }
];
const pages2 = [
  {
    title: 'Commercial'
  }
];
const pages3 = [
  {
    title: 'Next',
    href: '/moreinfo'
  }
];
const SelectDateAndTime = [
  '23 May 5:00 PM',
  '24 May 7:00 AM',
  '25 May 1:00 AM',
  '26 May 3:00 PM',
  '27 May 4:00 PM',
  '28 May 4:00 AM'
];
const Town = cities.map(city => city.city);
const SelectDate = [
  '23/5/2020',
  '24/5/2020',
  '25/5/2020',
  '26/5/2020',
  '27/5/2020',
  '28/5/2020'
];
const ListOfItems = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

const BookNowPage = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [checkedCommercial, setCheckedCommercial] = React.useState(false);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const handleChangeCommercial = event => {
    setCheckedCommercial(event.target.checked);
  };
  //toggle for residentail and commercial checkboxes
  function TypeSelection() {
    if (checked === true) {
      setChecked(false);
      console.log('Commercial should be off');
    }
    if (checkedCommercial === true) {
      setCheckedCommercial(false);
      console.log('Residential should be off');
    }
  }
  //if residential clicked next button should jump to

  return (
    <StepperDataContext>
      {context => {
        return (
          <Grid container xs={12} align="center">
            <Grid container xs={12} style={{ marginTop: '0vh' }}>
              <Grid item xs={0} sm={0} lg={3} />
              <Grid container xs={12} sm={8} lg={8}>
                <Grid item xs={12}>
                  <Typography className={classes.title}>
                    Book your Moving Today
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Know the cost of your Move and Reserve the Date with 25%
                    Deposit
                  </Typography>
                  <Grid container xs={12} className={classes.ML}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={6}
                      style={{ paddingTop: '4vh' }}>
                      {pages1.map(page => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          className={classes.MuiGridGridSm6}>
                          <Button
                            activeClassName={classes.active}
                            className={classes.Button}
                            key={page.title}
                            // component={CustomRouterLink}
                            // to={{pathname:page.href, state:{fromLink:'BookNow'}}}
                            // context.bookNowResidentialHandler(page.href);

                            onClick={() => {
                              {
                                setChecked(!checked);
                                TypeSelection();
                              }
                            }}
                            variant="contained"
                            color="primary">
                            <Grid
                              container
                              xs={12}
                              style={{ justifyContent: 'center' }}>
                              <Grid container xs={12}>
                                <Grid item xs={1}>
                                  <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{
                                      'aria-label': 'primary checkbox'
                                    }}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs={11}
                                  style={{ alignSelf: 'center' }}>
                                  Residential
                                </Grid>
                              </Grid>
                            </Grid>
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={6}
                      className={classes.CommercialBTN}>
                      {pages2.map(page => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          className={classes.MuiGridGridSm6}>
                          <Button
                            activeClassName={classes.active}
                            className={classes.Button}
                            key={page.title}
                            component={CustomRouterLink}
                            onClick={() => {
                              setCheckedCommercial(!checkedCommercial);
                              TypeSelection();
                            }}
                            to={{
                              pathname: page.href,
                              state: { fromLink: 'BookNow' }
                            }}
                            variant="contained"
                            color="primary">
                            <Grid
                              container
                              xs={12}
                              style={{ justifyContent: 'center' }}>
                              <Grid container xs={12}>
                                <Grid item xs={1}>
                                  <Checkbox
                                    checked={checkedCommercial}
                                    onChange={handleChangeCommercial}
                                    inputProps={{
                                      'aria-label': 'primary checkbox'
                                    }}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs={11}
                                  align="center"
                                  style={{ alignSelf: 'center' }}>
                                  Commercial
                                </Grid>
                              </Grid>
                            </Grid>
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid container xs={12} className={classes.PLT}>
                    <Grid item xs={12} sm={6} style={{ paddingTop: '4vh' }}>
                      <Autocomplete
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        InputProps={{
                          className: classes.inputColor
                        }}
                        align="left"
                        id="combo-box-demo"
                        options={Town}
                        defaultValue={context.from}
                        onChange={(e, value) =>
                          context.reserveChangeHandlerFrom(value)
                        }
                        renderInput={params => (
                          <TextField
                            value={from}
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
                            label="From"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.PT}>
                      <Autocomplete
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        InputProps={{
                          className: classes.inputColor
                        }}
                        id="combo-box-demo"
                        options={Town}
                        className={classes.DDTO}
                        defaultValue={context.to}
                        onChange={(e, v) => context.reserveChangeHandlerTo(v)}
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
                            label="To"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Grid container xs={12} className={classes.PLT}>
                    <Grid item xs={12} sm={6} style={{ paddingTop: '4vh' }}>
                      <Autocomplete
                        className={classes.Autocomplete}
                        inputStyle={{ color: 'white' }}
                        align="left"
                        InputProps={{
                          className: classes.inputColor
                        }}
                        id="combo-box-demo"
                        options={SelectDateAndTime}
                        defaultValue={context.date}
                        onChange={(e, v) => context.reserveChangeHandlerDate(v)}
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
                            label="Date and Time"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.PT}>
                      {pages3.map(page => (
                        <Grid item xs={12}>
                          <Button
                            disabled={
                              context.from === '' ||
                              context.to === '' ||
                              context.date === ''
                            }
                            activeClassName={classes.active}
                            className={classes.Button}
                            key={page.title}
                            component={CustomRouterLink}
                            to={{
                              pathname: page.href,
                              state: { fromLink: page.title }
                            }}
                            variant="contained"
                            color="primary">
                            {page.title}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: '6vh' }}>
                    <Typography className={classes.FooterTitle}>
                      Questions? Call us Now! 787-955-8832
                    </Typography>
                    <Widget
                      launcherCloseLabel="Chat with us"
                      title="Welcome"
                      subtitle="Ask us anything"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            {/* <Widget
        launcherCloseLabel="Chat with us"
        title="Welcome"
        subtitle="Ask us anything"
      /> */}
          </Grid>
        );
      }}
    </StepperDataContext>
  );
};
BookNowPage.propTypes = {
  className: PropTypes.string
};

export default BookNowPage;
