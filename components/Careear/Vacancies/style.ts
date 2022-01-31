import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Block = styled.div`
`;

export const VacanciesWrapper = styled.div`
  width: 100%;
  height: 1069px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 0 30px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
  }
`;

export const ContentWrapper = styled.div`
  width: 1006px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    max-width: 900px;
    width: 100%;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-36);
    line-height: 54px;
    letter-spacing: ${themeGet("letterSpacing.h1")};
    margin-bottom: 65.5px;

    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      margin-top: 20px;
      font-size: 34px;
      line-height: 44px;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: 24px;
      line-height: 24px;
    }
  }
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 827px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

export const Filter = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column;
  gap: 31px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 100%;
  }
`;

export const List = styled.div`
  width: 598px;
  padding-right: 39px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    padding-right: 0;
    padding-left: 20px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding-left: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding-top: 10px;
  }
`;

export const QuickApplyWrap = styled.div`
  width: 100%;
  margin-top: 20px;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    margin-bottom: 20px;
    margin-top: 0;
  }

  h2 {
    font-style: normal;
    font-weight: 800;
    font-size: var(--fs-21);
    line-height: 31px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    margin-bottom: 6px;

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: 16px;
    }
  }

  p {
    font-size: var(--fs-14);
    line-height: 30px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    color: ${themeGet("color.font2")};
    margin-bottom: 20px;

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      line-height: 28px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 14px;
      line-height: 24px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  button {
    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      height: 45px;
    }
  }
`;
