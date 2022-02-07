import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const ProjectsWrapper = styled.div`
  width: 100%;
  min-height: 250px;
  padding-top: 50px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 20px 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding: 0;
  }
`;

export const NoCasesFounded = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
