import { combineReducers } from "redux";
import { caseStudiesReducer } from "../components/CaseStudies/reducer";
import { homepageReducer } from "../components/Homepage/reducer";

const reducers = {
  homepageReducer,
  caseStudiesReducer,
};

const rootReducer = combineReducers<typeof reducers>(reducers);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
