import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const MembersWrapper = styled.div`
  width: 100%;
  height: 634px;
  background-color: ${themeGet("colors.black")};
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    height: auto;
    flex-direction: column;
    padding: 50px 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 40px 15px;
  }
`;

export const ContentWrapper = styled.div`
  z-index: 1;
  height: 100%;
  width: 1005px;
  display: flex;
  justify-content: space-between;
  position: absolute;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 100%;
    position: relative;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const NumbersWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding-left: 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
    column-gap: 60px;
    padding-left: 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    column-gap: 30px;
  }
`;

export const MembersPhotosWrap = styled.div`
  bottom: 60px;
  position: relative;
  width: 598px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding-right: 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 500px;
    bottom: auto;
    column-gap: 30px;
    padding-right: 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    bottom: auto;
  }
`;
