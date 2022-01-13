import { Component, Div, H2, PaddingTop, MarginTop } from "./news.style";
import { ITechnologies } from "@interfaces";
import Arrow from "../../public/SVG";
import { theme } from "../../styles/theme";
import BlockTechnologies from "../homePage/Technologies/BlockTechnologies";
import NewsBLock from "./NewsBLock";

function NewsComponent({ title, bgColor, labels, articles }: ITechnologies) {
  const bgColorWhite = theme.colors.white;
  const bgColorBlack = theme.colors.black;

  const getBgColor = () => bgColor ? bgColor : bgColorWhite;
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
        <PaddingTop>
          <Div>
            <H2 color={getTitleColor()}>{title}</H2>
            <a href={title}>
              <Arrow/>
            </a>
          </Div>
        </PaddingTop>

        <MarginTop>
          <NewsBLock news={articles}/>
        </MarginTop>
      </Component>
  )
}

export default NewsComponent;
