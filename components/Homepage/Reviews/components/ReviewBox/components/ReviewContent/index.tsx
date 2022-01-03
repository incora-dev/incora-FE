import { AvatarWrap, NameWrap, Photo, QuoteText, QuoteWrap, ReviewContentWrap } from "./style";

import Quotes from "../../../../../../../public/icons/Quotes.svg";
import photo from "../../../../../../../public/images/testPhoto.png";

const ReviewContent = () => {
  return (
    <ReviewContentWrap>
      <QuoteWrap>
        <div>
          <Quotes />
        </div>
        <QuoteText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          neque, accusamus sint dolorum est voluptas deleniti et velit
          reiciendis nisi iste impedit labore molestiae adipisci sed veniam
          error cumque, tempora sunt, temporibus itaque atque. Nulla optio ex
          excepturi, quos debitis magni dolores minima doloremque asperiores
          modi repellat sed eius, mollitia magnam facere ipsa
        </QuoteText>
      </QuoteWrap>

      <AvatarWrap>
        <div>
          <Photo src={photo} alt="photo" layout="fixed" />

          <NameWrap>
            <h3>sven crone</h3>
            <span>CEO at EnviaYa</span>
          </NameWrap>
        </div>
      </AvatarWrap>
    </ReviewContentWrap>
  );
};

export default ReviewContent;
