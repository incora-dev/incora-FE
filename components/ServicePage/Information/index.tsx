import React from "react";
import {
  Div,
  Wrapper,
  TextBlock,
  H1,
  Content,
  Sphere,
  H2,
  Text,
  ContentWrapper,
  PositionHexagon1,
  PositionHexagon2,
  PositionHexagon3
} from "./Information.style";
import { IServiceContent, IServiceContents } from "@interfaces";
import Hexagon from "../../../public/SVG/hexagon1.svg";

const title = 'Why do you need a Discovery phase?';

const getContent = (content: IServiceContent[] = []) => {
  return (
    <Content>
      {content.map(({title, text}, index) =>
          <ContentWrapper key={index}>
            <Sphere/>
            <H2>{title}</H2>
            <Text>{text}</Text>
          </ContentWrapper>
        )
      }
    </Content>
  )
}


const Information = ({ content }: IServiceContents) => {
  const contents = getContent(content);

  return (
    <Div>
      <Wrapper>
        <TextBlock>
          <H1>{title}</H1>
          {contents}
        </TextBlock>
      </Wrapper>

      <PositionHexagon1>
        <Hexagon width="235" viewBox="0 0 391 450" />
      </PositionHexagon1>

      <PositionHexagon2>
        <Hexagon width="235" viewBox="0 0 391 450" />
      </PositionHexagon2>

      <PositionHexagon3>
        <Hexagon width="235" viewBox="0 0 391 450" />
      </PositionHexagon3>
    </Div>
  )
}

export default Information;
