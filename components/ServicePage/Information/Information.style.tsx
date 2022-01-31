import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Div = styled.div`
  margin-top: -104px;
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
`;

export const TextBlock = styled.div`
  padding: 117px 0 120px 0;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 53px 15px;
  }
`;

export const Content = styled.div`
  min-width: 523px;

  display: flex;
  flex-direction: column;
  row-gap: 63px;
`;

export const ContentWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const H1 = styled.h1`
  display: block;

  max-width: 396px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 50px;
}
  letter-spacing: 0.05em;

  color: #000000;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    line-height: 50px;
  }
`;

export const Sphere = styled.div`
  position: absolute;
  z-index: -1;
  top: 3px;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  background: linear-gradient(
    132.16deg,
    #fec506 14.9%,
    rgba(254, 197, 6, 0.2) 85.57%
  );
`;

export const H2 = styled.h2`
  margin-top: 11px;
  width: 493px;

  align-self: flex-end;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-23);
  line-height: 34px;

  letter-spacing: 0.05em;

  color: #000000;
`;

export const Text = styled.p`
  max-width: 493px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;
  /* or 214% */

  letter-spacing: 0.1em;

  color: #454a4d;
`;
