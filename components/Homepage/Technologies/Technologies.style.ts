import styled from "styled-components";

interface IComponent {
  bgColor: string;
}

export const Component = styled.div`
  height: 623px;
  
  background-color: ${({bgColor}: IComponent) => bgColor};
`;

export const PaddingTop = styled.div`
  padding-top: 120px;
`;

export const MarginTop = styled.div`
  margin-top: 53px;
`;

export const Div = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  svg {
    margin: auto 0;
    
    cursor: pointer;
  }
`;

export const H2 = styled.h2`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #fff;
`;
