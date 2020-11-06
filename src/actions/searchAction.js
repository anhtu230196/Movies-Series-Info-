import { FETCH_MOVIE, FETCH_MOVIES, LOADING, SEARCH_MOVIE } from "./types";
import axios from "axios";

import { APIKey } from "../APIkey";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then((res) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then((res) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
