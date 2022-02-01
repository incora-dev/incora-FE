import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LetsReactOutWrapper = styled.div`
  width: 100%;
  background-color: ${themeGet("colors.black")};
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    padding: 0 30px 53px;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 15px;
    height: auto;
  }

  a {
    margin-top: 16px;
  }
`;

export const ContentWrap = styled.div`
  width: 1033px;
  padding-top: 140px;
  padding-bottom: 176px;
  padding-left: 12px;
  position: relative;

  @media only screen and (max-width: ${themeGet("breakpoints.mediumDesk")}) {
    padding-bottom: 50px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    max-width: 100%;
    width: 100%;
    padding: 100px 25px 50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    padding: 53px 0 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding-top: 40px;
  }

  > h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${themeGet("colors.white")};

    @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
      font-size: var(--fs-48);
      line-height: 58px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
      font-size: var(--fs-36);
    }
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

    @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
      transform: scale(0.7);
      right: -90px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
      right: -108px;
      top: 132px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      display: none;
    }
  }

  .semicircle {
    position: absolute;
    right: -63px;
    top: 94px;

    @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
      right: -1px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
      right: -32px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      display: none;
    }
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

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    margin: 30px 0;
  }

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
