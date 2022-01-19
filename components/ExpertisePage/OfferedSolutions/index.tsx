import BenefitsAndSolutions from "../../BenefitsAndSolutions";
import { theme } from "../../../styles/theme";
import React from "../../../public/SVG/technologies/react.svg";
import {Div} from "./OfferedSolutions.style";

const OfferedSolutions = ({ data }) => {
  return (
    <Div>
      <BenefitsAndSolutions
        header={'Offered solutions'}
        gridData={data}
        gridItemWidth={288}
        rowGap={132}
        bgColor={theme.colors.black}
      />
    </Div>
  )
}

export default OfferedSolutions;
