import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const VacancyCardWrapper = styled.div`
  width: 100%;
  height: 99px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 91px;
`;

export const TextWrap = styled.div`
  width: 300px;

  span {
    font-weight: 800;
    font-size: var(--fs-14);
    line-height: 21px;
    text-transform: uppercase;
    color: ${themeGet("colors.font1")};
    margin-bottom: 15px;
    position: relative;
    top: -10px;
    left: 8px;
    letter-spacing: ${themeGet("letterSpacing.span")};
  }

  h3 {
    font-weight: 800;
    font-size: var(--fs-21);
    line-height: 31px;
    text-transform: capitalize;
    letter-spacing: ${themeGet("letterSpacing.h1")};
    position: relative;
    top: 3px;
    left: 8px;
  }
`;
