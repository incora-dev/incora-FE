import styled from "styled-components";
import { theme } from "../../styles/theme";
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

  transition: all ${themeGet("transition.menu")};

  background-color: ${({ backgroundColor }: IMenu) => backgroundColor};

  &:hover {
    background-color: ${({ titlesColor }: IMenu) =>
      titlesColor === theme.colors.black
        ? theme.colors.white
        : theme.colors.black};
  }
`;

export const MenuWrapper = styled.div`
  max-width: 1166px;
  margin: 0 auto;
`;

export const MenuContainer = styled.div`
  padding: 0 100px;

  @media only screen and (max-width: ${themeGet("breakpoints.mediumDesk")}) {
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 0 25px;
  }
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
  }
`;

export const ContentWrapper = styled.div`
  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
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
  max-height: 104px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 10px 0;
    flex-direction: row-reverse;
    max-height: 60px;
  }
`;

export const IncoraLogo = styled.img`
  max-width: 120px;
  cursor: pointer;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    max-width: 100px;
  }
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    max-width: 80px;
  }
`;

export const HoverMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  opacity: ${({ isShow }: IHoverMenu) => (isShow ? 1 : 0)};
  pointer-events: ${({ isShow }: IHoverMenu) => (isShow ? "auto" : "none")};

  background-color: ${({ titlesColor }: IHoverMenu) =>
    titlesColor === theme.colors.black
      ? theme.colors.white
      : theme.colors.black};

  margin: 0 auto;
  width: 100%;
  min-height: 461px;

  transition: opacity ${themeGet("transition.menu")};

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    margin: 60px auto 0 auto;
    right: 0;
    bottom: 0;
    top: 0;
    /* height: calc(100vh - 60px); */
    overflow: scroll;
    min-height: fit-content;
  }
`;

export const CloseBtn = styled.button`
  mix-blend-mode: difference;
  background: black;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  font-size: 20px;
  position: fixed;
  margin: 10px;
  right: 0;
  z-index: 21;
  display: none;
  cursor: pointer;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    display: block;
  }
`;
