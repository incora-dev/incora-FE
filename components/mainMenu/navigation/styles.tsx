import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;

  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: #fff;
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
  font-size: 14px;
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

export const Arrow = styled.div`
  width: 9.53px;
  height: 5px;
  margin-left: 9.58px;

  background: center no-repeat url("navArrow.svg");
`

export const ButtonArrow = styled.div`
  width: 25px;
  height: 12px;
  margin-left: 20px;

  background: center no-repeat url("navButtonArrow.svg");
`
