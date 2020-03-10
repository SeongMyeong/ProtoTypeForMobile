import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import dummyTopContents from '../../common/dummyTopContents.json';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    //maxWidth: '1200px',
  },
  billboardRow: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    height: '56.25vw',
    //maxHeight: '76vh',
  },
  heroStaticImage: {
    position: 'absolute',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    opacity: 1,
    //filter: alpha((opacity = 100)),
    transition: 'opacity 400ms cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s',
  },

  fillContent: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    maxWidth: '1200px',
    maxHeight: '100vh',
  },
  infoMetaLayer: {
    position: 'absolute',
    top: 0,
    bottom: '20%',
    left: '4%',
    width: '36%',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  titleWrapper: {
    // minHeight: '13.2vw',
    position: 'relative',
    marginBottom: '1.2vh',
  },
  trailerVignette: {
    // background:
    //   'linear-gradient(77deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 85%)',
    //position: 'absolute',
    top: 0,
    left: 0,
    right: '26.09%',
    bottom: 0,
    opacity: 1,
    color: 'white',
    fontFamily: 'Noto Sans KR',
  },
}));

export default function AppLayout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.billboardRow}>
        <img
          className={classes.heroStaticImage}
          src={dummyTopContents.heroStaticImgSource}
        />
        <div className={classes.fillContent}>
          <div className={classes.infoMetaLayer}>
            <div>
              <div className={classes.titleWrapper}>
                <img
                  style={{ width: '90%' }}
                  src={dummyTopContents.titleWrapperImgSource}
                ></img>
              </div>

              <div className={classes.trailerVignette}>
                {dummyTopContents.trailerVignetteText}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} md={10} lg={10}>
          {props.children}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
