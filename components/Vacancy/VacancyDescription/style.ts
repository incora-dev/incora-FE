import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const VacancyDescriptionWrapper = styled.div`
  width: 100%;
  padding-top: 77px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-top: 20px;
  }
`;

export const ContentWrap = styled.div`
  width: 1006px;
  border-bottom: 1px solid ${themeGet("colors.font2")};

  h2 {
    font-weight: 800;
    font-size: var(--fs-20);
    text-transform: uppercase;
    line-height: 30px;
    letter-spacing: ${themeGet("letterSpacing.h2")};
    color: ${themeGet("colors.yellow")};
    padding-left: 2px;
    margin-bottom: 13px;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 83px;
    text-transform: capitalize;
    letter-spacing: 3px;
    width: 908px;
    margin-bottom: 48px;

    @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
      font-size: var(--fs-48);
      line-height: 72px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      margin-bottom: 20px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: var(--fs-36);
      line-height: 48px;
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    max-width: 100%;
    width: 100%;
    padding: 100px 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 50px 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 0 25px 40px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
  }
`;

export const DescriptionAndCv = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  width: 653px;
  padding-bottom: 44px;

  h1 {
    margin-bottom: 45px;

    @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
      font-size: var(--fs-48);
      line-height: 72px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      width: 100%;
      white-space: break-spaces;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 24px;
      line-height: 34px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: 17px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }

  p {
    padding-left: 0.3px;
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${themeGet("colors.font2")};
    letter-spacing: 1.4px;
    margin-bottom: 29px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      margin-bottom: 20px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      margin-bottom: 10px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      margin-bottom: 8px;
    }
  }

  h3 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: var(--fs-16);
    line-height: 24px;
    letter-spacing: ${themeGet("letterSpacing.h2")};
    margin-bottom: 25px;
    margin-top: 35px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      margin-bottom: 20px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      margin-top: 15px;
      margin-bottom: 10px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      margin-bottom: 8px;
    }
  }

  ul {
    padding-left: 22px;
    margin-bottom: 30px;

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      margin-bottom: 0;
    }
  }

  h2 {
    margin-bottom: 16px;
  }

  li {
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${themeGet("colors.font2")};
    letter-spacing: 1.4px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      margin-bottom: 3px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-right: 20px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding-bottom: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 100%;
    padding: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding-bottom: 20px;
  }
`;

export const AttachCvWrap = styled.div`
  width: 297px;
  position: relative;
  top: 196px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    top: 165px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 100%;
    top: 0;
    margin-bottom: 20px;
  }

  .drag-and-drop {
    margin-top: 21px;
  }

  .button-with-arrow {
    padding: 23px 40px;
  }
`;
