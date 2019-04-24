import React, {Component} from 'react';
import Autocompletar from './components/Autocompletar';

class App extends Component {
  render() {
    const lista = [
      "Mama", 
      "Papa", 
      "Nodejs", 
      "Azul", 
      "Amarillo", 
      "react"
    ]
    return (
      <div className="App">
        <Autocompletar 
          sugerencias={lista}
        />
      </div>
    );
  }
}

export default App;
