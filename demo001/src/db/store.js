import { createStore, combineReducers } from "redux";

import reducers from "./reducers";

// se crea un store de redux usando nuestro root reducer
export default createStore(combineReducers(reducers));