import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const Div = styled.div`
  margin-top: -104px;

  width: 100%;
  height: 1047px;
  position: relative;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: 210vh;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
    height: 260vh;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.xsMobile')}) {
    height: 350vh;
  }
`;
