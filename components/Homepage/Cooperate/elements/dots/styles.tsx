import styled from "styled-components";

interface IDiv {
  numberOfDots: number;
  animation?: boolean;
  columnGap: string;
  rowGap: string;
}

interface ICreateDot {
  animation?: boolean
  animationDelay?: number;
  size?: string;
}


export const CreateDot = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  border-radius: 50%;
  background-color: ${({color}) => color};

  opacity: ${({animation}: ICreateDot) => {
      if (animation) {
        return '1';
      } else {
        return '0';
      }
    }
  };

  transition: all 1s ease-in-out;
  transition-delay: ${( { animationDelay }: ICreateDot) => `${animationDelay}ms`};
`

export const Div = styled.div`
  width: max-content;
  height: 41px;

  display: grid;
  grid-template-columns: ${({ numberOfDots }: IDiv) => `repeat(${numberOfDots / 3}, 1fr)`};
  grid-column-gap: ${({ columnGap }: IDiv) => columnGap};
  grid-row-gap: ${({ rowGap }: IDiv) => rowGap};
  align-items: center;
  justify-items: center;
`
