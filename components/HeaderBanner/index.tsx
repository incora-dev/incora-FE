import { useState } from "react";
import Link from "next/link";
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
      <Link href={link}>
        <a target='_blank'>
          <LinkContent>
            <Text>{text}</Text>
            <Emoji>{emoji}</Emoji>
          </LinkContent>
        </a>
      </Link>

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
