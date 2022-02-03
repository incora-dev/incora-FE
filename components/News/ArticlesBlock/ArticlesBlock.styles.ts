import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IComponent {
  maxWidth: number;
}

export const Container = styled.div`
  display: flex;
  width: ${({ maxWidth }: IComponent ) => `calc((100vw - ${maxWidth}px) / 2 + ${maxWidth}px)`};
  margin-left: auto;

  padding: 0;

  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 0 25px;
    column-gap: 40px;
    margin-left: 0;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding: 0 25px;
    column-gap: 20px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding: 0 25px;
    column-gap: 15px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 15px;
    row-gap: 30px;
    display: flex;
    flex-direction: column;
  }
`;

export const ArticlesContainer = styled.div`
  display: -webkit-box;
  width: 100%;;
  overflow: scroll;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    display: flex;
    flex-direction: column;
  }
`;
