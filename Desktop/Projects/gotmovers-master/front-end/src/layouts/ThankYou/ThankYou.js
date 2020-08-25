import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import thankyou from "../../assets/thankyou.png"
import { Sidebar, Topbar, Footer } from './components';
import "../../App.css";
const useStyles = makeStyles(theme => ({
  root:{
    '@media(max-width: 787px)':{
      overflow:'scroll'
    }
  }
}));

const ThankYou = props => {
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
    <div style={{backgroundImage: `url(${thankyou})`,height:'100vh',backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen}/>
      <main className={classes.content} style={{}}>
        {children}

        <Footer style={{}} />
      </main>
    </div>
  );
};

ThankYou.propTypes = {
  children: PropTypes.node
};

export default ThankYou;