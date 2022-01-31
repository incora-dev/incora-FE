import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

export const Div = styled.div`
  position: relative;
  
  overflow: hidden;
  
  background-color: ${themeGet("colors.white")};
`

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 66px 0 101px;

  max-width: 1006px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 20px 15px 55px;
  }
`

export const PositionLoader = styled.div`
  position: absolute;
  top: 1px;
  right: -42px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    top: 69px;
    right: -102px;
  }
`

export const PositionDots = styled.div`
  position: absolute;
  top: 93px;
  right: 143px;
  
  transform: rotate(60deg);
`

export const PositionSemiCircle = styled.div`
  position: absolute;
  top: 63px;
  right: 0;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    top: 190px;
    right: -50px;
  }
`

export const TextBlock = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  font-size: var(--fs-32);
  line-height: 50px;
}

  letter-spacing: 0.05em;
  text-transform: capitalize;
  
  color: ${themeGet("colors.black")};
`

export const Text = styled.p`
  max-width: 684px;
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: ${themeGet("colors.font2")};

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    line-height: 27px;
  }
`
