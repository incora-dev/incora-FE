import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

export const ReviewsWrapper = styled.div`
  position: relative;
  padding-top: 42px;
  
  width: 100%;

  background-color: ${themeGet("colors.black")};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: fit-content;
  }
`;
