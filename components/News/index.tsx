import { Component, HeaderWrap, H2, NewsWrap, HeaderContainer } from "./news.style";
import { ITechnologies } from "@interfaces";
import Arrow from "../../public/SVG";
import { theme } from "../../styles/theme";
import NewsBLock from "./NewsBLock";

function NewsComponent({ title, bgColor, labels, articles }: ITechnologies) {
  const bgColorWhite = theme.colors.white;
  const bgColorBlack = theme.colors.black;

  const getBgColor = () => (bgColor ? bgColor : bgColorWhite);
  const getTitleColor = () => {
    if (bgColor === bgColorWhite) {
      return bgColorBlack;
    }

    if (bgColor === bgColorBlack) {
      return bgColorWhite;
    }
  };

  return (
    <Component bgColor={getBgColor()}>
      <HeaderContainer>
        <HeaderWrap>
          <H2 color={getTitleColor()}>{title}</H2>
          <a href={title}>
            <Arrow />
          </a>
        </HeaderWrap>
      </HeaderContainer>

      <NewsWrap>
        <NewsBLock news={articles} />
      </NewsWrap>
    </Component>
  );
}

export default NewsComponent;
