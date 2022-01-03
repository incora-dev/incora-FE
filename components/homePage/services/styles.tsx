import styled from "styled-components";

export const Component = styled.div`
  position: relative;
  height: 622px;

  overflow: hidden;

  background-color: #18181A;
`

export const Position = styled.div`
  margin: auto;
  width: 1005px;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  max-width: 632px;
`

export const PositionTextBlock = styled.div`
  margin-top: 120px;
`

export const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #fff;
`

export const P = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #BCBCC0;
`

export const Labels = styled.div`
  height: max-content;
  margin-top: 25px;

  display: flex;
  flex-wrap: wrap;
  column-gap: 120px;
  row-gap: 9px;
`

export const Label = styled.h3`
  min-width: 202px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #FEC506;
`

export const Loading = styled.div`
  position: absolute;
  top: -54px;
  right: -5px;
  width: 338.02px;
  height: 338.1px;

  background: center no-repeat url("./loading.svg");
`

export const HexagonBordered = styled.div`
  width: 143px;
  height: 163.84px;

  background: center no-repeat url("./hexagonBordered.svg");
`

export const HexagonFilled = styled.div`
  width: 194.31px;
  height: 224.47px;

  background: center no-repeat url("./hexagonFilled.svg");
`

export const PositionHexagonOne = styled.div`
  position: absolute;
  top: -101px;
  right: 246.5px;
`

export const PositionHexagonTwo = styled.div`
  position: absolute;
  top: -152px;
  right: 492.5px;
`

export const PositionHexagonThree = styled.div`
  position: absolute;
  top: -72px;
  right: 602px;
`

export const PositionHexagonFour = styled.div`
  position: absolute;
  top: -147.5px;
  left: 21.5px;
`

export const PositionHexagonFive = styled.div`
  position: absolute;
  top: -59px;
  left: 129px;
`

export const PositionHexagonSix = styled.div`
  position: absolute;
  top: 79px;
  left: -81px;
`

export const PositionHexagonSeven = styled.div`
  position: absolute;
  bottom: 18px;
  left: -31px;
`

export const PositionHexagonEight = styled.div`
  position: absolute;
  bottom: -159px;
  right: -59px;
`

export const PositionHexagonNine = styled.div`
  position: absolute;
  bottom: -27px;
  right: -86px;
`
