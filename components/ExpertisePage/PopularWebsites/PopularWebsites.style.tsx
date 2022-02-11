import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  background-color: ${themeGet("colors.white")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 120px 0;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    max-width: 100%;
    padding: 70px 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 50px 15px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 90px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    row-gap: 70px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    row-gap: 20px;
  }
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;

  letter-spacing: 0.05em;

  color: ${themeGet("colors.black")};

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    font-size: var(--fs-36);
    line-height: 50px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    font-size: var(--fs-28);
    line-height: 42px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    line-height: 40px;
  }
`;

export const IconsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 110px;
  row-gap: 50px;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    column-gap: 45px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.iPadAir")}) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    display: block;
    text-align: left;
    margin: 0 -15px;
  }

  > span {
    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      margin: 15px !important;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      margin: 5px 15px !important;
    }
  }
`;
