import { ReviewsWrapper } from "./Reviews.style";

import ReviewsHeader from "./components/ReviewsHeader";
import ReviewBox from "./components/ReviewBox";
import Globe, { Point } from "../../common/Globe";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../../services/hooks";
import { GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data } from "../../../graphql/homepage/__generated__/GetHomepage";

interface IReviews {
  reviews: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data[];
}

const Reviews = ({ reviews }: IReviews) => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();
  let points = useRef<Point[]>();

  useEffect(() => {
    points.current = reviews.map((review, index) => {
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
  }, []);

  const changeCurrentGlobePoint = (currentIndex: number) => {
    return (points.current =
      points.current &&
      points.current.map((point, index) => {
        if (index === currentIndex) {
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
      }));
  };

  return (
    <ReviewsWrapper>
      <ReviewsHeader reviewIndex={reviewIndex} reviewsLength={reviews.length} />
      <ReviewBox
        reviews={reviews}
        reviewIndex={reviewIndex}
        setReviewIndex={setReviewIndex}
        changeCurrentGlobePoint={changeCurrentGlobePoint}
      />
      {!isMobile && !isTablet && !isSmallTablet && points.current && (
        <Globe points={points.current} reviewIndex={reviewIndex} />
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
