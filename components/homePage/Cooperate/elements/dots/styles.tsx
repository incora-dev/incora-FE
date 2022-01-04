import styled from "styled-components";

interface IDiv {
  numberOfDots: number;
}

export const CreateDot = styled.div`
  width: 4px;
  height: 4px;

  border-radius: 50%;
  background-color: ${({color}) => color};
`

export const Div = styled.div`
  width: max-content;
  height: 41px;

  display: grid;
  grid-template-columns: ${({ numberOfDots }: IDiv) => `repeat(${numberOfDots / 3}, 1fr)`};
  grid-column-gap: 20.57px;
  grid-row-gap: 13px;
  align-items: center;
  justify-items: center;
`
