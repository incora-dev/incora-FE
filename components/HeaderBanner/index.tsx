import { useState } from "react";
import { BannerWrapper, Emoji, Text, LinkContent, CloseBtn } from "./style";

interface IHeaderBanner {
  link: string,
  text: string,
  emoji?: string,
}

const HeaderBanner = ({ emoji, link, text }: IHeaderBanner) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <BannerWrapper isHidden={isHidden}>
      <a href={link} target='_blank' rel="noreferrer">
        <LinkContent>
          <Text>{text}</Text>
          <Emoji>{emoji}</Emoji>
        </LinkContent>
      </a>

      <CloseBtn
        onClick={() => {
          setIsHidden(true);
        }}
      >
        &#9587;
      </CloseBtn>
    </BannerWrapper>
  )
}

export default HeaderBanner;
