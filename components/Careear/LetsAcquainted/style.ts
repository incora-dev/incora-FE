import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LetsAcquaintedWrapper = styled.div`
  width: 100%;
  height: 577px;
  display: flex;
  justify-content: center;
  padding-top: 120px;
 @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    padding-top: 50px;
  }
  position: relative;
`;

export const ContentWrap = styled.div`
  width: 1006px;

  span {
    font-size: var(--fs-18);
    font-weight: 300;
    font-size: var(--fs-18);
    line-height: 35px;
    letter-spacing: 1px;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
@media only screen and (max-width: ${theme.breakpoints.mobile}) {
  line-height: 50px;
}
    letter-spacing: 3px;
    text-transform: capitalize;
    margin-bottom: 30px;
  }

  .text {
  }
`;

export const DropAlineWrap = styled.div`
  position: relative;
  span {
    display: block;
    font-weight: bold;
    font-size: var(--fs-18);
    line-height: 27px;
@media only screen and (max-width: ${theme.breakpoints.mobile}) {
    line-height: 23px;
  }
    letter-spacing: ${themeGet("letterSpacing.span")};
    position: absolute;
    z-index: -1;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 136px;
  height: 10px;
  left: 4.5px;
  top: 17px;
  background: ${themeGet("colors.yellow")};
  z-index: 1;
`;

export const HexagonsWrap = styled.div`
  right: 0;
  position: absolute;

  .small {
    position: absolute;
    top: 60px;
    right: 210px;
  }

  .cropped {
    position: absolute;
    right: 0;
    top: 110px
  }
`;
