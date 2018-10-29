// Iniciar pedido API - agregar y borrar de la lista

const initialState = {
    joke: {
        status: "init",
        list: []
    }
};

export default {
    joke: (state = initialState.joke, action) => {
        switch (action.type) {
            case "FETCH_JOKE": {
                return {
                    ...state,
                    status: "pending"
                };
            }

            case "ADD_JOKE": {
                return {
                ...state,
                list: state.list.concat(action.payload),
                status: "init"
                };
             }

            case "DELETE_JOKE": {
                return {
                    ...state,
                    list: state.list.filter(joke => joke !== action.payload)
                };
            }

            default:
                return state;
        }
    }
};