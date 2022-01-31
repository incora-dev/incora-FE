import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

export const ReviewsHeaderWrapper = styled.div`
  width: 1006px;
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding: 0 20px;
    margin-bottom: 20px;
  }

  h1 {
    text-transform: uppercase;
    color: ${themeGet("colors.white")};
    font-weight: 800;
    font-size: var(--fs-26);
    letter-spacing: ${themeGet("letterSpacing.h1")};
    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
        font-size: var(--fs-20);
    }
    @media only screen and (max-width: ${themeGet('breakpoints.xsMobile')}) {
        font-size: var(--fs-16);
    }
  }

  span {
    font-size: var(--fs-20);
    color: ${themeGet("colors.white")};
    font-weight: 800;
    letter-spacing: 0.6px;
    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
        font-size: var(--fs-16);
    }
    @media only screen and (max-width: ${themeGet('breakpoints.xsMobile')}) {
        font-size: var(--fs-13);
    }
  }
`;
