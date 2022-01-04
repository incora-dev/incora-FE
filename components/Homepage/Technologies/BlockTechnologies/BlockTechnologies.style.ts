import styled from "styled-components";

interface IComponent {
  number: number;
}

export const Component = styled.div`
  display: grid;
  grid-template-columns: ${({ number }: IComponent ) => `repeat(${number},1fr)`};
  column-gap: 26px;
  
  overflow: hidden;
`;

export const Technology = styled.div`
  position: relative;

  width: 291px;
  height: 291px;

  cursor: pointer;
  
  background: #212125;
  
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #fff;
  }
`;

export const TechnologyHover = styled.div`
  display: none;

  width: 291px;
  height: 291px;

  cursor: pointer;
`;

export const Container = styled.div`
  &:hover ${TechnologyHover} {
    display: block;
  }

  &:hover ${Technology} {
    display: none;
  }
`;

export const ContainerTop = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;
