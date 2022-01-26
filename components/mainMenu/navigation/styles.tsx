import styled from "styled-components";
import { theme } from "../../../styles/theme";

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

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(3, 1fr);
  }
`

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  margin-right: 49px;
  align-items: center;

  white-space: nowrap;
  list-style: none;
`

export const UlButton = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;

  white-space: nowrap;
  list-style: none;
`

export const Li = styled.li`
  font-family: Poppins;
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
