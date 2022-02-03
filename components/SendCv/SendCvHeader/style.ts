import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";


export const SendCvHeaderWrapper = styled.div`
  width: 100%;
  height: 409px;
  padding-top: 120px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 120px 25px 50px;
    height: fit-content;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 50px 15px 40px;
  }
`;

export const TextWrap = styled.div`
  width: 1015px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: 100%;
  }

  > h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
      font-size: var(--fs-48);
      line-height: 70px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      font-size: var(--fs-36);
      line-height: 46px;
    }
  }
`;
