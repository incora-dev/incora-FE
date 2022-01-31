import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

export const Div = styled.div`
  overflow: hidden;

  background-color: ${themeGet("colors.white")};
`;

export const Wrapper = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 0 auto;
  padding: 43px 0 144px;
`;

export const PositionSemiCircle = styled.div`
  position: absolute;
  top: 39px;
  right: -141px;

  svg {
    transform: rotate(315deg);

    path {
      fill: ${themeGet("colors.yellow")};
    }
  }
`;

export const MainBLock = styled.div`
  display: flex;
`;

export const H2 = styled.h2`
  max-width: 567px;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 50px;
}
  letter-spacing: 0.05em;

  color: ${themeGet("colors.black")};
`;

export const PositionHexagon = styled.div`
  position: absolute;
  bottom: -135px;
  left: -127px;
`;

export const FormPosition = styled.div`
  position: relative;
  top: 25px;
`;
