import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IPositionInfo  {
  positionRight?: string;
  withGap?: boolean;
}

interface IDiv  {
  slide: number;
}

export const Cooperate = styled.div`

  height: 89vh;

  overflow: hidden;
  
  section {
    position: relative;

    max-width: 1166px;
    margin: 0 auto;
  }
`

export const Div = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: ${({slide}: IDiv) => {
    if (slide) {
      return `calc((-${slide} * (100vh - 104px)))`
    }
    
    return 0;
  }};

  transition: all 0.5s ease-in-out;
`

export const Slider = styled.div`
  //width: 100vw;
  display: flex;
  position: relative;
  height: calc(100vh - 105px);
  margin-right: 23px;
  padding-top: 23.2vh;
  padding-bottom: 33.2vh;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding-top: 90px;
    padding-bottom: 0;
    height: max-content;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding-top: 35px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    margin-right: 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    flex-wrap: wrap;
    padding-top: 15px;
  }
`

export const Number = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-150);
  line-height: 225px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: 200px;

  color: #18181A;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: 90px;
    width: 115px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    width: 120px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    display: none;
  }
`

export const PositionNumber = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 20px;
`

export const InfoContainer = styled.div<IPositionInfo>`
  display: flex;
  gap: ${({withGap}) => withGap ? '100px' : '25px'};

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    gap: 30px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    gap: 10px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    gap: 20px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    flex-wrap: wrap;
    gap: 0;
  }
`

export const PositionInfo = styled.div`
  position: relative;
  right: ${({ positionRight }: IPositionInfo) => positionRight};
  margin-top: 6px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    right: 70px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    right: 0;
  }

`

export const ElementsPosition = styled.div`
  display: flex;
  position: relative;
  margin-right: 24px;
  margin-left: 76px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    margin-right: 0;
    margin-left: 0;
  }
`

export const PositionScrollSlider = styled.div`
  position: absolute;
  top: 37.3vh;
  left: -10px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    left: 5%;
  }
`
