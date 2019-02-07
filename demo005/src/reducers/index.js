import { combineReducers } from 'redux';
import { CARGAR_NOTA, CREAR_NOTA } from "../actions";

const nota = (state = { hotels: [], displayedNote: null}, action) => {
    switch(action.type) {
        case CARGAR_NOTA:
        state = Object.assign({},
            state, {
                hotels: action.payload
            }
        )
        return state;

        case CREAR_NOTA:
        console.log(action.nuevoHotel)
            let nuevoHotel = action.nuevoHotel
            let oldState = state.hotels.slice(0)
            state = Object.assign({},
                state, 
                    {
                        hotels: [...oldState, nuevoHotel]
                    }
            )
        return state;

        default:
        return state;
    }
};

const rootReducer = combineReducers({
    nota
  });

export default rootReducer;