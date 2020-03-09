import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const CardItem = props => {
  const { cardItem, classes } = props;
  // console.log('[masonms] cardItem: ', cardItem);
  return (
    <GridListTile
      key={cardItem.img}
      style={{ ...props.style }}
      classes={{ root: classes.gridListLi }}
    >
      <img
        src={cardItem.img || cardItem.image}
        alt={cardItem.title}
        classes={{
          img: classes.img,
        }}
      />
      <GridListTileBar
        title={cardItem.title}
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
      ></GridListTileBar>
    </GridListTile>
  );
};

export default CardItem;
