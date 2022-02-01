import styled from "styled-components";

interface IPlus {
  animation?: boolean;
  animationDelay?: number;
}

export const PositionPlus = styled.div`
  position: relative;
  align-items: center;
`

export const Div = styled.div`
  width: max-content;
  height: max-content;

  opacity: ${({animation}: IPlus) => {
    if (animation) {
      return '1';
    } else {
      return '0';
    }
  }
  };

  transition: all 1s ease-in-out;
  transition-delay: ${( { animationDelay }: IPlus) => `${animationDelay}ms`};
`

export const DIV = styled.div`
  width: 57px;
  height: 42px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 8.06px;
  grid-row-gap: 9px;
  ${Div}: nth-child(3), ${Div}: nth-child(4), ${Div}: nth-child(9), ${Div}: nth-child(10) {
    opacity: 0;
  }
`

export const HorizontalLine = styled.div`
  position: absolute;
  height: 8px;
  width: 2px;
  
  background-color: ${({color}) => color};
`

export const VerticalLine = styled.div`
  height: 8px;
  width: 2px;

  background-color: ${({color}) => color};

  transform: rotate(-90deg);
`
