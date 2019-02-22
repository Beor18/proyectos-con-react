import React, { Component } from 'react';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Experiencia from './components/experiencia/Experiencia';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Experiencia />
        <Portfolio />
      </div>
    );
  }
}

export default App;
