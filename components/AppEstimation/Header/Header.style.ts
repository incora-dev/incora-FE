import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

export const MainContainer = styled.div`
  background-color: ${themeGet("colors.black")};
`

export const Container = styled.div`
  max-width: 1006px;
  padding: 117px 0 90px;
  margin: auto;
`;

export const Title = styled.div`
  color: ${themeGet("colors.white")};
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 50px;
}
  letter-spacing: calc(1em / 20);
  max-width: 875px;
`;

export const Text = styled.div`
  color: ${themeGet("colors.white")};
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: calc(1em / 10);
  max-width: 575px;
  margin-top: 28px;
  margin-bottom: 56px;
`;

export const PlatformsTitle = styled.div`
  color: ${themeGet("colors.white")};
  font-weight: 800;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: calc(1em / 20);
  margin-bottom: 41px;
`;

export const PlatformsBlock = styled.div`
  display: flex;
`

export const PlatformsContainer = styled.div`
  padding: 24px 0;
`;
