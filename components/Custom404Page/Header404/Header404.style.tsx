import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  overflow: hidden;
  
  background-color: ${themeGet("colors.black")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 181px 0 239px;
`;

export const MainBlock = styled.div`
  position: relative;
  right: -10px;
  
  display: flex;
  flex-direction: column;
  row-gap: 66px;
`;

export const IconBlock = styled.div`
  width: max-content;
`;

export const TextBlock = styled.div`
  margin-left: 24px;
  
  span {
    cursor: pointer;
  }
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
  
  &:after {
    position: absolute;
    bottom: 5px;
    right: -6px;
    
    z-index: -1;

    content: '';
    height: 10px;
    width: 79px;
    background-color: ${themeGet("colors.yellow")};
  }
`;
