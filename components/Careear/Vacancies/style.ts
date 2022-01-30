import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Block = styled.div`
  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    display: flex;
  }
`;

export const VacanciesWrapper = styled.div`
  width: 100%;
  height: 1069px;
  display: flex;
  justify-content: center;
  /* padding-top: 120px; */
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

    @media only screen and (max-width: $${themeGet("breakpoints.smallDesk")}) {
      margin-top: 20px;
      font-size: 34px;
      line-height: 44px;
      margin-bottom: 20px;
    }
  }
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 827px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    flex-direction: column;
  }
`;

export const Filter = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column;
  gap: 31px;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 100%;
  }
`;

export const List = styled.div`
  width: 598px;
  padding-right: 39px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    width: 100%;
    padding-right: 0;
    padding-left: 20px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding-left: 0;
  }
`;

export const QuickApplyWrap = styled.div`
  width: 100%;
  margin-top: 20px;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    margin-bottom: 40px;
  }

  h2 {
    font-style: normal;
    font-weight: 800;
    font-size: var(--fs-21);
    line-height: 31px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    margin-bottom: 6px;
  }

  p {
    font-size: var(--fs-14);
    line-height: 30px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    color: ${themeGet("color.font2")};
    margin-bottom: 20px;
  }
`;
