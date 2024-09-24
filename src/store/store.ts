import createSagaMiddleware from "redux-saga";
import { movieReducer } from "./reducer";
import { watchFetchMovies } from "./sagas";
import { Store, applyMiddleware, combineReducers, createStore } from "redux";
// @ts-ignore
import { AnyAction } from "redux-saga";

// Create the saga middleware
const sagaMiddleware: any = createSagaMiddleware();

// Combine reducers if you have multiple, otherwise just use movieReducer
const rootReducer = combineReducers({
  movies: movieReducer,
});

// Define the state type
export type RootState = ReturnType<typeof rootReducer>;

// Create the store and apply middleware
// @ts-ignore
const store: Store<RootState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga
sagaMiddleware.run(watchFetchMovies);

export default store;
