import styled from "styled-components";
import { theme } from "../../styles/theme";
const colorBlack = theme.colors.black;
const colorWhite = theme.colors.white;

interface IMenu {
  backgroundColor: string;
  positionType: string;
}

export const Wrapper = styled.div`
  position: ${({ positionType }: IMenu) => positionType};
  top: 0;
  z-index: 10;
  padding: 0 100px;

  background-color: ${({ backgroundColor }: IMenu) => backgroundColor};
  transition: background-color 0.5s ease-in-out;
`;

export const Block = styled.div`
  margin: 0 auto;
  padding: 30px 0;

  display: flex;
  justify-content: space-between;
  width: 100%;
`;
