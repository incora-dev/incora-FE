import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../styles/theme";

interface IPagination {
  select: boolean;
}

interface IChangeArrowColor {
  changeColor: boolean;
}

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
`;

export const NumberBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 7px;
`;

export const Number = styled.div`
  width: 38px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.05em;
  
  cursor: pointer;

  background-color: ${({ select }: IPagination) => select ? theme.colors.yellow : 'none'};
  color: ${themeGet("colors.black")};
`;

export const LeftArrow = styled.div`
  width: 35px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    transform: rotate(180deg);
    
    opacity: ${({ changeColor }: IChangeArrowColor) => changeColor ? '0.2' : '1'};
  }
`;

export const RightArrow = styled.div`
  width: 35px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    opacity: ${({ changeColor }: IChangeArrowColor) => changeColor ? '0.2' : '1'};
  }
`;
