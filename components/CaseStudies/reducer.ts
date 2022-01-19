import { CaseStudiesState, CaseStudiesActions } from "./interfaces";
import { Reducer } from "redux";
import { withLoadable } from "../../services/withLoadableReducer";
import * as Action from "./actions";

const initialState = {
  filterTags: [
    "all",
    "real estate",
    "e-learning",
    "e-commerce",
    "food industry",
    "health and wellness",
    "task management",
    "process management",
    "recruitment",
    "screening",
    "recruitment",
    "keyword research",
    "food industry",
    "environment",
  ],
  filterByFlag: false,
  loading: false,
  error: null,
};

const reducer: Reducer<CaseStudiesState, CaseStudiesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Action.TOGGLE_FILTER_BY: {
      return {
        ...state,
        filterByFlag: action.value,
      };
    }

    default:
      return state;
  }
};

export const caseStudiesReducer = withLoadable([])(reducer);
