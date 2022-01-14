import styled from "styled-components";

export const Div = styled.div`
  background-color: #18181A;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
`;

export const Block = styled.div`
  padding: 87px 0 90px 0;

  display: flex;
  flex-direction: column;
  row-gap: 43px;
`;

export const TextBlock = styled.div`
  max-width: 565px;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 96px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #FFFFFF;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;

  letter-spacing: 0.05em;

  color: #FFFFFF;
`;

export const PositionHexagon = styled.div`
  position: relative;
  top: -153px;
  right: -47px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
