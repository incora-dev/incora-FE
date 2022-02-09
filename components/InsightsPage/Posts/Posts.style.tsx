import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;

  background-color: ${themeGet("colors.white")};
`;

export const Wrapper = styled.div`
  min-height: 220px;
  width: 1040px;
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
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 35px 15px 40px;
    row-gap: 45px;
  }
`;

export const NewsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;

  .news-container {
    margin-right: 50px;
    width: calc((100% - 115px) / 3);

    :nth-child(3n) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    .news-container {
      margin-right: 12px;
      width: calc((100% - 24px) / 3);

      /* :nth-child(3n) {
        margin-right: 25px;
      } */
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    .news-container {
      width: 308px;
      margin-right: 25px;

      :nth-child(2n) {
        margin-right: 0;
      }

      :nth-child(3n) {
        margin-right: 25px;
      }
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    row-gap: 20px;

    .news-container {
      width: calc((100% - 12px) / 2);
      margin-right: 12px;
      height: auto;

      :nth-child(3n) {
        margin-right: 0;
      }
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    .news-container {
      width: 308px;
      margin-right: 0;

      :nth-child(3n) {
        margin-right: 0;
      }
    }
  }
`;

export const NoPostsFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Pagination = styled.div``;
