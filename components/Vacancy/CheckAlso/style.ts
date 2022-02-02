import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const CheckAlsoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  position: relative;
  //overflow: hidden;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding-top: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    height: auto;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0;
  }

  .hex {
    position: absolute;
    bottom: -17px;
    left: 72px;
  }

  .hex_cropped {
    position: absolute;
    left: 0;
    bottom: 165px;
  }

  .hex, .hex_cropped {
    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      display: none;
    }
  }
`;
