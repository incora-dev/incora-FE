import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import {theme} from "../../styles/theme";

interface IMenu {
  backgroundColor: string;
  positionType: string;
  titlesColor: string;
}

interface IHoverMenu {
  isShow: boolean;
  titlesColor: string;
}

export const Div = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  position: ${({ positionType }: IMenu) => positionType};
  top: 0;
  z-index: 10;
  padding: 0 100px;

  background-color: ${({ backgroundColor }: IMenu) => backgroundColor};
  transition: background-color ${themeGet("transition.menu")};
  
  &:hover {
    background-color: ${({ titlesColor }: IMenu) => titlesColor === theme.colors.black ? theme.colors.white : theme.colors.black};
  }
`;

export const Block = styled.div`
  margin: 0 auto;
  padding: 30px 0;

  display: flex;
  justify-content: space-between;
  width: 100%;
  
  img {
    cursor: pointer;
  }
`;

export const HoverMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  opacity: ${({ isShow }: IHoverMenu) => isShow ? 1 : 0};
  pointer-events: ${({ isShow }: IHoverMenu) => isShow ? 'auto' : 'none'};

  background-color: ${({ titlesColor }: IHoverMenu) => titlesColor === theme.colors.black ? theme.colors.white : theme.colors.black};

  margin: 104px auto 0 auto;
  width: 100%;
  height: 461px;

  transition: opacity ${themeGet("transition.menu")};
`;
