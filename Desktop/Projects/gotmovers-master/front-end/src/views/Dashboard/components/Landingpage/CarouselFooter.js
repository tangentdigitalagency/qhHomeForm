import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import 'antd/dist/antd.css';
import { makeStyles } from '@material-ui/styles';

import { Carousel } from 'antd';
const useStyles = makeStyles(theme => ({
  root: {},
  Carousel: {
    fontWeight: '600',
    zIndex: '100'
  },
  Page1: {
    fontSize: '30px',
    color: 'black',
    lineHeight: '1',
    '@media(max-width:768px)': {
      fontSize: '22px'
    }
  },
  Same: {
    fontWeight: '500',
    color: 'black !important',
    fontSize: '18px',
    marginTop: '-4vh',
    lineHeight: '1.5'
  },
  Same1: {
    fontWeight: '500',
    fontSize: '18px',
    color: 'black !important',
    lineHeight: '32px',
    // marginTop: '-12px',
    marginTop: '5vh',
    '@media(max-width:768px)': {
      marginTop: '0vh !important'
    }
  },
  Different: {
    color: 'black !important',
    fontSize: '35px',
    marginTop: '1vh',
    lineHeight: '30px',
    '@media(max-width:768px)': {
      fontSize: '22px'
    }
  }
}));
const CarouselFooter = () => {
  const classes = useStyles();
  return (
    <Carousel dots={false} className={classes.Carousel} style={{}}>
      <div>
        <Grid
          container
          xs={12}
          id="wrapperContentFooter"
          style={{ marginTop: '3rem', justifyContent: 'center' }}>
          <Grid container lg={8} xs={12}>
            <Grid
              item
              lg={3}
              xs={3}
              align="center"
              style={{ alignSelf: 'center' }}>
              <img
                id="footerImg"
                width="100"
                src={require('../../../../assets/1.png')}
              />
            </Grid>
            <Grid item lg={9} xs={8} style={{ alignSelf: 'center' }}>
              <Typography id="contentFooter">
                <h3
                  style={{
                    fontWeight: '400',
                    color: 'black',
                    fontSize: '28px',
                    lineHeight: 1.5
                  }}>
                  Select the town your're moving from and moving to the date and
                  time
                </h3>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          container
          xs={12}
          id="wrapperContentFooter"
          style={{ marginTop: '3rem', justifyContent: 'center' }}>
          <Grid container lg={8} xs={12}>
            <Grid
              item
              lg={3}
              xs={3}
              align="center"
              style={{ alignSelf: 'center' }}>
              <img
                id="footerImg"
                width="100"
                src={require('../../../../assets/2.png')}
              />
            </Grid>
            <Grid item lg={9} xs={8} style={{ alignSelf: 'center' }}>
              <Typography id="contentFooter">
                <h3
                  style={{
                    fontWeight: '400',
                    color: 'black',
                    fontSize: '28px',
                    lineHeight: 1.5
                  }}>
                  Tell us what items you want to move with just a few clicks
                </h3>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          container
          xs={12}
          id="wrapperContentFooter"
          style={{ marginTop: '3rem', justifyContent: 'center' }}>
          <Grid container lg={8} xs={12}>
            <Grid
              item
              lg={3}
              xs={3}
              align="center"
              style={{ alignSelf: 'center' }}>
              <img
                id="footerImg"
                width="100"
                src={require('../../../../assets/3.png')}
              />
            </Grid>
            <Grid item lg={9} xs={8} style={{ alignSelf: 'center' }}>
              <Typography id="contentFooter">
                <h3
                  style={{
                    fontWeight: '400',
                    color: 'black',
                    fontSize: '28px',
                    lineHeight: 1.5
                  }}>
                  Reserve now & pay the rest day of your move
                </h3>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* <div>
        <Grid container xs={12}>
          <Grid item xs={1} />
          <Grid item xs={10} style={{ marginTop: '0vh' }}>
            <h3
              class="different"
              className={['different', classes.Different].join(' ')}
              style={{}}>
              Who will contact you and how?
              <Typography
                style={{
                  color: 'black',
                  fontWeight: '600',
                  marginTop: '2vh',
                  fontSize: '13px'
                }}>
                You will be contacted by the moving companies via phone or
                email. The first four companies to accept your quote will
                email/call you. We guarantee that you will be
                <br /> contacted by professional movers, however, it's always
                best to do your own research when deciding on a moving company.
                If you are not contacted by any moving company or you are not
                satisfied with the list of moving companies provided, you can
                resend your quote and you will receive a new list of moving
                companies.
              </Typography>
            </h3>
          </Grid>
        </Grid>
      </div> */}
    </Carousel>
  );
};
export default CarouselFooter;
