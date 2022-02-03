import styled, { css } from "styled-components";
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

export const ButtonsBlock = styled.div<IButtonsBlock>`
  display: flex;
  flex-direction: ${({ flexDirection }: IButtonsBlock) => flexDirection};;
  column-gap: ${({ columnGap }: IButtonsBlock) => columnGap};
  row-gap: ${({ rowGap }: IButtonsBlock) => rowGap};
  flex-wrap: wrap;

  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    gap: 15px;
    ${({flexDirection}) => flexDirection === 'row' && css`
      flex-wrap: nowrap;
      overflow-x: scroll;
      height: 59px;
      align-items: center;
    `}
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    gap: 15px;
    ${({flexDirection}) => flexDirection === 'row' && css`
      flex-wrap: nowrap;
      overflow-x: scroll;
      height: 70px;
      align-items: center;
    `}
  }
`

export const RadioButton = styled.div`
  position: relative;

  user-select: none;
  
  input {
    width: 100px;
    height: 100px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    display: none;

    &:checked + label {
      background: ${({bgColor}: IButtonsChecked) => bgColor ? bgColor : 'none'};
      border: ${({border}: IButtonsChecked) => border};
      color: ${({textColor}: IButtonsChecked) => textColor};
    }
  }

  label {
    position: relative;
    z-index: 1;

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

    &:after {
      position: absolute;

      z-index: -1;
      top: 0;
      left: 0;

      width: 0;
      height: 100%;

      content: '';

      background-color: ${themeGet("colors.yellow")};

      transition: width ${themeGet("transition.button")};
    }

    &:hover :after {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    :last-of-type {
      padding-bottom: 0;
    }
  }
`;
