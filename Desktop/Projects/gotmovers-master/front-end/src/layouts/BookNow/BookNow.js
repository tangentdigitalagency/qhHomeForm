import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Topbar, Footer } from './components';
import backgroundMinimal from '../../assets/backgroundminimal.png';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    '@media(max-width: 787px)':{
      overflow:'scroll'
    }
  },
  content: {
    height: '100%'
  }
}));

const BookNow = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${backgroundMinimal})`,
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

BookNow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default BookNow;
