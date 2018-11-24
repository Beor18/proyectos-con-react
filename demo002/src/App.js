import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:5000"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Test with Socket.Io</h2>
        <h5>by Fernando López</h5>
        <p>
          Hay registrado: <strong>{response}</strong> Hoteles en la base de datos.
        </p>
      </div>
    );
  }
}
export default App;