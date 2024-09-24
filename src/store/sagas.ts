import axios, { AxiosResponse } from "axios";

import { Movie } from "./types";
// @ts-ignore
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchMoviesFailure, fetchMoviesSuccess } from "./actions";
import { FETCH_MOVIES_REQUEST } from "./actionTypes";

// Define the return type of the API call function
const API_KEY = "e42ee9b91df12c981e05bacef7f9cd11";

function fetchMoviesFromAPI(query: string) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );
}

// Define the generator function return type
function* fetchMoviesSaga(action: any) {
  try {
    // @ts-ignore
    const response = yield call(fetchMoviesFromAPI, action?.payload);
    const movies: Movie[] = response.data.results;
    yield put(fetchMoviesSuccess(movies));
  } catch (error: any) {
    yield put(fetchMoviesFailure(error.message));
  }
}

export function* watchFetchMovies() {
  yield takeEvery(FETCH_MOVIES_REQUEST, fetchMoviesSaga);
}
