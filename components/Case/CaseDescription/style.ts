import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CaseDescriptionWrapper = styled.div`
  width: 100%;
  height: 727px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
  }
`;

export const ContentWrapper = styled.div`
  width: 1006px;
  padding-top: 79px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: 100%;  
    padding: 70px 25px 20px;;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    flex-direction: column;
  }
`;

export const TextWrap = styled.div`
  width: 540px;
  height: 737px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    width: 100%;
  }

  h2 {
    font-weight: 800;
    font-size: var(--fs-21);
    line-height: 31px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 19px;
  }

  p {
    font-size: var(--fs-14);
    line-height: 30px;
    letter-spacing: 0.1em;
    color: ${themeGet("colors.font2")};
    margin-bottom: 120px;

    @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
      margin-bottom: 30px;
    }
  }

  .first {
    margin-bottom: 117px;
  }
`;

export const TagsWrap = styled.div`
  width: 406px;
  height: 367px;
  background-color: ${themeGet("colors.background4")};
  padding-top: 35px;
  padding-left: 30px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding-top: 10px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding-left: 0;
    height: fit-content;
  }
`;

export const TagsCategory = styled.div`
  margin-bottom: 40px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    margin-bottom: 20px;
  }
`;

export const TagsHeading = styled.h3`
  font-weight: 800;
  font-size: var(--fs-12);
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 13px;
`;

export const LocationAndIndustryWrap = styled.div`
  display: flex;
  column-gap: 46px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    flex-direction: column;
  }
`;

export const TagFlexBox = styled.div`
  display: flex;
  width: 280px;
  flex-flow: wrap row;
  gap: 7px;
`;

export const TagBox = styled.div`
  cursor: pointer;
  height: 22px;
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet("colors.font2")};
  box-shadow: ${themeGet("boxShadow.initial")};
  transition: ease-out 0.4s;

  > span {
    font-weight: 600;
    font-size: var(--fs-10);
    line-height: 28px;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    color: ${themeGet("colors.white")};
  }

  &:hover {
    background-color: ${themeGet("colors.yellow")};
    box-shadow: ${themeGet("boxShadow.hover")};
  }
`;
