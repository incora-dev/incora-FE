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

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding-top: 20px;
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
      line-height: 35px;
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
    letter-spacing: 0.05em;

    @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
      margin-bottom: 30px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      font-size: var(--fs-24);
      line-height: 35px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 100%;
  }
`;

export const Filter = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column;
  gap: 21px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 100%;
    display: flex;
  }

  .selector-wrapper {
    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      width: calc((100% - 20px) / 2);
    }

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      width: 100%;
    }
  }
`;

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    display: flex;
    flex-direction: column;
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
    margin-top: 20px;
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

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      font-size: var(--fs-18);
      line-height: 27px;
    }
  }

  p {
    font-size: var(--fs-14);
    line-height: 30px;
    letter-spacing: 0.1em;
    color: ${themeGet("color.font2")};
    margin-bottom: 20px;

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      line-height: 27px;
    }
  }

  button {
    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      height: 45px;
    }
  }
`;
