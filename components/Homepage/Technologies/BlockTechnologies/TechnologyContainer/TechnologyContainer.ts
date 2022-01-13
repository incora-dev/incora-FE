import styled from "styled-components";

export const Div = styled.div`
  position: relative;

  width: 291px;
  height: 291px;

  background: rgba(33, 33, 37, 0.1);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.15);
`;

export const PositionOne = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
`;

export const PositionTwo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 100%;
  
  padding: 0 23px;
  
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  column-gap: 35px;
  row-gap: 35px;
  
  z-index: 1;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  
  width: max-content;
`

export const P = styled.p`
  max-width: 94px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #888893;
`;
