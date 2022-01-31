import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { homePageTechnologiesHoverDuration } from "../../../../constants";
import { theme } from "../../../../styles/theme";

interface IComponent {
  number: number;
}

export const Component = styled.div`
  display: grid;
  grid-template-columns: ${({ number }: IComponent ) => `repeat(${number},1fr)`};
  column-gap: 26px;

  padding: 0 180px;
  
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 8%;
  }
`;

export const Technology = styled.div`
  opacity: 1;
  position: relative;

  width: 291px;
  height: 291px;

  cursor: pointer;
  
  background: #212125;

  -webkit-transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  -moz-transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  -ms-transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  -o-transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: var(--fs-18);
    line-height: 27px;

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #fff;
  }
`;

export const TechnologyHover = styled.div`
  position: absolute;
  opacity: 0;

  width: 291px;
  height: 291px;

  cursor: pointer;

  -webkit-transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  -moz-transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  -ms-transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  -o-transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
  transition: opacity ${homePageTechnologiesHoverDuration} ease-in-out;
`;

export const Container = styled.div`
  position: relative;

  &:hover ${TechnologyHover} {
    opacity: 1;
  }

  &:hover ${Technology} {
    opacity: 0;
  }
`;

export const ContainerTop = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;
