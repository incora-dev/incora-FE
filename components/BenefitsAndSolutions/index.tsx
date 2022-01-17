import HexagonsBackground from "../HexagonsBackground";
import {
  BenefitsAndSolutionsWrap,
  ContentWrap,
  Grid,
  GridItemWrap,
} from "./style";

interface GridData {
  title: string;
  icon: React.ComponentClass<any>;
  text?: string;
}

interface IBenefitsAndSolutions {
  header: string;
  gridData: GridData[];
  gridItemWidth: number;
  rowGap: number;
}

const BenefitsAndSolutions = ({
  header,
  gridData,
  gridItemWidth,
  rowGap,
}: IBenefitsAndSolutions) => {
  const gridItems = gridData.map((item, index) => {
    const { icon, title, text } = item;
    const Icon = icon;
    const textCondition = text && <p>{text}</p>;

    return (
      <GridItemWrap width={gridItemWidth} key={index * Math.random()}>
        <Icon />
        <h3>{title}</h3>
        {textCondition}
      </GridItemWrap>
    );
  });

  return (
    <BenefitsAndSolutionsWrap>
      <HexagonsBackground />
      <ContentWrap>
        <h1>{header}</h1>
        <Grid rowGap={rowGap}>{gridItems}</Grid>
      </ContentWrap>
    </BenefitsAndSolutionsWrap>
  );
};

export default BenefitsAndSolutions;
