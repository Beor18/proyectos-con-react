import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import TestBulma from './components/testBulma';
import ColumnaIndividual from './components/columnaIndividual';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
                <Route exact path="/" component={TestBulma} />
                <Route exact path="/:id" component={ColumnaIndividual} />
        </Router>
      </div>
    );
  }
}

export default App;
