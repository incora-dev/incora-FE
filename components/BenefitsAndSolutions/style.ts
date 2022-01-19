import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

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
`;

export const ContentWrap = styled.div`
  padding-top: 120px;
  position: absolute;
  width: 1006px;

  h1 {
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
    color: ${themeGet("colors.white")};
    letter-spacing: ${themeGet("letterSpacing.h1")};
    text-transform: capitalize;
    margin-bottom: 58.6px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: wrap;
  column-gap: 70px;
  row-gap: ${({ rowGap }: IGrid) => `${rowGap}px`};
`;

export const GridItemWrap = styled.div`
  width: ${({ width }: IGridItemWrap) => `${width}px`};
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  svg {
    margin-bottom: 5px;
  }

  h3 {
    font-weight: 800;
    font-size: 18px;
    font-style: normal;
    line-height: 27px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    color: ${themeGet("colors.white")};
  }
  
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    /* or 214% */

    letter-spacing: 0.05em;
    text-transform: capitalize;

    //color: #BCBCC0;
    color: ${themeGet("colors.font1")};
  }
`;
