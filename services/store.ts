import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { homepageReducer } from "../components/Homepage/reducer";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(compose(applyMiddleware(sagaMiddleware)))
);

export type AppState = ReturnType<typeof store.getState>;

export default store;
