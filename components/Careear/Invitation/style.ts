import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const InvitationWrapper = styled.div`
  width: 100%;
  height: 1180px;
  background-color: ${themeGet("colors.black")};
  padding-top: 36px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    margin-bottom: 40px;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    margin-bottom: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding-top: 20px;
  }

  .semicircle {
    position: absolute;
    top: 345px;
    left: -179px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      top: 320px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      top: 380px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      display: none;
    }
  }
`;

export const InvitationContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1006px;
`;

export const DotsWrap = styled.div`
  position: absolute;
  top: 395px;
  left: -155px;
  transform: rotate(63deg);

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    top: 380px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    top: 430px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    display: none;
  }
`;

export const CareersWrap = styled.div`
  width: 100%;
  height: 628px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-left: 100px;
    height: auto;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    flex-direction: column;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
    margin-bottom: 25px;
  }
`;

export const TextBlock = styled.div`
  width: 366px;
  padding-top: 81px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding-top: 0;
    margin-bottom: 25px;
    width: 100%;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
    color: ${themeGet("colors.white")};
    letter-spacing: 0.05em;
    margin-bottom: 19px;

    @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
      font-size: var(--fs-48);
      line-height: 72px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: var(--fs-36);
      line-height: 48px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      line-height: 46px;
    }
  }

  p {
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${themeGet("colors.font1")};
    letter-spacing: 0.1em;
    margin-bottom: 25px;


    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      margin-bottom: 10px;
    }
  }

  span {
    position: relative;
    font-size: var(--fs-18);
    font-weight: bold;
    line-height: 27px;
    color: ${themeGet("colors.white")};
    letter-spacing: 0.05em;
    z-index: 0;
    cursor: pointer;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      font-size: 16px;
      line-height: 24px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 14px;
      line-height: 24px;
    }


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

export const Rectangle = styled.div`
  width: 321px;
  height: 10px;
  background-color: ${themeGet("colors.yellow")};
  position: relative;
  top: -9px;
  left: 5px;
  z-index: 1;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 286px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 255px;
  }
`;

export const PhotoWrap = styled.div`
  position: relative;
  right: -178px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    right: -25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    right: -15px;
  }

  .semicircle2 {
    position: absolute;
    left: -43px;
    top: 55px;
    z-index: 1;
  }

  .main-photo {
    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      float: right;
    }
  }
`;

export const ProcessWrap = styled.div`
  width: 100%;
  max-width: 1006px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 0 auto;

  @media only screen and (max-width: ${themeGet("breakpoints.mediumDesk")}) {
    padding-bottom: 40px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 0 25px 40px;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px 30px;
  }
`;

export const HeaderWrap = styled.div`
  width: 1006px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    width: 100%;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-36);
    line-height: 54px;
    letter-spacing: 0.05em;
    color: ${themeGet("colors.white")};
    margin-bottom: 71px;

    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      margin-bottom: 30px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      font-size: var(--fs-24);
      line-height: 35px;
      margin-bottom: 15px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      line-height: 40px;
    }
  }
`;

export const SchemeWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 254px;
  position: relative;
  width: 959px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    height: auto;
    width: 1006px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 100%;
    padding: 0;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    justify-content: flex-start;
  }

  .mobile-version {
    display: none;

    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      flex-direction: column;
    }
  }

  .desktop-version {
    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      display: none;
    }
  }

  svg {
    position: absolute;

    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      position: relative;
    }
  }

  .steps {
    z-index: 1;
    top: 0;
    left: -24px;
  }

  .dots {
    left: -24px;
    top: 10px;
  }
`;

export const StepContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 150px;
  height: 165px;
  width: 50%;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    height: 86px;
    padding-left: 90px;
    width: 100%;
  }
`;

export const StepText = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${themeGet("colors.white")};

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SvgBlock = styled.div`
  width: 50%;
  position: absolute;
  left: 0;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    transform: scale(0.5);
    position: absolute;
    left: -35px;
  }
`;
