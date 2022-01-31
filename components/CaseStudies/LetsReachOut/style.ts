import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LetsReactOutWrapper = styled.div`
  width: 100%;
  background-color: ${themeGet("colors.black")};
  height: 944px;
  display: flex;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  width: 1033px;
  padding-top: 140px;
  padding-left: 12px;
  position: relative;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 90%;
  }

  > h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    @media only screen and (max-width: ${themeGet('breakpoints.mobile')} ) {
    line-height: 60px;
}
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${themeGet("colors.white")};
  }

  > span {
    font-weight: 800;
    font-size: var(--fs-18);
    line-height: 27px;
    letter-spacing: 0.05em;
    color: ${themeGet("colors.white")};
  }

  .hex {
    position: absolute;
    right: -12px;
    top: 135px;

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      display: none;
    }
  }

  .semicircle {
    position: absolute;
    right: -63px;
    top: 94px;
  }
`;

export const UploadBox = styled.div`
  width: 400px;
  height: 74px;
  margin-top: 44px;
  margin-bottom: 35px;
  border: 1px solid ${themeGet("colors.grey2")};
  background-color: ${themeGet("colors.background3")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
  }

  > span {
    font-weight: 600;
    font-size: var(--fs-14);
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${themeGet("colors.yellow")};
  }
`;
