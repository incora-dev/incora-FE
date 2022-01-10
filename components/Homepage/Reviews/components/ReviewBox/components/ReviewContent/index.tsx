import {
  AvatarWrap,
  NameWrap,
  Photo,
  QuoteText,
  QuoteWrap,
  ReviewContentWrap,
} from "./style";

import Quotes from "../../../../../../../public/icons/Quotes.svg";
import testPhoto from "../../../../../../../public/images/testPhoto.png";
import { useSelector } from "react-redux";
import { AppState } from "../../../../../../../services/store";
import { Review } from "../../../../../interfaces";

interface IReviewContent {
  review: Review;
}

const ReviewContent = ({ review }: IReviewContent) => {
  const { name, position, text, photo } = review;

  return (
    <ReviewContentWrap>
      <QuoteWrap>
        <div>
          <Quotes />
        </div>
        <QuoteText>{text}</QuoteText>
      </QuoteWrap>

      <AvatarWrap>
        <div>
          <Photo src={testPhoto} alt="photo" layout="fixed" />

          <NameWrap>
            <h3>{name}</h3>
            <span>{position}</span>
          </NameWrap>
        </div>
      </AvatarWrap>
    </ReviewContentWrap>
  );
};

export default ReviewContent;
