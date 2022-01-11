import { combineReducers } from "redux";
import { homepageReducer } from "../components/Homepage/reducer";

const reducers = {
  homepageReducer,
};

const rootReducer = combineReducers<typeof reducers>(reducers);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
