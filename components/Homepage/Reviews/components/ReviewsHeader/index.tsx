import { ReviewsHeaderWrapper } from "./ReviewsHeader.style";

interface IReviewsHeader {
  reviewIndex: number;
  reviewsLength: number;
}

const ReviewsHeader = ({ reviewIndex, reviewsLength }: IReviewsHeader) => {
  const padNumber = (number: number) => {
    return String(number).padStart(2, "0");
  };

  return (
    <ReviewsHeaderWrapper>
      <h1>reviews</h1>
      <span>
        {padNumber(reviewIndex + 1)} / {padNumber(reviewsLength)}
      </span>
    </ReviewsHeaderWrapper>
  );
};

export default ReviewsHeader;
