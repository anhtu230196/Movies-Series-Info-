import {
  FETCH_MOVIE,
  FETCH_MOVIES,
  LOADING,
  SEARCH_MOVIE,
} from "../actions/types";

const initialStates = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
};

export default function (state = initialStates, action) {
  switch (action.type) {
    case SEARCH_MOVIE: {
      return { ...state, text: action.payload, loading: false };
    }
    case FETCH_MOVIES: {
      return { ...state, movies: action.payload, loading: false };
    }
    case FETCH_MOVIE: {
      return { ...state, movie: action.payload, loading: false };
    }
    case LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
}
