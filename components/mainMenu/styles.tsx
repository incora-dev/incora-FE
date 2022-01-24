import styled from "styled-components";
import { theme } from '../../styles/theme';

interface IMenu {
  backgroundColor: string;
  positionType: string;
}

export const Wrapper = styled.div`
  position: ${({ positionType }: IMenu) => positionType};
  top: 0;
  z-index: 10;
  padding: 0 100px;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 0 20px;
  }

  background-color: ${({ backgroundColor }: IMenu) => backgroundColor};
  transition: background-color 0.3s ease-in-out;
`;

export const Block = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const IncoraLogo = styled.img`
  max-width: 120px;

 @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    max-width: 60px;
  }
`;
