import React from 'react';
import Colapsable from '../components/Colapsable';
import Ejemplo from '../components/Hooks';
import Consumir from '../components/Consumir'

function Home() {
    return (
      <div>
        <Colapsable />
        <Ejemplo />
        <Consumir />
      </div>
    );
}

export default Home;
