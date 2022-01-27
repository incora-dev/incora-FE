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
    font-size: 20px;
    text-transform: uppercase;
    line-height: 30px;
    letter-spacing: ${themeGet("letterSpacing.h2")};
    color: ${themeGet("colors.yellow")};
    padding-left: 2px;
    margin-bottom: 13px;
  }

  h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 83px;
    text-transform: capitalize;
    letter-spacing: 3px;
    width: 908px;
    margin-bottom: 48px;
  }
`;

export const DescriptionAndCv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  width: 653px;
  padding-bottom: 64px;

  p {
    padding-left: 0.3px;
    font-size: 14px;
    line-height: 30px;
    color: ${themeGet("colors.font2")};
    letter-spacing: 1.4px;
    margin-bottom: 30px;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: ${themeGet("letterSpacing.h2")};
    margin-bottom: 30px;
  }

  ul {
    padding-left: 22px;
    margin-bottom: 30px;
  }

  li {
    font-size: 14px;
    line-height: 30px;
    color: ${themeGet("colors.font2")};
    letter-spacing: 1.4px;
  }
`;

export const AttachCvWrap = styled.div`
  width: 297px;
  position: relative;
  top: 197px;
`;
