import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 20px;
`

export const H2 = styled.h2`
  width: 531px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const PositionH2 = styled.div`
  margin-bottom: 16px;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const H3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: var(--fs-21);
  line-height: 31.5px;

  letter-spacing: 0.05em;

  color: #9CA3A7;
`

export const PositionH3 = styled.div`
  margin-bottom: 31px;
`

export const PositionText = styled.div`
  margin-bottom: 33px;
`

export const Text = styled.strong`
  display: block;
  width: 501px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #454A4D;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 90%;
  }
`
