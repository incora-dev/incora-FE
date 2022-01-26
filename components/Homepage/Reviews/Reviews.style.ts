import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

export const ReviewsWrapper = styled.div`
  width: 100%;
  height: 801px;
  background-color: ${themeGet("colors.black")};
  padding-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    height: fit-content;
  }
`;
