import * as Action from "./actions";

export interface Review {
  name: string;
  position: string;
  text: string;
  photo: string;
  lat: number;
  lng: number;
}

export interface Point {
  lat: number;
  lng: number;
  size: number;
  radius: number;
}

export interface HomepageState {
  reviews: Review[];
  points: Point[];
}

export interface GetReviews {
  type: typeof Action.GET_REVIEWS;
}

export interface GetReviewsSuccess {
  type: typeof Action.GET_REVIEWS_SUCCESS;
  //   payload: Review[];
}

export interface ChangeCurrentGlobePoint {
  type: typeof Action.CHANGE_CURRENT_GLOBE_POINT;
  index: number;
}

export type HomepageActions = GetReviewsSuccess | ChangeCurrentGlobePoint;
