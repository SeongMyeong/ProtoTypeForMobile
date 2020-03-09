import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { POST_CONTENTS_DETAIL } from '../../reducer/post';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const CardItem = props => {
  const { cardItem, classes, itemKey } = props;
  const dispatch = useDispatch();
  // console.log('[masonms] props: ', props);
  const onClickContents = (index) => {
    dispatch({
      type: POST_CONTENTS_DETAIL,
      data: index
    });
  }
  return (
    <GridListTile
      // key={cardItem.img}
      key={itemKey}
      style={{ ...props.style }}
      classes={{ root: classes.gridListList }}
    >
      <img
        src={cardItem.img || cardItem.image}
        alt={cardItem.title}
        classes={{
          img: classes.img,
        }}
        onClick={() => onClickContents(itemKey)}
      />
    </GridListTile>
  );
};

export default CardItem;
