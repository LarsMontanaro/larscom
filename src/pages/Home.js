import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import ImageCard from '../components/ImageCard.js';
import ImageStepper from '../components/ImageStepper.js';
import { SocialIcon } from 'react-social-icons';
import animaImgs from '../img/anima';
import dcaImgs from '../img/dca';
import dogsImgs from '../img/dogs';
import roomImgs from '../img/room';
import headshotImg from '../img/headshot.jpg';
import resumeImg from '../img/resume.jpg';
import resume from '../img/resume.pdf';

import Header from './home/Header.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& h1, h2, h3, h4':  {
      margin: 0,
    },
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
  },
  contactIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
    '& > *': {
      margin: 4,
    },
    '& .MuiIconButton-root': {
      color: 'white',
      backgroundColor: 'slateGray',
    },
  },
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid item>
              <h1>about</h1>
              <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
            </Grid>
            <Grid item>
              <h1>headshot & resume</h1>
              <ImageCard img={headshotImg} download={{ file: headshotImg, fileName: "headshot_LarsMontanaro"}} />
              <ImageCard img={resumeImg} download={{ file: resume, fileName: "resume_LarsMontanaro"}} />
            </Grid>
            <Grid item>
              <h1>say hi!</h1>
              <div className={classes.contactIconsContainer}>
                <a href="mailto:larsmontanaro@gmail.com">
                  <IconButton>
                    {<Email />}
                  </IconButton>
                </a>
                <SocialIcon target="_blank" url="https://www.instagram.com/larsmontanaro/" />
                <SocialIcon target="_blank" url="https://twitter.com/lars_montanaro" />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <h1>news</h1>
              <div className={classes.stepperTitleText}>
                <h3>Animamundi</h3>
                <span>&nbsp;-&nbsp;Ollie Mers</span>
              </div>
              <ImageStepper items={animaSteps}/>
              <div className={classes.stepperTitleText}>
                <h3>DCA</h3>
                <span>&nbsp;-&nbsp;NYU Dancers & Choreographers Alliance</span>
              </div>
              <ImageStepper items={dcaSteps}/>
              <div className={classes.stepperTitleText}>
                <h3>A Room For Lost Things</h3>
                <span>&nbsp;-&nbsp;Ana Schuler</span>
              </div>
              <ImageStepper items={roomSteps}/>
              <div className={classes.stepperTitleText}>
                <h3>Dogs Chase Shadows</h3>
                <span>&nbsp;-&nbsp;Malena Pennycook</span>
              </div>
              <ImageStepper items={dogsSteps}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
