import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  overflow: hidden;
  
  background-color: ${themeGet("colors.black")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 181px 0 237px;
`;

export const MainBlock = styled.div`
  position: relative;
  right: -11px;
  
  display: flex;
  flex-direction: column;
  row-gap: 68px;
`;

export const IconBlock = styled.div`
  width: max-content;
`;

export const TextBlock = styled.div`
  margin-left: 24px;
`;

export const Text = styled.p`
  width: max-content;
  position: relative;
  z-index: 1;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;

  letter-spacing: 0.1em;
  
  color: ${themeGet("colors.white")};

  span {
    cursor: pointer;
  }
  
  &:before {
    position: absolute;
    bottom: 7px;
    right: -6px;

    width: 79px;
    height: 10px;
    
    z-index: -1;

    content: '';
    background-color: ${themeGet("colors.yellow")};
  }

  &:after {
    position: absolute;
    bottom: 7px;
    right: -6px;

    z-index: -1;

    width: 0;
    height: 10px;

    content: '';

    background-color: ${themeGet("colors.yellow5")};

    transition: width ${themeGet("transition.button")};
  }

  &:hover :after{
    width: 79px;
  }
`;
