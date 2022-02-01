import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Div = styled.div`
  margin-top: -104px;

  width: 100%;
  height: 1047px;
  position: relative;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
  }
`;
