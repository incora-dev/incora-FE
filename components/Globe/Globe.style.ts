import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const GlobeWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${themeGet("colors.black")};
`;
