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

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 70px 25px 90px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 50px 25px 50px;
    row-gap: 45px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 35px 15px 40px;
    row-gap: 45px;
  }
`;

export const NewsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 50px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    column-gap: 25px;
  }
`;

export const Pagination = styled.div`
`;
