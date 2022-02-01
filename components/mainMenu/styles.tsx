import styled from "styled-components";
import { theme } from '../../styles/theme';
import themeGet from "@styled-system/theme-get";

interface IMenu {
  backgroundColor: string;
  positionType: string;
  titlesColor?: string;
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

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      padding: 0 20px;
  }

  background-color: ${({ backgroundColor }: IMenu) => backgroundColor};
  transition: background-color ${themeGet("transition.menu")};
  
  &:hover {
    background-color: ${({ titlesColor }: IMenu) => titlesColor === theme.colors.black ? theme.colors.white : theme.colors.black};
  }
`;

export const ContentWrapper = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    overflow-x: hidden;
  }
`;

export const Block = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    flex-direction: column;
  }
`;

export const IncoraLogo = styled.img`
  max-width: 120px;
  cursor: pointer;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    max-width: 60px;
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
