import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    maxWidth: '1200px',
  },
  billboardRow: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    height: '56.25vw',
    maxHeight: '76vh'
  },
  heroStaticImage: {
    position: 'absolute',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
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
    maxHeight: '100vh'
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
          src="https://occ-0-1360-3996.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV5V0seR4UBdPnjntYZ1YxzNjDYh5nURL0DZo6stuCHPoKFI-p46HbvsBTHiQ0Hr1OjdLx3CcPXNSapH0FZWC9ZULXPp.webp?r=12f"
        />
        <div className={classes.fillContent}>
          <div className={classes.infoMetaLayer}>
            <div>
              <div className={classes.titleWrapper}>
                <img
                  style={{ width: '90%' }}
                  src="https://occ-0-1360-3996.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABfCTWCbJnITTufha0LYunmACo3x2eAJ3fWs2PVMyDRyLwuMXDhRq28JoN_WSZ2iYOWx-paBX887oyjFKgKq_Y3I7m3YL_i6PPCDP.webp?r=417"
                ></img>
              </div>

              <div className={classes.trailerVignette}>
                테러리스트 조직에게서 플루토늄을 지켜라. 스파이 기관 IMF의 정예
                요원 에단은 선택의 갈림길에 선다. 미션인가, 동료인가. CIA는
                요원을 보내 에단을 압박하고, 에단은 핵전쟁을 막으려 다시
                불가능에 도전한다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          {props.children}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
