export const CARGAR_NOTA = "CARGAR_NOTA";
export const ACTUALIZAR_NOTA = "ACTUALIZAR_NOTA";
export const CREAR_NOTA = "CREAR_NOTA";

export function cargarNota() {
    return dispatch => {
        fetch("https://almundo-examen.herokuapp.com/api/hoteles")
        .then(response => response.json())
        .then(json => dispatch({
            type: CARGAR_NOTA, 
            payload: json
        })
    )}
}

export function crearNota(notaNombre, price) {
    return dispatch => {
        fetch("https://almundo-examen.herokuapp.com/api/hoteles", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }, body: JSON.stringify({
                name: notaNombre,
                price: price
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