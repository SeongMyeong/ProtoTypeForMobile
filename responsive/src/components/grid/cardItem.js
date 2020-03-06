import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const CardItem = ({ cardItem }) => {
    ////////////////////
    //< Constant
    // const [cardItem, setCardItem] = useState(props.cardItem);
    // const [cardItemStyle, setCardItemStyle] = useState(props.style);
    const classes = useStyles();
    console.log(cardItem);
    // console.log(cardItemStyle);
    // console.log(cardItem);
    ////////////////////
    //< React LifeCycle

    ////////////////////
    //< Handler (include focus manager)

    ////////////////////
    //< private functions
    ////////////////////
    //< Rendering

    return (
        // <GridListTile key={cardItem.img}>
        //     <img src={cardItem.img} alt={cardItem.title} style={cardItemStyle} />
        //     <GridListTileBar
        //         title={cardItem.title}
        //     // classes={{
        //     //     root: classes.titleBar,
        //     //     title: classes.title,
        //     // }}
        //     />
        // </GridListTile>
        // <GridListTile key={cardItem.img}>
        //     {/* <Item img={cardItem.poster} /> */}
        //     <img src={cardItem.img} alt={cardItem.title} />
        // </GridListTile>
        <div>
            <img src={cardItem.img} alt={cardItem.title} height='100%' />
        </div>

        // <GridListTile key={cardItem.img}>
        //     <img src={cardItem.img} alt={cardItem.title} height='100%' />
        //     <GridListTileBar
        //         title={cardItem.title}
        //         classes={{
        //             root: classes.titleBar,
        //             title: classes.title,
        //         }}
        //     />
        // </GridListTile>
    );

}

export default CardItem;