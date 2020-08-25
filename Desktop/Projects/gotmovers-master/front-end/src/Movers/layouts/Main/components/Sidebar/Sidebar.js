import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import { Profile, SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/mover/Dashboard',
      icon: <DashboardIcon />
    },
    // {
    //   title: 'Residential',
    //   href: '/admin/Residential',
    //   icon: <DashboardIcon />
    // },
    // {
    //   title: 'Commercial',
    //   href: '/admin/Commercial',
    //   icon: <DashboardIcon />
    // },
    // {
    //   title: 'Movers',
    //   href: '/mover/Stores',
    //   icon: <DashboardIcon />
    // },
   
    // , commericial, mover
    {
      title: 'Requests',
      href: '/mover/Orders',
      icon: <ImageIcon />
    },
    // {
    //   title: 'Category',
    //   href: '/mover/Category',
    //   icon: <ImageIcon />
    // },
    // {
    //   title: 'Deliveries',
    //   href: '/mover/Deliveries',
    //   icon: <ImageIcon />
    // },
    // {
    //   title: 'Vehical',
    //   href: '/mover/Vehical',
    //   icon: <ImageIcon />
    // },
   

    {

      title: 'Account',
      href: '/mover/Account',
      icon: <AccountBoxIcon />
    },
    {
      title: 'Settings',
      href: '/mover/Settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <UpgradePlan />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
