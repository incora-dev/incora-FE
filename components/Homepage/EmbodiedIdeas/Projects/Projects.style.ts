import styled from "styled-components";
import { theme } from "../../../../styles/theme";

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

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    flex-wrap: wrap-reverse;
    max-width: 100%;
  }
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
  cursor: pointer;
`;

export const H3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
 @media only screen and (max-width: ${theme.breakpoints.mobile}) {
     line-height: 40px;
  }

  letter-spacing: 0.05em;

  color: #000;
  cursor: pointer;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    font-size: var(--fs-28);
  }
`;

export const P = styled.p`
  max-width: 410px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #454a4d;
`;

export const H4 = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-12);
  line-height: 18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #000000;
`;
