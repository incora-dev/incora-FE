import styled from "styled-components";

export const Element = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  background: center no-repeat url("element4.svg");
`;

export const Loading = styled.div`
  width: 186.01px;
  height: 186.01px;

  background: center no-repeat url("loading3.svg");
`

export const PositionLoading = styled.div`
  position: absolute;
  z-index: 0;
  right: -27px;
  bottom: -20px;
`;

export const PositionDots = styled.div`
  position: absolute;
  z-index: 0;
  left: -15px;
  top: 13px;
`;
