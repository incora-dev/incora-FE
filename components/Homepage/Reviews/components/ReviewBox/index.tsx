import { ReviewBoxWrapper } from "./style";

import ReviewContent from "./components/ReviewContent";
import CarouselButton from "../../../../common/CarouselButton";

const ReviewBox = () => {
  return (
    <ReviewBoxWrapper>
      <CarouselButton right={false} />
      <ReviewContent />
      <CarouselButton right={true} />
    </ReviewBoxWrapper>
  );
};

export default ReviewBox;
