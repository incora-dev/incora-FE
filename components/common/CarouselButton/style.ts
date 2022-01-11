import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IButton {
  right: boolean;
}

export const ButtonWrap = styled.div`
  padding: 0 33px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: ${({ right }: IButton) => (right ? "flex-end" : "start")};

  svg {
    transform: ${({ right }: IButton) => (right ? "rotate(180deg)" : "none")};
  }
`;

export const Ellipse = styled.div`
  border-radius: 100px;
  width: 100px;
  height: 100px;
  background-color: ${themeGet("colors.white")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
