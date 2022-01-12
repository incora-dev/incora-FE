import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

interface IPosition {
  top?: number;
  left?: number;
  right?: number;
}

export const HexagonsWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${themeGet("colors.black")};
  position: absolute;
  overflow: hidden;
`;

export const Position = styled.div`
  position: absolute;
  top: ${({ top }: IPosition) => (top ? `${top}px` : "0")};
  left: ${({ left }: IPosition) => (left ? `${left}px` : "none")};
  right: ${({ right }: IPosition) => (right ? `${right}px` : "none")};
`;
