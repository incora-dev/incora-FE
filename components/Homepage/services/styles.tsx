import styled from "styled-components";
import { theme } from "../../../styles/theme";
import themeGet from "@styled-system/theme-get";

export const Component = styled.div`
  position: relative;
  height: 622px;

  overflow: hidden;

  background-color: #18181A;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: fit-content;
    padding-bottom: 53px;
  }
`

export const Position = styled.div`
  position: relative;
  margin: auto;
  width: 1006px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  max-width: 632px;
`

export const PositionCube1 = styled.div`
  position: absolute;

  bottom: 79px;
  right: 97px;
  
  svg {
    path {
      stroke: ${themeGet("colors.black")};
    }
  }
`

export const PositionCube2 = styled.div`
  position: absolute;

  bottom: 17px;
  right: 82px;
  
  svg {
    path {
      stroke: ${themeGet("colors.yellow")};
    }
  }
`

export const PositionCube3 = styled.div`
  position: absolute;

  bottom: 115px;
  right: -216px;

  svg {
    path {
      stroke: ${themeGet("colors.yellow")};
    }

  }
`

export const PositionCube4 = styled.div`
  position: absolute;

  bottom: 17px;
  right: -84px;

  svg {
    path {
      stroke: ${themeGet("colors.black")};
    }

  }
`

export const PositionCube5 = styled.div`
  position: absolute;

  bottom: -44px;
  right: -100px;

  svg {
    path {
      stroke: ${themeGet("colors.yellow")};
    }

  }
`

export const PositionSphere = styled.div`
  position: absolute;
  width: 237px;
  height: 237px;

  border-radius: 50%;
  bottom: 0;
  right: 0;
  
  overflow: hidden;
`

export const Sphere = styled.div`
  position: absolute;
  width: 237px;
  height: 237px;

  border-radius: 50%;
  bottom: -61px;
  right: -16px;

  overflow: hidden;

  background-color: ${themeGet("colors.white")};
`

export const PositionTextBlock = styled.div`
  margin-top: 120px;
`

export const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-26);
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #fff;
`

export const P = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #BCBCC0;
`

export const Labels = styled.div`
  height: max-content;
  margin-top: 25px;

  display: flex;
  flex-wrap: wrap;
  column-gap: 120px;
  row-gap: 9px;
  
  a {
    display: block;
  }
`

export const Label = styled.a`
  min-width: 202px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-16);
  line-height: 24px;

  letter-spacing: 0.05em;
  text-transform: capitalize;
  
  cursor: pointer;

  color: #FEC506;
`

export const PositionLoading = styled.div`
  position: absolute;
  top: -54px;
  right: -5px;
`

export const PositionHexagonOne = styled.div`
  position: absolute;
  top: -101px;
  right: 66px;
`

export const PositionHexagonTwo = styled.div`
  position: absolute;
  top: -152px;
  right: 313.5px;
`

export const PositionHexagonThree = styled.div`
  position: absolute;
  top: -72px;
  right: 424px;
`

export const PositionHexagonFour = styled.div`
  position: absolute;
  top: -147.5px;
  left: -155.5px;
`

export const PositionHexagonFive = styled.div`
  position: absolute;
  top: -59px;
  left: -51px;
`

export const PositionHexagonSix = styled.div`
  position: absolute;
  top: 79px;
  left: -261px;
`

export const PositionHexagonSeven = styled.div`
  position: absolute;
  bottom: -138px;
  left: -212px;
`

export const PositionHexagonEight = styled.div`
  position: absolute;
  bottom: -316px;
  right: -240px;
`

export const PositionHexagonNine = styled.div`
  position: absolute;
  bottom: -184px;
  right: -267px;
`
