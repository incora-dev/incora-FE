import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const NumbersHeaderWrapper = styled.div`
  margin-bottom: 51px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    margin-bottom: 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-bottom: 20px;
  }

  h1 {
    color: ${themeGet("colors.yellow")};
    font-size: var(--fs-72);
    font-weight: 800;

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      font-size: var(--fs-64);
    }
  }

  span {
    color: ${themeGet("colors.white")};
    font-size: var(--fs-23);
    font-weight: 800;
    text-transform: capitalize;

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      font-size: var(--fs-21);
    }
  }
`;
