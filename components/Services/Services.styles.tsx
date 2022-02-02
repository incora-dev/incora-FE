import themeGet from "@styled-system/theme-get";
import styled, {keyframes} from "styled-components";
import { theme } from "../../styles/theme";

interface IAnimation {
  animation: boolean;
}

export const Div = styled.div`
  position: relative;
  height: calc(565px - 104px);
  
  overflow: hidden;
  
  svg {
    position: absolute;
    bottom: -5px;
    right: 0;

    @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
      right: -53px;
      bottom: -30px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      bottom: -72px;
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
    padding-bottom: 90px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: fit-content;
    padding-bottom: 290px;
  }
`

export const Container = styled.div`
  max-width: 1006px;
  margin: auto;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 100%;
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 0 15px;
  }
`

export const TextBlock = styled.div`
  padding-top: 116px;
  
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 60%;
    padding-top: 80px;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    max-width: 100%;
    padding-top: 50px;
  }
`

export const H1 = styled.h1`
  max-width: 560px;
  
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000000;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: var(--fs-40);
    line-height: 60px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    font-size: var(--fs-36);
    line-height: 50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    font-size: var(--fs-28);
    line-height: 42px;
  }
`

export const Strong = styled.strong`
  max-width: 560px;
  
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #454A4D;

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    line-height: 27px;
  }
`

export const PositionDots = styled.div`
  position: absolute;
  bottom: 117px;
  right: 0;
`
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
`

export const PositionCube1 = styled.div`
  position: absolute;
  bottom: 154px;
  right: 331px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    display: none;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    display: block;
    transform: scale(0.7);
    right: 225px;
  }
`

export const PositionCube2 = styled.div`
  position: absolute;
  bottom: 252px;
  right: 34px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    transform: scale(0.8);
    bottom: 215px;
  }
`

export const PositionCube3 = styled.div`
  position: absolute;
  bottom: 94px;
  right: 148px;

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    bottom: 55px;
    right: 85px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    transform: scale(0.8);
    right: 100px;
  }
`

export const PositionLoaderBagelTrimmed = styled.div`
  position: absolute;
  bottom: 300px;
  right: 299px;

  svg {
    opacity: ${({ animation }: IAnimation) => {
      if (animation) {
        return '1';
      } else {
        return '0';
      }
    }};

    transition: all 1s ease-in-out;
    transform: rotate(-180deg);

    animation: ${rotation} 0.5s linear;
    path {
      fill: ${({color}) => color};
    }
  }
`
