import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IDiv {
  element: JSX.Element;
}

interface IElement {
  animation: boolean;
}

export const Div = styled.div`
  position: relative;
  width: 338px;
  height: 293px;

  background: center no-repeat url("element1.svg");

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 190px;
    height: 220px;
    background-size: contain;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    display: none;
  }
`

export const PositionLoading = styled.div`
  position: absolute;
  z-index: 2;
  right: 10px;
  bottom: -24.5px;

  svg {
    opacity: ${({ animation }: IElement) => {
      if (animation) {
        return '1';
      } else {
        return '0';
      }
    }
    };

    transition: all 1s ease-in;

    @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
      display: none;
    }
`

export const PlusesPosition = styled.div`
  position: absolute;
  z-index: 0;
  left: 22px;
  top: 26.5px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`
