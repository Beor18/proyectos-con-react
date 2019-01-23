import React, { Component } from 'react';
import CrearPost from './containers/crearPost';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container" style={{marginTop: '30px'}}>
        <div className="row">
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            Todos las Notas
          </div>
        </div>
      </div>
    );
  }
}

export default App;
