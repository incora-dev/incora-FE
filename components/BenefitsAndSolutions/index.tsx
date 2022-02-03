import HexagonsBackground from "../HexagonsBackground";
import {
  BenefitsAndSolutionsWrap,
  ContentWrap,
  Grid,
  GridItemWrap,
} from "./style";
import React from "react";
import { theme } from "../../styles/theme";
import { GetIndustryPage_industries_data_attributes_offeredSolutions_items } from "../../graphql/industries/__generated__/GetIndustryPage";
import { IMAGES_LINK } from "../../constants/links";
import Image from "next/image";

interface IBenefitsAndSolutions {
  header: string;
  gridData: (GetIndustryPage_industries_data_attributes_offeredSolutions_items | null)[];
  gridItemWidth: number;
  rowGap: number;
  bgColor?: string;
}

const BenefitsAndSolutions = ({
  header,
  gridData,
  gridItemWidth,
  rowGap,
  bgColor = theme.colors.black,
}: IBenefitsAndSolutions) => {
  const gridItems = gridData.map((item, index) => {
    const title = item?.title;
    const src = IMAGES_LINK + item?.image?.data?.attributes?.url;
    const width = item?.image?.data?.attributes?.width;
    const height = item?.image?.data?.attributes?.height;
    const textCondition = item?.description && <p>{item.description}</p>;

    const renderCondition = title && width && height;

    return (
      <>
        {renderCondition && (
          <GridItemWrap key={index * Math.random()} width={gridItemWidth}>
            <Image
              loader={() => src}
              src={src}
              width={width}
              height={47}
              alt="icon"
              className="image"
            />
            <h3>{title}</h3>
            {textCondition}
          </GridItemWrap>
        )}
      </>
    );
  });

  return (
    <BenefitsAndSolutionsWrap bgColor={bgColor}>
      <HexagonsBackground />
      <ContentWrap>
        <h1>{header}</h1>
        <Grid rowGap={rowGap}>{gridItems}</Grid>
      </ContentWrap>
    </BenefitsAndSolutionsWrap>
  );
};

export default BenefitsAndSolutions;