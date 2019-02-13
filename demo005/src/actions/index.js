export const CARGAR_NOTA = "CARGAR_NOTA";
export const ACTUALIZAR_NOTA = "ACTUALIZAR_NOTA";
export const CREAR_NOTA = "CREAR_NOTA";

const URL_BASE = 'http://localhost:5000/api/';

export function cargarNota() {
    return dispatch => {
        fetch(URL_BASE + 'productos')
        .then(response => response.json())
        .then(json => dispatch({
            type: CARGAR_NOTA, 
            payload: json.p
        })
        ).catch(error => console.error(error));
    }
}

export function crearNota(noteTitle, noteContent) {
    return dispatch => {
        fetch(URL_BASE + 'productos', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }, body: JSON.stringify({
                title: noteTitle,
                content: noteContent
            })
        })
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: CREAR_NOTA,
                nuevoHotel: json
            })
        }).catch(error => console.error(error));
    }
}