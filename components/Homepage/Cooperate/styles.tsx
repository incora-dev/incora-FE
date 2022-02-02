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

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: 110vh;
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

  color: #18181A;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: 90px;
  }
`

export const PositionNumber = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 20px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    left: 40%;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
    left: 40%;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.xsMobile')}) {
    left: 25%;
    margin-top: -50vw;

  }
`

export const InfoContainer = styled.div<IPositionInfo>`
  display: flex;
  gap: ${({withGap}) => withGap ? '100px' : '25px'};

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    gap: 10px;
  }


  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    flex-wrap: wrap;
  }
`

export const PositionInfo = styled.div`
  position: relative;
  right: ${({ positionRight }: IPositionInfo) => positionRight};
  margin-top: 6px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    right: ${({ positionRight }: IPositionInfo) => (positionRight == '70px;') ? '48px' : positionRight};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    right: ${({ positionRight }: IPositionInfo) => (positionRight == '70px;') ? '80px' : positionRight};
    right: ${({ positionRight }: IPositionInfo) => (positionRight == '46.5px;') ? '105px' : positionRight};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    right: 0;
    max-width: 100vw;
    top: -25vh;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.xsMobile')}) {
    top: 0;
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
