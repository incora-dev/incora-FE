import { createApiAction } from "../../services/helpers";
import * as ActionInterfaces from "../../interfaces/reviesComponent.interface";

export const GET_REVIEWS = "GET_REVIEWS";
export const GET_REVIEWS_SUCCESS = "GET_REVIEWS_SUCCESS";
export const GET_REVIEWS_FAILURE = "GET_REVIEWS_FAILURE";

export const CHANGE_CURRENT_GLOBE_POINT = "CHANGE_CURRENT_GLOBE_POINT";

export const changeCurrentGlobePoint = (
  index: number
): ActionInterfaces.ChangeCurrentGlobePoint => ({
  type: CHANGE_CURRENT_GLOBE_POINT,
  index,
});

export const getReview = createApiAction(GET_REVIEWS);
