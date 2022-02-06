import {
  Component,
  Div,
  H2,
  PaddingTop,
  MarginTop,
} from "./Technologies.style";
import Arrow from "../../../public/SVG";
import BlockTechnologies from "./BlockTechnologies";
import { theme } from "../../../styles/theme";
import Link from "next/link";
import { GetHomepage_homePage_data_attributes_technologies_tech_stacks_data } from "../../../graphql/homepage/__generated__/GetHomepage";
import { ROUTES } from "../../../constants/routes";

interface ITechnologies {
  bgColor?: string;
  title: string;
  techStacks: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data[];
}

function TechnologiesComponent({ title, bgColor, techStacks }: ITechnologies) {
  const bgColorWhite = theme.colors.white;
  const bgColorBlack = theme.colors.black;

  const getBgColor = () => (bgColor ? bgColor : bgColorWhite);
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

          {/* <Link href={ROUTES.EXPERTISE.TECHNOLOGIES} passHref /> */}
            {/* <Arrow /> */}
          {/* </Link> */}
        </Div>
      </PaddingTop>

      <MarginTop>
        {techStacks && <BlockTechnologies techStacks={techStacks} />}
      </MarginTop>
    </Component>
  );
}

export default TechnologiesComponent;
