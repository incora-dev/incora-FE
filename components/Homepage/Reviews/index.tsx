import { ReviewsWrapper } from "./Reviews.style";

import ReviewsHeader from "./components/ReviewsHeader";
import ReviewBox from "./components/ReviewBox";
import Globe from "../../common/Globe";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../actions";
import { AppState } from "../../../services/store";
import { Review } from "@interfaces";
import { loadingSelector, reviewsSelector } from "../selectors";

const Reviews = () => {
  const loading: boolean = useSelector(loadingSelector);
  const reviews: Review[] = useSelector(reviewsSelector);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isMobDevice, setIsMobDevice] = useState<boolean>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof screen.orientation !== 'undefined') {
      setIsMobDevice(true);
    }
    dispatch(getReview.success()); // replace real backend data later
  }, []);

  return (
    <ReviewsWrapper>
      <ReviewsHeader reviewIndex={reviewIndex} reviewsLength={reviews.length} />
      <ReviewBox
        reviews={reviews}
        reviewIndex={reviewIndex}
        setReviewIndex={setReviewIndex}
      />
      {!loading && !isMobDevice && <Globe reviewIndex={reviewIndex} />}
    </ReviewsWrapper>
  );
};

export default Reviews;
