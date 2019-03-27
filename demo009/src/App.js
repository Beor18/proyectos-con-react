import React, { Component } from 'react';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Buscador de Hoteles con Hooks!</h2>
        </header>

        <Home />
      </div>
    );
  }
}

export default App;
