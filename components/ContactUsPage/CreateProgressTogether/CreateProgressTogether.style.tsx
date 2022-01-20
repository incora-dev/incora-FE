import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  overflow: hidden;

  background-color: ${themeGet("colors.white")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 43px 0 143px;
  
  position: relative;
`;

export const MainBLock = styled.div`
  display: flex;
`;

export const H2 = styled.h2`
  max-width: 567px;

  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 96px;
  letter-spacing: 0.05em;

  color: ${themeGet("colors.black")};
`;

export const PositionHexagon = styled.div`
  position: absolute;
  bottom: -131px;
  left: -127px;
`;

export const FormPosition = styled.div`
  position: relative;
  top: 25px;
`;
