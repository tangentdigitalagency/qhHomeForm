import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import '../../../../../src/App.css';
import Button from '@material-ui/core/Button';
import CountUp from 'react-countup';
import 'antd/dist/antd.css';
import Bubbles from './Bubbles';
import ButtonApple from './ButtonApple';
import ButtonGoogle from './ButtonGoogle';
import SubHeading from './SubHeading';

import detectSwipe from './detectSwipe';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  countMobile: {
    zIndex: '32',
    marginTop: '15vh',
    border: '2px solid white',
    borderRadius: '25px',
    fontSize: '22px',
    padding: '4px',
    color: 'white',
    paddingTop: '20px',
    paddingBottom: '20px'
  },

  transparencyBoxMobile: {
    backgroundImage:
      'linear-gradient(to right, rgba(255,255,255,.9), rgba(255,255,255,1))',
    zIndex: '44 !important',
    boxShadow: '5px 4px 5px 5px white',
    borderRadius: '25px'
  },

  CountUp: {
    fontSize: '50px',
    color: 'white',
    paddingTop: '5vh',
    display: 'inline',
    zIndex: '32'
  },
  SendAndReceive: {
    color: 'rgb(37, 48, 86)',
    fontSize: '46px',
    fontWeight: '600'
  },

  SendAndReceiveMobile: {
    color: 'rgb(37, 48, 86)',
    fontSize: '24px',
    fontWeight: '600'
  },
  VideoButton: {
    '&:hover': {
      backgroundColor: 'white'
    },

    color: 'rgb(37,48,86)',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 1.5,
    background: 'white',
    marginLeft: '14px',
    paddingLeft: '2vh'
  },
  VideoButtonMobile: {
    '&:hover': {
      backgroundColor: 'white'
    },

    color: 'rgb(37,48,86)',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: 1.5,
    background: 'white',
    marginLeft: '14px',
    paddingLeft: '2vh'
  },
  AppleMobileTop: {
    zIndex: '4',
    background: 'rgb(31, 42, 75)',
    fontSize: '12px',
    fontWeight: '600',
    height: '55px',
    width: '170px',
    borderRadius: '16px'
  },
  SvgHeader: {
    color: 'rgb(37, 48, 86)',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
    transition: 'all 300ms ease-in-out 0s'
  },
  SvgContent: {
    fontWeight: 400,
    fontSize: '16px',
    color: 'rgb(110, 120, 152)',
    lineHeight: '24px',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    transition: 'all 300ms ease-in-out 0s'
  },
  btnWatchOurVideo: {
    webkitBoxAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '40px',
    webkitBoxPack: 'center',
    justifyContent: 'center',
    width: '175px',
    boxSizing: 'border-box',
    background: 'white',
    borderRadius: '30px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(222, 226, 239)',
    borderImage: 'initial'
  },
  HorizontalRule: {
    webkitBoxAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '30px',
    webkitBoxPack: 'center',
    justifyContent: 'center',
    maxWidth: '1150px',
    position: 'relative',
    marginTop: '70px',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginBottom: '50px',
    width: '50px',
    boxSizing: 'border-box',
    background: 'grey'
  },
  CardHeader: {
    color: 'rgb(37, 48, 86)',
    fontSize: '20px',
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
    transition: 'all 300ms ease-in-out 0s'
  },
  CardContent: {
    color: 'rgb(110, 120, 152)',
    whiteSpace: 'pre-wrap',
    transition: 'all 300ms ease-in-out 0s',
    fontSize: '17px'
  },
  whiteSvgBackground: {
    webkitBoxAlign: 'center',
    alignItems: 'center',
    boxShadow: 'rgba(31, 42, 75, 0.11) 0px 5px 10px',
    display: 'flex',
    height: '64px',
    webkitBoxPack: 'center',
    justifyContent: 'center',
    width: '64px',
    boxSizing: 'border-box',
    borderRadius: '100px'
  },
  MobileButton: {
    width: '8rem',
    height: '3rem',
    color: 'white',
    background: 'black'
  },
  countMobile: {
    border: '2px solid white',
    padding: '12px',
    paddingLeft: '7vh',
    paddingRight: '7vh',
    borderRadius: '25px',
    color: 'white'
  }
}));

