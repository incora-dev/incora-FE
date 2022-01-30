import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ProjectOverviewWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 52px;
`;

export const HeadingWrap = styled.div`
  width: 1006px;
  margin-bottom: 80px;

  h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
@media only screen and (max-width: ${theme.breakpoints.mobile}) {
  line-height: 50px;
}
    letter-spacing: 0.05em;
    text-transform: capitalize;
  }
`;

export const ContentWrap = styled.div``;
