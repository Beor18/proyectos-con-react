// si el action type coincide con la acción activada, modificará la store y cambiará el estado actual.

import { AGREGAR_NOTA, BORRAR_NOTA } from '../actions/types';

export default function postReducer(state = [], actions) {
    switch (action.type) {
        case AGREGAR_NOTA:
            return [...state, action.payload];
        case BORRAR_NOTA:
            return state.filter(post => post.id !== action.payload.id);
        default:
            return state;
    }
}