import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const VacanciesWrapper = styled.div`
  width: 100%;
  height: 1069px;
  display: flex;
  justify-content: center;
  padding-top: 120px;
`;

export const ContentWrapper = styled.div`
  width: 1006px;

  h1 {
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: ${themeGet("letterSpacing.h1")};
    margin-bottom: 65.5px;
  }
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 827px;
`;

export const Filter = styled.div`
  width: 300px;
  border: 1px solid red;
`;

export const List = styled.div`
  width: 598px;
  padding-right: 39px;
`;
