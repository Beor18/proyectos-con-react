import React, {useReducer, useEffect} from 'react';
import "./Styles.css";

import {reducer, initialState} from '../Reducers/Reducer';
import Pelicula from './Pelicula';
import spinner from "../ajax-loader.gif";
import Buscar from './Buscar';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    // El Hook de efecto el Hook useEffect equivale a componentDidMount, 
    // componentDidUpdate y componentWillUnmount combinados.
    useEffect(() => {
      fetch(MOVIE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
          dispatch({
            type: "BUSCAR_PELICULA_SUCCESS",
            payload: jsonResponse.Search
          });
        });
    }, []);
  
    const search = searchValue => {
      dispatch({
        type: "BUSCAR_PELICULA_REQUEST"
      });
  
      fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
        .then(response => response.json())
        .then(jsonResponse => {
          if (jsonResponse.Response === "True") {
            dispatch({
              type: "BUSCAR_PELICULA_SUCCESS",
              payload: jsonResponse.Search
            });
          } else {
            dispatch({
              type: "BUSCAR_PELICULA_FAILURE",
              error: jsonResponse.Error
            });
          }
        });
    };
  
    const { movies, errorMessage, loading } = state;
  
    return (
      <div className="App">
        <Buscar search={search} />
        <p className="App-intro">Compartiendo algunas películas</p>
        <div className="movies">
          {loading && !errorMessage ? (
            <img className="spinner" src={spinner} alt="Loading spinner" />
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <Pelicula key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
      </div>
    );
  };

  export default Home;