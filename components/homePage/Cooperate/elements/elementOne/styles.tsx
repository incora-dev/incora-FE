import styled from "styled-components";

export const Element = styled.div`
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
`

export const Loading = styled.div`
  width: 96px;
  height: 96px;

  background: center no-repeat url("loading1.svg");
`

export const PlusesPosition = styled.div`
  position: absolute;
  z-index: 0;
  left: 22px;
  top: 26.5px;
`
