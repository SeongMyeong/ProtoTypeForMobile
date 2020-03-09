import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_REQUEST } from '../../reducer/post';
import CardItem from './CardItem';
import CardItemDetail from '../detail/CardItemDetail';

import DummyCardItems from '../../common/dummyCardItems.json';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import useEventListener from '../../common/useEventListener';
import configuration from '../../common/configuration';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

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
  const { cardData, cardIndex } = useSelector(state => state.post);

  const [cardItems, setCardItems] = useState([]);
  const [windowSize, setWindowSize] = useState(0);
  const [contentsExpansion, setContentsExpansion] = useState('');
  const [isExpansion, setIsExpansion] = useState(false);
  const [listIndex, setListIndex] = useState();

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

  ////////////////////
  //< Rendering
  useEventListener('resize', windowSizeHandler);
  const colsSize = windowSize > configuration.windowSize.small ? 6 : 3;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <React.Fragment>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={colsSize}>
              {/* <GridList className={classes.gridList} cols={colsSize}> */}
              {/* {DummyCardItems.map((tile, key) => ( */}
              {
                cardData.map((tile, key) => (
                  <CardItem key={key} cardItem={tile} classes={classes} itemKey={key} />
                ))}
            </GridList>
          </div>
        </React.Fragment>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {cardData.length !== 0 && <CardItemDetail itemDetail={cardData[cardIndex]} />}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default CardList;

/*
<div className={classes.root}>

  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography className={classes.heading}>Expansion Panel 2</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
          </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel disabled>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3a-content"
      id="panel3a-header"
    >
      <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
    </ExpansionPanelSummary>
  </ExpansionPanel>
</div>*/