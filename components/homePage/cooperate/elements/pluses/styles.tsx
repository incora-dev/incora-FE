import styled from "styled-components";

export const PositionPlus = styled.div`
  position: relative;
  align-items: center;
`

export const Div = styled.div`
  width: max-content;
  height: max-content;
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
  height: 8.21px;

  border: ${({color}) => `1px solid ${color}`};
`

export const VerticalLine = styled.div`
  height: 8.21px;

  border: ${({color}) => `1px solid ${color}`};

  transform: rotate(-90deg);
`
