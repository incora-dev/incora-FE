import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IGridItemWrap {
  width: number;
}

interface IGrid {
  rowGap: number;
}

interface IBackground {
  bgColor: string;
}

export const BenefitsAndSolutionsWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  background-color: ${({ bgColor }: IBackground) => bgColor};

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px 15px;
  }
`;

export const ContentWrap = styled.div`
  padding-top: 111px;
  position: relative;
  width: 1006px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-top: 100px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    max-width: 100%;
    width: 100%;
    padding: 100px 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 50px 0 60px;
  }


  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 25px 0;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-26);
    line-height: 54px;
    letter-spacing: 0.05em;
    color: ${themeGet("colors.white")};
    text-transform: capitalize;
    margin-bottom: 65px;

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: var(--fs-26);
      line-height: 34px;
      margin-bottom: 40px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      line-height: 40px;
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: wrap;
  column-gap: 70px;
  row-gap: ${({ rowGap }: IGrid) => `${rowGap}px`};

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    column-gap: 55px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    row-gap: 50px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    row-gap: 40px;
  }
`;

export const GridItemWrap = styled.div`
  width: ${({ width }: IGridItemWrap) => `${width}px`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: calc((100% - 60px) / 2);
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }

  svg {
    margin-bottom: 5px;
    width: 51px;
  }

  .image {
    max-height: 37px;
  }

  h3 {
    font-weight: 800;
    font-size: var(--fs-18);
    font-style: normal;
    line-height: 27px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    color: ${themeGet("colors.white")};
    margin: 13px 0 10px;

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 14px;
      line-height: 24px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      padding-left: 10px;
      max-width: calc(100% - 51px)
;    }
  }
  
  p {
    font-style: normal;
    font-weight: 500;
    font-size: var(--fs-14);
    line-height: 30px;
    /* or 214% */

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${themeGet("colors.font1")};
  }
`;
