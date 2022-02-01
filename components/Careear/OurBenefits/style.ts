import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const OurBenefitsWrapper = styled.div`
  width: 100%;
  height: 1010px;
  position: relative;
  
  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    height: 900px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    height: 750px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    height: auto;
  }
`;
