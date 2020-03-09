import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_REQUEST } from '../../reducer/post';
import CardItem from './cardItem';
import DummyCardItems from '../../common/dummyCardItems.json';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import useEventListener from '../../common/useEventListener';
import configuration from '../../common/configuration';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    maxWidth: '1200px',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    maxWidth: '1200px',
  },
  title: {
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Noto Sans KR',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const CardList = props => {
  ////////////////////
  //< Constant
  const dispatch = useDispatch();
  const { cardData } = useSelector(state => state.post);

  const [cardItems, setCardItems] = useState([]);
  const [windowSize, setWindowSize] = useState(0);
  const classes = useStyles();

  ////////////////////
  //< React LifeCycle
  useEffect(() => {
    dispatch({
      type: POST_REQUEST,
    });
    setCardItems(DummyCardItems);
    setWindowSize(window.innerWidth);
  }, []);

  ////////////////////
  //< Handler (include focus manager)
  const windowSizeHandler = useCallback(() => {
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    setWindowSize(windowWidth);
  });

  ////////////////////
  //< private functions

  console.log(cardData);
  ////////////////////
  //< Rendering
  useEventListener('resize', windowSizeHandler);
  const colsSize = windowSize > configuration.windowSize.small ? 6 : 3;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={colsSize}>
          {DummyCardItems.map((tile, key) => (
            <CardItem key={key} cardItem={tile} classes={classes} />
          ))}
        </GridList>
      </div>

      <div className={classes.root}>
        <GridList className={classes.gridList} cols={colsSize}>
          {cardData.map((tile, key) => (
            <CardItem key={key} cardItem={tile} classes={classes} />
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
};

export default CardList;
