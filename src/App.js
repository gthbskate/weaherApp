import React, { useState } from 'react';
import { createStore } from 'redux'

import './App.css';
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import  Grid  from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  rootPaper: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    '& > *': {
      margin: theme.spacing(7),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
  contentPaper:{
    display: 'flex',
    justifyContent: 'center',
    overflowY: 'scroll',
    marginTop: 50,
  },
  forecast: {
    marginTop: 10,
    marginBottom: 10
  }
}));

const cities = [
  'Mexico City,MX',
  'Buenos Aires,AR',
  'Bogota,COl',
  'Madrid,Es',
  'Alberta,CA'
]

function App() {

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="App">
          <LocationListContainer cities={cities}/>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.rootPaper}>
          <Paper elevation={3} className={classes.contentPaper}>
              <ForecastExtendedContainer />
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default App