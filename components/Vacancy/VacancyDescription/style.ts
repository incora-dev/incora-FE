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

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      font-size: 34px;
      line-height: 44px;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    max-width: 900px;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 0 30px;
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
  padding-bottom: 64px;

  h1 {
    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 24px;
      line-height: 34px;
      width: 100%;
      white-space: break-spaces;
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
    margin-bottom: 30px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      line-height: 28px;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 10px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 8px;
    }
  }

  h3 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: var(--fs-16);
    line-height: 24px;
    letter-spacing: ${themeGet("letterSpacing.h2")};
    margin-bottom: 30px;

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

  ul {
    padding-left: 22px;
    margin-bottom: 30px;

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      margin-bottom: 0;
    }
  }

  li {
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${themeGet("colors.font2")};
    letter-spacing: 1.4px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      line-height: 28px;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 0;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: 12px;
      line-height: 18px;
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-right: 20px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding-bottom: 20px;
  }
`;

export const AttachCvWrap = styled.div`
  width: 297px;
  position: relative;
  top: 197px;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 100%;
    top: 0;
    margin-bottom: 20px;
  }
`;
