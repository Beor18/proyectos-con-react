import React, {Component} from 'react';
import Autocompletar from './components/Autocompletar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Autocompletar 
          sugerencias={["Mama", "Papa", "Nodejs", "Azul", "Amarillo", "react"]}
        />
      </div>
    );
  }
}

export default App;
