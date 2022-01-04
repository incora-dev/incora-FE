import styled from "styled-components";

interface IDiv {
  backgroundColor: string;
}

export const Div = styled.div`
  height: 532px;
  overflow: hidden;
  
  background-color: ${({ backgroundColor }: IDiv) => backgroundColor};
`;

export const Container = styled.div`
`;

export const Text = styled.div`
  position: relative;

  width: max-content;
  
  display: flex;
  column-gap: 209px;
  margin: 0 auto;
  padding-top: 182px;

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 96px;

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #FFF;
  }
  
  p {
    max-width: 473px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;

    letter-spacing: 0.1em;

    color: #BCBCC0;
  }
`;

export const PositionDots = styled.div`
  position: absolute;

  right: -70px;
  bottom: -10px;

  transform: rotate(60deg);
`;

export const PositionLoading = styled.div`
  position: absolute;

  right: -60px;
  bottom: -60px;

  transform: rotate(15deg);
`;

export const PositionHexagon = styled.div`
  position: absolute;

  top: 96px;
  right: -275px;
`;
