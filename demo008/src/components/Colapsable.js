import React from 'react';
import Collapsible from 'react-collapsible';

function Colapsable() {
    return (
      <div>
        <Collapsible trigger="Prueba Accordion">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
      </div>
    );
}

export default Colapsable;
