import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/encabezado/Header';
import Body from './components/contenido/Body'
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App container">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
