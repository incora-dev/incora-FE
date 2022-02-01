import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

interface ICaseFilterWrapper {
  filterByFlag: boolean;
}

export const CaseFilterWrapper = styled.div`
  width: 100%;
  /* height: ${({ filterByFlag }: ICaseFilterWrapper) =>
    filterByFlag ? "871px" : "595px"}; */
    height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 117px;
  margin-bottom: 96px;
  background-color: ${({ filterByFlag }: ICaseFilterWrapper) =>
    filterByFlag ? themeGet("colors.black") : themeGet("colors.white")};
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    max-width: 900px;
    margin: 0 auto;
    padding-top: 50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    max-width: 100%;
    padding-top: 30px;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding-top: 30px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-top: 20px;
  }
`;

export const FilterWrap = styled.div`
  width: 1006px;
  transition: background-color 0.5s ease-in-out;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    max-width: 900px;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 0 25px;
    max-width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 15px;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
    text-transform: capitalize;
    letter-spacing: 3px;
    margin-bottom: 19px;
    color: ${({ filterByFlag }: ICaseFilterWrapper) =>
    filterByFlag ? themeGet("colors.white") : themeGet("colors.black")};

    @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
      font-size: var(--fs-48);
      line-height: 58px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
      line-height: 38px;
      font-size: var(--fs-28);
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      line-height: 34px;
      font-size: var(--fs-24);
      margin-bottom: 10px;
    }
  }

  p {
    width: 560px;
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${({ filterByFlag }: ICaseFilterWrapper) =>
      filterByFlag ? themeGet("colors.font2") : themeGet("colors.font1")};
    letter-spacing: 0.1em;
    margin-bottom: 35px;

    @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
      line-height: 27px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
      width: 80%;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

export const FilterSwitchWrap = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  > span {
    font-weight: 800;
    font-size: var(--fs-14);
    line-height: 21px;
    letter-spacing: 0.05em;
    margin-right: 15px;
    color: ${({ filterByFlag }: ICaseFilterWrapper) =>
      filterByFlag ? themeGet("colors.white") : themeGet("colors.black")};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    margin-bottom: 35px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const GlobeWrap = styled.div`
  width: 100%;
  padding: 43px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: 100vh;
  }
`;

export const GlobeContainer = styled.div`
  .globe {
    width: 100%;
    max-width: 1366px;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
  .show {
    height: 600px;
    opacity: 1;
  }
`;
