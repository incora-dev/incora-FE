import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ICaseFilterWrapper {
  filterByFlag: boolean;
}

export const CaseFilterWrapper = styled.div`
  width: 100%;
  height: ${({ filterByFlag }: ICaseFilterWrapper) =>
    filterByFlag ? "871px" : "595px"};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 115px;
  background-color: ${({ filterByFlag }: ICaseFilterWrapper) =>
    filterByFlag ? themeGet("colors.black") : themeGet("colors.white")};
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    height: unset;
  }
`;

export const FilterWrap = styled.div`
  width: 1006px;
  transition: background-color 0.5s ease-in-out;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 90%;
  }

  h1 {
    font-weight: 800;
    font-size: var(--fs-64);
    line-height: 96px;
    text-transform: capitalize;
    letter-spacing: 3px;
    margin-bottom: 21px;
    color: ${({ filterByFlag }: ICaseFilterWrapper) =>
      filterByFlag ? themeGet("colors.white") : themeGet("colors.black")};
  }

  p {
    width: 560px;
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${({ filterByFlag }: ICaseFilterWrapper) =>
      filterByFlag ? themeGet("colors.font2") : themeGet("colors.font1")};
    letter-spacing: 0.1em;
    margin-bottom: 35px;

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
      width: 90%;
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
`;

export const GlobeWrap = styled.div`
  width: 100%;
  padding: 43px;
`;
