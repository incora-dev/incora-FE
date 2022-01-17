import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IButtons {
  padding: string;
  bgColor: string,
  border: string,
  textColor: string,
}

interface IButtonsChecked {
  bgColor: string,
  border: string,
  textColor: string,
}

interface IButtonsBlock {
  columnGap: string;
  rowGap: string;
}

export const ButtonsBlock = styled.div`
  display: flex;
  column-gap: ${({ columnGap }: IButtonsBlock) => columnGap};
  row-gap: ${({ rowGap }: IButtonsBlock) => rowGap};
  flex-wrap: wrap;

  transition: all 0.3s ease-in-out;
`

export const RadioButton = styled.div`
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    display: none;

    cursor: pointer;

    &:checked + label {
      background: ${({bgColor}: IButtonsChecked) => bgColor ? bgColor : 'none'};
      border: ${({border}: IButtonsChecked) => border};
      color: ${({textColor}: IButtonsChecked) => textColor};
    }
  }

  label {
    padding: ${({padding}: IButtons) => padding};

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.05em;
    cursor: pointer;

    color: ${({textColor}: IButtons) => textColor ? textColor : theme.colors.white};
    background: ${({bgColor}: IButtons) => bgColor ? 'none' : bgColor};
    border: ${({border}: IButtons) => border};

    &:hover {
      box-shadow: inset 200px 0 0 0 #ffcf22;
      -webkit-transition: ease-in-out 0.3s;
      -moz-transition: ease-in-out 0.3s;
    }
  }
`;
