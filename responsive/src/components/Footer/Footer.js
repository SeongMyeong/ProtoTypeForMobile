import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '50px',
    background: 'grey',
    bottom: '0',
    position: 'fixed'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      footer
    </div>
  );
};

export default Footer;
