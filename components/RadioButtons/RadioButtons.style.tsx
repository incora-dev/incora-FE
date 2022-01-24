import styled from "styled-components";
import { theme } from "../../styles/theme";
import themeGet from "@styled-system/theme-get";

interface IButtons {
  padding: string;
  bgColor: string;
  border: string;
  textColor: string;
  fontWeight: string;
  isHover: boolean;
  cursor: string;
}

interface IButtonsChecked {
  bgColor: string;
  border: string;
  textColor: string;
}

interface IButtonsBlock {
  flexDirection: string;
  columnGap: string;
  rowGap: string;
}

export const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }: IButtonsBlock) => flexDirection};;
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

    &:checked + label {
      background: ${({bgColor}: IButtonsChecked) => bgColor ? bgColor : 'none'};
      border: ${({border}: IButtonsChecked) => border};
      color: ${({textColor}: IButtonsChecked) => theme.colors.black};
    }
  }

  label {
    padding: ${({padding}: IButtons) => padding};
    width: 500px;
    white-space: nowrap;

    font-style: normal;
    font-weight: ${({ fontWeight }: IButtons) => fontWeight};
    font-size: var(--fs-16);
    line-height: 24px;

    letter-spacing: 0.05em;
    cursor: ${({ cursor }: IButtons) => cursor};

    color: ${({ textColor }: IButtons) => textColor};
    background: ${({bgColor}: IButtons) => bgColor ? 'none' : bgColor};
    border: ${({ border }: IButtons) => border};

    &:hover {
      box-shadow: ${({ isHover }) => isHover ? `inset 200px 0 0 0 #ffcf22` : `inset 200px 0 0 0 ${themeGet('color.yellow')}`};
      -webkit-transition: ease-in-out 0.3s;
      -moz-transition: ease-in-out 0.3s;
    }
  }
`;