const Landingpage = props => {
  const { className, ...rest } = props;

  const [modalState, setModalState] = useState('');

  const paidHandler = () => {
    setModalState(modalState ? '' : 'Active');
    console.log(modalState);
  };

  useEffect(() => {
    detectSwipe('SlidingAnim', paidHandler);
  }, []);

  const classes = useStyles();
  const mouse10 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext10');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout10 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext10');
    el.style.color = white;
  };
  const mouse11 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext11');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout11 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext11');
    el.style.color = white;
  };

  const mouse12 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext12');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout12 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext12');
    el.style.color = white;
  };

  const mouse13 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext13');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout13 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext13');
    el.style.color = white;
  };
  const mouse14 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext14');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };

  const mouseout14 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext14');
    el.style.color = white;
  };

  return (
    <Grid
      container
      xs={12}
      align="center"
      class="MainContainer"
      style={{ background: 'white' }}>
      <SubHeading />
      <Grid
        style={{ justifyContent: 'center' }}
        container
        id="Mobile"
        align="center"
        xs={12}>
        <Grid
          item
          xs={12}
          align="center"
          className={classes.transparencyBoxMobile}>
          <Grid item xs={12} align="center" lg={12}>
            <Typography
              id="transition"
              class="SendMoneyTo"
              style={{ margin: '0' }}>
              Send money to
            </Typography>
          </Grid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={12} style={{ zIndex: '4' }}>
              <Typography
                id="transition"
                class="anyone"
                style={{ margin: '0', lineHeight: '60px !important' }}>
                anyone.
              </Typography>

              <Typography
                id="transition"
                class="EarnInterest"
                style={{ margin: '0' }}>
                {' '}
                Earn
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ marginTop: '-1.4vh' }}>
            <Grid item xs={12} style={{ zIndex: '4' }}>
              <Typography
                id="transition"
                class="From"
                style={{ margin: '0', lineHeight: '60px' }}>
                {' interest from '}
              </Typography>
              <Typography
                id="transition"
                class="anywhere"
                style={{ margin: '0' }}>
                anywhere.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        id="aadesktop"
        style={{ marginTop: '2vh', justifyContent: 'center' }}>
        <Grid
          item
          xs={8}
          className={classes.transparencyBox}
          style={{
            zIndex: 2,
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: 'rgba(255, 255, 255, 0.9) 0px 0px 18px 20px'
          }}>
          <div class="cssanimation sequence fadeInBottom" id="topbarAnim">
            <Typography
              id="transition"
              class="DharmaIsLimitless"
              style={{ color: 'rgb(110, 120, 152)' }}>
              Dharma is a limitless,borderless way to send and receive USD - all
              while
            </Typography>
            <Typography
              id="transition"
              class="APR"
              style={{ fontWeight: '600' }}>
              {' earning 0.7% APR'}
            </Typography>
            <Typography class="bankAccount" id="transition">
              <br />
              You don’t need a bank account to use it, and it’s 100% free to
              use.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        id="ButtonMobile"
        xs={12}
        style={{ marginTop: '10vh', zIndex: 500 }}>
        <Grid
          item
          id="AppleDesktop"
          direction="column"
          xs={6}
          justify="right"
          align="right"
          style={{ zIndex: 500 }}>
          <div
            class="cssanimation sequence fadeInBottom"
            id="topbarAnim"
            style={{ zIndex: 500 }}>
            <Grid item xs={12} style={{ zIndex: 500 }}>
              <ButtonApple />
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          id="AppleMobile"
          direction="column"
          xs={6}
          justify="right"
          align="right"
          style={{ paddingRight: '2vh', paddingTop: '1vh' }}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className={classes.AppleMobileTop}
              style={{ marginLeft: '-1vh' }}>
              <AppleIcon style={{ fontSize: '40px', color: 'white' }} />
              <Typography
                style={{
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  lineHeight: '20px'
                }}>
                Download on the
                <br />
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    textTransform: 'none'
                  }}>
                  App Store
                </span>
              </Typography>
              <br />
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          id="GoogleDesktop"
          direction="column"
          xs={6}
          justify="left"
          align="left"
          style={{ zIndex: 500 }}>
          <div
            class="cssanimation sequence fadeInBottom"
            id="topbarAnim"
            style={{ zIndex: 500 }}>
            <Grid item xs={12} style={{ paddingLeft: '4vh', zIndex: 500 }}>
              <ButtonGoogle />
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          className="UpperMobileGoogleButton"
          id="GoogleMobile"
          direction="column"
          xs={6}
          justify="left"
          align="left"
          style={{ paddingLeft: '2vh', paddingTop: '1vh' }}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              style={{
                background: 'white',
                width: '170px',
                zIndex: '4',
                marginLeft: '1vh',
                height: '55px',
                fontWeight: '600',
                borderRadius: '16px'
              }}>
              <svg
                style={{ width: '30px' }}
                width="2.3px,4px"
                height="3.5px,4px"
                viewBox="0 0 32 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bZQynM dQJoOP">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.93205 0.847113C0.542115 1.2669 0.316895 1.90833 0.316895 2.7479V32.5258C0.316895 33.3653 0.542115 34.0068 0.945496 34.4098L1.0497 34.5004L17.7497 17.8165V17.4437L1.03626 0.756439L0.93205 0.847113Z"
                  fill="#6E7898"></path>
                <path
                  opacity="0.8"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3063 23.3946L17.7363 17.8299V17.4404L23.3063 11.8757L23.4274 11.9496L30.0159 15.6907C31.9017 16.7519 31.9017 18.5049 30.0159 19.5796L23.4274 23.3207L23.3063 23.3946Z"
                  fill="#6E7898"></path>
                <path
                  opacity="0.9"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4268 23.3207L17.7358 17.6352L0.931641 34.4232C1.5468 35.0814 2.57878 35.1553 3.73177 34.5139L23.4268 23.3207Z"
                  fill="#6E7898"></path>
                <path
                  opacity="0.7"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4268 11.9496L3.73177 0.773236C2.57878 0.115013 1.54343 0.205687 0.931641 0.86391L17.7358 17.6352L23.4268 11.9496Z"
                  fill="#6E7898"></path>
                <path
                  opacity="0.2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3061 23.1998L3.74545 34.3023C2.65296 34.9303 1.67812 34.8866 1.04952 34.3157L0.945312 34.4198L1.04952 34.5105C1.67812 35.0781 2.65296 35.1251 3.74545 34.4971L23.4405 23.3207L23.3061 23.1998Z"
                  fill="white"
                  fill-opacity="0.2"></path>
              </svg>
              <Typography
                style={{
                  fontSize: '15px',
                  paddingLeft: '0.5vh',
                  color: 'grey',
                  textAlign: 'left',
                  textTransform: 'none'
                }}>
                <b>
                  Get it on
                  <br />
                  Google Play
                </b>
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          id="CarouselDesktop"
          direction="column"
          sm={6}
          md={6}
          lg={6}
          justify="right"
          align="right"
          style={{ paddingRight: '4vh', zIndex: '20' }}>
          <Grid
            item
            xs={12}
            style={{ paddingTop: '15vh', position: 'relative' }}>
            <img
              src={require('../../../../assets/carouselphone.png')}
              style={{ zIndex: '4', width: '480px', height: '550px' }}></img>
            {/* <Grid
              container
              direction="row"
              align="center"
              xs={12}
              style={{ marginTop: '-28rem' }}>
              <Grid item xs={3} />
              <Grid
                item
                xs={4}
                style={{ paddingTop: '15rem' }}>
                <Button className={classes.MobileButton} style={{ marginRight: "auto" }}>aaaa</Button>
              </Grid>
              <Grid
                item
                xs={4}
                style={{ paddingTop: '15rem' }}>
                <Button className={classes.MobileButton} style={{ marginLeft: "auto" }}>aaaa</Button>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid
          item
          id="CountDesktop"
          direction="column"
          sm={6}
          md={6}
          lg={6}
          justify="left"
          align="left"
          style={{ paddingLeft: '4vh', zIndex: '20', position: 'relative' }}>
          <Grid item xs={12} style={{ paddingTop: '15vh' }}>
            <img
              src={require('../../../../assets/2.png')}
              style={{
                zIndex: '4',
                marginTop: '.5vh',
                width: '480px',
                height: '550px'
              }}></img>
          </Grid>
          <Grid
            container
            xs={9}
            align="left"
            style={{
              // marginTop: '-30vh',
              // marginBottom: '30vh',
              position: 'absolute',
              top: '67%'
            }}>
            <Grid
              container
              xs={9}
              align="left"
              style={{
                zIndex: '20',
                marginTop: '-100px',
                alignContent: 'flex-start',
                paddingLeft: '92px'
              }}
              direction="column"
              alignItems="center"
              justify="center">
              <Typography className={classes.countMobile}>
                <b>Earning 0.7% APR</b>
              </Typography>
              <CountUp
                className={classes.CountUp}
                start={500.01}
                decimals={6}
                end={500.999999}
                duration={1000000}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Bubbles />
      </div>
      <div className="AnimationHider">
        <Grid container xs={12} align="center">
          <Grid
            id="CarouselMobile"
            container
            direction="column"
            sm={12}
            md={12}
            lg={12}
            justify="center"
            style={{ zIndex: 500 }}
            align="center">
            <Grid
              item
              align="center"
              xs={12}
              align="center"
              style={{ zIndex: 500, position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '69%',
                  left: '50%',
                  transform: 'translate(-50%, -69%)'
                }}>
                <div className="MobileButtonContainer">
                  <button
                    className="MobileButton"
                    style={{ width: '6rem', height: '2.5rem' }}>
                    Klarna
                  </button>
                  <button
                    className="MobileButton"
                    style={{ width: '6rem', height: '2.5rem' }}>
                    <AppleIcon />
                    Pay
                  </button>
                </div>
                <button
                  onClick={paidHandler}
                  className="MobileButton Lg"
                  style={{ width: '13rem', height: '2.5rem', border: 'none' }}>
                  <div id="SlidingAnim"></div>
                  Swipe to <span className="Italic"> Pay </span> with{' '}
                  <span className="Italic"> Paykart</span>
                </button>
              </div>
              <img
                src={require('../../../../assets/carouselphone.png')}
                style={{ zIndex: '20', width: '310px', height: '350px' }}
                className="ImageCarousel"></img>
              <Grid
                item
                id="ContentUnderMobile"
                direction="column"
                xs={12}
                align="center"
                style={{ paddingTop: '4vh' }}>
                <Typography
                  className={classes.SendAndReceiveMobile}
                  style={{
                    backgroundColor: '#fff',
                    display: 'inline',
                    boxShadow: '0 0 10px 10px #fff'
                  }}>
                  Send & Receive
                </Typography>
              </Grid>
              <Grid
                id="CountMobile"
                item
                xs={12}
                direction="column"
                align="center"
                style={{ paddingTop: '3vh' }}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: '#fff',
                    boxShadow: '0 0 10px 10px #fff'
                  }}>
                  Every dollar in your Dharma account is earning 0.7% APR — and
                  you can withdraw it anytime; 24/7/365.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              id="CountMobile"
              align="center"
              item
              xs={12}
              style={{ paddingTop: '5vh' }}>
              <img
                src={require('../../../../assets/countmobile.png')}
                style={{ zIndex: '20', width: '310px', height: '350px' }}></img>
            </Grid>
            <Grid
              id="CountMobile"
              item
              xs={12}
              sm={12}
              lg={12}
              direction="column"
              align="center">
              <Typography
                className={classes.SendAndReceiveMobile}
                style={{ paddingTop: '5vh' }}>
                Earn & Save
              </Typography>
            </Grid>
            <Grid
              id="CountMobile"
              item
              xs={12}
              direction="column"
              align="center"
              style={{ paddingTop: '3vh' }}>
              <Typography
                style={{
                  color: 'rgb(110, 120, 152)',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                Every dollar in your Dharma account is earning 0.7% APR — and
                you can withdraw it anytime; 24/7/365.
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid container xs={12}>
          <Grid item xs={12} align='center'>
            <Typography className={classes.SendAndReceive}>Earn & Save</Typography>              
          </Grid>
          </Grid>
          <Grid item xs={12} style={{paddingTop:'8vh',paddingRight:'18vh'}} align='center'>
          <Typography style={{lineHeight:'32px',color:'rgb(110, 120, 152)',fontSize:'20px'}}>
            Every dollar in your Dharma account is earning 0.7% APR —<br/> and you can withdraw it anytime; 24/7/365.
          </Typography> 
          </Grid> */}
        </Grid>
      </div>
      <Grid container xs={12} style={{ marginTop: '5vh', zIndex: '10' }}></Grid>
      <Grid
        container
        align="right"
        xs={12}
        id="desktop"
        style={{ paddingTop: '5vh' }}>
        <Grid item direction="column" xs={6} align="right">
          <Grid item xs={12} style={{ paddingRight: '12vh' }}>
            <Typography id="transitionLater" className={classes.SendAndReceive}>
              Send & Receive
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '15vh', marginTop: '5vh' }}>
            <Typography
              style={{
                lineHeight: '32px',
                color: 'rgb(110, 120, 152)',
                textAlign: 'center',
                fontSize: '20px'
              }}>
              Send USD to your friends and family anywhere in the world — even
              if they don’t have a bank account.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={6}>
          <Grid item xs={12} align="left" style={{ paddingLeft: '16vh' }}>
            <Typography className={classes.SendAndReceive}>
              Earn & Save
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            align="center"
            style={{ paddingRight: '20vh', paddingTop: '5vh' }}>
            <Typography
              style={{
                lineHeight: '32px',
                color: 'rgb(110, 120, 152)',
                fontSize: '20px'
              }}>
              Every dollar in your Dharma account is earning
              <br /> 0.7% APR — and you can withdraw it anytime; 24/7/365.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid
          item
          lg={12}
          style={{
            paddingTop: '5vh',
            paddingBottom: '10vh'
          }}>
          <div
            id="desktop"
            className={classes.HorizontalRule}
            style={{
              position: 'absolute',
              marginTop: '12.5vh',
              height: '.1vh',
              marginLeft: '28vh',
              width: '72%',
              opacity: '0.3 !important'
            }}
          />
          <div
            id="Mobile"
            className={classes.HorizontalRule}
            style={{
              position: 'absolute',
              marginTop: '12.5vh',
              height: '.1vh',
              marginLeft: '2vh',
              width: '82%',
              opacity: 0.3
            }}
          />
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={12} id="Desktop">
            <Button variant="contained" className={classes.btnWatchOurVideo}>
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bZQynM iJaZLJ">
                <path
                  d="M1 2.76619V11.2338C1 12.0111 1.84797 12.4912 2.5145 12.0913L9.57084 7.85749C10.2182 7.46909 10.2182 6.53091 9.57084 6.14251L2.5145 1.9087C1.84797 1.50878 1 1.9889 1 2.76619Z"
                  stroke="url(#paint0_linear)"
                  stroke-width="2"></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="11"
                    y1="1"
                    x2="7.04888"
                    y2="14.5814"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                    <stop offset="0.223691" stop-color="#FF5F61"></stop>
                    <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                    <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                    <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                    <stop offset="0.864847" stop-color="#8C23F9"></stop>
                    <stop offset="0.96226" stop-color="#4635FF"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontSize: '12px', paddingLeft: '10px' }}>
                Watch our video
              </span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* Cards Mobile view */}
      <Grid
        container
        align="center"
        justify="space-evenly"
        xs={10}
        id="desktop"
        style={{ paddingTop: '15vh' }}>
        <Grid item direction="column" xs={3} align="center">
          <div className={classes.whiteSvgBackground}>
            <svg
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM fWtrRV">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 0C1.34315 0 0 1.34314 0 3V21C0 22.6569 1.34315 24 3 24H29C30.6569 24 32 22.6569 32 21V3C32 1.34315 30.6569 0 29 0H3ZM2 3C2 2.44772 2.44771 2 3 2H29C29.5523 2 30 2.44772 30 3V5H2V3ZM2 11V21C2 21.5523 2.44772 22 3 22H29C29.5523 22 30 21.5523 30 21V11H2Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="32"
                  y1="3.41651e-07"
                  x2="26.8145"
                  y2="28.5189"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.whiteSvgBackground}>
            <svg
              width="32"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM lJVJ">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7ZM16.8281 18.2423C15.5419 20.1837 15.754 22.8251 17.4645 24.5355C19.1749 26.246 21.8163 26.4581 23.7577 25.1719L16.8281 18.2423ZM18.2423 16.8281L25.1719 23.7577C26.4581 21.8163 26.246 19.1749 24.5355 17.4645C22.8251 15.754 20.1837 15.5419 18.2423 16.8281ZM16.0503 25.9497C13.3166 23.2161 13.3166 18.7839 16.0503 16.0503C18.7839 13.3166 23.2161 13.3166 25.9497 16.0503C28.6834 18.7839 28.6834 23.2161 25.9497 25.9497C23.2161 28.6834 18.7839 28.6834 16.0503 25.9497ZM24.7071 4.70711C25.0976 4.31658 25.0976 3.68342 24.7071 3.29289C24.3166 2.90237 23.6834 2.90237 23.2929 3.29289L3.29289 23.2929C2.90237 23.6834 2.90237 24.3166 3.29289 24.7071C3.68342 25.0976 4.31658 25.0976 4.70711 24.7071L24.7071 4.70711Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="28"
                  y1="3.98593e-07"
                  x2="20.1296"
                  y2="32.4639"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.whiteSvgBackground}>
            <svg
              width="32"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM dRSHTE">
              <path
                d="M6 5H26M6 5V10M6 5H4H26M26 5V10M26 5H28M6 10V31H26V10M6 10H1V1H31V10H26M10 21V24C10 25.6569 11.3431 27 13 27H19C20.6569 27 22 25.6569 22 24V21M23 14.5C23 17.5376 19.866 20 16 20C12.134 20 9 17.5376 9 14.5C9 11.4624 12.134 9 16 9C19.866 9 23 11.4624 23 14.5Z"
                stroke="url(#paint0_linear)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="31"
                  y1="1"
                  x2="22.5674"
                  y2="35.7828"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        align="center"
        justify="space-evenly"
        xs={10}
        id="desktop"
        style={{ paddingTop: '5vh' }}>
        <Grid item direction="column" xs={3} align="center">
          <Typography className={classes.CardHeader}>
            Easy as 1,2,3...
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.CardHeader}>
            Zero Fees, Zero Surprises
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.CardHeader}>
            Withdraw Anytime - 24/7/365
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        align="center"
        justify="space-evenly"
        xs={10}
        id="desktop"
        style={{ paddingTop: '4vh' }}>
        <Grid item direction="column" xs={3} align="center">
          <Typography className={classes.CardContent}>
            Connect your debit card, tap a button, and your money is uploaded to
            the internet.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.CardContent}>
            No deposit fees, no withdrawal fees, no transfer fees - Dharma is
            100% free.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.CardContent}>
            Withdraw money directly to over 11,500 U.S. banks and credit unions
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        align="center"
        justify="space-evenly"
        xs={10}
        id="desktop"
        style={{ paddingTop: '15vh' }}>
        <Grid item direction="column" xs={3} align="center">
          <div className={classes.whiteSvgBackground}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM gOAebT">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 2.12292C14.3758 2.52255 12.7922 3.8928 11.5076 6.17655C11.1912 6.73903 10.8984 7.34876 10.633 8H16V2.12292ZM9.76446 5.19603C9.28388 6.05041 8.85673 6.99025 8.49049 8H4.9989C6.5703 5.90795 8.67597 4.24015 11.1134 3.19916C10.6211 3.80376 10.17 4.47504 9.76446 5.19603ZM7.86948 10H3.73009C2.77228 11.812 2.17473 13.8438 2.0328 16H7.01672C7.08788 13.8778 7.38426 11.8525 7.86948 10ZM16 10H9.94346C9.4235 11.807 9.09564 13.8365 9.01791 16H16V10ZM18 16V10H24.0565C24.5765 11.807 24.9044 13.8365 24.9821 16H18ZM26.9833 16C26.9121 13.8778 26.6157 11.8525 26.1305 10H30.2699C31.2277 11.812 31.8253 13.8438 31.9672 16H26.9833ZM25.5095 8H29.0011C27.4297 5.90795 25.324 4.24015 22.8866 3.19916C23.3789 3.80376 23.83 4.47505 24.2355 5.19603C24.7161 6.05041 25.1433 6.99025 25.5095 8ZM18 8H23.367C23.1016 7.34876 22.8088 6.73903 22.4924 6.17655C21.2078 3.8928 19.6242 2.52255 18 2.12292V8ZM17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0ZM16 18H9.01791C9.09564 20.1635 9.4235 22.193 9.94346 24H16V18ZM16 26H10.633C10.8984 26.6512 11.1912 27.261 11.5076 27.8234C12.7922 30.1072 14.3758 31.4774 16 31.8771V26ZM7.86948 24C7.38426 22.1475 7.08788 20.1222 7.01672 18H2.0328C2.17473 20.1562 2.77228 22.188 3.73009 24H7.86948ZM4.9989 26H8.49049C8.85673 27.0098 9.28388 27.9496 9.76446 28.804C10.17 29.525 10.6211 30.1962 11.1134 30.8008C8.67598 29.7599 6.5703 28.092 4.9989 26ZM18 26H23.367C23.1016 26.6512 22.8088 27.261 22.4924 27.8234C21.2078 30.1072 19.6242 31.4775 18 31.8771V26ZM24.0565 24H18V18H24.9821C24.9044 20.1635 24.5765 22.193 24.0565 24ZM25.5095 26C25.1433 27.0098 24.7161 27.9496 24.2355 28.804C23.83 29.525 23.3789 30.1962 22.8866 30.8008C25.324 29.7599 27.4297 28.092 29.0011 26H25.5095ZM30.2699 24H26.1305C26.6157 22.1475 26.9121 20.1222 26.9833 18H31.9672C31.8253 20.1562 31.2277 22.188 30.2699 24Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="34"
                  y1="4.84006e-07"
                  x2="24.4431"
                  y2="39.4205"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.whiteSvgBackground}>
            <svg
              width="24"
              height="31"
              viewBox="0 0 24 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM gVeumD">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V12H7V7ZM19 7V12H21C22.6569 12 24 13.3431 24 15V28C24 29.6569 22.6569 31 21 31H3C1.34314 31 0 29.6569 0 28V15C0 13.3431 1.34315 12 3 12H5V7C5 3.13401 8.13401 0 12 0C15.866 0 19 3.13401 19 7ZM2 15C2 14.4477 2.44772 14 3 14H6H18H21C21.5523 14 22 14.4477 22 15V28C22 28.5523 21.5523 29 21 29H3C2.44772 29 2 28.5523 2 28V15ZM11 21.7324C10.4022 21.3866 10 20.7403 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20C14 20.7403 13.5978 21.3866 13 21.7324V25C13 25.5523 12.5523 26 12 26C11.4477 26 11 25.5523 11 25V21.7324Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="24"
                  y1="4.413e-07"
                  x2="13.1475"
                  y2="34.6563"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.whiteSvgBackground}>
            <svg
              width="36"
              height="22"
              viewBox="0 0 36 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM jfVfrS">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.1038 20 15.039 19.2781 16.5715 18.0686C16.3154 17.7636 16.0756 17.4444 15.8534 17.1125C15.8514 17.1096 15.8495 17.1067 15.8476 17.1037C14.7283 15.4284 14.0561 13.4277 14.0034 11.2743C14.0011 11.1831 14 11.0917 14 11C14 10.8448 14.0032 10.6904 14.0096 10.5367C14.0959 8.45522 14.7611 6.52246 15.8476 4.89623C15.8495 4.89332 15.8514 4.89042 15.8534 4.88752C16.0756 4.55558 16.3154 4.23643 16.5715 3.93139C15.039 2.72185 13.1038 2 11 2ZM17.51 6.00805C16.6335 7.32028 16.0932 8.87514 16.011 10.5511C16.0037 10.6997 16 10.8494 16 11C16 11.1879 16.0057 11.3744 16.0171 11.5593C16.1171 13.1931 16.6527 14.7086 17.51 15.9919C17.5118 15.9946 17.5135 15.9972 17.5153 15.9998C17.6671 16.2265 17.8288 16.4459 18 16.6574C19.2508 15.1116 20 13.1433 20 11C20 8.85669 19.2508 6.88837 18 5.34264C17.8288 5.55413 17.6671 5.77351 17.5153 6.00016C17.5135 6.0028 17.5118 6.00543 17.51 6.00805ZM11 22C13.6593 22 16.0981 21.0564 18 19.4857C18.2842 19.7203 18.5804 19.941 18.8875 20.1466C19.3465 20.4539 19.9676 20.3309 20.2748 19.872C20.5821 19.413 20.4591 18.7919 20.0002 18.4847C19.804 18.3534 19.6133 18.2146 19.4285 18.0687C21.0334 16.157 22 13.6914 22 11C22 8.30863 21.0334 5.84302 19.4285 3.93134C19.6133 3.78543 19.804 3.64662 20.0002 3.51531C20.4591 3.20807 20.5821 2.58696 20.2748 2.12803C19.9676 1.6691 19.3465 1.54613 18.8875 1.85338C18.5804 2.059 18.2842 2.27967 18 2.51434C16.0981 0.943643 13.6593 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM22.8543 0.209353C23.5491 0.0719053 24.2666 0 25 0C25.7334 0 26.4509 0.0719053 27.1457 0.209352C27.6875 0.316534 28.0398 0.842625 27.9326 1.38441C27.8254 1.92619 27.2993 2.27851 26.7576 2.17133C26.1899 2.05903 25.6023 2 25 2C24.3977 2 23.8101 2.05903 23.2424 2.17133C22.7007 2.27851 22.1746 1.92619 22.0674 1.38441C21.9602 0.842625 22.3125 0.316534 22.8543 0.209353ZM29.7252 2.12803C30.0324 1.66909 30.6535 1.54613 31.1125 1.85338C32.3116 2.65618 33.3438 3.68839 34.1466 4.88752C34.4539 5.34645 34.3309 5.96756 33.872 6.27481C33.413 6.58206 32.7919 6.45909 32.4847 6.00016C31.8273 5.01827 30.9817 4.17268 29.9998 3.51531C29.5409 3.20807 29.4179 2.58696 29.7252 2.12803ZM34.6156 8.06739C35.1574 7.96021 35.6835 8.31253 35.7906 8.85431C35.9281 9.54909 36 10.2666 36 11C36 11.7334 35.9281 12.4509 35.7906 13.1457C35.6835 13.6875 35.1574 14.0398 34.6156 13.9326C34.0738 13.8254 33.7215 13.2993 33.8287 12.7576C33.941 12.1899 34 11.6023 34 11C34 10.3977 33.941 9.81008 33.8287 9.24245C33.7215 8.70066 34.0738 8.17457 34.6156 8.06739ZM33.872 15.7252C34.3309 16.0324 34.4539 16.6535 34.1466 17.1125C33.3438 18.3116 32.3116 19.3438 31.1125 20.1466C30.6535 20.4539 30.0324 20.3309 29.7252 19.872C29.4179 19.413 29.5409 18.7919 29.9998 18.4847C30.9817 17.8273 31.8273 16.9817 32.4847 15.9998C32.7919 15.5409 33.413 15.4179 33.872 15.7252ZM22.0674 20.6156C22.1746 20.0738 22.7007 19.7215 23.2424 19.8287C23.8101 19.941 24.3977 20 25 20C25.6023 20 26.1899 19.941 26.7576 19.8287C27.2993 19.7215 27.8254 20.0738 27.9326 20.6156C28.0398 21.1574 27.6875 21.6835 27.1457 21.7906C26.4509 21.9281 25.7334 22 25 22C24.2666 22 23.5491 21.9281 22.8543 21.7906C22.3125 21.6835 21.9602 21.1574 22.0674 20.6156Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="36"
                  y1="3.1318e-07"
                  x2="32.0848"
                  y2="26.4265"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        align="center"
        justify="space-evenly"
        xs={10}
        id="desktop"
        style={{ paddingTop: '5vh' }}>
        <Grid item direction="column" xs={3} align="center">
          <Typography className={classes.CardHeader}>
            Borderless, Global Accessibility
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.CardHeader}>
            Hyper-Secure, Non-Custodial
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.CardHeader}>
            Radical Transparency
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        align="center"
        justify="space-evenly"
        xs={10}
        id="desktop"
        style={{ paddingTop: '4vh' }}>
        <Grid item direction="column" xs={3} align="center">
          <Typography className={classes.CardContent}>
            No U.S. bank account? No problem - deposit and withdraw using
            cryptocurrencies from anywhere in the world.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.CardContent}>
            Your money is stored in a hyper-secure, non-custodial cryptocurrency
            wallet. Learn more
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.CardContent}>
            Your money is managed on the Ethereum blockchain through 100%
            open-source, independently audited code
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        align="center"
        justify="space-evenly"
        xs={10}
        id="Mobile"
        style={{ paddingTop: '8vh' }}>
        <Grid item direction="column" xs={12} align="center">
          <Grid item xs={12}>
            <svg
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM fWtrRV">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 0C1.34315 0 0 1.34314 0 3V21C0 22.6569 1.34315 24 3 24H29C30.6569 24 32 22.6569 32 21V3C32 1.34315 30.6569 0 29 0H3ZM2 3C2 2.44772 2.44771 2 3 2H29C29.5523 2 30 2.44772 30 3V5H2V3ZM2 11V21C2 21.5523 2.44772 22 3 22H29C29.5523 22 30 21.5523 30 21V11H2Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="32"
                  y1="3.41651e-07"
                  x2="26.8145"
                  y2="28.5189"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>

          <Grid item xs={12} style={{ paddingTop: '3vh', display: 'block' }}>
            <Typography id="transitionLater" className={classes.SvgHeader}>
              Easy as 1,2,3...
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: '2vh' }}>
            <Typography className={classes.SvgContent}>
              Connect your debit card, tap a button, and your money is uploaded
              to the internet
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ paddingTop: '5vh' }}>
          <Grid item xs={12}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM lJVJ">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7ZM16.8281 18.2423C15.5419 20.1837 15.754 22.8251 17.4645 24.5355C19.1749 26.246 21.8163 26.4581 23.7577 25.1719L16.8281 18.2423ZM18.2423 16.8281L25.1719 23.7577C26.4581 21.8163 26.246 19.1749 24.5355 17.4645C22.8251 15.754 20.1837 15.5419 18.2423 16.8281ZM16.0503 25.9497C13.3166 23.2161 13.3166 18.7839 16.0503 16.0503C18.7839 13.3166 23.2161 13.3166 25.9497 16.0503C28.6834 18.7839 28.6834 23.2161 25.9497 25.9497C23.2161 28.6834 18.7839 28.6834 16.0503 25.9497ZM24.7071 4.70711C25.0976 4.31658 25.0976 3.68342 24.7071 3.29289C24.3166 2.90237 23.6834 2.90237 23.2929 3.29289L3.29289 23.2929C2.90237 23.6834 2.90237 24.3166 3.29289 24.7071C3.68342 25.0976 4.31658 25.0976 4.70711 24.7071L24.7071 4.70711Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="28"
                  y1="3.98593e-07"
                  x2="20.1296"
                  y2="32.4639"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography
              className={classes.SvgHeader}
              style={{ paddingTop: '3vh' }}>
              Zero Fees, Zero Surprises
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{ paddingTop: '4vh' }}>
            <Typography className={classes.SvgContent}>
              No deposit fees, no withdrawal fees, no transfer fees - Dharma is
              100% free.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ paddingTop: '5vh' }}>
          <Grid item xs={12}>
            <svg
              width="32"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM dRSHTE">
              <path
                d="M6 5H26M6 5V10M6 5H4H26M26 5V10M26 5H28M6 10V31H26V10M6 10H1V1H31V10H26M10 21V24C10 25.6569 11.3431 27 13 27H19C20.6569 27 22 25.6569 22 24V21M23 14.5C23 17.5376 19.866 20 16 20C12.134 20 9 17.5376 9 14.5C9 11.4624 12.134 9 16 9C19.866 9 23 11.4624 23 14.5Z"
                stroke="url(#paint0_linear)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="31"
                  y1="1"
                  x2="22.5674"
                  y2="35.7828"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs={12} align="center" style={{ paddingTop: '3vh' }}>
            <Typography className={classes.SvgHeader}>
              Withdraw Anytime - 24/7/365
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{ paddingTop: '4vh' }}>
            <Typography className={classes.SvgContent}>
              Withdraw money directly to over 1,500 U.S. bank and credit unions.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        align="center"
        justify="space-evenly"
        xs={10}
        id="Mobile"
        style={{ paddingTop: '5vh' }}>
        <Grid item direction="column" xs={12} align="center">
          <Grid item xs={12}>
            <svg
              width="34"
              height="39"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM gOAebT">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 2.12292C14.3758 2.52255 12.7922 3.8928 11.5076 6.17655C11.1912 6.73903 10.8984 7.34876 10.633 8H16V2.12292ZM9.76446 5.19603C9.28388 6.05041 8.85673 6.99025 8.49049 8H4.9989C6.5703 5.90795 8.67597 4.24015 11.1134 3.19916C10.6211 3.80376 10.17 4.47504 9.76446 5.19603ZM7.86948 10H3.73009C2.77228 11.812 2.17473 13.8438 2.0328 16H7.01672C7.08788 13.8778 7.38426 11.8525 7.86948 10ZM16 10H9.94346C9.4235 11.807 9.09564 13.8365 9.01791 16H16V10ZM18 16V10H24.0565C24.5765 11.807 24.9044 13.8365 24.9821 16H18ZM26.9833 16C26.9121 13.8778 26.6157 11.8525 26.1305 10H30.2699C31.2277 11.812 31.8253 13.8438 31.9672 16H26.9833ZM25.5095 8H29.0011C27.4297 5.90795 25.324 4.24015 22.8866 3.19916C23.3789 3.80376 23.83 4.47505 24.2355 5.19603C24.7161 6.05041 25.1433 6.99025 25.5095 8ZM18 8H23.367C23.1016 7.34876 22.8088 6.73903 22.4924 6.17655C21.2078 3.8928 19.6242 2.52255 18 2.12292V8ZM17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0ZM16 18H9.01791C9.09564 20.1635 9.4235 22.193 9.94346 24H16V18ZM16 26H10.633C10.8984 26.6512 11.1912 27.261 11.5076 27.8234C12.7922 30.1072 14.3758 31.4774 16 31.8771V26ZM7.86948 24C7.38426 22.1475 7.08788 20.1222 7.01672 18H2.0328C2.17473 20.1562 2.77228 22.188 3.73009 24H7.86948ZM4.9989 26H8.49049C8.85673 27.0098 9.28388 27.9496 9.76446 28.804C10.17 29.525 10.6211 30.1962 11.1134 30.8008C8.67598 29.7599 6.5703 28.092 4.9989 26ZM18 26H23.367C23.1016 26.6512 22.8088 27.261 22.4924 27.8234C21.2078 30.1072 19.6242 31.4775 18 31.8771V26ZM24.0565 24H18V18H24.9821C24.9044 20.1635 24.5765 22.193 24.0565 24ZM25.5095 26C25.1433 27.0098 24.7161 27.9496 24.2355 28.804C23.83 29.525 23.3789 30.1962 22.8866 30.8008C25.324 29.7599 27.4297 28.092 29.0011 26H25.5095ZM30.2699 24H26.1305C26.6157 22.1475 26.9121 20.1222 26.9833 18H31.9672C31.8253 20.1562 31.2277 22.188 30.2699 24Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="34"
                  y1="4.84006e-07"
                  x2="24.4431"
                  y2="39.4205"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: '3vh' }}>
            <Typography
              id="transitionLater"
              className={classes.SvgHeader}
              style={{ paddingBottom: '1vh' }}>
              Borderless, Global Accessibility
            </Typography>
          </Grid>
          <Grid item xs={12} style={{}}>
            <Typography className={classes.SvgContent}>
              No U.S. bank account? No problem - deposit and with draw using
              cryptocurrencies from anywhere in the world
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ paddingTop: '5vh' }}>
          <Grid item xs={12}>
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM gVeumD">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V12H7V7ZM19 7V12H21C22.6569 12 24 13.3431 24 15V28C24 29.6569 22.6569 31 21 31H3C1.34314 31 0 29.6569 0 28V15C0 13.3431 1.34315 12 3 12H5V7C5 3.13401 8.13401 0 12 0C15.866 0 19 3.13401 19 7ZM2 15C2 14.4477 2.44772 14 3 14H6H18H21C21.5523 14 22 14.4477 22 15V28C22 28.5523 21.5523 29 21 29H3C2.44772 29 2 28.5523 2 28V15ZM11 21.7324C10.4022 21.3866 10 20.7403 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20C14 20.7403 13.5978 21.3866 13 21.7324V25C13 25.5523 12.5523 26 12 26C11.4477 26 11 25.5523 11 25V21.7324Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="24"
                  y1="4.413e-07"
                  x2="13.1475"
                  y2="34.6563"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs={12} align="center" style={{ paddingTop: '3vh' }}>
            <Typography className={classes.SvgHeader}>
              Hyper-Secure, Non-Custodial
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{ paddingBottom: '2vh' }}>
            <Typography className={classes.SvgContent}>
              Your money is stored in a hyper-secure, non-custodial
              cryptocurrency wallet. Learn more.
            </Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} style={{ paddingTop: '5vh' }}>
          <Grid item xs={12}>
            <svg
              width="36"
              height="22"
              viewBox="0 0 36 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bZQynM jfVfrS">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.1038 20 15.039 19.2781 16.5715 18.0686C16.3154 17.7636 16.0756 17.4444 15.8534 17.1125C15.8514 17.1096 15.8495 17.1067 15.8476 17.1037C14.7283 15.4284 14.0561 13.4277 14.0034 11.2743C14.0011 11.1831 14 11.0917 14 11C14 10.8448 14.0032 10.6904 14.0096 10.5367C14.0959 8.45522 14.7611 6.52246 15.8476 4.89623C15.8495 4.89332 15.8514 4.89042 15.8534 4.88752C16.0756 4.55558 16.3154 4.23643 16.5715 3.93139C15.039 2.72185 13.1038 2 11 2ZM17.51 6.00805C16.6335 7.32028 16.0932 8.87514 16.011 10.5511C16.0037 10.6997 16 10.8494 16 11C16 11.1879 16.0057 11.3744 16.0171 11.5593C16.1171 13.1931 16.6527 14.7086 17.51 15.9919C17.5118 15.9946 17.5135 15.9972 17.5153 15.9998C17.6671 16.2265 17.8288 16.4459 18 16.6574C19.2508 15.1116 20 13.1433 20 11C20 8.85669 19.2508 6.88837 18 5.34264C17.8288 5.55413 17.6671 5.77351 17.5153 6.00016C17.5135 6.0028 17.5118 6.00543 17.51 6.00805ZM11 22C13.6593 22 16.0981 21.0564 18 19.4857C18.2842 19.7203 18.5804 19.941 18.8875 20.1466C19.3465 20.4539 19.9676 20.3309 20.2748 19.872C20.5821 19.413 20.4591 18.7919 20.0002 18.4847C19.804 18.3534 19.6133 18.2146 19.4285 18.0687C21.0334 16.157 22 13.6914 22 11C22 8.30863 21.0334 5.84302 19.4285 3.93134C19.6133 3.78543 19.804 3.64662 20.0002 3.51531C20.4591 3.20807 20.5821 2.58696 20.2748 2.12803C19.9676 1.6691 19.3465 1.54613 18.8875 1.85338C18.5804 2.059 18.2842 2.27967 18 2.51434C16.0981 0.943643 13.6593 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM22.8543 0.209353C23.5491 0.0719053 24.2666 0 25 0C25.7334 0 26.4509 0.0719053 27.1457 0.209352C27.6875 0.316534 28.0398 0.842625 27.9326 1.38441C27.8254 1.92619 27.2993 2.27851 26.7576 2.17133C26.1899 2.05903 25.6023 2 25 2C24.3977 2 23.8101 2.05903 23.2424 2.17133C22.7007 2.27851 22.1746 1.92619 22.0674 1.38441C21.9602 0.842625 22.3125 0.316534 22.8543 0.209353ZM29.7252 2.12803C30.0324 1.66909 30.6535 1.54613 31.1125 1.85338C32.3116 2.65618 33.3438 3.68839 34.1466 4.88752C34.4539 5.34645 34.3309 5.96756 33.872 6.27481C33.413 6.58206 32.7919 6.45909 32.4847 6.00016C31.8273 5.01827 30.9817 4.17268 29.9998 3.51531C29.5409 3.20807 29.4179 2.58696 29.7252 2.12803ZM34.6156 8.06739C35.1574 7.96021 35.6835 8.31253 35.7906 8.85431C35.9281 9.54909 36 10.2666 36 11C36 11.7334 35.9281 12.4509 35.7906 13.1457C35.6835 13.6875 35.1574 14.0398 34.6156 13.9326C34.0738 13.8254 33.7215 13.2993 33.8287 12.7576C33.941 12.1899 34 11.6023 34 11C34 10.3977 33.941 9.81008 33.8287 9.24245C33.7215 8.70066 34.0738 8.17457 34.6156 8.06739ZM33.872 15.7252C34.3309 16.0324 34.4539 16.6535 34.1466 17.1125C33.3438 18.3116 32.3116 19.3438 31.1125 20.1466C30.6535 20.4539 30.0324 20.3309 29.7252 19.872C29.4179 19.413 29.5409 18.7919 29.9998 18.4847C30.9817 17.8273 31.8273 16.9817 32.4847 15.9998C32.7919 15.5409 33.413 15.4179 33.872 15.7252ZM22.0674 20.6156C22.1746 20.0738 22.7007 19.7215 23.2424 19.8287C23.8101 19.941 24.3977 20 25 20C25.6023 20 26.1899 19.941 26.7576 19.8287C27.2993 19.7215 27.8254 20.0738 27.9326 20.6156C28.0398 21.1574 27.6875 21.6835 27.1457 21.7906C26.4509 21.9281 25.7334 22 25 22C24.2666 22 23.5491 21.9281 22.8543 21.7906C22.3125 21.6835 21.9602 21.1574 22.0674 20.6156Z"
                fill="url(#paint0_linear)"></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="36"
                  y1="3.1318e-07"
                  x2="32.0848"
                  y2="26.4265"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0288666" stop-color="#FEA41C"></stop>
                  <stop offset="0.223691" stop-color="#FF5F61"></stop>
                  <stop offset="0.408517" stop-color="#FF2FA9"></stop>
                  <stop offset="0.628457" stop-color="#FE1CD5"></stop>
                  <stop offset="0.733043" stop-color="#CD1CEE"></stop>
                  <stop offset="0.864847" stop-color="#8C23F9"></stop>
                  <stop offset="0.96226" stop-color="#4635FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs={12} align="center" style={{ paddingTop: '3vh' }}>
            <Typography className={classes.SvgHeader}>
              Radical Transparency
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{ paddingBottom: '1vh' }}>
            <Typography className={classes.SvgContent}>
              Your money is managed on the Ethereum blockchain through 100%
              open-source, independently audited code
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        xs={12}
        id="CarouselDesktop"
        style={{ marginTop: '20vh' }}
        align="center">
        <Grid item xs={12}>
          <Typography
            style={{
              color: 'rgb(31, 42, 75)',
              fontSize: '36px',
              fontWeight: '600'
            }}>
            We're backed by the best
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        id="CarouselMobile"
        style={{ marginTop: '10vh' }}
        align="center">
        <Grid item xs={12}>
          <Typography
            style={{
              color: 'rgb(31, 42, 75)',
              fontSize: '36px',
              fontWeight: '600',
              lineHeight: 1.13
            }}>
            We're backed by the best
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        lg={6}
        xs={12}
        style={{
          marginTop: '15vh',
          border: '1px solid rgb(110, 120, 152)',
          padding: '3vh',
          opacity: 0.8,
          justifyContent: 'center',

          paddingTop: '4vh',
          paddingBottom: '4vh',
          borderRadius: '8px'
        }}>
        <Grid
          item
          lg={4}
          xs={12}
          style={{
            paddingTop: '3vh'
          }}>
          <svg
            width="183"
            height="38"
            viewBox="0 0 183 38"
            fill="none"
            class="sc-bZQynM hdCNsT">
            <path
              d="M100.976 7.7102C101.565 7.56703 102.159 7.37725 102.771 7.38474C103.109 7.40055 103.16 7.80509 103.19 8.07062C103.272 9.31859 103.315 10.5689 103.318 11.8197C103.372 13.01 103.365 14.2019 103.388 15.3939C104.05 14.877 104.699 14.3185 105.483 14.0013C106.738 13.4411 108.243 13.4345 109.467 14.0846C110.782 14.753 111.701 16.0431 112.163 17.4365C112.596 18.7584 112.7 20.1742 112.627 21.5585C112.51 23.1758 112.077 24.8123 111.133 26.1407C110.574 26.9107 109.84 27.5857 108.943 27.9129C107.505 28.4472 105.827 28.2558 104.537 27.4209C104.128 27.1612 103.784 26.8141 103.409 26.5095C103.258 26.9881 103.144 27.4784 102.998 27.9595C102.309 27.967 101.613 28.0161 100.93 27.902C101.205 26.7825 101.212 25.623 101.242 24.476C101.293 20.4514 101.238 16.426 101.222 12.4015C101.134 10.8383 101.263 9.25759 100.976 7.7102ZM116.98 7.94493C117.42 7.80491 117.895 7.82941 118.32 8.01401C118.704 8.26469 118.999 8.63407 119.161 9.06781C119.445 9.99924 118.7 11.0447 117.766 11.1513C117.045 11.2328 116.253 10.8041 116.029 10.0783C115.732 9.25759 116.189 8.26955 116.98 7.94493ZM51.9356 9.63049C52.9838 8.91798 54.2057 8.38193 55.4833 8.36528C56.7839 8.34114 58.132 8.4352 59.3285 8.99789C59.8186 9.22596 60.3128 9.46568 60.7201 9.83193C60.4226 10.3538 60.03 10.8091 59.6588 11.2761C59.1826 10.9889 58.7122 10.6801 58.1836 10.4978C56.8953 10.0359 55.4309 9.93681 54.1458 10.4629C53.0706 10.8782 52.1921 11.7264 51.6406 12.7428C51.2595 13.4586 50.9407 14.2186 50.7817 15.0201C50.6399 15.8026 50.5948 16.5992 50.5825 17.3933C50.5407 18.4487 50.4924 19.5075 50.5555 20.5621C50.7383 22.0279 51.239 23.5038 52.2232 24.6183C53.0854 25.6255 54.3589 26.2165 55.6554 26.3488C56.3381 26.3871 57.0355 26.3963 57.7026 26.2206C58.5139 26.04 59.2326 25.6072 59.9825 25.2659C60.4201 25.7071 60.8004 26.2032 61.1577 26.7126C60.5983 27.0324 60.0203 27.3173 59.4269 27.5658C57.8271 28.2242 56.0529 28.2383 54.3597 28.0727C53.1419 27.8155 52.0118 27.1904 51.0726 26.3696C49.9892 25.4124 49.1959 24.1422 48.7181 22.7721C48.3961 21.849 48.2387 20.8751 48.1535 19.902C48.1199 19.1787 48.0404 18.4529 48.1207 17.7287C48.1453 16.3578 48.3641 14.9752 48.9025 13.71C49.5508 12.1226 50.5235 10.6169 51.9356 9.63049Z"
              fill="#6E7898"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.6967 0H0V37.2906H36.6967V0ZM10.9596 9.27929C10.9402 9.28377 10.9208 9.28824 10.9014 9.29264C11.108 9.76335 11.3479 10.2175 11.5879 10.6717C11.7247 10.9307 11.8615 11.1897 11.9922 11.4518C13.1536 13.6799 14.3227 15.9042 15.4917 18.1285C15.96 19.0196 16.4283 19.9106 16.8962 20.8019C17.0118 20.9905 17.0095 21.2111 17.0072 21.4268C17.0067 21.471 17.0063 21.5151 17.0068 21.5586C17.0028 22.7249 17.0035 23.8913 17.0042 25.0576C17.005 26.2727 17.0057 27.4878 17.0011 28.7029C17.6629 28.71 18.3248 28.7086 18.9866 28.7072C19.1812 28.7068 19.3757 28.7064 19.5703 28.7062C19.5696 27.6606 19.5698 26.6149 19.57 25.5691C19.5703 24.1748 19.5705 22.7804 19.5687 21.3863C19.562 21.239 19.5922 21.0924 19.6564 20.9601C20.3576 19.6116 21.0636 18.2658 21.7697 16.9199C22.851 14.8587 23.9324 12.7975 24.9964 10.7268C25.0691 10.5736 25.1478 10.4231 25.2266 10.2726C25.3947 9.95135 25.5628 9.63013 25.6717 9.28265C25.0826 9.18396 24.4863 9.19134 23.8902 9.19872C23.5964 9.20235 23.3026 9.20599 23.0098 9.19692C22.4518 10.3103 21.9029 11.4286 21.354 12.547C20.5848 14.1141 19.8156 15.6813 19.0212 17.2352C18.9616 17.3513 18.9033 17.4681 18.845 17.585C18.6891 17.8973 18.5332 18.2099 18.3525 18.5079C18.1479 18.1616 17.9729 17.7992 17.7979 17.437C17.7205 17.2768 17.6432 17.1167 17.5633 16.958C16.812 15.4122 16.0717 13.8606 15.3315 12.3092C14.8775 11.3578 14.4236 10.4065 13.9672 9.45662C13.963 9.44819 13.9588 9.43953 13.9545 9.43079C13.9126 9.3446 13.8664 9.24953 13.7533 9.26767C13.5386 9.26086 13.3239 9.2522 13.1091 9.24353C12.5363 9.22042 11.9632 9.19729 11.3898 9.2094C11.2434 9.2138 11.1015 9.24654 10.9596 9.27929Z"
              fill="#6E7898"></path>
            <path
              d="M152.802 10.3622C153.505 10.1325 154.227 9.96267 154.954 9.83032C154.848 11.1896 154.749 12.5497 154.703 13.9131C155.844 13.9406 156.987 13.9406 158.128 13.9881C157.931 14.5091 157.721 15.0253 157.499 15.5363C156.538 15.5396 155.576 15.5321 154.614 15.5396C154.611 16.7973 154.625 18.0542 154.625 19.3119C154.613 20.3108 154.683 21.308 154.668 22.3077C154.694 23.4397 154.636 24.5776 154.762 25.7054C154.794 26.1749 155.209 26.5054 155.627 26.6252C156.324 26.7875 157.052 26.7301 157.742 26.5586C157.927 26.9671 158.012 27.4153 157.989 27.8646C157.363 28.1959 156.645 28.26 155.954 28.3224C154.979 28.3624 153.891 28.2051 153.191 27.4451C152.614 26.9007 152.659 26.0351 152.593 25.3034C152.522 23.6961 152.55 22.0854 152.542 20.4764C152.538 18.8308 152.547 17.1861 152.538 15.5404C151.929 15.5321 151.321 15.5379 150.713 15.5371C150.69 14.9994 150.694 14.4608 150.71 13.9231C151.307 13.9181 151.905 13.9315 152.502 13.914C152.593 12.7295 152.614 11.5367 152.802 10.3622ZM67.9749 13.6251C68.4518 13.5635 68.9337 13.5868 69.4131 13.591C69.9811 13.6102 70.5638 13.5785 71.1112 13.7616C72.3675 14.2003 73.4731 15.086 74.1451 16.2546C74.7171 17.2626 75.1195 18.3938 75.1654 19.565C75.2367 21.1382 75.2883 22.7572 74.8032 24.2746C74.3516 25.698 73.3633 26.9665 72.0414 27.6466C70.7268 28.3366 69.1534 28.4656 67.7315 28.0769C66.453 27.7356 65.3434 26.8799 64.6099 25.772C63.7945 24.5842 63.5191 23.1134 63.4691 21.6909C63.4364 20.315 63.4101 18.8991 63.8609 17.5806C64.2862 16.2804 65.1082 15.0918 66.2604 14.3585C66.7899 14.0288 67.3619 13.7458 67.9749 13.6251ZM78.95 14.0621C79.586 13.8546 80.2345 13.6886 80.8914 13.5652C81.1602 14.1899 81.3244 14.8558 81.3774 15.5354C81.8257 15.2991 82.1756 14.9203 82.5936 14.6365C83.5475 13.9431 84.7063 13.5019 85.8905 13.5536C86.1577 13.5719 86.4167 13.6584 86.656 13.7808C87.0633 13.9881 87.4788 14.2011 87.8107 14.5266C88.1606 14.8621 88.3802 15.3049 88.6212 15.7211C89.1555 15.4788 89.5694 15.0468 90.0488 14.7172C90.8806 14.1337 91.8288 13.6709 92.8467 13.5702C93.7785 13.462 94.7537 13.7791 95.4355 14.4384C95.7437 14.7389 96.0715 15.0443 96.2419 15.4522C96.4075 15.8501 96.4583 16.2846 96.4968 16.7116C96.6591 18.9615 96.5476 21.2206 96.6345 23.473C96.6345 24.9705 96.6452 26.4671 96.646 27.9645C95.9084 27.9753 95.1716 27.9803 94.4349 27.9595C94.4374 25.7146 94.4357 23.4705 94.4357 21.2256C94.4292 19.7822 94.4628 18.3364 94.3464 16.8964C94.3162 16.6669 94.2403 16.446 94.1232 16.2474C94.0061 16.0487 93.8503 15.8764 93.6654 15.741C93.2351 15.453 92.6934 15.4847 92.2025 15.513C91.3314 15.5962 90.6028 16.1506 89.9455 16.6908C89.6341 16.958 89.3104 17.2102 89.0072 17.4865C88.9129 17.5623 88.9424 17.6996 88.9318 17.8062C88.9326 21.1915 88.9375 24.5776 88.9293 27.9637C88.1959 27.9762 87.4616 27.9795 86.7289 27.9604C86.7297 25.3267 86.7305 22.6939 86.7281 20.0603C86.7223 19.421 86.7412 18.7801 86.6896 18.1425C86.6502 17.4924 86.7158 16.7948 86.4158 16.1972C85.9684 15.5538 85.0817 15.4189 84.3703 15.597C83.2615 15.8676 82.3051 16.5618 81.4667 17.3226C81.3307 17.4108 81.3438 17.5823 81.343 17.7246C81.3495 21.1357 81.3405 24.5476 81.3471 27.9587C80.7038 27.9787 80.0596 27.9803 79.4171 27.957C79.3565 24.4652 79.3991 20.97 79.3056 17.4774C79.286 16.685 79.2868 15.89 79.1835 15.1026C79.1212 14.7522 79.0082 14.4134 78.95 14.0621ZM116.466 13.9389C117.173 13.8341 117.876 13.71 118.576 13.5719C118.666 15.5379 118.635 17.509 118.652 19.4768C118.655 22.3052 118.653 25.1336 118.653 27.9612C117.922 27.9778 117.191 27.9778 116.46 27.962C116.437 23.9133 116.456 19.8638 116.45 15.8151C116.454 15.19 116.437 14.5641 116.466 13.9389ZM138.14 15.1143C139.608 14.2927 141.217 13.581 142.925 13.5935C143.524 13.5977 144.132 13.571 144.728 13.6643C146.218 13.9506 147.492 15.3115 147.531 16.8814C147.611 19.2162 147.515 21.5535 147.538 23.8892C147.556 24.5834 147.53 25.2901 147.698 25.9685C147.798 26.4263 148.218 26.6793 148.541 26.9682C148.224 27.4085 147.964 27.9046 147.552 28.2625C147.311 28.4664 147.015 28.245 146.812 28.0952C146.278 27.6932 145.915 27.1088 145.62 26.5137C145.146 26.7759 144.783 27.1937 144.322 27.4759C143.518 27.9937 142.57 28.3016 141.614 28.2875C140.757 28.3075 139.878 28.1626 139.106 27.7739C137.853 27.1013 137.156 25.6347 137.192 24.2238C137.181 22.8679 137.858 21.5477 138.93 20.7478C140.214 19.7748 141.844 19.4543 143.41 19.3378C144.125 19.2737 144.845 19.2703 145.563 19.2387C145.591 18.527 145.538 17.8145 145.438 17.1103C145.354 16.5118 145.073 15.8992 144.532 15.5987C143.883 15.2516 143.117 15.2433 142.408 15.3473C141.071 15.513 139.815 16.0931 138.727 16.8847C138.437 16.4644 138.129 16.054 137.882 15.6062C137.762 15.3823 137.957 15.2058 138.14 15.1143ZM165.167 13.6235C166.02 13.503 166.887 13.5275 167.732 13.6959C168.992 14.0026 170.1 14.7611 170.852 15.8318C171.456 16.6891 171.85 17.693 172.037 18.7276C172.182 19.7193 172.237 20.7223 172.202 21.7242C172.164 23.3523 171.671 24.9896 170.693 26.2914C169.903 27.3336 168.677 27.9587 167.419 28.1901C165.892 28.4615 164.234 28.1868 162.956 27.2645C161.835 26.4538 161.12 25.1852 160.733 23.8659C160.523 23.2008 160.486 22.4991 160.437 21.8083C160.416 20.6446 160.394 19.4668 160.625 18.3206C160.943 17.0212 161.574 15.7718 162.553 14.8587C163.276 14.1792 164.19 13.7472 165.167 13.6235ZM175.949 14.1004C176.606 13.9123 177.26 13.7075 177.927 13.5544C178.279 14.2386 178.349 15.0177 178.385 15.7752C178.725 15.518 179.007 15.1967 179.307 14.8953C180.264 13.9331 181.646 13.3513 182.999 13.5977V13.77C182.703 14.4309 182.517 15.1359 182.239 15.8035C182.199 15.9267 182.033 15.8867 181.94 15.91C181.349 15.9242 180.723 15.9092 180.192 16.2113C179.669 16.522 179.209 16.9297 178.835 17.4133C178.472 17.8786 178.543 18.5062 178.517 19.0606C178.482 19.8655 178.464 20.6704 178.473 21.4753C178.47 23.6378 178.474 25.7995 178.471 27.9612C177.738 27.9778 177.005 27.9778 176.272 27.9612C176.26 25.5498 176.271 23.1376 176.267 20.7262C176.255 19.088 176.279 17.4474 176.196 15.811C176.179 15.2308 175.997 14.6756 175.949 14.1004ZM122.95 14.1279C123.6 13.9198 124.258 13.6767 124.946 13.6634C125.193 14.3072 125.354 14.9815 125.426 15.6686C126.006 15.304 126.496 14.8088 127.091 14.4658C128.237 13.775 129.667 13.3022 130.973 13.7974C131.74 14.0721 132.485 14.5141 132.948 15.2108C133.328 15.7152 133.416 16.367 133.455 16.9821C133.571 19.1713 133.534 21.3646 133.561 23.5554C133.559 25.0237 133.589 26.4912 133.593 27.9587C132.859 27.9803 132.125 27.9778 131.391 27.9604C131.391 25.549 131.344 23.1376 131.339 20.7253C131.307 19.3835 131.377 18.0342 131.217 16.6991C131.019 16.059 130.409 15.5238 129.732 15.5063C129.232 15.4855 128.714 15.4664 128.237 15.6453C127.188 16.0424 126.243 16.6775 125.388 17.405C125.364 20.9234 125.387 24.4436 125.377 27.9629C124.734 27.9762 124.092 27.9795 123.45 27.9587C123.448 25.9635 123.399 23.9691 123.389 21.9739C123.371 19.9204 123.386 17.8661 123.281 15.8151C123.258 15.2366 123.072 14.6881 122.95 14.1279Z"
              fill="#6E7898"></path>
            <path
              d="M70.9797 15.7177C70.179 15.2408 69.1915 15.1692 68.2999 15.3831C67.5631 15.5596 66.8673 15.9883 66.46 16.6475C65.8806 17.5881 65.797 18.7326 65.7315 19.8114C65.6569 20.6146 65.7257 21.4204 65.7954 22.2211C65.911 23.1892 66.0929 24.1755 66.5543 25.042C67.0583 25.951 68.0917 26.4163 69.0833 26.4862C70.0291 26.5486 71.0568 26.2898 71.7296 25.5764C72.2737 24.9705 72.5868 24.1772 72.6966 23.3706C72.8359 22.3576 72.813 21.3313 72.7958 20.3116C72.7491 19.2503 72.677 18.1591 72.2549 17.1719C71.9987 16.558 71.5506 16.0469 70.9797 15.7177Z"
              fill="white"></path>
            <path
              d="M167.5 15.4897C166.805 15.2499 166.05 15.2682 165.331 15.3665C164.298 15.4813 163.466 16.312 163.131 17.2801C162.717 18.2923 162.771 19.4043 162.747 20.4764C162.775 21.4894 162.773 22.5091 162.954 23.5096C163.08 24.1805 163.295 24.8614 163.744 25.3858C164.173 25.9085 164.797 26.2382 165.445 26.3822C166.364 26.5911 167.374 26.4862 168.196 26.0018C168.751 25.678 169.127 25.1153 169.365 24.5235C169.646 23.8218 169.678 23.0543 169.736 22.3085C169.778 21.422 169.787 20.533 169.737 19.6466C169.663 18.7193 169.563 17.7562 169.115 16.9272C168.729 16.3054 168.16 15.7918 167.5 15.4897Z"
              fill="white"></path>
            <path
              d="M107.896 15.6844C107.301 15.5504 106.682 15.5662 106.078 15.617C104.979 15.7735 104.101 16.5426 103.381 17.3475C103.348 17.6122 103.368 17.8794 103.366 18.1458C103.367 20.2833 103.366 22.42 103.366 24.5576C103.328 24.7848 103.529 24.9163 103.666 25.057C104.732 26.095 106.325 26.5911 107.769 26.2165C108.468 26.0367 109.066 25.5481 109.427 24.9197C109.941 24.0299 110.121 22.9927 110.232 21.9805C110.278 21.2023 110.373 20.4207 110.288 19.6416C110.247 18.7359 110.079 17.8087 109.62 17.0196C109.245 16.3728 108.629 15.8442 107.896 15.6844Z"
              fill="white"></path>
            <path
              d="M143.826 20.7037C143.147 20.7686 142.46 20.8086 141.801 20.9958C141.011 21.2239 140.283 21.7283 139.863 22.455C139.623 22.8579 139.626 23.3456 139.6 23.801C139.589 24.3054 139.524 24.8364 139.721 25.3151C139.917 25.792 140.235 26.2598 140.72 26.4637C141.282 26.7026 141.907 26.7259 142.506 26.6718C143.223 26.5836 143.865 26.1907 144.419 25.7404C144.883 25.3492 145.334 24.8389 145.366 24.1947C145.457 23.0543 145.437 21.9073 145.451 20.7636C144.907 20.7811 144.369 20.6554 143.826 20.7037Z"
              fill="white"></path>
          </svg>
        </Grid>
        <Grid
          id="MobilePadding"
          item
          lg={4}
          xs={12}
          style={{ paddingTop: '3vh' }}>
          <svg
            width="120"
            height="27"
            viewBox="0 0 120 27"
            fill="none"
            class="sc-bZQynM kvgdjN">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.34 22.89C10.27 22.89 11.14 22.72 11.96 22.39C11.96 22.42 13.63 25.01 13.66 25.02C12.1819 25.8119 10.5266 26.2145 8.85 26.19C3.72 26.2 0 22.81 0 17.42C0 11.99 3.9 8.62 8.85 8.62C10.6 8.62 11.99 9 13.38 9.74L11.78 12.44C10.94 12.11 10.08 11.96 9.18 11.96C6.15 11.96 3.8 13.89 3.8 17.42C3.8 20.76 6.07 22.89 9.34 22.89ZM22.27 8.62C27.31 8.62 30.96 12.19 30.96 17.42C30.96 22.62 27.31 26.19 22.26 26.19C17.26 26.19 13.61 22.62 13.61 17.42C13.61 12.19 17.26 8.62 22.27 8.62ZM22.27 11.84C19.46 11.84 17.41 14.01 17.41 17.42C17.41 20.8 19.46 22.97 22.27 22.97C25.15 22.97 27.17 20.8 27.17 17.42C27.17 14.01 25.15 11.84 22.27 11.84ZM33.35 25.81V9H37.11V25.8H33.35V25.81ZM32.85 3.83C32.889 3.23194 33.1541 2.67111 33.5914 2.26134C34.0288 1.85157 34.6057 1.62354 35.205 1.62354C35.8043 1.62354 36.3812 1.85157 36.8186 2.26134C37.2559 2.67111 37.521 3.23194 37.56 3.83C37.5601 4.45795 37.3142 5.06094 36.8748 5.50962C36.4355 5.9583 35.8378 6.21692 35.21 6.23C34.5822 6.21692 33.9845 5.9583 33.5452 5.50962C33.1058 5.06094 32.8599 4.45795 32.86 3.83H32.85ZM40.39 10.06C42.8529 9.13425 45.459 8.6469 48.09 8.62C52.39 8.62 55.11 10.25 55.11 14.99V25.81H51.4V15.34C51.4 12.91 49.89 12.04 47.8 12.04C46.47 12.04 45.14 12.22 44.15 12.53V25.8H40.4V10.06H40.39ZM58.26 0H62.02V9.45C62.82 9.03 64.37 8.62 65.85 8.62C70.71 8.62 74.35 11.72 74.35 17.12C74.35 22.55 70.75 26.19 64.53 26.19C62.1 26.19 59.97 25.69 58.26 25.09V0ZM62.02 22.62C62.74 22.85 63.69 22.97 64.64 22.97C68.09 22.97 70.56 21.07 70.56 17.2C70.56 13.93 68.24 12 65.4 12C63.92 12 62.78 12.38 62.02 12.8V22.62ZM85.22 14.54C85.22 12.72 83.84 11.88 81.98 11.88C80.05 11.88 78.53 12.45 77.13 13.25V9.98C78.8048 9.06984 80.684 8.60176 82.59 8.62C86.27 8.62 88.89 10.14 88.89 14.35V25.47C87.29 25.89 85.02 26.15 83.12 26.15C78.76 26.15 75.57 24.83 75.57 21.03C75.57 17.61 78.49 15.94 83.35 15.94H85.21V14.54H85.22ZM85.22 18.44H83.62C81 18.44 79.29 19.21 79.29 20.92C79.29 22.66 80.89 23.34 83.16 23.34C83.73 23.34 84.53 23.27 85.21 23.16V18.45L85.22 18.44ZM91.62 21.26C93.0854 22.421 94.8818 23.0864 96.75 23.16C98.42 23.16 99.52 22.59 99.52 21.26C99.52 19.89 98.53 19.4 96.37 18.83C92.87 18.03 91.4 16.63 91.4 13.7C91.4 10.29 93.98 8.62 97.4 8.62C99.3 8.62 100.81 9.03 102.22 9.91V13.36C100.88 12.2904 99.2243 11.6929 97.51 11.66C95.88 11.66 95.01 12.46 95.01 13.56C95.01 14.66 95.72 15.22 97.66 15.76C101.5 16.59 103.16 18.03 103.16 21.06C103.16 24.6 100.47 26.19 96.83 26.19C95.0042 26.2264 93.2041 25.7557 91.63 24.83V21.26H91.62ZM108.31 18.26V18.33C108.54 21.33 111.11 22.97 113.74 22.97C116.05 22.97 117.72 22.43 119.39 21.33V24.63C117.87 25.7 115.63 26.19 113.47 26.19C108.23 26.19 104.67 22.85 104.67 17.54C104.67 12.19 108.16 8.62 112.79 8.62C117.69 8.62 120 11.77 120 16.36V18.26H108.3H108.31ZM116.47 15.83C116.39 13.21 115.1 11.77 112.67 11.77C110.51 11.77 108.92 13.29 108.42 15.83H116.47Z"
              fill="#6E7898"></path>
          </svg>
        </Grid>
        <Grid
          item
          lg={4}
          xs={12}
          id="MobilePadding"
          style={{ paddingTop: '3vh', justifyContent: 'center' }}>
          <svg
            width="118"
            height="37"
            viewBox="0 0 118 37"
            fill="none"
            class="sc-bZQynM jHwTGN">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.1741 7.84406V11.7157C4.1741 12.0249 4.30515 12.2433 4.56729 12.371C4.82943 12.4987 5.27643 12.6029 5.90826 12.6836C6.09647 12.7105 6.19055 12.8449 6.19055 13.0869C6.19055 13.1944 6.17712 13.3154 6.15024 13.4499C5.76039 13.423 5.27307 13.3994 4.68829 13.3793C4.10351 13.3591 3.46832 13.349 2.78271 13.349C2.29876 13.349 1.83163 13.3591 1.38129 13.3793C0.93094 13.3994 0.510824 13.423 0.120972 13.4499C0.0940847 13.3961 0.080658 13.3356 0.080658 13.2684V13.107C0.080658 12.8785 0.154585 12.7508 0.30246 12.7239C0.584767 12.6701 0.813307 12.6197 0.988068 12.5727C1.16283 12.5256 1.29726 12.4719 1.39136 12.4114C1.48546 12.3509 1.54931 12.2769 1.58292 12.1896C1.61652 12.1022 1.63333 11.9913 1.63333 11.8568V1.75433C1.63333 1.48546 1.53587 1.29054 1.34094 1.16955C1.14602 1.04856 0.772973 0.954461 0.221802 0.887245C0.154586 0.860359 0.100815 0.820031 0.0604858 0.766258C0.0201558 0.712485 0 0.618383 0 0.483952V0.302469C0 0.235253 0.0134277 0.181481 0.0403137 0.141151C0.416723 0.168038 0.850265 0.191564 1.34094 0.211729C1.83162 0.231894 2.27189 0.241976 2.66174 0.241976H5.7066C7.14503 0.241976 8.2675 0.564607 9.0741 1.20988C9.88069 1.85515 10.284 2.75583 10.284 3.91195C10.284 4.43623 10.1832 4.93699 9.98151 5.41422C9.77986 5.89145 9.48077 6.30819 9.0842 6.66443C8.68762 7.02068 8.20704 7.30634 7.64243 7.52143C7.07781 7.73652 6.43254 7.84406 5.7066 7.84406H4.1741ZM4.77902 6.83583C5.59906 6.83583 6.26114 6.62746 6.76526 6.21072C7.26938 5.79398 7.52142 5.08823 7.52142 4.09343C7.52142 3.19274 7.32315 2.4937 6.92657 1.9963C6.53 1.49891 5.81415 1.25021 4.77902 1.25021H4.1741V6.83583H4.77902ZM12.5357 6.7955C12.5357 5.85448 12.7138 4.97396 13.0701 4.15392C13.4263 3.33389 13.9136 2.61469 14.532 1.9963C15.1504 1.37792 15.873 0.890607 16.6997 0.534363C17.5265 0.178118 18.4104 0 19.3514 0C20.3193 0 21.22 0.168036 22.0534 0.504116C22.8869 0.840196 23.6095 1.3107 24.2212 1.91565C24.8328 2.52059 25.3134 3.23979 25.6629 4.07327C26.0125 4.90674 26.1872 5.81415 26.1872 6.7955C26.1872 7.73652 26.0091 8.6204 25.6528 9.44716C25.2966 10.2739 24.8093 10.9931 24.1909 11.6048C23.5725 12.2164 22.8466 12.7004 22.0131 13.0566C21.1796 13.4129 20.2924 13.591 19.3514 13.591C18.3835 13.591 17.4828 13.423 16.6493 13.0869C15.8158 12.7508 15.0966 12.2803 14.4917 11.6754C13.8868 11.0704 13.4095 10.3546 13.06 9.52781C12.7105 8.70106 12.5357 7.7903 12.5357 6.7955ZM19.6538 12.5424C20.2185 12.5424 20.7293 12.4181 21.1864 12.1694C21.6434 11.9207 22.0366 11.5813 22.366 11.1511C22.6954 10.7209 22.9508 10.2168 23.1323 9.63872C23.3137 9.06067 23.4045 8.44229 23.4045 7.78357C23.4045 6.8291 23.3137 5.94186 23.1323 5.12183C22.9508 4.3018 22.6752 3.59268 22.3055 2.99446C21.9358 2.39623 21.472 1.92573 20.9142 1.58293C20.3563 1.24013 19.7076 1.06873 18.9683 1.06873C18.4978 1.06873 18.0407 1.17291 17.597 1.38128C17.1534 1.58965 16.7636 1.89212 16.4275 2.28869C16.0914 2.68527 15.8226 3.16585 15.6209 3.73047C15.4193 4.29508 15.3185 4.93362 15.3185 5.64611C15.3185 6.64091 15.4159 7.56175 15.6108 8.40868C15.8058 9.2556 16.088 9.98488 16.4577 10.5965C16.8274 11.2082 17.2812 11.6854 17.8189 12.0282C18.3566 12.371 18.9682 12.5424 19.6538 12.5424ZM32.7542 11.635C32.7542 11.9173 32.9356 12.1055 33.2986 12.1996C33.6616 12.2937 34.2598 12.3408 35.0933 12.3408H35.8595C36.1956 12.3408 36.488 12.3038 36.7367 12.2299C36.9854 12.1559 37.2039 12.0316 37.3921 11.8568C37.5803 11.6821 37.7517 11.4569 37.9062 11.1813C38.0608 10.9057 38.2121 10.573 38.36 10.1832C38.4003 10.0756 38.5011 10.0219 38.6624 10.0219C38.7297 10.0219 38.8103 10.042 38.9044 10.0823L39.1867 10.2033C39.0792 10.6335 38.9817 11.1007 38.8943 11.6048C38.8069 12.1089 38.7297 12.6029 38.6624 13.0869C38.649 13.2482 38.6053 13.349 38.5314 13.3894C38.4574 13.4297 38.3801 13.4499 38.2995 13.4499C38.1919 13.4499 38.0407 13.4431 37.8458 13.4297C37.6508 13.4162 37.4391 13.4062 37.2106 13.3994C36.982 13.3927 36.7501 13.3826 36.5149 13.3692C36.2796 13.3557 36.0746 13.349 35.8999 13.349H31.3225C30.9326 13.349 30.4857 13.3591 29.9815 13.3793C29.4774 13.3994 29.0237 13.423 28.6204 13.4499C28.5935 13.3961 28.5801 13.3255 28.5801 13.2381V13.0466C28.5801 12.8449 28.6473 12.7374 28.7817 12.7239C29.2926 12.6298 29.6589 12.529 29.8807 12.4214C30.1025 12.3139 30.2134 12.1257 30.2134 11.8568V1.75433C30.2134 1.6199 30.2 1.50899 30.1731 1.42161C30.1462 1.33423 30.0924 1.25693 30.0118 1.18972C29.9311 1.1225 29.8068 1.06537 29.6387 1.01832C29.4707 0.971265 29.2455 0.927575 28.9632 0.887245C28.8288 0.846916 28.7616 0.73265 28.7616 0.544445V0.362963C28.7616 0.282304 28.775 0.208367 28.8019 0.141151C29.2321 0.168038 29.6891 0.191564 30.1731 0.211729C30.6571 0.231894 31.0872 0.241976 31.4637 0.241976C31.6519 0.241976 31.8669 0.238615 32.1089 0.231894C32.3509 0.225172 32.6029 0.218451 32.8651 0.211729C33.1272 0.205007 33.3894 0.194924 33.6515 0.18148C33.9137 0.168037 34.1522 0.154595 34.3673 0.141151C34.3808 0.208367 34.3909 0.282304 34.3976 0.362963C34.4043 0.443622 34.4077 0.504115 34.4077 0.544445C34.4077 0.73265 34.3405 0.846916 34.206 0.887245C33.628 0.967904 33.2415 1.07209 33.0466 1.1998C32.8516 1.32751 32.7542 1.52579 32.7542 1.79466V11.635ZM43.6364 7.8239L40.4302 1.714C40.2823 1.43169 40.0975 1.23677 39.8757 1.12922C39.6539 1.02168 39.3682 0.941018 39.0187 0.887245C38.8574 0.873802 38.7767 0.739372 38.7767 0.483952V0.393211C38.7767 0.359603 38.7834 0.322634 38.7969 0.282305L38.817 0.141151C39.1128 0.168038 39.4925 0.191564 39.9563 0.211729C40.4201 0.231894 40.9276 0.241976 41.4788 0.241976C41.667 0.241976 41.8922 0.238615 42.1543 0.231894C42.4164 0.225172 42.6819 0.218451 42.9508 0.211729C43.2197 0.205007 43.4717 0.194924 43.707 0.18148C43.9422 0.168037 44.1338 0.154595 44.2816 0.141151C44.3085 0.26214 44.322 0.34616 44.322 0.393211V0.504116C44.322 0.73265 44.2413 0.860359 44.08 0.887245C43.7305 0.927575 43.4885 0.984708 43.3541 1.05865C43.2197 1.13258 43.1524 1.23005 43.1524 1.35103C43.1524 1.45858 43.1995 1.59973 43.2936 1.77449L45.6529 6.4527L47.9718 2.09713C48.1197 1.84171 48.1936 1.62662 48.1936 1.45186C48.1936 1.29054 48.1197 1.17291 47.9718 1.09897C47.8239 1.02504 47.5685 0.954461 47.2055 0.887245C47.0308 0.860359 46.9434 0.73265 46.9434 0.504116C46.9434 0.450343 46.9636 0.329356 47.0039 0.141151C47.2862 0.168038 47.6391 0.191564 48.0625 0.211729C48.486 0.231894 48.859 0.241976 49.1817 0.241976C49.4909 0.241976 49.8169 0.235254 50.1597 0.221811C50.5025 0.208368 50.8486 0.181481 51.1982 0.141151C51.225 0.235254 51.2385 0.312552 51.2385 0.373047V0.504116C51.2385 0.746094 51.1578 0.873802 50.9965 0.887245C50.5125 0.954461 50.1765 1.04184 49.9883 1.14939C49.8001 1.25693 49.6387 1.42497 49.5043 1.6535L46.1772 7.78357V11.7963C46.1772 11.9442 46.1973 12.0652 46.2376 12.1593C46.278 12.2534 46.3519 12.3341 46.4594 12.4013C46.567 12.4685 46.7115 12.5256 46.893 12.5727C47.0745 12.6197 47.3131 12.6634 47.6088 12.7038C47.676 12.7172 47.7332 12.7474 47.7802 12.7945C47.8273 12.8415 47.8508 12.939 47.8508 13.0869C47.8508 13.1138 47.8475 13.144 47.8407 13.1776C47.834 13.2112 47.8307 13.2482 47.8307 13.2885L47.8105 13.4297C47.5954 13.4297 47.3937 13.4263 47.2055 13.4196C47.0173 13.4129 46.8291 13.4028 46.6409 13.3894C46.3183 13.3625 45.9856 13.3457 45.6428 13.3389C45.3 13.3322 45.0143 13.3289 44.7858 13.3289C44.5438 13.3289 44.2649 13.3322 43.9489 13.3389C43.633 13.3457 43.3272 13.3625 43.0315 13.3894C42.8567 13.4028 42.6853 13.4129 42.5172 13.4196C42.3492 13.4263 42.1778 13.4297 42.0031 13.4297L41.9829 13.2885C41.9694 13.2482 41.9627 13.2112 41.9627 13.1776V13.0869C41.9627 12.939 41.9862 12.8415 42.0333 12.7945C42.0803 12.7474 42.1375 12.7172 42.2047 12.7038C42.487 12.65 42.7223 12.5996 42.9105 12.5525C43.0987 12.5055 43.2465 12.4517 43.3541 12.3912C43.4616 12.3307 43.5356 12.2534 43.5759 12.1593C43.6162 12.0652 43.6364 11.9442 43.6364 11.7963V7.8239ZM58.4104 13.591C57.2812 13.591 56.2931 13.4162 55.4462 13.0667C54.5992 12.7172 53.9002 12.2366 53.3491 11.6249C52.7979 11.0133 52.3845 10.2941 52.1089 9.46732C51.8333 8.64056 51.6956 7.74997 51.6956 6.7955C51.6956 6.00235 51.83 5.20249 52.0988 4.3959C52.3677 3.58931 52.7911 2.86003 53.3692 2.20803C53.9473 1.55604 54.6866 1.02504 55.5873 0.615023C56.488 0.205005 57.5635 0 58.8137 0C59.4993 0 60.1412 0.0470491 60.7394 0.141151C61.3376 0.235254 61.9863 0.376407 62.6853 0.564611C62.7122 0.927578 62.766 1.39136 62.8466 1.95597C62.9273 2.52059 63.0415 3.07175 63.1894 3.60948C63.1222 3.62292 63.0348 3.63973 62.9273 3.65989C62.8197 3.68006 62.7391 3.69014 62.6853 3.69014C62.5778 3.69014 62.487 3.67333 62.4131 3.63973C62.3391 3.60612 62.2887 3.53554 62.2618 3.428C62.114 2.98437 61.9459 2.61133 61.7577 2.30886C61.5695 2.00639 61.3444 1.76441 61.0822 1.58293C60.8201 1.40144 60.5142 1.27038 60.1647 1.18972C59.8152 1.10906 59.4052 1.06873 58.9347 1.06873C58.2087 1.06873 57.5668 1.19308 57.0089 1.44177C56.451 1.69047 55.9839 2.04671 55.6075 2.5105C55.2311 2.97429 54.9454 3.53218 54.7505 4.18417C54.5556 4.83617 54.4581 5.57217 54.4581 6.39221C54.4581 7.26601 54.5757 8.07932 54.811 8.83213C55.0463 9.58495 55.3689 10.2369 55.7789 10.7881C56.1889 11.3393 56.6762 11.7695 57.2408 12.0786C57.8055 12.3878 58.4171 12.5424 59.0758 12.5424C59.6136 12.5424 60.074 12.492 60.4571 12.3912C60.8402 12.2904 61.1696 12.1358 61.4452 11.9274C61.7207 11.719 61.956 11.4535 62.1509 11.1309C62.3459 10.8083 62.524 10.4319 62.6853 10.0017C62.7256 9.89414 62.7895 9.81684 62.8769 9.76979C62.9642 9.72274 63.055 9.69922 63.1491 9.69922C63.2163 9.69922 63.3003 9.7093 63.4012 9.72946C63.502 9.74963 63.586 9.77315 63.6532 9.80004C63.5725 10.0286 63.4885 10.2874 63.4012 10.5764C63.3138 10.8654 63.223 11.1612 63.1289 11.4636C63.0348 11.7661 62.9508 12.0686 62.8769 12.371C62.8029 12.6735 62.7391 12.9659 62.6853 13.2482C62.0266 13.3692 61.3544 13.4566 60.6688 13.5103C59.9832 13.5641 59.2304 13.591 58.4104 13.591ZM77.8828 11.8568C77.8828 11.9913 77.8928 12.1022 77.913 12.1896C77.9332 12.2769 77.9869 12.3542 78.0743 12.4214C78.1617 12.4887 78.2894 12.5458 78.4575 12.5928C78.6255 12.6399 78.8507 12.6836 79.133 12.7239C79.2674 12.7508 79.3346 12.8651 79.3346 13.0667C79.3346 13.1071 79.3312 13.1675 79.3245 13.2482C79.3178 13.3289 79.3077 13.3961 79.2943 13.4499C78.8641 13.423 78.4071 13.3994 77.9231 13.3793C77.4391 13.3591 77.0089 13.349 76.6325 13.349C76.2427 13.349 75.8024 13.3591 75.3118 13.3793C74.8211 13.3994 74.3607 13.423 73.9305 13.4499C73.9036 13.3961 73.8901 13.3289 73.8901 13.2482V13.0667C73.8901 12.8516 73.9574 12.7374 74.0918 12.7239C74.3741 12.6836 74.5993 12.6399 74.7673 12.5928C74.9353 12.5458 75.0597 12.4887 75.1404 12.4214C75.221 12.3542 75.2748 12.2769 75.3017 12.1896C75.3286 12.1022 75.342 11.9913 75.342 11.8568V7.11814H69.8976V11.8568C69.8976 11.9913 69.9076 12.1022 69.9278 12.1896C69.948 12.2769 70.0017 12.3542 70.0891 12.4214C70.1765 12.4887 70.3042 12.5458 70.4722 12.5928C70.6403 12.6399 70.8655 12.6836 71.1478 12.7239C71.2822 12.7508 71.3494 12.8651 71.3494 13.0667C71.3494 13.1071 71.346 13.1675 71.3393 13.2482C71.3326 13.3289 71.3225 13.3961 71.3091 13.4499C70.8789 13.423 70.4151 13.3994 69.9177 13.3793C69.4203 13.3591 68.9834 13.349 68.607 13.349C68.2306 13.349 67.8004 13.3591 67.3165 13.3793C66.8325 13.3994 66.3754 13.423 65.9453 13.4499C65.9184 13.3961 65.9049 13.3289 65.9049 13.2482V13.0667C65.9049 12.8516 65.9721 12.7374 66.1066 12.7239C66.3889 12.6836 66.6141 12.6399 66.7821 12.5928C66.9501 12.5458 67.0745 12.4887 67.1552 12.4214C67.2358 12.3542 67.2896 12.2769 67.3165 12.1896C67.3434 12.1022 67.3568 11.9913 67.3568 11.8568V1.75433C67.3568 1.6199 67.3434 1.50899 67.3165 1.42161C67.2896 1.33423 67.2358 1.25693 67.1552 1.18972C67.0745 1.1225 66.9501 1.06537 66.7821 1.01832C66.6141 0.971265 66.3889 0.927575 66.1066 0.887245C65.9721 0.846916 65.9049 0.73265 65.9049 0.544445V0.362963C65.9049 0.282304 65.9184 0.208367 65.9453 0.141151C66.3754 0.168038 66.8325 0.191564 67.3165 0.211729C67.8004 0.231894 68.2306 0.241976 68.607 0.241976C68.9834 0.241976 69.4203 0.231894 69.9177 0.211729C70.4151 0.191564 70.8789 0.168038 71.3091 0.141151C71.3225 0.208367 71.3326 0.282304 71.3393 0.362963C71.346 0.443622 71.3494 0.504115 71.3494 0.544445C71.3494 0.73265 71.2822 0.846916 71.1478 0.887245C70.8655 0.927575 70.6403 0.971265 70.4722 1.01832C70.3042 1.06537 70.1765 1.1225 70.0891 1.18972C70.0017 1.25693 69.948 1.33423 69.9278 1.42161C69.9076 1.50899 69.8976 1.6199 69.8976 1.75433V6.04941H75.342V1.75433C75.342 1.6199 75.3286 1.50899 75.3017 1.42161C75.2748 1.33423 75.221 1.25693 75.1404 1.18972C75.0597 1.1225 74.9353 1.06537 74.7673 1.01832C74.5993 0.971265 74.3741 0.927575 74.0918 0.887245C73.9574 0.846916 73.8901 0.73265 73.8901 0.544445V0.362963C73.8901 0.282304 73.9036 0.208367 73.9305 0.141151C74.3607 0.168038 74.8211 0.191564 75.3118 0.211729C75.8024 0.231894 76.2427 0.241976 76.6325 0.241976C77.0089 0.241976 77.4391 0.231894 77.9231 0.211729C78.4071 0.191564 78.8641 0.168038 79.2943 0.141151C79.3077 0.208367 79.3178 0.282304 79.3245 0.362963C79.3312 0.443622 79.3346 0.504115 79.3346 0.544445C79.3346 0.73265 79.2674 0.846916 79.133 0.887245C78.8507 0.927575 78.6255 0.971265 78.4575 1.01832C78.2894 1.06537 78.1617 1.1225 78.0743 1.18972C77.9869 1.25693 77.9332 1.33423 77.913 1.42161C77.8928 1.50899 77.8828 1.6199 77.8828 1.75433V11.8568ZM89.3498 8.91279H85.1152L84.0666 11.7157C84.0263 11.7829 83.9994 11.8568 83.9859 11.9375C83.9725 12.0182 83.9658 12.0786 83.9658 12.119C83.9658 12.2669 84.0363 12.3878 84.1775 12.4819C84.3186 12.576 84.6043 12.6567 85.0345 12.7239C85.2227 12.7508 85.3168 12.8785 85.3168 13.107C85.3168 13.2012 85.3034 13.3154 85.2765 13.4499C84.9135 13.423 84.5304 13.3994 84.1271 13.3793C83.7238 13.3591 83.3272 13.349 82.9374 13.349C82.6685 13.349 82.3862 13.3557 82.0905 13.3692C81.7947 13.3826 81.4654 13.4095 81.1024 13.4499C81.0755 13.3961 81.0621 13.3356 81.0621 13.2684V13.107C81.0621 12.8516 81.1494 12.7172 81.3242 12.7038C81.7409 12.6231 82.04 12.5357 82.2215 12.4416C82.403 12.3475 82.5475 12.1862 82.6551 11.9577L87.5148 0.342798C87.6223 0.114264 87.7836 0 87.9987 0C88.0659 0 88.1331 0.00336064 88.2003 0.0100822C88.2676 0.0168038 88.3415 0.0268858 88.4222 0.040329L93.2819 12.0182C93.3625 12.2198 93.5171 12.371 93.7457 12.4719C93.9742 12.5727 94.2229 12.6433 94.4917 12.6836C94.6934 12.7239 94.7942 12.8584 94.7942 13.0869C94.7942 13.1944 94.7808 13.3154 94.7539 13.4499C94.3237 13.423 93.9003 13.3994 93.4835 13.3793C93.0668 13.3591 92.6769 13.349 92.314 13.349C92.1258 13.349 91.8972 13.3524 91.6284 13.3591C91.3595 13.3658 91.0839 13.3759 90.8016 13.3894C90.5193 13.4028 90.2404 13.4129 89.9648 13.4196C89.6892 13.4263 89.4573 13.4364 89.2691 13.4499C89.2422 13.3961 89.2288 13.3356 89.2288 13.2684V13.107C89.2288 12.9861 89.2523 12.8953 89.2993 12.8348C89.3464 12.7743 89.3968 12.7374 89.4506 12.7239C89.8001 12.6567 90.0589 12.5794 90.2269 12.492C90.3949 12.4046 90.479 12.2736 90.479 12.0988C90.479 12.0182 90.4588 11.9173 90.4185 11.7963L89.3498 8.91279ZM88.9666 7.90456L87.2526 3.3675L85.4983 7.90456H88.9666ZM100.514 11.8568C100.514 11.9913 100.524 12.1022 100.545 12.1896C100.565 12.2769 100.618 12.3542 100.706 12.4214C100.793 12.4887 100.921 12.5458 101.089 12.5928C101.257 12.6399 101.482 12.6836 101.764 12.7239C101.899 12.7508 101.966 12.8651 101.966 13.0667C101.966 13.1071 101.963 13.1675 101.956 13.2482C101.949 13.3289 101.939 13.3961 101.926 13.4499C101.496 13.423 101.035 13.3994 100.545 13.3793C100.054 13.3591 99.6203 13.349 99.2439 13.349C98.854 13.349 98.4172 13.3591 97.9332 13.3793C97.4492 13.3994 96.9922 13.423 96.562 13.4499C96.5351 13.3961 96.5217 13.3289 96.5217 13.2482V13.0667C96.5217 12.8516 96.5889 12.7374 96.7233 12.7239C97.0056 12.6836 97.2308 12.6399 97.3988 12.5928C97.5669 12.5458 97.6912 12.4887 97.7719 12.4214C97.8525 12.3542 97.9063 12.2769 97.9332 12.1896C97.9601 12.1022 97.9735 11.9913 97.9735 11.8568V1.75433C97.9735 1.6199 97.9601 1.50899 97.9332 1.42161C97.9063 1.33423 97.8525 1.25693 97.7719 1.18972C97.6912 1.1225 97.5669 1.06537 97.3988 1.01832C97.2308 0.971265 97.0056 0.927575 96.7233 0.887245C96.5889 0.846916 96.5217 0.73265 96.5217 0.544445V0.362963C96.5217 0.282304 96.5351 0.208367 96.562 0.141151C96.9922 0.168038 97.4492 0.191564 97.9332 0.211729C98.4172 0.231894 98.854 0.241976 99.2439 0.241976C99.6203 0.241976 100.054 0.231894 100.545 0.211729C101.035 0.191564 101.496 0.168038 101.926 0.141151C101.939 0.208367 101.949 0.282304 101.956 0.362963C101.963 0.443622 101.966 0.504115 101.966 0.544445C101.966 0.73265 101.899 0.846916 101.764 0.887245C101.482 0.927575 101.257 0.971265 101.089 1.01832C100.921 1.06537 100.793 1.1225 100.706 1.18972C100.618 1.25693 100.565 1.33423 100.545 1.42161C100.524 1.50899 100.514 1.6199 100.514 1.75433V11.8568ZM114.986 8.95312V1.79466C114.986 1.49891 114.885 1.29054 114.683 1.16955C114.482 1.04856 114.125 0.954461 113.615 0.887245C113.44 0.846916 113.352 0.719207 113.352 0.504116V0.342798C113.352 0.275582 113.366 0.208367 113.393 0.141151C113.729 0.181481 114.058 0.208368 114.381 0.221811C114.703 0.235254 115.08 0.241976 115.51 0.241976C115.94 0.241976 116.31 0.235254 116.619 0.221811C116.928 0.208368 117.238 0.181481 117.547 0.141151C117.56 0.208367 117.57 0.275582 117.577 0.342798C117.584 0.410014 117.587 0.463786 117.587 0.504116C117.587 0.73265 117.506 0.860359 117.345 0.887245C116.901 0.954461 116.599 1.04856 116.438 1.16955C116.276 1.29054 116.196 1.48546 116.196 1.75433V13.5507C116.142 13.5641 116.051 13.5742 115.923 13.5809C115.796 13.5876 115.712 13.591 115.671 13.591C115.577 13.591 115.476 13.5675 115.369 13.5204C115.261 13.4734 115.147 13.3759 115.026 13.228L107.081 3.14569V11.8568C107.081 11.9913 107.091 12.1022 107.111 12.1896C107.132 12.2769 107.185 12.3509 107.273 12.4114C107.36 12.4719 107.488 12.5256 107.656 12.5727C107.824 12.6197 108.049 12.6701 108.331 12.7239C108.399 12.7374 108.456 12.7676 108.503 12.8147C108.55 12.8617 108.573 12.9592 108.573 13.107C108.573 13.2012 108.56 13.3154 108.533 13.4499C108.197 13.423 107.881 13.3994 107.585 13.3793C107.29 13.3591 106.947 13.349 106.557 13.349C106.167 13.349 105.794 13.3591 105.438 13.3793C105.082 13.3994 104.756 13.423 104.46 13.4499C104.433 13.3961 104.419 13.3356 104.419 13.2684V13.107C104.419 12.9726 104.443 12.8785 104.49 12.8247C104.537 12.771 104.594 12.7374 104.661 12.7239C105.145 12.6433 105.468 12.5424 105.629 12.4214C105.791 12.3005 105.871 12.1123 105.871 11.8568V1.6535C105.871 1.43841 105.801 1.27374 105.66 1.15947C105.518 1.0452 105.199 0.954461 104.702 0.887245C104.54 0.846916 104.46 0.719207 104.46 0.504116V0.413376C104.46 0.379768 104.467 0.342799 104.48 0.302469L104.5 0.141151C104.688 0.154595 104.87 0.164677 105.045 0.171398C105.219 0.17812 105.394 0.188204 105.569 0.201647C105.865 0.21509 106.164 0.225172 106.466 0.231894C106.769 0.238615 107.014 0.241976 107.202 0.241976C107.592 0.241976 107.847 0.258779 107.968 0.292387C108.089 0.325995 108.197 0.389849 108.291 0.483952L114.986 8.95312ZM22.3559 36.2763C21.2267 36.2763 20.2386 36.1015 19.3917 35.752C18.5448 35.4025 17.8458 34.9219 17.2946 34.3102C16.7434 33.6986 16.33 32.9794 16.0544 32.1526C15.7789 31.3258 15.6411 30.4352 15.6411 29.4808C15.6411 28.6876 15.7755 27.8878 16.0444 27.0812C16.3132 26.2746 16.7367 25.5453 17.3148 24.8933C17.8928 24.2413 18.6322 23.7103 19.5329 23.3003C20.4336 22.8903 21.509 22.6853 22.7592 22.6853C23.4448 22.6853 24.0867 22.7323 24.6849 22.8264C25.2832 22.9205 25.9318 23.0617 26.6308 23.2499C26.6577 23.6129 26.7115 24.0766 26.7921 24.6413C26.8728 25.2059 26.9871 25.757 27.1349 26.2948C27.0677 26.3082 26.9803 26.325 26.8728 26.3452C26.7653 26.3653 26.6846 26.3754 26.6308 26.3754C26.5233 26.3754 26.4326 26.3586 26.3586 26.325C26.2847 26.2914 26.2343 26.2208 26.2074 26.1133C26.0595 25.6696 25.8915 25.2966 25.7032 24.9941C25.515 24.6917 25.2899 24.4497 25.0277 24.2682C24.7656 24.0867 24.4598 23.9557 24.1103 23.875C23.7607 23.7943 23.3507 23.754 22.8802 23.754C22.1543 23.754 21.5124 23.8784 20.9545 24.1271C20.3966 24.3758 19.9294 24.732 19.553 25.1958C19.1766 25.6596 18.8909 26.2175 18.696 26.8695C18.5011 27.5214 18.4036 28.2575 18.4036 29.0775C18.4036 29.9513 18.5213 30.7646 18.7565 31.5174C18.9918 32.2702 19.3144 32.9222 19.7244 33.4734C20.1344 34.0246 20.6218 34.4547 21.1864 34.7639C21.751 35.0731 22.3626 35.2277 23.0214 35.2277C23.5591 35.2277 24.0195 35.1773 24.4026 35.0765C24.7858 34.9757 25.1151 34.8211 25.3907 34.6127C25.6663 34.4043 25.9015 34.1388 26.0965 33.8162C26.2914 33.4935 26.4695 33.1171 26.6308 32.687C26.6712 32.5794 26.735 32.5021 26.8224 32.4551C26.9098 32.408 27.0005 32.3845 27.0946 32.3845C27.1619 32.3845 27.2459 32.3946 27.3467 32.4147C27.4475 32.4349 27.5315 32.4584 27.5988 32.4853C27.5181 32.7139 27.4341 32.9726 27.3467 33.2617C27.2593 33.5507 27.1686 33.8464 27.0745 34.1489C26.9804 34.4514 26.8963 34.7538 26.8224 35.0563C26.7484 35.3588 26.6846 35.6512 26.6308 35.9335C25.9721 36.0545 25.3 36.1419 24.6144 36.1956C23.9288 36.2494 23.176 36.2763 22.3559 36.2763ZM37.4122 31.5981H33.1776L32.1291 34.401C32.0887 34.4682 32.0618 34.5421 32.0484 34.6228C32.035 34.7034 32.0283 34.7639 32.0283 34.8043C32.0283 34.9521 32.0988 35.0731 32.24 35.1672C32.3811 35.2613 32.6668 35.342 33.097 35.4092C33.2852 35.4361 33.3793 35.5638 33.3793 35.7923C33.3793 35.8864 33.3658 36.0007 33.339 36.1351C32.976 36.1082 32.5929 36.0847 32.1896 36.0646C31.7863 36.0444 31.3897 36.0343 30.9998 36.0343C30.731 36.0343 30.4487 36.041 30.1529 36.0545C29.8572 36.0679 29.5278 36.0948 29.1649 36.1351C29.138 36.0814 29.1245 36.0209 29.1245 35.9536V35.7923C29.1245 35.5369 29.2119 35.4025 29.3867 35.389C29.8034 35.3084 30.1025 35.221 30.284 35.1269C30.4655 35.0328 30.61 34.8715 30.7176 34.6429L35.5772 23.0281C35.6848 22.7995 35.8461 22.6853 36.0612 22.6853C36.1284 22.6853 36.1956 22.6886 36.2628 22.6954C36.3301 22.7021 36.404 22.7122 36.4846 22.7256L41.3443 34.7034C41.425 34.9051 41.5796 35.0563 41.8081 35.1571C42.0367 35.258 42.2854 35.3285 42.5542 35.3689C42.7559 35.4092 42.8567 35.5436 42.8567 35.7722C42.8567 35.8797 42.8433 36.0007 42.8164 36.1351C42.3862 36.1082 41.9627 36.0847 41.546 36.0646C41.1292 36.0444 40.7394 36.0343 40.3764 36.0343C40.1882 36.0343 39.9597 36.0377 39.6908 36.0444C39.422 36.0511 39.1464 36.0612 38.8641 36.0746C38.5818 36.0881 38.3028 36.0982 38.0273 36.1049C37.7517 36.1116 37.5198 36.1217 37.3316 36.1351C37.3047 36.0814 37.2912 36.0209 37.2912 35.9536V35.7923C37.2912 35.6713 37.3148 35.5806 37.3618 35.5201C37.4089 35.4596 37.4593 35.4226 37.5131 35.4092C37.8626 35.342 38.1214 35.2647 38.2894 35.1773C38.4574 35.0899 38.5414 34.9589 38.5414 34.7841C38.5414 34.7034 38.5213 34.6026 38.481 34.4816L37.4122 31.5981ZM37.0291 30.5898L35.3151 26.0528L33.5608 30.5898H37.0291ZM48.7582 30.5293V34.401C48.7582 34.7102 48.8893 34.9286 49.1514 35.0563C49.4136 35.184 49.8606 35.2882 50.4924 35.3689C50.6806 35.3958 50.7747 35.5302 50.7747 35.7722C50.7747 35.8797 50.7613 36.0007 50.7344 36.1351C50.3445 36.1082 49.8572 36.0847 49.2724 36.0646C48.6877 36.0444 48.0525 36.0343 47.3669 36.0343C46.8829 36.0343 46.4158 36.0444 45.9654 36.0646C45.5151 36.0847 45.095 36.1082 44.7051 36.1351C44.6782 36.0814 44.6648 36.0209 44.6648 35.9536V35.7923C44.6648 35.5638 44.7387 35.4361 44.8866 35.4092C45.1689 35.3554 45.3974 35.305 45.5722 35.258C45.747 35.2109 45.8814 35.1571 45.9755 35.0966C46.0696 35.0362 46.1334 34.9622 46.1671 34.8748C46.2007 34.7875 46.2175 34.6765 46.2175 34.5421V24.4396C46.2175 24.1707 46.12 23.9758 45.9251 23.8548C45.7302 23.7338 45.3571 23.6397 44.8059 23.5725C44.7387 23.5456 44.685 23.5053 44.6446 23.4515C44.6043 23.3978 44.5841 23.3037 44.5841 23.1692V22.9877C44.5841 22.9205 44.5976 22.8668 44.6245 22.8264C45.0009 22.8533 45.4344 22.8768 45.9251 22.897C46.4158 22.9172 46.856 22.9273 47.2459 22.9273H50.2907C51.7292 22.9273 52.8516 23.2499 53.6582 23.8952C54.4648 24.5404 54.8681 25.4411 54.8681 26.5972C54.8681 27.1215 54.7673 27.6223 54.5656 28.0995C54.364 28.5767 54.0649 28.9935 53.6683 29.3497C53.2718 29.706 52.7912 29.9916 52.2266 30.2067C51.6619 30.4218 51.0167 30.5293 50.2907 30.5293H48.7582ZM49.3632 29.5211C50.1832 29.5211 50.8453 29.3127 51.3494 28.896C51.8535 28.4793 52.1056 27.7735 52.1056 26.7787C52.1056 25.878 51.9073 25.179 51.5107 24.6816C51.1141 24.1842 50.3983 23.9355 49.3632 23.9355H48.7582V29.5211H49.3632ZM61.2536 34.5421C61.2536 34.6765 61.2637 34.7875 61.2838 34.8748C61.304 34.9622 61.3578 35.0395 61.4452 35.1067C61.5325 35.1739 61.6603 35.2311 61.8283 35.2781C61.9963 35.3252 62.2215 35.3689 62.5038 35.4092C62.6382 35.4361 62.7055 35.5504 62.7055 35.752C62.7055 35.7923 62.7021 35.8528 62.6954 35.9335C62.6887 36.0141 62.6786 36.0814 62.6651 36.1351C62.2349 36.1082 61.7745 36.0847 61.2838 36.0646C60.7932 36.0444 60.3597 36.0343 59.9832 36.0343C59.5934 36.0343 59.1565 36.0444 58.6725 36.0646C58.1886 36.0847 57.7315 36.1082 57.3013 36.1351C57.2744 36.0814 57.261 36.0141 57.261 35.9335V35.752C57.261 35.5369 57.3282 35.4226 57.4626 35.4092C57.745 35.3689 57.9701 35.3252 58.1382 35.2781C58.3062 35.2311 58.4305 35.1739 58.5112 35.1067C58.5919 35.0395 58.6456 34.9622 58.6725 34.8748C58.6994 34.7875 58.7129 34.6765 58.7129 34.5421V24.4396C58.7129 24.3052 58.6994 24.1943 58.6725 24.1069C58.6456 24.0195 58.5919 23.9422 58.5112 23.875C58.4305 23.8078 58.3062 23.7506 58.1382 23.7036C57.9701 23.6565 57.745 23.6129 57.4626 23.5725C57.3282 23.5322 57.261 23.4179 57.261 23.2297V23.0482C57.261 22.9676 57.2744 22.8936 57.3013 22.8264C57.7315 22.8533 58.1886 22.8768 58.6725 22.897C59.1565 22.9172 59.5934 22.9273 59.9832 22.9273C60.3597 22.9273 60.7932 22.9172 61.2838 22.897C61.7745 22.8768 62.2349 22.8533 62.6651 22.8264C62.6786 22.8936 62.6887 22.9676 62.6954 23.0482C62.7021 23.1289 62.7055 23.1894 62.7055 23.2297C62.7055 23.4179 62.6382 23.5322 62.5038 23.5725C62.2215 23.6129 61.9963 23.6565 61.8283 23.7036C61.6603 23.7506 61.5325 23.8078 61.4452 23.875C61.3578 23.9422 61.304 24.0195 61.2838 24.1069C61.2637 24.1943 61.2536 24.3052 61.2536 24.4396V34.5421ZM72.3375 23.9355V34.5421C72.3375 34.6765 72.3475 34.7875 72.3677 34.8748C72.3879 34.9622 72.4383 35.0395 72.519 35.1067C72.5996 35.1739 72.7139 35.2311 72.8618 35.2781C73.0096 35.3252 73.218 35.3689 73.4868 35.4092C73.6885 35.4495 73.7893 35.5638 73.7893 35.752C73.7893 35.7923 73.786 35.8528 73.7792 35.9335C73.7725 36.0141 73.7624 36.0814 73.749 36.1351C73.3188 36.1082 72.8584 36.0847 72.3677 36.0646C71.877 36.0444 71.4435 36.0343 71.0671 36.0343C70.6773 36.0343 70.2437 36.0444 69.7665 36.0646C69.2892 36.0847 68.8355 36.1082 68.4054 36.1351C68.3785 36.0814 68.3617 36.0141 68.3549 35.9335C68.3482 35.8528 68.3448 35.7923 68.3448 35.752C68.3448 35.6579 68.3617 35.5806 68.3953 35.5201C68.4289 35.4596 68.5196 35.4159 68.6675 35.389C69.1649 35.3218 69.4775 35.2311 69.6052 35.1168C69.7329 35.0025 69.7967 34.811 69.7967 34.5421V23.9355H68.0222C67.6458 23.9355 67.3265 23.9725 67.0644 24.0464C66.8023 24.1203 66.5737 24.2346 66.3788 24.3892C66.1839 24.5438 66.0091 24.7454 65.8545 24.9941C65.6999 25.2428 65.542 25.5419 65.3806 25.8915C65.3269 26.0125 65.2261 26.0729 65.0782 26.0729C64.9975 26.0729 64.9034 26.0561 64.7959 26.0225C64.6883 25.9889 64.6077 25.9587 64.5539 25.9318C64.648 25.6092 64.7287 25.3235 64.7959 25.0748C64.8631 24.8261 64.9169 24.5808 64.9572 24.3388C65.011 24.0296 65.0513 23.754 65.0782 23.512C65.1051 23.2701 65.1387 23.0953 65.179 22.9877C65.2328 22.8668 65.3403 22.8063 65.5016 22.8063C65.6495 22.8063 65.9419 22.8264 66.3788 22.8668C66.8157 22.9071 67.3433 22.9273 67.9617 22.9273H74.1725C74.7774 22.9273 75.2983 22.9071 75.7352 22.8668C76.1721 22.8264 76.4712 22.8063 76.6325 22.8063C76.7804 22.8063 76.888 22.8668 76.9552 22.9877C76.9955 23.0953 77.0258 23.2701 77.0459 23.512C77.0661 23.754 77.1098 24.0296 77.177 24.3388C77.2173 24.5808 77.2677 24.8261 77.3282 25.0748C77.3887 25.3235 77.4727 25.6092 77.5803 25.9318C77.5131 25.9587 77.429 25.9889 77.3282 26.0225C77.2274 26.0561 77.1367 26.0729 77.056 26.0729C76.9081 26.0729 76.8006 26.0125 76.7334 25.8915C76.5721 25.5419 76.4141 25.2428 76.2595 24.9941C76.1049 24.7454 75.9302 24.5438 75.7352 24.3892C75.5403 24.2346 75.3118 24.1203 75.0496 24.0464C74.7875 23.9725 74.4749 23.9355 74.112 23.9355H72.3375ZM84.7724 31.5981H80.5378L79.4892 34.401C79.4489 34.4682 79.422 34.5421 79.4086 34.6228C79.3951 34.7034 79.3884 34.7639 79.3884 34.8043C79.3884 34.9521 79.459 35.0731 79.6001 35.1672C79.7413 35.2613 80.0269 35.342 80.4571 35.4092C80.6453 35.4361 80.7394 35.5638 80.7394 35.7923C80.7394 35.8864 80.726 36.0007 80.6991 36.1351C80.3361 36.1082 79.953 36.0847 79.5497 36.0646C79.1464 36.0444 78.7498 36.0343 78.36 36.0343C78.0911 36.0343 77.8088 36.041 77.5131 36.0545C77.2173 36.0679 76.888 36.0948 76.525 36.1351C76.4981 36.0814 76.4847 36.0209 76.4847 35.9536V35.7923C76.4847 35.5369 76.5721 35.4025 76.7468 35.389C77.1636 35.3084 77.4627 35.221 77.6441 35.1269C77.8256 35.0328 77.9702 34.8715 78.0777 34.6429L82.9374 23.0281C83.0449 22.7995 83.2062 22.6853 83.4213 22.6853C83.4885 22.6853 83.5558 22.6886 83.623 22.6954C83.6902 22.7021 83.7641 22.7122 83.8448 22.7256L88.7045 34.7034C88.7851 34.9051 88.9397 35.0563 89.1683 35.1571C89.3968 35.258 89.6455 35.3285 89.9144 35.3689C90.116 35.4092 90.2168 35.5436 90.2168 35.7722C90.2168 35.8797 90.2034 36.0007 90.1765 36.1351C89.7463 36.1082 89.3229 36.0847 88.9061 36.0646C88.4894 36.0444 88.0995 36.0343 87.7366 36.0343C87.5484 36.0343 87.3198 36.0377 87.051 36.0444C86.7821 36.0511 86.5065 36.0612 86.2242 36.0746C85.9419 36.0881 85.663 36.0982 85.3874 36.1049C85.1118 36.1116 84.8799 36.1217 84.6917 36.1351C84.6648 36.0814 84.6514 36.0209 84.6514 35.9536V35.7923C84.6514 35.6713 84.6749 35.5806 84.722 35.5201C84.769 35.4596 84.8194 35.4226 84.8732 35.4092C85.2227 35.342 85.4815 35.2647 85.6495 35.1773C85.8176 35.0899 85.9016 34.9589 85.9016 34.7841C85.9016 34.7034 85.8814 34.6026 85.8411 34.4816L84.7724 31.5981ZM84.3892 30.5898L82.6752 26.0528L80.9209 30.5898H84.3892ZM96.1184 34.3203C96.1184 34.6026 96.2998 34.7908 96.6628 34.8849C97.0258 34.979 97.624 35.0261 98.4575 35.0261H99.2237C99.5598 35.0261 99.8522 34.9891 100.101 34.9152C100.35 34.8412 100.568 34.7169 100.756 34.5421C100.944 34.3674 101.116 34.1422 101.27 33.8666C101.425 33.591 101.576 33.2583 101.724 32.8684C101.764 32.7609 101.865 32.7071 102.027 32.7071C102.094 32.7071 102.174 32.7273 102.269 32.7676L102.551 32.8886C102.443 33.3188 102.346 33.7859 102.259 34.2901C102.171 34.7942 102.094 35.2882 102.027 35.7722C102.013 35.9335 101.969 36.0343 101.896 36.0746C101.822 36.115 101.744 36.1351 101.664 36.1351C101.556 36.1351 101.405 36.1284 101.21 36.115C101.015 36.1015 100.803 36.0914 100.575 36.0847C100.346 36.078 100.114 36.0679 99.8791 36.0545C99.6438 36.041 99.4388 36.0343 99.2641 36.0343H94.6867C94.2968 36.0343 93.8498 36.0444 93.3457 36.0646C92.8416 36.0847 92.3879 36.1082 91.9846 36.1351C91.9577 36.0814 91.9443 36.0108 91.9443 35.9234V35.7318C91.9443 35.5302 92.0115 35.4226 92.1459 35.4092C92.6567 35.3151 93.0231 35.2143 93.2449 35.1067C93.4667 34.9992 93.5776 34.811 93.5776 34.5421V24.4396C93.5776 24.3052 93.5642 24.1943 93.5373 24.1069C93.5104 24.0195 93.4566 23.9422 93.376 23.875C93.2953 23.8078 93.171 23.7506 93.0029 23.7036C92.8349 23.6565 92.6097 23.6129 92.3274 23.5725C92.193 23.5322 92.1258 23.4179 92.1258 23.2297V23.0482C92.1258 22.9676 92.1392 22.8936 92.1661 22.8264C92.5963 22.8533 93.0533 22.8768 93.5373 22.897C94.0212 22.9172 94.4514 22.9273 94.8278 22.9273C95.016 22.9273 95.2311 22.9239 95.4731 22.9172C95.7151 22.9105 95.9671 22.9037 96.2293 22.897C96.4914 22.8903 96.7535 22.8802 97.0157 22.8668C97.2778 22.8533 97.5164 22.8399 97.7315 22.8264C97.745 22.8936 97.7551 22.9676 97.7618 23.0482C97.7685 23.1289 97.7719 23.1894 97.7719 23.2297C97.7719 23.4179 97.7047 23.5322 97.5702 23.5725C96.9922 23.6532 96.6057 23.7574 96.4108 23.8851C96.2158 24.0128 96.1184 24.2111 96.1184 24.4799V34.3203Z"
              fill="#6E7898"></path>
          </svg>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        style={{ marginTop: '10vh', height: '95vh' }}
        id="CarouselDesktop">
        <Grid
          container
          xs={12}
          style={{
            borderRadius: '25px',
            background:
              'linear-gradient(90deg,rgba(0, 91, 234, 1) 0%,rgba(0, 198, 251, 1) 50%,rgba(68, 129, 235, 1) 100%)',
            height: '85%',
            width: '85%'
          }}>
          <Grid
            item
            xs={12}
            align="center"
            style={{ marginTop: '26vh', lineHeight: '10px' }}>
            <Typography
              style={{ color: 'white', fontSize: '66px', fontWeight: '600' }}>
              Start saving today.
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{ marginTop: '-12vh' }}>
            <Typography
              style={{
                color: 'white',
                fontSize: '20px',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
              Join thousands of people earning
              <br /> interest on Dharma today
            </Typography>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} align="center" style={{ marginTop: '-15vh' }}>
            <ButtonApple />
          </Grid>
          <Grid item xs={3} align="center" style={{ marginTop: '-15vh' }}>
            <Button
              variant="contained"
              color="primary"
              style={{
                background: 'rgb(31, 42, 75)',
                color: 'white',
                width: '200px',
                zIndex: '4',
                height: '85px',
                fontWeight: '600',
                borderRadius: '15px'
              }}>
              <svg
                style={{ width: '40px', color: 'white', zIndex: '20' }}
                width="2.3px,4px"
                height="3.5px,4px"
                viewBox="0 0 32 35"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bZQynM dQJoOP">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.93205 0.847113C0.542115 1.2669 0.316895 1.90833 0.316895 2.7479V32.5258C0.316895 33.3653 0.542115 34.0068 0.945496 34.4098L1.0497 34.5004L17.7497 17.8165V17.4437L1.03626 0.756439L0.93205 0.847113Z"
                  fill="white"></path>
                <path
                  opacity="0.8"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3063 23.3946L17.7363 17.8299V17.4404L23.3063 11.8757L23.4274 11.9496L30.0159 15.6907C31.9017 16.7519 31.9017 18.5049 30.0159 19.5796L23.4274 23.3207L23.3063 23.3946Z"
                  fill="white"></path>
                <path
                  opacity="0.9"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4268 23.3207L17.7358 17.6352L0.931641 34.4232C1.5468 35.0814 2.57878 35.1553 3.73177 34.5139L23.4268 23.3207Z"
                  fill="white"></path>
                <path
                  opacity="0.7"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4268 11.9496L3.73177 0.773236C2.57878 0.115013 1.54343 0.205687 0.931641 0.86391L17.7358 17.6352L23.4268 11.9496Z"
                  fill="white"></path>
                <path
                  opacity="0.2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3061 23.1998L3.74545 34.3023C2.65296 34.9303 1.67812 34.8866 1.04952 34.3157L0.945312 34.4198L1.04952 34.5105C1.67812 35.0781 2.65296 35.1251 3.74545 34.4971L23.4405 23.3207L23.3061 23.1998Z"
                  fill="white"
                  fill-opacity="0.2"></path>
              </svg>

              <Typography
                style={{
                  fontSize: '15px',
                  color: 'white',
                  paddingLeft: '3vh',
                  textAlign: 'left'
                }}>
                Get it on
                <br />
                <b>Google Play</b>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        style={{ marginTop: '10vh' }}
        align="center"
        id="CarouselMobile">
        <Grid
          container
          xs={12}
          align="center"
          style={{
            borderRadius: '25px',
            background:
              'linear-gradient(90deg,rgba(0, 91, 234, 1) 0%,rgba(0, 198, 251, 1) 50%,rgba(68, 129, 235, 1) 100%)',
            height: '120vw',
            width: '60vh'
          }}>
          <Grid
            item
            xs={12}
            align="center"
            style={{ paddingTop: '10vh', lineHeight: '10px' }}>
            <Typography
              style={{ color: 'white', fontSize: '30px', fontWeight: '600' }}>
              Start saving today.
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{}}>
            <Typography
              style={{
                color: 'white',
                fontSize: '15px',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
              Join thousands of people earning
              <br />
              interest on Dharma today
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{ marginBottom: '-1rem' }}>
            <ButtonApple />
          </Grid>
          <Grid item xs={12} align="center" style={{}}>
            <Button
              variant="contained"
              color="primary"
              style={{
                background: 'rgb(31, 42, 75)',
                color: 'white',
                width: '220px',
                zIndex: '4',
                height: '85px',
                fontWeight: '600',
                borderRadius: '20px'
              }}>
              <svg
                style={{ width: '40px', color: 'white', zIndex: '20' }}
                width="2.3px,4px"
                height="3.5px,4px"
                viewBox="0 0 32 35"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bZQynM dQJoOP">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.93205 0.847113C0.542115 1.2669 0.316895 1.90833 0.316895 2.7479V32.5258C0.316895 33.3653 0.542115 34.0068 0.945496 34.4098L1.0497 34.5004L17.7497 17.8165V17.4437L1.03626 0.756439L0.93205 0.847113Z"
                  fill="white"></path>
                <path
                  opacity="0.8"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3063 23.3946L17.7363 17.8299V17.4404L23.3063 11.8757L23.4274 11.9496L30.0159 15.6907C31.9017 16.7519 31.9017 18.5049 30.0159 19.5796L23.4274 23.3207L23.3063 23.3946Z"
                  fill="white"></path>
                <path
                  opacity="0.9"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4268 23.3207L17.7358 17.6352L0.931641 34.4232C1.5468 35.0814 2.57878 35.1553 3.73177 34.5139L23.4268 23.3207Z"
                  fill="white"></path>
                <path
                  opacity="0.7"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4268 11.9496L3.73177 0.773236C2.57878 0.115013 1.54343 0.205687 0.931641 0.86391L17.7358 17.6352L23.4268 11.9496Z"
                  fill="white"></path>
                <path
                  opacity="0.2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3061 23.1998L3.74545 34.3023C2.65296 34.9303 1.67812 34.8866 1.04952 34.3157L0.945312 34.4198L1.04952 34.5105C1.67812 35.0781 2.65296 35.1251 3.74545 34.4971L23.4405 23.3207L23.3061 23.1998Z"
                  fill="white"
                  fill-opacity="0.2"></path>
              </svg>

              <Typography
                style={{
                  fontSize: '15px',
                  color: 'white',
                  paddingLeft: '3vh',
                  textAlign: 'left'
                }}>
                <b>
                  Get it on
                  <br />
                  Google Play
                </b>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        align="center"
        id="CarouselDesktop"
        style={{ marginTop: '8vh' }}>
        <Grid item xs={2} />
        <Grid item xs={8} align="center">
          <Grid container xs={12}>
            <Grid item xs={3} />
            <Grid
              container
              xs={6}
              style={{ marginTop: '2vh' }}
              align="center"
              justify="space-evenly">
              <Grid item xs={2}>
                <Typography
                  style={{
                    fontSize: '14px',
                    marginTop: '-2.4vh',
                    opactiy: '0.8',
                    color: 'rgb(110, 120, 152)',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse10}
                  onMouseLeave={mouseout10}
                  id="colorstext10">
                  {' '}
                  Twitter
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    opactiy: '0.8',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse11}
                  onMouseLeave={mouseout11}
                  id="colorstext11">
                  {' '}
                  Careers
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    opactiy: '0.8',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse12}
                  onMouseLeave={mouseout12}
                  id="colorstext12">
                  Blog
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse13}
                  onMouseLeave={mouseout13}
                  id="colorstext13">
                  Discord
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    opactiy: '0.8',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse14}
                  onMouseLeave={mouseout14}
                  id="colorstext14">
                  Terms
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        id="CarouselMobile"
        align="center"
        style={{ marginTop: '7vh' }}>
        <Grid item xs={12} align="center">
          <Grid container xs={12} justify="space-evenly">
            <Grid
              container
              xs={12}
              style={{ marginTop: '2vh', lineHeight: '60px' }}
              align="center"
              justify="space-evenly">
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    opactiy: '0.8',

                    color: 'rgb(110, 120, 152)',
                    fontWeight: '500'
                  }}
                  onMouseEnter={mouse11}
                  onMouseLeave={mouseout11}
                  id="colorstext11">
                  {' '}
                  Twitter
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: '8vh' }}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    opactiy: '0.8',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse11}
                  onMouseLeave={mouseout11}
                  id="colorstext11">
                  {' '}
                  Careers
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: '8vh' }}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    opactiy: '0.8',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse12}
                  onMouseLeave={mouseout12}
                  id="colorstext12">
                  Blog
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: '8vh' }}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse13}
                  onMouseLeave={mouseout13}
                  id="colorstext13">
                  Discord
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: '8vh' }}>
                <Typography
                  style={{
                    color: 'rgb(110, 120, 152)',
                    fontSize: '15px',
                    marginTop: '-2.4vh',
                    opactiy: '0.8',
                    fontWeight: '450'
                  }}
                  onMouseEnter={mouse14}
                  onMouseLeave={mouseout14}
                  id="colorstext14">
                  Terms
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} id="CarouselDesktop" style={{ marginTop: '4vh' }}>
        <Grid item xs={3} />
        <Grid container xs={6} align="center" style={{}}>
          <Grid item xs={12} style={{ paddingTop: '3vh' }}>
            <div
              style={{ height: '.1px', backgroundColor: 'grey', opacity: 0.5 }}
            />
          </Grid>
          <Grid item xs={12} style={{ paddingTop: '10vh' }}>
            <Typography
              style={{
                color: 'rgba(110, 120, 152,1)',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '1.6'
              }}>
              Digital currency is not legal tender, is not backed by the
              government, and digital currency accounts and <br />
              value balances on Dharma are not subject to Federal Deposit
              Insurance Corporation or Securities <br />
              Investor Protection Corporation protections. Dharma is not a bank
              and does not offer fiduciary services. <br />
              The interest rates reflected on this page are as of the current
              date and time, and may change at any time,
              <br />
              before or after the account is opened on Dharma.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3} />
      </Grid>
      <Grid container xs={12} style={{ marginTop: '5vh' }}>
        <Grid
          item
          xs={12}
          id="CarouselMobile"
          style={{ paddingTop: '0vh', paddingBottom: '4vh' }}>
          <div
            style={{ height: '.1px', backgroundColor: 'grey', opacity: 0.5 }}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={10} id="CarouselMobile" align="center">
          <Typography
            style={{
              color: 'rgb(110, 120, 152)',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
            Digital currency is not legal tender, is not backed by the
            government, and digital currency accounts and value balances on
            Dharma are not subject to Federal Deposit Insurance Corporation or
            Securities Investor Protection Corporation protections. Dharma is
            not a bank and does not offer fiduciary services. The interest rates
            reflected on this page are as of the current date and time, and may
            change at any time, before or after the account is opened on Dharma.
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <div
        className={'ModalContainer' + ' ' + modalState}
        onClick={paidHandler}>
        <div className="Modal">
          <img
            src={require('../../../../assets/submitted.png')}
            alt="payment successful"
          />
          Payment Sent
        </div>
      </div>
    </Grid>
  );
};
Landingpage.propTypes = {
  className: PropTypes.string
};

export default Landingpage;
