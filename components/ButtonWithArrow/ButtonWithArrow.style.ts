import styled from "styled-components";

interface IButton {
  padding?: string;
}

export const Arrow = styled.div`
  width: 25px;
  height: 12px;

  background: center no-repeat url("navButtonArrow.svg");
`

export const Label = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  
  text-align: center;
   
  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: #000;
`

export const Button = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  width: max-content;
  padding: ${({ padding = '23px 35px;' }: IButton) => padding};
  column-gap: 20px;
  
  cursor: pointer;
  background-color: #fec602;

  color: #000;
`

export const Container = styled.a`
  a {
    min-width: 180px;
  }
`
