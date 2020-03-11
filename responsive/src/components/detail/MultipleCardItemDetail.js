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
        },
    },
}));

const MultipleCardItemDetail = props => {
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

    // `죽은 자들이 살아나 생지옥이 된 위기의 조선, 왕권을 탐하는 조씨 일가의 탐욕과 누구도 믿을 수 없게 되어버린 왕세자 창의 피의 사투를 그린 미스터리 스릴러`
    return (
        <div className={styles.wrap}>
            <Card
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
                        <p>
                            죽은 자들이 살아나 생지옥이 된 위기의 조선, 왕권을 탐하는 조씨 일가의 탐욕과 누구도 믿을 수 없게 되어버린 왕세자 창의 피의 사투를 그린 미스터리 스릴러
                        </p>
                    </div>
                    <Button className={buttonStyles} onClick={onReadMoreButton}>
                        Read more
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
                        <p>
                            18세기 스코틀랜드로 타임슬립한 여성. 과거를 바꾸고 새로운 인연을
                            이어나갈 것인가, 현대로 돌아갈 것인가. 운명의 이야기가 시작된다.
                        </p>
                    </div>
                    <Button className={buttonStyles} onClick={onReadMoreButton}>
                        Read more
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default MultipleCardItemDetail;
