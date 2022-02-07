import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const RouterLoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet("colors.white")};
  transition: all 0.7s ease-in-out;
  z-index: 10;
  position: sticky;

  svg {
    margin-right: 5px;
  }
`;
