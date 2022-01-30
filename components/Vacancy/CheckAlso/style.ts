import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const CheckAlsoWrapper = styled.div`
  width: 100%;
  height: 1014px;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    padding: 0 30px;
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
`;
