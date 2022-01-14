import { Reducer } from "react";
import { withLoadable } from "../../services/withLoadebleReducer";
import { HomepageActions, HomepageState } from "@interfaces";
import * as ActionTypes from "./actions";

const initialState = {
  reviews: [
    {
      name: "sven crone",
      position: "CEO at EnviaYa",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantiumneque, accusamus sint dolorum est voluptas deleniti et velit reiciendis nisi iste impedit labore molestiae adipisci sed veniam error cumque, tempora sunt, temporibus itaque atque. Nulla optio ex excepturi, quos debitis magni dolores minima doloremque asperioresmodi repellat sed eius, mollitia magnam facere ipsa",
      photo: "",
      lat: 5,
      lng: 13,
    },
    {
      name: "someone",
      position: "CEO at Something",
      text: " deleniti et velit reiciendis nisi iste impedit labore molestiae adipisci sed veniam error cumque, tempora sunt, temporibus itaque atque. Nulla optio ex excepturi, quos debitis magni dolores minima doloremque asperioresmodi repellat sed eius, mollitia magnam facere ipsa",
      photo: "",
      lat: 5,
      lng: 1,
    },
    {
      name: "someone 2",
      position: "CEO at Something2",
      text: " sed veniam error cumque, tempora sunt, temporibus itaque atque. Nulla optio ex excepturi, quos debitis magni dolores minima doloremque asperioresmodi repellat sed eius, mollitia magnam facere ipsa",
      photo: "",
      lat: 15,
      lng: 1,
    },
  ],
  points: [],
  loading: true,
  error: null,
};

const reducer: Reducer<HomepageState, HomepageActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_REVIEWS_SUCCESS: {
      const points = state.reviews.map((review, index) => {
        const size = index === 0 ? 0.06 : 0.03;
        const radius = index === 0 ? 1 : 0.6;

        return {
          lat: review.lat,
          lng: review.lng,
          size,
          radius,
        };
      });

      return {
        ...state,
        points,
        loading: false,
      };
    }

    case ActionTypes.CHANGE_CURRENT_GLOBE_POINT: {
      const points = state.points.map((point, index) => {
        if (index === action.index) {
          return {
            ...point,
            size: 0.06,
            radius: 1,
          };
        } else {
          return {
            ...point,
            size: 0.03,
            radius: 0.6,
          };
        }
      });

      return {
        ...state,
        points,
      };
    }

    default:
      return state;
  }
};

export const homepageReducer = withLoadable([])(reducer);
