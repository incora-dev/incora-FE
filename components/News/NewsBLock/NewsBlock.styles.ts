import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IComponent {
  number: number;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ number }: IComponent ) => `repeat(${number},1fr)`};
  column-gap: 70px;

  padding: 0 164px;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding: 0 25px;
    column-gap: 40px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 15px;
    column-gap: 30px;
  }
`
