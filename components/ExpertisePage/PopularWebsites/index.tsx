import {
  Div,
  Wrapper,
  TextBlock,
  H2,
  IconsBlock,
} from "./PopularWebsites.style";
import React from "react";
import Link from "next/link";
import { GetTechnologyPage_technologies_data_attributes_popularWebsites_pictures_data } from "../../../graphql/technologies/__generated__/GetTechnologyPage";
import Image from "next/image";
import { IMAGES_LINK } from "../../../constants";

interface IPopularWebsites {
  title: string;
  pictures: GetTechnologyPage_technologies_data_attributes_popularWebsites_pictures_data[];
}

const PopularWebsites = ({ title, pictures }: IPopularWebsites) => {
  const createPictures = pictures.map((picture) => {
    const id = picture.id;
    const src = IMAGES_LINK + picture.attributes?.url;
    const width = picture.attributes?.width;
    const height = picture.attributes?.height;

    const renderCondition = src && width && height;
    return (
      <>
        {renderCondition && (
          <Image
            key={id}
            loader={() => src}
            src={src}
            width={width}
            height={height}
            alt="company logo"
          />
        )}
      </>
    );
  });

  return (
    <Div>
      <Wrapper>
        <TextBlock>
          <H2>{title}</H2>
          <IconsBlock>{createPictures}</IconsBlock>
        </TextBlock>
      </Wrapper>
    </Div>
  );
};

export default PopularWebsites;