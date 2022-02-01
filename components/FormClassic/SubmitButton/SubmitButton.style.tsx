import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IButton {
  bgColor: string;
  padding?: string;
}

export const Button = styled.button`
  margin-top: 33px;

  position: relative;
  width: max-content;
  
  display: flex;
  padding: ${({padding = '24px 48px;'}: IButton) => padding};
  align-items: center;
  column-gap: 20px;
  
  cursor: pointer;

  background-color: ${({ bgColor }: IButton) => bgColor};
  border: none;
  
  svg {
    z-index: 1;
  }

  &:after {
    position: absolute;
    left: 0;

    width: 0;
    height: 100%;

    content: '';

    background-color: ${themeGet("colors.yellow4")};
    transition: width ${themeGet("transition.button")};
  }

  &:hover :after {
    width: 100%;
  }
`;

export const Label = styled.p`
  z-index: 1;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  text-align: center;

  letter-spacing: 0.03em;
  text-transform: capitalize;
`;
