import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const RouterLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet("colors.white")};
  transition: all 0.7s ease-in-out;
  z-index: 100;

  svg {
    margin-right: 5px;
  }
`;
