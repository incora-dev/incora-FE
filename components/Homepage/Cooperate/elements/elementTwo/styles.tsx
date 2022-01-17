import styled from "styled-components";

interface IElement {
  animation: boolean;
}

export const Element = styled.div`
  width: 350px;
  height: 182px;

  background: center no-repeat url("element2.svg");
`

export const PositionLoading = styled.div`
  position: absolute;
  z-index: 1;
  right: 41px;
  top: -93px;

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

export const PositionPointsFirst = styled.div`
  position: absolute;
  z-index: 1;
  right: 167px;
  top: -25px;
`

export const PositionPointsSecond = styled.div`
  position: absolute;
  z-index: 1;
  right: 42px;
  bottom: 28px;
`
