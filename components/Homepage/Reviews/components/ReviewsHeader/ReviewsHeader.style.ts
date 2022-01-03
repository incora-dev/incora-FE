import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

export const ReviewsHeaderWrapper = styled.div`
  width: 1006px;
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  h1 {
    text-transform: uppercase;
    color: ${themeGet("colors.white")};
    font-weight: 800;
    font-size: 26px;
    letter-spacing: ${themeGet("letterSpacing.h1")};
  }

  span {
    font-size: 20px;
    color: ${themeGet("colors.white")};
    font-weight: 800;
    letter-spacing: 0.6px;
  }
`;
