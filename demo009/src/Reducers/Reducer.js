const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
};

const reducer = (state, action) => {

    switch (action.type) {
      case "BUSCAR_PELICULA_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null
        };
      case "BUSCAR_PELICULA_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: action.payload
        };
      case "BUSCAR_PELICULA_FAILURE":
        return {
          ...state,
          loading: false,
          errorMessage: action.error
        };
      default:
        return state;
    }
};

  export {reducer, initialState};