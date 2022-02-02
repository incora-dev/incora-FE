import themeGet from "@styled-system/theme-get";
import styled, {keyframes} from "styled-components";
import { theme } from "../../../styles/theme";

interface IStacksBlock {
  columns: number;
}

interface IAnimation {
  animation: boolean;
}

export const Div = styled.div`
  height: max-content;

  overflow: hidden;
`

export const Container = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 117px auto auto;

  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 100%;
    padding: 0 25px;
    margin: 60px auto;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-top: 53px;
    padding: 0 15px;
      row-gap: 15px;
  }
`

export const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000000;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: var(--fs-36);
    line-height: 50px;
  }
`

export const H3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 40px;
}

  letter-spacing: 0.05em;

  color: #000000;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: var(--fs-28);
    line-height: 48px;
  }
`

export const StackText = styled.p`
  max-width: 495px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #454A4D;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    max-width: 100%;
  }
`

export const StacksContainer = styled.div`
  max-width: 403px;
  height: max-content;
  
  padding: 50px 48px;
  background: #FBFBFB;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    max-width: 100%;
    padding: 20px 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0;
  }
`

export const StacksBlock = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }: IStacksBlock) => `repeat(${columns}, 1fr)`};
  grid-template-rows: 1fr min-content;
  grid-row-gap: 35px;
  grid-column-gap: 58px;

  white-space: nowrap;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: flex;
    padding: 20px 0;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 30px;
    white-space: initial;
  }
`

export const LogoAndTitle = styled.a`
  display: flex;
  flex-direction: column;
  row-gap: 11px;

  justify-content: center;

  cursor: pointer;

  svg {
    align-self: center;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    max-width: 140px;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    max-width: 95px;
  }
`

export const StackTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: var(--fs-11);
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000000;
`

export const InfoBlock = styled.div`
  margin-top: 38px;
  margin-bottom: 155px;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    margin-bottom: 60px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    flex-direction: column;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    flex-direction: column;
    gap: 30px;
    margin-top: 18px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`

export const DotsPosition = styled.div`
  position: absolute;
  top: -17px;
  right: -115px;
  
  div {
    transform: rotate(60deg);
  }
`

const rotation = keyframes`
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(0);
  }
`

export const LoaderPosition = styled.div`
  position: absolute;
  top: 16px;
  right: -249px;
  
  svg {
    path {
      fill: black;
    }

    opacity: ${({ animation }: IAnimation) => {
      if (animation) {
        return '1';
      } else {
        return '0';
      }
    }};

    animation: ${rotation} 0.5s linear;

    transition: all 0.5s ease-in-out;
  }
`

export const PositionButtonWithArrow = styled.div`
  margin-top: 12px;
`
