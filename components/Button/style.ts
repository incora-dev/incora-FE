import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IBtn {
  width: number;
  height: number;
}

export const ButtonWrapper = styled.div``;

export const Btn = styled.button`
  width: 100%;
  height: 100%;
  width: ${({ width }: IBtn) => `${width}px`};
  height: ${({ height }: IBtn) => `${height}px`};
  background-color: ${themeGet("colors.yellow")};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: ${themeGet("boxShadow.hover")};
  }

  label {
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    letter-spacing: ${themeGet("letterSpacing.span")};
  }
`;
