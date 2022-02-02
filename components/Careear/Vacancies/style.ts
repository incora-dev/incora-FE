import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Block = styled.div`
`;

export const VacanciesWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  padding-bottom: 120px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding-bottom: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
  }
`;

export const ContentWrapper = styled.div`
  width: 1006px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    max-width: 100%;
    width: 100%;
    padding: 100px 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding-top: 50px;
    padding-bottom: 0;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-36);
    line-height: 54px;
    letter-spacing: ${themeGet("letterSpacing.h1")};
    margin-bottom: 65.5px;

    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      margin-top: 20px;
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

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

export const PositionFilter = styled.div`
  z-index: 1;
  position: sticky;
  top: 150px;

  align-self: flex-start;

  h1 {
    text-transform: capitalize;
    margin-bottom: 56px;

    @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
      margin-bottom: 30px;
    }
  }
`;

export const Filter = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column;
  gap: 21px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 100%;
  }
`;

export const List = styled.div`
  margin-top: 122px;

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
    margin-top: 50px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding-top: 10px;
  }
`;

export const QuickApplyWrap = styled.div`
  width: 100%;
  margin-top: 29px;

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
    letter-spacing: 0.1em;
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
