import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageStepper from '../components/ImageStepper.js';
import animaImgs from '../img/anima';
import dcaImgs from '../img/dca';
import dogsImgs from '../img/dogs';
import roomImgs from '../img/room';

import Header from './home/Header.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  pageContainer: {
    width: '80%',
  },
  stepperTitleText: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 4,
    '& *': {
      margin: 0,
    }
  }
}));

const Home = () => {
  const classes = useStyles();

  const animaSteps = animaImgs.map((img) => ({ img }));
  const dcaSteps = dcaImgs.map((img) => ({ img }));
  const dogsSteps = dogsImgs.map((img) => ({ img }));
  const roomSteps = roomImgs.map((img) => ({ img }));

  return (
    <div className={classes.root}>
      <Grid container className={classes.pageContainer} spacing={2}>
        <Header />
        <Grid item xs={12}>
          <Grid item xs={7}>
            {/* Col 1 */}
            {/* BIO */}
            <div className={classes.stepperTitleText}>
              <h2>Animamundi</h2>
              <span>Ollie Mers</span>
            </div>
            <ImageStepper items={animaSteps}/>
            <ImageStepper items={dcaSteps}/>
            <ImageStepper items={roomSteps}/>
            <ImageStepper items={dogsSteps}/>
            {/* Show Cards */}
            {/* Reel */}
            {/* Reel */}
          </Grid>
          <Grid container xs={5}>
            {/* Col 2 */}
            {/* Headshot + Resume Links */}
            {/* NEws? */}
            {/* Contact */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
