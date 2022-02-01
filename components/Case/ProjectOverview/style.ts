import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ProjectOverviewWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 52px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    margin-bottom: 0;
  }
`;

export const HeadingWrap = styled.div`
  width: 1006px;
  margin-bottom: 80px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: 100%;
    padding: 0 25px;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
      font-size: var(--fs-48);
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      line-height: 50px;
    }
  }
`;

export const ContentWrap = styled.div``;
