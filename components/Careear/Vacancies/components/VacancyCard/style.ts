import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const VacancyCardWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${themeGet("colors.background4")};
  padding: 40px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    margin-bottom: 25px;
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    flex-direction: column;
    align-items: flex-start;
  }

  button {
    label {
      z-index: auto;
    }
    
    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      height: 45px;
      width: 140px;
    }
  }
`;

export const TextWrap = styled.div`
  width: 300px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    margin-bottom: 5px;;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
  }

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

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      top: 0;
      left: 0;
    }
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

    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      font-size: 20px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      font-size: 16px;
      line-height: 22px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 20px;
      margin-bottom: 10px;
      left: 0;
      margin-top: 5px;
    }
  }
`;
