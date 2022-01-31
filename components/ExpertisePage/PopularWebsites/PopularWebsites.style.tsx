import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

export const Div = styled.div`
  background-color: ${themeGet("colors.white")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 120px 0;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 30px 0;
    max-width: 100%;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  row-gap: 90px;
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    row-gap: 30px;
  }
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
 @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
     line-height: 40px;
  }

  letter-spacing: 0.05em;
  
  color: ${themeGet("colors.black")};
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 20px;
  }
`;

export const IconsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 110px;
  row-gap: 50px;
  align-items: center;
  justify-items: center;
  
  svg {
    cursor: pointer;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
`;
