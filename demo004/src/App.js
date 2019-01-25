import React, { Component } from 'react';

import Navbar from './components/Navbar';
import MediaCard from './components/Card';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <MediaCard />
      </div>
    );
  }
}

export default App;
