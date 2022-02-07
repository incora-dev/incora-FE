import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const CaseDescriptionWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
    padding-bottom: 0;
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

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 50px 15px 20px;
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
  min-height: 367px;
  overflow: scroll;
  height: max-content;
  max-height: 482px;

  background-color: ${themeGet("colors.background4")};
  padding: 35px 30px 0;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding: 10px 15px 0;
    max-height: 350px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding-left: 0;
    padding-right: 0;
    background-color: ${themeGet("colors.white")};
    min-height: fit-content;
    max-height: fit-content;
    width: 100%;
  }
`;

export const TagsCategory = styled.div`
  margin-bottom: 25px;

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
  flex-direction: column-reverse;
`;

export const TagFlexBox = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap row;
  gap: 7px;

  // @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  //   width: 300px;
  // }
`;

export const TagBox = styled.div`
  position: relative;

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
    z-index: 1;

    font-weight: 600;
    font-size: var(--fs-10);
    line-height: 28px;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    color: ${themeGet("colors.white")};
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;

    width: 0;
    height: 100%;

    content: '';
    border-radius: 5px;

    background-color: ${themeGet("colors.yellow")};
    color: ${themeGet("colors.black")};

    transition: width ${themeGet("transition.button")};
  }

  &:hover :after {
    width: 100%;
  }
`;
