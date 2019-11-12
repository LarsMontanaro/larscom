import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import backgroundImg from '../../img/background.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
  },
  siteTitle: {
    position: 'absolute',
    margin: 0,
    textAlign: 'left',
    top: '20.5vw',
    fontSize: '6vw',
    paddingLeft: '2vw',
    color: 'white',
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root} xs={12}>
      <div className={classes.header}>
        <img width="100%" src={backgroundImg} alt="" />
        <h1 className={classes.siteTitle}>Lars Montanaro</h1>
      </div>
      {/* IMAGE */}
      {/* TITLE */}
      {/* Links */}
    </Grid>
  );
}

export default Header;
