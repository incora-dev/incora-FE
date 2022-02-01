import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const CaseIntroductionWrapper = styled.div`
  width: 100%;
  height: 461px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  position: absolute;
  width: 1010px;
  padding-top: 76px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: 100%;  
    padding: 70px 25px 0;
  }

  > h3 {
    font-weight: 600;
    font-size: var(--fs-12);
    line-height: 9px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${themeGet("colors.font3")};
  }

  > h2 {
    font-weight: 800;
    font-size: var(--fs-21);
    line-height: 31px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${themeGet("colors.font3")};
    margin-bottom: 10px;
  }

  > h1 {
    width: 761px;
    font-weight: 800;
    font-size: var(--fs-48);
    line-height: 72px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${themeGet("colors.white")};
    margin-bottom: 18px;
  }

  > p {
    width: 657px;
    font-size: var(--fs-14);
    line-height: 30px;
    letter-spacing: 0.1em;
    color: ${themeGet("colors.font1")};
  }
`;
