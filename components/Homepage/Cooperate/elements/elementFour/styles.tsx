import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IElement {
  animation: boolean;
}

export const Element = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  background: center no-repeat url("element4.svg");

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 190px;
    height: 190px;
    background-size: contain;
  }
`;

export const PositionLoading = styled.div`
  position: absolute;
  z-index: 0;
  right: -27px;
  bottom: -20px;

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
`;

export const PositionDots = styled.div`
  position: absolute;
  z-index: 0;
  left: -15px;
  top: 13px;
`;

export const CircleWithGradient = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;

  background: linear-gradient(180deg, #FEC506 0%, rgba(254, 197, 6, 0) 100%);

  transform: ${({ animation }: IElement) => {
  if (animation) {
    return 'scale(1)';
  } else {
    return 'scale(0)';
  }
}};
  
  transition: transform 1s ease-in-out;
`;

export const PositionCircleWithGradient = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);

`;
