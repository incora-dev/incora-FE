import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ReviewsWrapper = styled.div`
  width: 100%;
  height: 801px;
  background-color: ${themeGet("colors.black")};
  padding-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
