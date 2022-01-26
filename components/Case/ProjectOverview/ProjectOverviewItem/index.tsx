import {
  DecorationWrapper,
  ImageBackground,
  ImageWrap,
  ProjectOverviewItemWrapper,
  TextWrap,
} from "./style";
import Image from "next/image";

import { theme } from "../../../../styles/theme";
import { useState } from "react";

import DecorationProjectOverview from "../../../../public/decorationProjectOverview.svg";
import BlackSemicircle from "../../../../public/blackSemicircle.svg";
import TransparentElement from "../../../../public/TransparentElement.svg";
import TransparentSemicircle from "../../../../public/transparentSemicircle.svg";
import Dots from "../../../Homepage/Cooperate/elements/dots/dots";
import DecorationItem from "../../../../public/decorationItem.svg";
import DecorationItem2 from "../../../../public/decorationItem2.svg";
import DecorTransparentSemicircle from "../../../../public/decorTransparentSemicircle.svg";
import { GetProjectPage_projects_data_attributes_projectOverview_item_image_data_attributes } from "../../../../graphql/caseStudies/__generated__/GetProjectPage";
import { IMAGES_LINK } from "../../../../constants";

interface IProjectOverviewItem {
  image: GetProjectPage_projects_data_attributes_projectOverview_item_image_data_attributes;
  heading: string;
  text: string;
  list?: string[];
  index: number;
}

const DecorationOne = () => {
  return (
    <DecorationWrapper>
      <DecorationProjectOverview className="decoration1" />
      <BlackSemicircle className="black_semicircle" />
      <TransparentElement className="transparent" />
    </DecorationWrapper>
  );
};

const DecorationTwo = ({ isAnimate }: { isAnimate: boolean }) => {
  return (
    <DecorationWrapper>
      <TransparentSemicircle className="transparent_semicircle" />
      <div className="dots1_wrap">
        <Dots
          numberOfDots={0}
          dotColor={theme.colors.black}
          animation={isAnimate}
        />
      </div>
    </DecorationWrapper>
  );
};

const DecorationThree = () => {
  return (
    <DecorationWrapper>
      <DecorationItem className="decoration2" />
      <DecorationItem2 className="decoration_black" />
      <DecorTransparentSemicircle className="decoration_semicircle" />
    </DecorationWrapper>
  );
};

const ProjectOverviewItem = ({
  image,
  heading,
  text,
  list,
  index,
}: IProjectOverviewItem) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const src = IMAGES_LINK + image.url;

  const listCondition =
    list &&
    list.map((listItem, index) => (
      <li key={index * Math.random()}>{listItem}</li>
    ));

  const isLeft = (index + 1) % 10 !== 2;

  const decoration = (index: number, isAnimate: boolean) => {
    switch (index) {
      case 0:
        return <DecorationOne />;

      case 1:
        return <DecorationTwo isAnimate={isAnimate} />;

      case 2:
        return <DecorationThree />;

      default:
        return <DecorationTwo isAnimate={isAnimate} />;
    }
  };

  return (
    <ProjectOverviewItemWrapper
      onMouseEnter={() => setIsAnimate(true)}
      isLeft={isLeft}
    >
      <ImageWrap index={index}>
        {decoration(index, isAnimate)}
        <ImageBackground isLeft={isLeft} className="background">
          <Image
            loader={() => src}
            src={src}
            width={506}
            height={292}
            alt="case photo"
          />
        </ImageBackground>
      </ImageWrap>

      <TextWrap isLeft={isLeft}>
        <h2>{heading}</h2>
        <p>
          {text}
          <ul>{listCondition}</ul>
        </p>
      </TextWrap>
    </ProjectOverviewItemWrapper>
  );
};

export default ProjectOverviewItem;
