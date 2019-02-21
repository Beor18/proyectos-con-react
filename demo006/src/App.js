import React, { Component } from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
