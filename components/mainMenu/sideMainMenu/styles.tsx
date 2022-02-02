import { INavigation } from "@interfaces";
import styled, { css } from "styled-components";

interface IMenu {
  open: boolean;
  backgroundColor: string;
}

export const Menu = styled.nav<IMenu>`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 20;
  display: block;
  width: 100%;
  height: 100vh;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: ${({backgroundColor}: IMenu) => backgroundColor};
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props: IMenu)  =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;
