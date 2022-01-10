import { ReviewBoxWrapper } from "./style";

import ReviewContent from "./components/ReviewContent";
import CarouselButton from "../../../../common/CarouselButton";
import { Review } from "../../../interfaces";
import { reviewsSelector } from "../../../selectors";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
    } else if (reviewIndex <= lastElementIndex && !right && reviewIndex > 0) {
      setReviewIndex(reviewIndex - 1);
    }
  };

  useEffect(() => {
    dispatch(changeCurrentGlobePoint(reviewIndex));
    console.log("reviewIndex", reviewIndex);
  }, [dispatch, reviewIndex]);

  return (
    <ReviewBoxWrapper>
      <CarouselButton changeReview={changeReview} right={false} />
      <ReviewContent review={reviews[reviewIndex]} />
      <CarouselButton changeReview={changeReview} right={true} />
    </ReviewBoxWrapper>
  );
};

export default ReviewBox;
