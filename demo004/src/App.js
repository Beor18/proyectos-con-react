import React, { Component } from 'react';

import Navbar from './components/Navbar';
import MediaCard from './components/Card';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Grid container>
          <Grid item md={3}>
            <MediaCard />
          </Grid>
          <Grid item md={3}>
            <MediaCard />
          </Grid>
          <Grid item md={3}>
            <MediaCard />
          </Grid>
          <Grid item md={3}>
            <MediaCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
