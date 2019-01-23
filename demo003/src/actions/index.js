// Ahora, esa acción devuelve un objeto que contiene dos propiedades.

// Action type
// Payload

// Como sabemos por nuestra demostración, tenemos dos actions
// Pero, antes de eso, necesitamos que cada publicación tenga una ID diferente, así que para generar la ID 
// en el lado del cliente, usamos la dependencia uuid.

// Por lo tanto, la función crearNota acepta el título y el cuerpo como un parámetro y devuelve un objeto.

// Agregamos un payload adicional llamada ID para que podamos generar diferentes publicaciones 
// y eliminarlas de acuerdo a sus ID.

import uuidv4 from 'uuid/v4';
import { AGREGAR_NOTA, BORRAR_NOTA } from './types';

export const crearNota = ({titulo, body}) => ({
    type: AGREGAR_NOTA,
    payload: {
        id: uuidv4(),
        titulo,
        body
    }
});

export const borrarNota = id => ({
    type: BORRAR_NOTA,
    payload: {
        id
    }
});