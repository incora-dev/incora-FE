import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const VacancyDescriptionWrapper = styled.div`
  width: 100%;
  padding-top: 77px;
  display: flex;
  justify-content: center;
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
  }
`;

export const DescriptionAndCv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  padding-top: 45px;
  width: 654px;
  padding-bottom: 64px;

  p {
    padding-left: 0.3px;
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${themeGet("colors.font2")};
    letter-spacing: 1.4px;
    margin-bottom: 8px;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: var(--fs-16);
    line-height: 24px;
    letter-spacing: ${themeGet("letterSpacing.h2")};
  }

  ul {
    padding-left: 22px;
    margin-bottom: 11px;
  }

  li {
    font-size: var(--fs-14);
    line-height: 30px;
    color: ${themeGet("colors.font2")};
    letter-spacing: 1.4px;
  }
`;

export const AttachCvWrap = styled.div`
  width: 297px;
  position: relative;
  top: -13px;
`;
