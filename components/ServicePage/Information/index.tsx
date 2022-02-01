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
import {
  GetService_services_data_attributes_whyDoYouNeed,
  GetService_services_data_attributes_whyDoYouNeed_items,
} from "../../../graphql/services/__generated__/GetService";
import Image from "next/image";
import { IMAGES_LINK } from "../../../constants";

interface IInformation {
  content: GetService_services_data_attributes_whyDoYouNeed;
}

interface IGetContent {
  content: (GetService_services_data_attributes_whyDoYouNeed_items | null)[];
}

const GetContent = ({ content }: IGetContent) => {
  return (
    <Content>
      {content.map((contentItem) => {
        const id = contentItem?.id;
        const title = contentItem?.title;
        const description = contentItem?.description;
        const image = contentItem?.image?.data?.attributes;
        const src = IMAGES_LINK + image?.url;
        const width = image?.width;
        const height = image?.height;

        return (
          <>
            {width && height && (
              <ContentWrapper key={id}>
                <Sphere>
                  <Image
                    loader={() => src}
                    src={src}
                    width={width}
                    height={height}
                    alt={"icon"}
                  />
                </Sphere>
                <H2>{title}</H2>
                <Text>{description}</Text>
              </ContentWrapper>
            )}
          </>
        );
      })}
    </Content>
  );
};

const Information = ({ content }: IInformation) => {
  const { intro, items } = content;

  return (
    <Div>
      <Wrapper>
        <TextBlock>
          <H1>{intro}</H1>
          <GetContent content={items} />
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
  );
};

export default Information;
