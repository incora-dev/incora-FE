import { ReviewsWrapper } from "./Reviews.style";

import ReviewsHeader from "./components/ReviewsHeader";
import ReviewBox from "./components/ReviewBox";
import Globe from "../../common/Globe";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../actions";
import { Review } from "@interfaces";
import { loadingSelector, reviewsSelector } from "../selectors";
import { useIsMobile } from "../../../services/hooks";
import { GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data } from "../../../graphql/homepage/__generated__/GetHomepage";

interface IReviews {
  reviews: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data[];
}

export interface Point {
  lat: number | undefined;
  lng: number | undefined;
  size: number | undefined;
  radius: number | undefined;
}

const Reviews = ({ reviews }: IReviews) => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  let points: Point[] = reviews.map((review, index) => {
    const location =
      review.attributes?.project?.data?.attributes?.location?.data?.attributes
        ?.location;
    const lat = location?.lat;
    const lng = location?.lng;
    const size = index === 0 ? 0.06 : 0.03;
    const radius = index === 0 ? 1 : 0.6;

    return {
      lat,
      lng,
      size,
      radius,
    };
  });

  // const changeCurrentGlobePoint = (currentIndex: number) => {
  //   return points = points.map((point, index) => {
  //     if (index === currentIndex) {
  //       return {
  //         ...point,
  //         size: 0.06,
  //         radius: 1,
  //       };
  //     } else {
  //       return {
  //         ...point,
  //         size: 0.03,
  //         radius: 0.6,
  //       };
  //     }
  //   });
  // };

  return (
    <ReviewsWrapper>
      <ReviewsHeader reviewIndex={reviewIndex} reviewsLength={reviews.length} />
      <ReviewBox
        reviews={reviews}
        reviewIndex={reviewIndex}
        setReviewIndex={setReviewIndex}
        changeCurrentGlobePoint={(currentIndex) => null}
      />
      {!isMobile && !isTablet && !isSmallTablet && (
        <Globe points={points} reviewIndex={reviewIndex} />
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
