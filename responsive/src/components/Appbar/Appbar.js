import React, { useEffect, useCallback } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useEventListener from '../../common/useEventListener';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useSelector } from 'react-redux';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    top: 0,
  },
  appBar: {
    //opacity: 0.2,
    background: 'transparent',
    color: 'white',
    position: 'fixed',
    transition: 'all 1s',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: '10px',
  },
  sectionDivide: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

let defaultOption = ['홈', '영화', '최신컨텐츠', '내가 찜한 콘텐츠'];

function filterOption(gb_cd) {
  console.log(gb_cd);
  let filtering = defaultOption.filter(item => {
    if (gb_cd === 1) {
      return item;
    } else if (gb_cd === 2) {
      return item === '영화' || item === '최신컨텐츠' || item === '홈';
    } else if (gb_cd === 3) {
      return item === '홈' || item === '영화';
    } else if (gb_cd === 4) {
      return item === '홈';
    } else {
      return item;
    }
  });

  console.log(filtering);
  return filtering;
}
export default function Appbar() {
  const { username, gb_cd } = useSelector(state => state.user);
  const classes = useStyles();
  const [option, setOption] = React.useState(defaultOption);
  const [appbarBlack, setAppbarOpacity] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //< React LifeCycle
  useEffect(() => {
    setOption(filterOption(gb_cd));
  }, [username, gb_cd]);

  // const handleProfileMenuOpen = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenu = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {option.map(item => {
        return (
          <MenuItem variant="h6" className={classes.title}>
            {item}
          </MenuItem>
        );
      })}
    </Menu>
  );

  const windowScrollHandler = useCallback(() => {
    let windowScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    if (windowScrollY > 100) {
      setAppbarOpacity(true);
    } else {
      setAppbarOpacity(false);
    }
  }, [window.scrollY]);

  useEventListener('scroll', windowScrollHandler);
  const menuId = 'primary-search-account-menu';
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
        style={{ background: appbarBlack ? 'black' : 'transparent' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.sectionDivide}>
            <div className={classes.sectionDesktop}>
              {option.map(item => {
                return (
                  <Typography variant="h6" className={classes.title}>
                    {item}
                  </Typography>
                );
              })}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
