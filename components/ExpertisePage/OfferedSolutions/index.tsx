import BenefitsAndSolutions from "../../BenefitsAndSolutions";
import { theme } from "../../../styles/theme";
import React from "../../../public/SVG/technologies/react.svg";
import { Div } from "./OfferedSolutions.style";
import { GetIndustryPage_industries_data_attributes_offeredSolutions_items } from "../../../graphql/industries/__generated__/GetIndustryPage";

interface IOfferedSolutionsProps {
  intro: string;
  data: (GetIndustryPage_industries_data_attributes_offeredSolutions_items | null)[];
}

const OfferedSolutions = ({ intro, data }: IOfferedSolutionsProps) => {
  return (
    <Div>
      <BenefitsAndSolutions
        header={intro}
        gridData={data}
        gridItemWidth={288}
        rowGap={132}
        bgColor={theme.colors.black}
      />
    </Div>
  );
};

export default OfferedSolutions;