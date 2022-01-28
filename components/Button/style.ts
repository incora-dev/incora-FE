import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IBtn {
  width: number;
  height: number;
  backgroundColor?: string;
  textColor?: string;
  arrow?: string;
}

export const Btn = styled.button`
  width: ${({ width }: IBtn) => `${width}px`};
  height: ${({ height }: IBtn) => `${height}px`};
  background-color: ${({ backgroundColor }: IBtn) =>
    backgroundColor ? `${backgroundColor}` : themeGet("colors.yellow")};
  border: none;
  display: flex;
  justify-content: center;
  column-gap: 20px;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: ${themeGet("boxShadow.hover")};
  }

  label {
    cursor: pointer;
    font-weight: bold;
    font-size: var(--fs-14);
    line-height: 21px;
    text-transform: capitalize;
    letter-spacing: ${themeGet("letterSpacing.span")};
    color: ${({ textColor }: IBtn) =>
      textColor ? `${textColor}` : themeGet("colors.black")};
  }

  svg {
    path {
      fill: ${({ arrow }: IBtn) => `${arrow}`};
    }
  }

  box-shadow: inset 0 0 0 0 #e5b100ff;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

  &:hover {
    box-shadow: inset 240px 0 0 0 #e5b100ff;

    label {
      color: ${themeGet("colors.black")};
    }

    svg {
      path {
        fill: ${themeGet("colors.black")};
      }
    }
  }
`;
