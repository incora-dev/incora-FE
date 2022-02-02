import themeGet from "@styled-system/theme-get";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

interface IDiv {
  backgroundColor: string;
}

interface IAnimation {
  animation: boolean;
}

export const Div = styled.div`
  overflow: hidden;
  
  background-color: ${({ backgroundColor }: IDiv) => backgroundColor};
`;

export const Container = styled.div`
  padding-bottom: 175px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 0 25px 100px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding: 50px 25px;
    width: 100%;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-bottom: 0;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const Text = styled.div`
  position: relative;

  width: max-content;
  
  display: flex;
  column-gap: 209px;
  margin: 0 auto;
  padding-top: 104px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding-top: 40px;
    column-gap: 80px;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding-top: 0;
    flex-direction: column;
    margin: 20px 0;
    width: 100%;
    gap: 20px;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-top: 0;
    flex-direction: column;
    margin: 20px 0;
    width: 100%;
  }

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
@media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
  line-height: 50px;
}

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #FFF;
  }
  
  p {
    margin-top: -2px;

    max-width: 473px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: var(--fs-14);
    line-height: 30px;

    letter-spacing: 0.1em;

    color: #BCBCC0;

    @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
      max-width: 550px;
    }
  }
`;

export const PositionDots = styled.div`
  position: absolute;

  right: -66px;
  bottom: -3px;

  transform: rotate(60deg);
`;

const rotation = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const PositionLoading = styled.div`
  position: absolute;

  right: -62px;
  bottom: -48px;

  transform: rotate(10deg);

  svg {
    opacity: ${({ animation }: IAnimation) => {
        if (animation) {
          return '1';
        } else {
          return '0';
        }
      }
    };

    transition: all 1s ease-in;

    animation: ${rotation} 0.5s linear;
  }
`;

export const PositionHexagon = styled.div`
  position: absolute;

  top: 22px;
  right: -278px;
`;
