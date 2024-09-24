import axios, { AxiosResponse } from "axios";

import { Movie } from "./types";
// @ts-ignore
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchMoviesFailure, fetchMoviesSuccess } from "./actions";
import { FETCH_MOVIES_REQUEST } from "./actionTypes";

const apiKey = process.env.REACT_APP_API_KEY; // Access API key
const apiUrl = process.env.REACT_APP_API_URL; // Access API URL

// Define the return type of the API call function
function fetchMoviesFromAPI(query: string) {
  return axios.get(`${apiUrl}/search/movie?query=${query}&api_key=${apiKey}`);
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
