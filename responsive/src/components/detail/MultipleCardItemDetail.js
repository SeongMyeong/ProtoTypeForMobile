import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { useBlogCardContentStyles } from '@mui-treasury/styles/cardContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

import dummyMultipleCardDetail from '../../common/dummyMultipleCardDetail.json';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    wrap: {
        margin: '1rem',
        display: 'flex'
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
        // alignItems: 'center',
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
        width: '88%',
        margin: '1rem',
        // height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        position: 'relative',
        [breakpoints.up('md')]: {
            width: '10vw',
            height: '',
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
            width: '20vw',
            color: 'white',
        }
    },
    contentH1Style: {
        fontSize: '1.8vh'
    },
    contentPStyle: {
        fontSize: '1.3vh'
    }
}));

const MultipleCardItemDetail = props => {
    const styles = useStyles();
    const {
        button: buttonStyles,
        ...cardContentStyles
    } = useBlogCardContentStyles();
    const shadowStyles = useOverShadowStyles();
    const [itemDetail, setItemDetail] = useState({});
    const [detailItems, setDetailItems] = useState([]);

    useEffect(() => {
        setItemDetail('');
        setDetailItems(dummyMultipleCardDetail);
    }, [props.itemDetail]);

    const onReadMoreButton = () => {
        alert('READ MORE');
    };

    return (
        <div className={styles.wrap}>
            {detailItems.map(cardDetail => (
                <Card
                    className={cx(styles.root, shadowStyles.root)}
                    style={{ margin: 'auto' }}
                >
                    <CardMedia
                        className={styles.media}
                        image={cardDetail.imageBg}
                    />
                    <CardContent>
                        <div className={styles.contentStyle}>
                            <h1 className={styles.contentH1Style}>{cardDetail.title}</h1>
                            <p className={styles.contentPStyle}>{window.innerWidth <= 430 ? cardDetail.detail.substring(0, 20).concat('...') : cardDetail.detail}</p>
                        </div>
                        <Button className={buttonStyles} onClick={onReadMoreButton}>
                            더 보기
                    </Button>
                    </CardContent>
                </Card>
            ))}
            {/* <Card
                className={cx(styles.root, shadowStyles.root)}
                style={{ margin: 'auto' }}
            >
                <CardMedia
                    className={styles.media}
                    image={'/images/slider_1b.jpg'}
                />
                <CardContent>
                    <div className={styles.contentStyle}>
                        <h1>킹덤</h1>
                        <p>{contentsString1}</p>
                    </div>
                    <Button className={buttonStyles} onClick={onReadMoreButton}>
                        더 보기
                    </Button>
                </CardContent>
            </Card>
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
                        <p>{contentsString2}</p>
                    </div>
                    <Button className={buttonStyles} onClick={onReadMoreButton}>
                        더 보기
                    </Button>
                </CardContent>
            </Card> */}
        </div>
    );
};

export default MultipleCardItemDetail;
