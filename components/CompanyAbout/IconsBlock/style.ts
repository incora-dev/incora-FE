import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const IconsContainer = styled.div`
  width: 100%;
  max-width: 1006px;
  padding: 30px 0 50px;
  display: flex;

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    // padding-top: 80px;
    padding-bottom: 0;
  }
  
  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 100%;
    padding: 30px 25px 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding-top: 30px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    max-width: 100%;
    padding: 30px 15px 0;
  }
`;

export const Icon = styled.div`
  margin-right: 75px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    transform: scale(0.7);
    margin: 0 25px 0 -15px;
  }

  :last-child {
    margin-right: 0;
  }
`;

