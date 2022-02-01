import styled from "styled-components";

export const GlobeWrapper = styled.div`
  height: 400px;
  width: 100%;

  display: flex;
  justify-content: center;
  overflow: hidden;

  canvas {
    max-width: 100vw;
  }
`;

export const PointLabel = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  //background-color: "white";
`
