import {
  CarouselButtonsContainer,
  CarouselButtonWrapper,
  CarouselReviewWrapper,
  ReviewBoxWrapper,
  ButtonWrapper,
} from "./style";

import ReviewContent from "./components/ReviewContent";
import CarouselButton from "../../../../common/CarouselButton";
import React, { Dispatch, SetStateAction } from "react";
import { useIsMobile } from "../../../../../services/hooks";
import { GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data } from "../../../../../graphql/homepage/__generated__/GetHomepage";

interface IReviewBox {
  reviews: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data[];
  reviewIndex: number;
  setReviewIndex: Dispatch<SetStateAction<number>>;
  changeCurrentGlobePoint: (currentIndex: number) => void;
}

const ReviewBox = ({
  reviews,
  reviewIndex,
  setReviewIndex,
  changeCurrentGlobePoint,
}: IReviewBox) => {
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  const changeReview = (right: boolean) => {
    const lastElementIndex = reviews.length - 1;

    if (reviewIndex < lastElementIndex && right) {
      setReviewIndex(reviewIndex + 1);
      changeCurrentGlobePoint(reviewIndex + 1);
    } else if (reviewIndex <= lastElementIndex && !right && reviewIndex > 0) {
      setReviewIndex(reviewIndex - 1);
      changeCurrentGlobePoint(reviewIndex - 1);
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
      <CarouselReviewWrapper>
        {(isMobile || isTablet || isSmallTablet) && (
          <CarouselButtonsContainer>
            <CarouselButtonWrapper>
              {leftCarouselButtonCondition}
            </CarouselButtonWrapper>
            <CarouselButtonWrapper>
              {rightCarouselButtonCondition}
            </CarouselButtonWrapper>
          </CarouselButtonsContainer>
        )}
        <ReviewContent review={reviews[reviewIndex]} />
      </CarouselReviewWrapper>

      {!isMobile && !isTablet && !isSmallTablet && (
        <ButtonWrapper>
          <CarouselButtonWrapper>
            {leftCarouselButtonCondition}
          </CarouselButtonWrapper>
          <CarouselButtonWrapper>
            {rightCarouselButtonCondition}
          </CarouselButtonWrapper>
        </ButtonWrapper>
      )}
    </ReviewBoxWrapper>
  );
};

export default ReviewBox;
