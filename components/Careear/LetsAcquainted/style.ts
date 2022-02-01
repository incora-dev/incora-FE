import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LetsAcquaintedWrapper = styled.div`
  width: 100%;
  height: 577px;
  display: flex;
  justify-content: center;
  padding-top: 120px;
 @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-top: 50px;
  }
  position: relative;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    height: 530px;
    padding-top: 70px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    height: 290px;
    padding: 30px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    height: 280px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 15px 15px 30px;
  }
`;

export const ContentWrap = styled.div`
  width: 1006px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    max-width: 100%;
    width: 100%;
    padding: 100px 25px;
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
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 50px;
}
    letter-spacing: 3px;
    text-transform: capitalize;
    margin-bottom: 30px;

    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      font-size: 54px;
      line-height: 64px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      font-size: 36px;
      line-height: 46px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 24px;
      line-height: 34px;
      margin-top :5px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: 24px;
      line-height: 33px;
      margin-top: 13px;
      letter-spacing: 1px;
      width: 90%;
    }
  } 

  .text1 {
    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      font-size: 14px;
      line-height: 20px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const DropAlineWrap = styled.div`
  position: relative;
  span {
    display: block;
    font-weight: bold;
    font-size: var(--fs-18);
    line-height: 27px;
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

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      right: 0;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      top: 88px;
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
