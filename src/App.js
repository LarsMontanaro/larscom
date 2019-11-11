import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageStepper from './components/ImageStepper.js';
import './App.css';
import animaImgs from './img/anima';
import dcaImgs from './img/dca';
import dogsImgs from './img/dogs';
import roomImgs from './img/room';

const animaSteps = animaImgs.map((img) => ({ img }));
const dcaSteps = dcaImgs.map((img) => ({ img }));
const dogsSteps = dogsImgs.map((img) => ({ img }));
const roomSteps = roomImgs.map((img) => ({ img }));

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Header stuff */}
          <div>xs=12</div>
          {/* IMAGE */}
          {/* TITLE */}
          {/* Links */}
        </Grid>
        <Grid container xs={12}>
          <Grid container xs={7}>
            {/* Col 1 */}
            <div>xs=7</div>
            {/* BIO */}
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
            <div>xs=5</div>
            {/* Headshot + Resume Links */}
            {/* NEws? */}
            {/* Contact */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
