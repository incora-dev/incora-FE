import styled from "styled-components";

interface IContainer {
  flexDirection: string;
}

interface IText {
  margin: string;
}

export const Container = styled.div`
  display: flex;
  column-gap: 77px;
  flex-direction: ${({ flexDirection }: IContainer) => flexDirection};
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
  
  margin: ${({ margin }: IText) => margin};
`;

export const Block = styled.div`
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;

export const H3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;

  letter-spacing: 0.05em;

  color: #000;
`;

export const P = styled.p`
  max-width: 410px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #454A4D;
`;

export const H4 = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #000000;
`;
