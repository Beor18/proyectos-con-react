const initialState = {
    loading: true,
    hotels: [],
    errorMessage: null
};

const reducer = (state, action) => {

    switch (action.type) {
      case "BUSCAR_HOTELES_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null
        };
      case "BUSCAR_HOTELES_SUCCESS":
        return {
          ...state,
          loading: false,
          hotels: action.payload
        };
      case "BUSCAR_HOTELES_FAILURE":
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