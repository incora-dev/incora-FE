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
import { Review } from "../../../../../../../interfaces/reviesComponent.interface";
import { GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data } from "../../../../../../../graphql/homepage/__generated__/GetHomepage";
import { IMAGES_LINK } from "../../../../../../../constants";

interface IReviewContent {
  review: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data;
}

const ReviewContent = ({ review }: IReviewContent) => {
  const { id, attributes } = review;
  const text = attributes?.text;
  const name = attributes?.clientName;
  const position = attributes?.clientPosition;
  const photo = IMAGES_LINK + attributes?.clientPhoto.data?.attributes?.url;

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
          <Photo
            loader={() => photo}
            width={53}
            height={53}
            src={photo}
            alt="photo"
            layout="fixed"
          />

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
