import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import {theme} from "../../../styles/theme";

interface IAddLine {
  shouldAddLine: boolean;
}

export const Nav = styled.nav`
  display: flex;

  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: var(--fs-14);
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: ${( {color}) => color };

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    display: grid;
    gap: 20px;
    padding-left: 30px;
  }
`

export const Ul = styled.ul`
  position: relative;

  width: 100%;
  display: flex;
  margin-right: 49px;
  align-items: center;

  white-space: nowrap;
  list-style: none;
  
  cursor: pointer;

  &:after {
    position: absolute;
    top: 23px;
    left: 6px;

    z-index: -1;

    content: '';

    width: ${({ shouldAddLine }: IAddLine) => shouldAddLine ? '100%' : '0'};
    height: 7px;

    background-color: ${themeGet("colors.yellow")};

    transition: all ${themeGet("transition.button")};
  }
`

export const UlButton = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;

  white-space: nowrap;
  list-style: none;
`

export const Li = styled.li`
  font-size: var(--fs-14);
  font-weight: 700;
  line-height: 21px;
`

export const A = styled.a`
  display: flex;
  align-items: center;
  padding: 11.5px 14.5px;

  background-color: #fec602;
  color: #000;
`

export const PositionArrow = styled.div`
  margin-left: 9.58px;
  
  svg {
    display: block;
    path {
      fill: ${({ color }) => color};
    }
  }
`
