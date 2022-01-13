import styled from "styled-components";

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
`

export const PlusesPosition = styled.div`
  position: absolute;
  z-index: 0;
  left: 22px;
  top: 26.5px;
`
