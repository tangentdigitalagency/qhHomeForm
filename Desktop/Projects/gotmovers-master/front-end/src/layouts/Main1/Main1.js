import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import background from '../../assets/background.png';
import { Sidebar, Topbar, Footer } from './components';
import '../../App.css';
const useStyles = makeStyles(theme => ({
  root: {
    '@media(max-width: 787px)': {
      overflow: 'scroll'
    }
  }
}));

const Main1 = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 'auto'
      }}
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}>
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <main className={classes.content} style={{}}>
        {children}
        <Footer
          id="FooterGrey"
          style={{ marginTop: '20vh', zIndex: '10', paddingTop: '15vh' }}
        />
      </main>
      <Grid container xs={12} style={{ position: 'absolute' }}>
        <div
          id="contentFooterLining"
          style={{
            opacity: '.7',
            background: 'silver',
            position: 'absolute',
            zIndex: '0',
            width: '100%',
            height: '25vh'
          }}
        />
      </Grid>
    </div>
  );
};

Main1.propTypes = {
  children: PropTypes.node
};

export default Main1;
