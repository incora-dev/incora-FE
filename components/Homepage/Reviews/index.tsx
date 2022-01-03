import { ReviewsWrapper } from "./Reviews.style";

import ReviewsHeader from "./components/ReviewsHeader";
import ReviewBox from "./components/ReviewBox";
import Globe from "../../common/Globe";

const Reviews = () => {
  return (
    <ReviewsWrapper>
      <ReviewsHeader />
      <ReviewBox />
      <Globe />
    </ReviewsWrapper>
  );
};

export default Reviews;
