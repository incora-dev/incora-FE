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
  ContentWrapper
} from "./Information.style";
import { IServiceContent, IServiceContents } from "@interfaces";

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
    </Div>
  )
}

export default Information;
