import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface IDiv  {
  index: number;
}

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 20px;
  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding: 10px 0;
  }
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

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    width: 100%;
    font-size: var(--fs-28);
    line-height: 40px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    line-height: 36px;
    font-size: var(--fs-26);
  }
`

export const PositionH2 = styled.div`
  margin-bottom: 16px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
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

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-top: 20px;
  }
`

export const PositionH3 = styled.div<IDiv>`
  margin-bottom: 31px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: ${({index}) => index === 0 ? 'block' : 'none'};
  }

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

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    width: 100%;
    line-height: 27px;
  }
`
