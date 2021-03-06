import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useBlogCardContentStyles } from '@mui-treasury/styles/cardContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

import DummyCardDetail from '../../common/dummyCardDetail.json';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  wrap: {
    marginTop: '1rem',
  },
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    // position: 'fixed',
    // maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media_title: {
    margin: '1rem',
  },

  media: {
    //width: '88%',
    width: '100%',
    //margin: '1rem',
    // height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '88%',
      marginLeft: spacing(3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '80%',
      height: '100%',
      // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },

  contentStyle: {
    width: '100%',
    color: 'white',
    [breakpoints.up('md')]: {
      width: '20vh',
      color: 'white',
    },
  },
}));

const BlogCard = props => {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...cardContentStyles
  } = useBlogCardContentStyles();
  const shadowStyles = useOverShadowStyles();
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    setItemDetail('');
  }, [props.itemDetail]);

  const onReadMoreButton = () => {
    alert('READ MORE');
  };
  return (
    <div className={styles.wrap}>
      <Card
        className={cx(styles.root, shadowStyles.root)}
        style={{ margin: 'auto' }}
      >
        <CardMedia
          className={styles.media}
          image={'/images/outrenderMain.jpg'}
        />
        <CardContent>
          <div className={styles.contentStyle}>
            <h1>아웃랜더</h1>
            <p>
              18세기 스코틀랜드로 타임슬립한 여성. 과거를 바꾸고 새로운 인연을
              이어나갈 것인가, 현대로 돌아갈 것인가. 운명의 이야기가 시작된다.
            </p>
          </div>
          {/*
          <TextInfoCardContent
            classes={cardContentStyles}
            heading={'아웃랜더'}
            body={
              '18세기 스코틀랜드로 타임슬립한 여성. 과거를 바꾸고 새로운 인연을 이어나갈 것인가, 현대로 돌아갈 것인가. 운명의 이야기가 시작된다.'
            }
          />*/}

          <Button className={buttonStyles} onClick={onReadMoreButton}>
            Read more
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;
