import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const InvitationWrapper = styled.div`
  width: 100%;
  height: 1180px;
  background-color: ${themeGet("colors.black")};
  padding-top: 36px;
  position: relative;
  margin-bottom: 120px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    margin-bottom: 40px;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding-top: 20px;
    margin-bottom: 20px;
    height: auto;
  }

  .semicircle {
    position: absolute;
    top: 380px;

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

export const DotsWrap = styled.div`
  position: absolute;
  top: 430px;
  left: 25px;
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
  margin-bottom: 20px;
  padding-left: 179px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-left: 100px;
    height: auto;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding-left: 30px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    flex-direction: column;
    height: auto;
    padding: 0 15px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    margin-bottom: 25px;
  }
`;

export const TextBlock = styled.div`
  width: 366px;
  padding-top: 84px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding-top: 0;
    margin-bottom: 25px;
    width: 100%;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 50px;
}
    color: ${themeGet("colors.white")};
    letter-spacing: ${themeGet("letterSpacing.h1")};
    margin-bottom: 14px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      font-size: 48px;
      line-height: 60px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 24px;
      line-height: 34px;
    }
  }

  p {
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${themeGet("colors.font1")};
    letter-spacing: ${themeGet("letterSpacing.h1")};
    margin-bottom: 26px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      font-size: 14px;
      line-height: 24px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      line-height: 20px;
      margin-bottom: 10px;
    }
  }

  span {
    font-size: var(--fs-18);
    font-weight: bold;
    line-height: 27px;
    color: ${themeGet("colors.white")};
    letter-spacing: ${themeGet("letterSpacing.span")};
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
  height: 385px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-bottom: 20px;
    height: auto;
  }
`;

export const HeaderWrap = styled.div`
  width: 959px;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 0 30px;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-36);
    line-height: 54px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 40px;
}
    letter-spacing: ${themeGet("letterSpacing.h1")};
    color: ${themeGet("colors.white")};
    margin-bottom: 71px;

    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      margin-bottom: 30px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 15px;
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
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 100%;
    padding: 0 30px;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
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
    left: 0;
  }

  .dots {
    left: 0;
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
