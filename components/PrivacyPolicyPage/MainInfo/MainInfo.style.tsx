import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  background-color: ${themeGet("colors.black")};
  
  h2, h3, h4, h5, h6 {
    margin: 0;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${themeGet("colors.white")};
  }
  
  ul {
    margin-left: 25px;
    padding: 0;
    
    box-sizing: border-box;
  }
  
  p, li {
    max-width: 630px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;

    letter-spacing: 0.1em;

    color: ${themeGet("colors.font1")};
  }
  
  a {
    max-width: 653px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    
    cursor: pointer;

    letter-spacing: 0.1em;

    color: ${themeGet("colors.yellow2")};
  }
  
  strong, b {
    max-width: 653px;

    font-weight: 600;
    font-size: 14px;
    line-height: 30px;

    letter-spacing: 0.05em;

    color: ${themeGet("colors.font1")};
  }
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 0 0 82px 0;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
