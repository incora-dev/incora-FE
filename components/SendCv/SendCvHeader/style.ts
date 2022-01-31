import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";


export const SendCvHeaderWrapper = styled.div`
  width: 100%;
  height: 409px;
  padding-top: 120px;
 @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-top: 50px;
  }
  display: flex;
  justify-content: center;
`;

export const TextWrap = styled.div`
  width: 1015px;

  > h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 50px;
}
    letter-spacing: 0.05em;
    text-transform: capitalize;
  }
`;
