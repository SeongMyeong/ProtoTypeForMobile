import React, { useState } from 'react';
import styled from 'styled-components';

import GridListTile from '@material-ui/core/GridListTile';

const Item = styled.img.attrs(
    props => ({ 'src': props.img })`
        width: 150px;
    `
)

const CardItem = (props) => {
    ////////////////////
    //< Constant
    const cardItem = useState(props.cardItem)[0];

    ////////////////////
    //< React LifeCycle

    ////////////////////
    //< Handler (include focus manager)

    ////////////////////
    //< private functions
    ////////////////////
    //< Rendering

    return (
        <GridListTile>
            {/* <Item img={cardItem.poster} /> */}
            <img className={'cardItem'} src={cardItem.poster} alt={cardItem.title} />
        </GridListTile>
    );

}

export default CardItem;