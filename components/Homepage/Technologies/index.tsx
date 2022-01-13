import { Component, Div, H2, PaddingTop, MarginTop } from "./Technologies.style";
import { ITechnologies } from "@interfaces";
import Arrow from "../../../public/SVG";
import BlockTechnologies from "./BlockTechnologies";
import { theme } from "../../../styles/theme";

function TechnologiesComponent({ title, bgColor, labels }: ITechnologies) {
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
        <BlockTechnologies technologies={labels}/>
      </MarginTop>
    </Component>
  )
}

export default TechnologiesComponent;
