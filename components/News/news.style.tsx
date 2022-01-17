import styled from "styled-components";

interface IComponent {
  bgColor: string;
}

export const Component = styled.div`
  height: 623px;
  width: 100%;
  padding-top: 100px;

  background-color: ${({ bgColor }: IComponent) => bgColor};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding-left: 180px;
  padding-right: 80px;
`;

export const HeaderWrap = styled.div`
  width: 100%;
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

  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: ${({ color }) => color};
`;

export const NewsWrap = styled.div`
  width: 100%;
  margin-top: 58px;
`;
