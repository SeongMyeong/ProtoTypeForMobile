import React, { useState, useCallback, useEffect } from 'react';

import CardItem from './cardItem';
import DummyCardItems from '../../common/dummyCardItems.json'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import useEventListener from '../../common/useEventListener';

import configuration from '../../common/configuration';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        maxWidth: '1200px'
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const CardList = (props) => {
    ////////////////////
    //< Constant
    const [cardItems, setCardItems] = useState([]);
    const [windowSize, setWindowSize] = useState(0);
    const classes = useStyles();
    ////////////////////
    //< React LifeCycle
    useEffect(() => {
        setCardItems(DummyCardItems);
        setWindowSize(window.innerWidth);
    }, []);

    ////////////////////
    //< Handler (include focus manager)
    const windowSizeHandler = useCallback(() => {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        setWindowSize(windowWidth);
    })

    ////////////////////
    //< private functions

    ////////////////////
    //< Rendering
    useEventListener('resize', windowSizeHandler);
    const colsSize = windowSize > configuration.windowSize.small ? 6 : 3;

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={colsSize}>
                {cardItems.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} height='100%' />
                        {/* <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        /> */}
                    </GridListTile>
                ))}
            </GridList>


            {/* <GridList className={classes.gridList} cols={colsSize}>
                {cardItems.map(cardItem => (
                    <CardItem cardItem={cardItem} />    CardItem - CardList 분리작업. 적용되지 않았음.
                ))}
            </GridList> */}
        </div>
    )
}

export default CardList;