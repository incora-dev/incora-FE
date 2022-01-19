import HexagonsBackground from "../HexagonsBackground";
import {
  BenefitsAndSolutionsWrap,
  ContentWrap,
  Grid,
  GridItemWrap,
} from "./style";
import React from "react";
import {theme} from "../../styles/theme";

export interface GridData {
  title: string;
  icon: React.ComponentClass<any>;
  text?: string;
}

interface IBenefitsAndSolutions {
  header: string;
  gridData: GridData[];
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
    const { icon, title, text } = item;
    const Icon = icon;
    const textCondition = text && <p>{text}</p>;

    return (
      <GridItemWrap key={index * Math.random()} width={gridItemWidth}>
        <Icon />
        <h3>{title}</h3>
        {textCondition}
      </GridItemWrap>
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
