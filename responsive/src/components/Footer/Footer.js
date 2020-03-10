import React, { useState, useCallback } from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useEventListener from '../../common/useEventListener';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 0,
    width: '100%',
    height: '50px',
    maxHeight: '1200px',
    bottom: '0',
    position: 'fixed',
    transition: 'all 1s',
    backgroundColor: 'white'
  }
}));

const Footer = props => {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  // const [isBottomNavigationView, setIsBottomNavigationView] = useState(true)

  // private function
  // const windowScrollHandler = useCallback(() => {
  //   let windowScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
  //   if (windowScrollY < 100) {
  //     setIsBottomNavigationView(false);
  //   } else {
  //     setIsBottomNavigationView(true);
  //   }
  // }, [window.scrollY]);

  // useEventListener('scroll', windowScrollHandler);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    // style={{ display: isBottomNavigationView ? 'flex' : 'none' }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default Footer;