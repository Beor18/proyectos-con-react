export const CARGAR_NOTA = "CARGAR_NOTA";
export const ACTUALIZAR_NOTA = "ACTUALIZAR_NOTA";
export const CREAR_NOTA = "CREAR_NOTA";

export function cargarNota() {
    return dispatch => {
        fetch("http://localhost:5000/api/productos")
        .then(response => response.json())
        .then(json => dispatch({
            type: CARGAR_NOTA, 
            payload: json.p
        })
    )}
}

export function crearNota(noteTitle, noteContent) {
    return dispatch => {
        fetch("http://localhost:5000/api/productos", {
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
                p: json
            })
        })
    }
}