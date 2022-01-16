import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IGridItemWrap {
  width: number;
}

interface IGrid {
  rowGap: number;
}

export const BenefitsAndSolutionsWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
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

  svg {
    margin-bottom: 10px;
  }

  h3 {
    font-weight: 800;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    color: ${themeGet("colors.white")};
  }
`;
