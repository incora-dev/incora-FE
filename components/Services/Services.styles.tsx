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
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: 80vh;
  }
  @media only screen and (max-width: ${theme.breakpoints.mMobile}) {
    height: 95vh;
  }
  @media only screen and (max-width: ${theme.breakpoints.xsMobile}) {
    height: 120vh;
  }
`

export const Container = styled.div`
  max-width: 1006px;
  margin: auto;
`

export const TextBlock = styled.div`
  padding-top: 116px;
  
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 25px 20px;
  }
`

export const H1 = styled.h1`
  max-width: 560px;
  
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 50px;
}

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000000;
`

export const Strong = styled.strong`
  max-width: 560px;
  
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #454A4D;
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
`

export const PositionCube2 = styled.div`
  position: absolute;
  bottom: 252px;
  right: 34px;
`

export const PositionCube3 = styled.div`
  position: absolute;
  bottom: 94px;
  right: 148px;
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
