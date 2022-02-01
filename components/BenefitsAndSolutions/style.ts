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

  /* @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: 220vh;
  } */

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 0 30px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px 15px;
  }

  /* @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: 210vh;
  }
  @media only screen and (max-width:  ${themeGet('breakpoints.mMobile')}) {
    height: 260vh;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.xsMobile')}) {
    height: 350vh;
  } */
`;

export const ContentWrap = styled.div`
  padding-top: 120px;
  position: relative;
  width: 1006px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    max-width: 100%;
    width: 100%;
    padding: 100px 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 50px 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 30px 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 30px 15px;
  }

  /* @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-top: 50px;
  }
  position: absolute;
  width: 1006px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
  */

  h1 {
    font-weight: 800;
    font-size: var(--fs-36);
    line-height: 54px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 40px;
}
    color: ${themeGet("colors.white")};
    letter-spacing: ${themeGet("letterSpacing.h1")};
    text-transform: capitalize;
    margin-bottom: 58.6px;

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 20px;
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: wrap;
  column-gap: 70px;
  row-gap: ${({ rowGap }: IGrid) => `${rowGap}px`};

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    row-gap: 20px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    column-gap: 30px;
  }

  /* @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    flex-direction: column;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 20px;
    row-gap: 50px;
  } */
`;

export const GridItemWrap = styled.div`
  width: ${({ width }: IGridItemWrap) => `${width}px`};
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    width: calc((100% - 140px) / 2);
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: calc((100% - 60px) / 2);
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-bottom: 5px;
    width: 51px;
  }

  h3 {
    font-weight: 800;
    font-size: var(--fs-18);
    font-style: normal;
    line-height: 27px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    color: ${themeGet("colors.white")};

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

    //color: #BCBCC0;
    color: ${themeGet("colors.font1")};
  }
`;
