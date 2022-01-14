import { AppState } from "../../services/store";
import { Point, Review } from "@interfaces";

export const reviewsSelector = (state: AppState): Review[] => {
  return state.homepageReducer.reviews;
};

export const pointsSelector = (state: AppState): Point[] => {
  return state.homepageReducer.points;
};

export const loadingSelector = (state: AppState): boolean => {
  return state.homepageReducer.loading;
};
