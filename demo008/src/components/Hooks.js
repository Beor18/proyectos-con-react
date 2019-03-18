import React, { useState } from 'react';

function Ejemplo() {
    const [conteo, setConteo] = useState(0);
    return (
        <div>
            <p>Un total de {conteo} clicks</p>
            <button onClick={() => setConteo(conteo +1 )}>
                Clickeame
            </button>
        </div>
    )
}


export default Ejemplo;