import { ReviewsWrapper } from "./Reviews.style";

import ReviewsHeader from "./components/ReviewsHeader";
import ReviewBox from "./components/ReviewBox";

const Reviews = () => {
  return (
    <ReviewsWrapper>
      <ReviewsHeader />
      <ReviewBox />
    </ReviewsWrapper>
  );
};

export default Reviews;
