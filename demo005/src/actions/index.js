export const CARGAR_NOTA = "CARGAR_NOTA";
export const ACTUALIZAR_NOTA = "ACTUALIZAR_NOTA";
export const CREAR_NOTA = "CREAR_NOTA";

export function cargarNota() {
    return dispatch => {
        fetch("../../datosFake/datosFake.json")
        .then(response => response.json())
        .then(json => dispatch({
            type: CARGAR_NOTA, 
            payload: json
        })
    )}
}

export function crearNota(noteTitle, noteContent) {
    return dispatch => {
        fetch("../../datosFake/datosFake.json", {
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
                hotels: json
            })
        })
    }
}