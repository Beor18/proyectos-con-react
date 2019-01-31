import { combineReducers } from 'redux';
import { CARGAR_NOTA, CREAR_NOTA } from "../actions";

const nota = (state = { allHotels: [], displayedHotels: null}, action) => {
    switch(action.type) {
        case CARGAR_NOTA:
        state = Object.assign({},
            state, {
                allHotels: action.payload
            }
        )
        return state;

        case CREAR_NOTA:
        console.log(action.nuevoHotel)
            let nuevoHotel = action.nuevoHotel
            let oldState = state.allHotels.slice(0)
            state = Object.assign({}, 
                {
                    allHotels: [...oldState, nuevoHotel]
                }
            )
        return state;
    }
};

const rootReducer = nota;

export default rootReducer;