import styled from "styled-components";

interface IChangeColor{
  bgColor: string;
  color: string;

}

export const Container = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  max-width: 410px;
`;

export const Strong = styled.strong`
  margin: 7px 10px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 28px;

  letter-spacing: 0.1em;
`;

export const A = styled.a`
  display: flex;
  align-items: center;

  height: 22px;
  left: calc(50% - 69px / 2 - 145.5px);
  top: 0;

  cursor: pointer;
  background-color: ${({ bgColor }: IChangeColor) => bgColor ? bgColor : '#454A4D'};

  color: ${({ color }: IChangeColor) => color ? color : '#fff'};

  border-radius: 5px;


  box-shadow: inset 0 0 0 0 #ffc400;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;


  &:hover {
    box-shadow: inset 100px 0 0 0 #ffc400;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-block;
`
