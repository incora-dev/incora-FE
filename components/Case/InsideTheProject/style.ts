import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const InsideTheProjectWrapper = styled.div`
  width: 100%;
  height: 726px;
  background-color: ${themeGet("colors.black")};
  overflow-x: hidden;

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    height: fit-content;
  }
`;
