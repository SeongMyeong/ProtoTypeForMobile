import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/core/styles';

const options = [
    '액션',
    '코믹',
    '호러',
    '멜로'
]

const ITEM_HEIGHT = 48;

const useStyles = makeStyles(({ breakpoints }) => ({
    menuRoot: {
        maxWidth: '1200px',
        [breakpoints.up('md')]: {
            display: 'none'
        }
    },
    tabRoot: {
        maxWidth: '1200px',
        [breakpoints.down('md')]: {
            display: 'none'
        }
    }
})
);

const TabStyleMenu = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div className={classes.tabRoot}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    {options.map(option => (
                        <Tab label={option} />
                    ))}
                </Tabs>
            </AppBar>
        </div>
    );
}

const MenuStyleMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.menuRoot}>
            {/* <div> */}
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                    },
                }}
            >
                {options.map(option => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

const TopMenu = props => {
    return (
        <div>
            <MenuStyleMenu />
            <TabStyleMenu />
        </div>
    );
};

export default TopMenu;
