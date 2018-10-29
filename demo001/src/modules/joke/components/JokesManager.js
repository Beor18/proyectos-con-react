// Mostrar una lista, tener un boton para borrar y boton para obtener

import React from "react";
import {connect} from "react-redux";

import jokeApi from "../api";

const JokesManager = ({jokes, loading, getJoke, deleteJoke}) => (
  <div>
    <ul>
      {jokes.map(joke => (
        <li key={joke}>
          {joke}
          <button type="button" onClick={() => deleteJoke(joke)}>
            Borrar chiste
          </button>
        </li>
      ))}
    </ul>
    <button type="button" onClick={getJoke} disabled={loading}>
      Obtener chiste
    </button>
  </div>
);

export default connect(
  ({joke}) => ({
    jokes: joke.list,
    loading: joke.status === "pending"
  }),
  dispatch => ({
    getJoke: () => {
      dispatch({type: "FETCH_JOKE"});

    return jokeApi.random
      .fetch()
      .then(joke => dispatch({type: "ADD_JOKE", payload: joke}));
    },
    deleteJoke: joke => dispatch({type: "DELETE_JOKE", payload: joke}),
  })
)(JokesManager);