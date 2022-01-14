import { CarouselButtonWrapper, ReviewBoxWrapper } from "./style";

import ReviewContent from "./components/ReviewContent";
import CarouselButton from "../../../../common/CarouselButton";
import { Review } from "../../../../../interfaces/reviesComponent.interface";
import { useDispatch } from "react-redux";
import { Dispatch, SetStateAction, useEffect } from "react";
import { changeCurrentGlobePoint } from "../../../actions";

interface IReviewBox {
  reviews: Review[];
  reviewIndex: number;
  setReviewIndex: Dispatch<SetStateAction<number>>;
}

const ReviewBox = ({ reviews, reviewIndex, setReviewIndex }: IReviewBox) => {
  const dispatch = useDispatch();

  const changeReview = (right: boolean) => {
    const lastElementIndex = reviews.length - 1;

    if (reviewIndex < lastElementIndex && right) {
      setReviewIndex(reviewIndex + 1);
      dispatch(changeCurrentGlobePoint(reviewIndex + 1));
    } else if (reviewIndex <= lastElementIndex && !right && reviewIndex > 0) {
      setReviewIndex(reviewIndex - 1);
      dispatch(changeCurrentGlobePoint(reviewIndex - 1));
    }
  };

  const leftCarouselButtonCondition = reviewIndex !== 0 && (
    <CarouselButton changeReview={changeReview} right={false} />
  );

  const rightCarouselButtonCondition = reviewIndex !== reviews.length - 1 && (
    <CarouselButton changeReview={changeReview} right={true} />
  );

  return (
    <ReviewBoxWrapper>
      <CarouselButtonWrapper>
        {leftCarouselButtonCondition}
      </CarouselButtonWrapper>
      <ReviewContent review={reviews[reviewIndex]} />
      <CarouselButtonWrapper>
        {rightCarouselButtonCondition}
      </CarouselButtonWrapper>
    </ReviewBoxWrapper>
  );
};

export default ReviewBox;
