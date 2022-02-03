import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LetsAcquaintedWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 0 187px;
  
  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-top: 70px;
  }
  
  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding-top: 0;
    padding-bottom: 40px;
  }
`;

export const ContentWrap = styled.div`
  width: 1006px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    max-width: 100%;
    width: 100%;
    padding: 100px 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 50px 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 20px 15px 50px;
  }

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
    letter-spacing: 3px;
    text-transform: capitalize;
    margin-bottom: 28px;
    margin-top: 5px;

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: var(--fs-40);
      line-height: 72px;
      margin-top: 5px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      line-height: 50px;
      font-size: var(--fs-36);
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      line-height: 38px;
      margin-top: 13px;
      letter-spacing: 1px;
      width: 90%;
    }
  } 

  .text1 {
    letter-spacing: 0.05em;

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      font-size: var(--fs-14);
      line-height: 27px;
    }
  }
`;

export const DropAlineWrap = styled.div`
  position: relative;
  
  cursor: pointer;

  span {
    z-index: 1;
    position: relative;

    font-weight: bold;
    font-size: var(--fs-18);
    line-height: 27px;
    letter-spacing: ${themeGet("letterSpacing.span")};

    &:after {
      z-index: -1;

      position: absolute;
      right: -4.5px;
      top: 17px;

      height: 10px;
      width: 0;

      content: '';

      background-color: ${themeGet("colors.yellow4")};

      transition: width ${themeGet("transition.button")};
    }

    &:before {
      z-index: -1;

      position: absolute;
      left: 4.5px;
      top: 17px;

      height: 10px;
      width: 100%;

      content: '';

      background-color: ${themeGet("colors.yellow")};

      transition: width ${themeGet("transition.button")};
    }

    &:hover :after {
      width: 100%;
    }
  }
`;

export const HexagonsWrap = styled.div`
  right: 0;
  position: absolute;

  .small {
    position: absolute;
    top: 65px;
    right: 210px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      right: 0;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      top: 168px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      top: 120px;
      transform: scale(0.8);
      right: -17px;
    }
  }

  .cropped {
    position: absolute;
    right: 0;
    top: 110px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      display: none;
    }
  }
`;
