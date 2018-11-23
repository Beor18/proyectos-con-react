import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(){
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3000"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromApi", data => this.setState({response: data}));
  }
  render() {
    const { response } = this.state;
    return (
      <div style={{textAlign: "center"}}>
        {response
          ? <p>
              La data es: {response}
            </p>
          : <p>Cargando...</p>
        }
      </div>
    );
  }
}

export default App;
