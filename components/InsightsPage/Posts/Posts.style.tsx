import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  overflow: hidden;
  
  background-color: ${themeGet("colors.white")};
`;

export const Wrapper = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 70px 0 90px;

  display: flex;
  flex-direction: column;
  row-gap: 100px;
`;

export const NewsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 50px;
`;

export const Pagination = styled.div`
`;
