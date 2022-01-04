import { Component, Div, H2, PaddingTop, PositionArrow, MarginTop } from "./Technologies.style";
import { ITechnologies } from "@interfaces";
import Arrow from "../../../public/SVG/svg";
import BlockTechnologies from "./BlockTechnologies";

function TechnologiesComponent(props: ITechnologies) {
  const { title, bgColor, labels } = props;

  return (
    <Component bgColor={bgColor}>
      <PaddingTop>
        <Div>
          <H2>{title}</H2>

          <PositionArrow>
            <Arrow/>
          </PositionArrow>

        </Div>
      </PaddingTop>

      <MarginTop>
        <BlockTechnologies technologies={labels}/>
      </MarginTop>
    </Component>
  )
}

export default TechnologiesComponent;
