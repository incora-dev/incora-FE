import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IChangeColorText{
  color?: string;
}

interface IChangeColorTags{
  bgColor?: string;
}

export const Container = styled.div`
  max-width: 410px;

  display: flex;
  gap: 7.4px;
  flex-wrap: wrap;
`;

export const Strong = styled.strong`
  z-index: 1;
  position: relative;

  margin: 7px 10px;

  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-10);
  line-height: 28px;

  letter-spacing: 0.1em;

  color: ${({ color }: IChangeColorText) => color ? color : '#fff'};
`;

export const Div = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 22px;
  top: 0;

  cursor: pointer;
  background-color: ${({ bgColor }: IChangeColorTags) => bgColor ? bgColor : '#454A4D'};
  
  border-radius: 5px;
  
  &:after {
    position: absolute;
    top: 0;
  
    height: 100%;
    width: 0;
    
    content: '';

    border-radius: 5px;

    background-color: ${themeGet("colors.yellow")};

    transition: width ${themeGet("transition.button")};
  }

  &:hover :after {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-block;
`
