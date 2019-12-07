import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
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
    '& p, span': {
      fontSize: '0.85rem',
    },
  },
  pageContainer: {
    width: '80%',
  },
  colsWrapper: {
    '& > *': {
      maxWidth: 700,
    },
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
        <Grid container spacing={4} className={classes.colsWrapper}>
          <Grid item xs={12} md={6}>
            <Grid item className={classes.about}>
              <h1>about</h1>
              <p>Lars is a Brooklyn-based actor/comedian/theater-maker.</p>
              <p>
                He spent his teensy-sized years in Occidental, California
                alongside a cast of lizards, scorpions, and blackberry brambles.
              </p>
              <p>
                A little bigger, he moved to the Bay Area and then onward
                to a small town in the Sierra Nevadas. During this time he
                performed in local theater, attended summer intensives with
                the American Conservatory Theater and Berkeley Rep, and 
                played with the Sacramento Comedysportz improv comedy team.
              </p>
              <p>
                In New York City, Lars performed in a number of shows
                at the Experimental Theatre Wing and Playwrights Horizons studios
                of NYU Tisch. He hosts and performs improv comedy all over the city
                and loves it. He is pretty skeptical of "the way things are"
                and loves theater that puts cultural hegemony to task. 
                He is exploring clowning and contact improv and that and this and these
                and those and all sorts of ways to flex physical and creative muscles.
              </p>
              <p>
                BA in Environmental Studies and Computer Sciences aka
                Lars is a green robot boy.
              </p>
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
                    {<EmailIcon />}
                  </IconButton>
                </a>
                <SocialIcon target="_blank" url="https://www.instagram.com/larsmontanaro/" />
                <SocialIcon target="_blank" url="https://twitter.com/lars_montanaro" />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item className={classes.news}>
              <h1>news</h1>
              <div>
                <p>
                  <b>+</b> An absolute blast has been had playing with the clowns at the&nbsp;
                  <a href="https://www.facebook.com/NYC-Physical-Comedy-Lab-1398973467082552">
                  NYC Physical Comedy Lab
                  </a>
                  &nbsp;each week! :-)
                </p>
              </div>
              <div>
                <p>
                  <b>+</b> Lars delves into text and physical impulse in David Prete's&nbsp;
                  <a href="https://www.davidprete.com/the-plastiques-project">Plastiques Project</a>.
                </p>
              </div>
              <div>
                <p>
                  <b>+</b> Lars has some serious fun at Avner Eisenberg's 'Eccentric
                  Performance' clowning workshop at the&nbsp;
                  <a href="https://celebrationbarn.com/">
                  Celebration Barn Theater
                  </a>
                  &nbsp;!
                </p>
              </div>
              <div>
                <p>
                  <b>+</b> the Theater of the Oppressed Facilitator Training at the&nbsp;
                  <a href="http://www.mandalaforchange.com/">
                  Mandala Center for Change
                  </a>
                  &nbsp;with Marc Weinblatt was an intense and illuminating experience.
                </p>
              </div>
              <div>
                <p>
                  <b>+</b> a plastic-sheet sea, a cardboard-box rainforest, and a
                  river of trash tranform the stage in Ollie Mers' <i>Animamundi</i>,
                  at NYU's Experimental Theatre Wing. Lars devises and plays in a
                  menagerie of vignettes that explore what it might be like to
                  be non-human in a swiftly transforming environment.
                </p>
                <span><i>Animamundi</i></span>
                <ImageStepper items={animaSteps} />
              </div>
              <div>
                <p>
                  <b>+</b> Lars is thrilled to be training under Erica Fae in a spring
                  Grotowski workshop produced by&nbsp;
                  <a href="http://www.synaesthetic-theatre.com/">Synaesthetic Theater</a>.
                </p>
              </div>
              <div>
                <p>
                  <b>+</b> Lars appears in Eleanor Maples' production of <i>Peter and
                  the Wolf</i>. This movement-focused children's tale went up at
                  NYU's Playwrights Horizons Studio.
                </p>
              </div>
              <div>
                <p>
                  <b>+</b> Lars performs in his final showcase with the NYU Dancers
                  & Choreographers Alliance. Will miss you, DCA.
                </p>
                <span><i>DCA</i></span>
                <ImageStepper items={dcaSteps}/>
              </div>
              <div>
                <p>
                  <b>+</b> Lars performs his last show with the indubitable Nut Mix improv
                  at the Holbrooke Hotel in his beloved hometown of Nevada City, CA.
                </p>
              </div>
              <div>
                <p>
                  <b>+</b> Lars leads pattering puppet feet up and down a
                  stairway in the clouds in Ana Schuler's <i>A Room For
                  Lost Things</i> at NYU Experimental Theatre Wing.
                </p>
                <span><i>A Room For Lost Things</i></span>
                <ImageStepper items={roomSteps} />
              </div>
              <div>
                <p>
                  <b>+</b>Lars is an actor, meta-actor, dancer, silhouettist,
                  and tree (dream part!) in Malena Pennycooks's <i>Dogs Chase
                  Shadows</i> at NYU's Experimental Theater Wing.
                </p>
                <span><i>Dogs Chase Shadows</i></span>
                <ImageStepper items={dogsSteps} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;