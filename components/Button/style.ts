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
  position: relative;

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

  &:after {
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: 0;

    content: '';
    background-color: ${themeGet("colors.yellow")};

    transition: width ${themeGet("transition.button")};
  }

  &:hover :after {
    width: 100%;
  }

  label {
    z-index: 1;

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
    z-index: 1;

    path {
      fill: ${({ arrow }: IBtn) => `${arrow}`};
    }
  }

  &:hover {
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
