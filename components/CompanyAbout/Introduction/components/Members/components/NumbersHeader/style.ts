import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const NumbersHeaderWrapper = styled.div`
  margin-bottom: 51px;

  h1 {
    color: ${themeGet("colors.yellow")};
    font-size: var(--fs-72);
    font-weight: 800;
  }

  span {
    color: ${themeGet("colors.white")};
    font-size: var(--fs-23);
    font-weight: 800;
    text-transform: capitalize;
  }
`;
