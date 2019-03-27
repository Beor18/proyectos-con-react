import React, {useReducer, useEffect} from 'react';
import "./Styles.css";

import {reducer, initialState} from '../Reducers/Reducer';
import Hotel from './Hotel';
import spinner from "../ajax-loader.gif";
import Buscar from './Buscar';

const HOTELES_API_URL = "https://almundo-examen.herokuapp.com/api/hoteles";

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    // El Hook de efecto useEffect equivale a componentDidMount, 
    // componentDidUpdate y componentWillUnmount combinados.
    useEffect(() => {
      fetch(HOTELES_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
          dispatch({
            type: "BUSCAR_HOTELES_SUCCESS",
            payload: jsonResponse.hotels
          });
        });
    }, []);
  
    const search = stars => {
      dispatch({
        type: "BUSCAR_HOTELES_REQUEST"
      });
  
      fetch(`https://almundo-examen.herokuapp.com/api/stars/${stars}`)
        .then(response => response.json())
        .then(jsonResponse => {
          if (jsonResponse.Response) {
            dispatch({
              type: "BUSCAR_HOTELES_SUCCESS",
              payload: jsonResponse
            });
          } else {
            dispatch({
              type: "BUSCAR_HOTELES_FAILURE",
              error: jsonResponse.Error
            });
          }
        });
    };
  
    const { hotels, errorMessage, loading } = state;
  
    return (
      <div className="App">
        <Buscar search={search} />
        <p className="App-intro">Lista de Hoteles</p>
        <div className="hoteles-contenedor">
          {loading && !errorMessage ? (
            <img className="spinner" src={spinner} alt="Loading spinner" />
          ) : errorMessage ? (
            <div className="errorMessage">Error</div>
          ) : (
            hotels.map((hoteles, index) => (
              <Hotel key={`${index}-${hoteles.name}`} hoteles={hoteles} />
            ))
          )}
        </div>
      </div>
    );
  };

  export default Home;