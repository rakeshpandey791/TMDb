import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "./actionTypes";
import { Movie } from "./types";

export interface FetchMoviesRequest {
  type: typeof FETCH_MOVIES_REQUEST;
  payload: string;
}

export interface FetchMoviesSuccess {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: Movie[];
}

export interface FetchMoviesFailure {
  type: typeof FETCH_MOVIES_FAILURE;
  payload: string;
}

export type MovieActionTypes =
  | FetchMoviesRequest
  | FetchMoviesSuccess
  | FetchMoviesFailure;

export const fetchMoviesRequest = (query: string): FetchMoviesRequest => ({
  type: FETCH_MOVIES_REQUEST,
  payload: query,
});

export const fetchMoviesSuccess = (movies: Movie[]): FetchMoviesSuccess => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error: string): FetchMoviesFailure => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});
