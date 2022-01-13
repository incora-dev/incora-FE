import styled from "styled-components";

interface IComponent {
  number: number;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ number }: IComponent ) => `repeat(${number},1fr)`};
  column-gap: 70px;

  padding: 0 180px;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const ImgBlock = styled.a`
  display: flex;
  cursor: pointer;
  
  img {
    border-radius: 0 20px 0 0;
  }
`

export const H3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000000;
`

export const Element = styled.div`
  align-self: flex-end;
  
  width: 15px;
  height: 171px;

  background: #FEC602;
  border-radius: 0 0 0 30px;
`
