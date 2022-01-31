import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import {theme} from "../../../styles/theme";

interface ISelect {
  selected: boolean;
}

export const Div = styled.div`
  //overflow: hidden;
  margin-top: -49px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  
  display: flex;
  column-gap: 63px;
`;

export const ScrollLabels = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 150px;

  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const StickyWrapper = styled.div`
  margin-top: 5px;

  display: block;
`;

export const Line = styled.div`
  position: absolute;

  width: 7px;
  height: 100%;

  background: ${({ selected }: ISelect) => selected ? theme.colors.yellow2 : 'none'};
`;

export const Label = styled.div`
  max-width: 264px;
  margin-left: 20px;

  font-style: normal;
  font-weight: ${({ selected }: ISelect) => selected ? '700' : 'normal'};
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.05em;

  color: ${themeGet("colors.black")};

  h1, h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.05em;

    color: ${({ selected }: ISelect) => selected ? theme.colors.black : theme.colors.grey2};
  }

  h3, h4, h5, h6 {
    font-style: normal;
    font-weight: ${({ selected }: ISelect) => selected ? '700': 'normal' };
    font-size: 12px;
    line-height: 18px;

    letter-spacing: 0.05em;

    color: ${themeGet("colors.black")};
  }
`;

export const PreBlock = styled.div`

`;

export const ScrollLabel = styled.div`
  position: relative;

  width: max-content;

  display: flex;
  column-gap: 20px;
  justify-content: flex-start;
  align-items: center;
`;

export const SocialTitleAndTagsBlock = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
  
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const Tags = styled.div`
  max-width: 180px;
  
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const P = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: ${themeGet("colors.black")};
`;

export const LineRetreat = styled.div`
  margin-top: 20px;

  width: 100%;
  height: 1px;

  opacity: 0.3;

  background-color: ${themeGet("colors.font2")};;
`;

export const MainText = styled.div`
  max-width: 653px;
  
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  
  h1, h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 42px;

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${themeGet("colors.black")};
  }

  h3, h4, h5, h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;

    letter-spacing: 0.1em;

    color: ${themeGet("colors.font2")};;
  }

  ul {
    margin-left: 25px;
    padding: 0;

    box-sizing: border-box;
  }
  
  p, li {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;

    letter-spacing: 0.1em;

    color: ${themeGet("colors.font2")};
  }

  strong, b {
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;

    letter-spacing: 0.05em;

    color: ${themeGet("colors.black")};
  }

  a {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;

    cursor: pointer;

    letter-spacing: 0.1em;

    color: ${themeGet("colors.yellow2")};
  }


  pre {
    padding: 20px;
    overflow: scroll;
    
    color: ${themeGet("colors.codeText")};
    background-color: ${themeGet("colors.codeBg")};
  }
`;

export const PollBlock = styled.div`
  padding: 63px 0 88px;
  margin: 0 auto;
  max-width: 653px;

  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const CodeBlock = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

export const PollTitle = styled.h3`
  max-width: 444px;

  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: ${themeGet("colors.black")};
`;

export const ChooseElements = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Element = styled.div`
  position: relative;

  padding: 0 15px;

  display: flex;
  column-gap: 5px;
  align-items: center;

  cursor: pointer;

  border-radius: 7px;
  background-color: ${({ selected }: ISelect) => selected ? theme.colors.yellow2 : theme.colors.grey };
  
  svg {
    display: block;
    z-index: 1;
  }

  &:after {
    position: absolute;
    left: 0;
    
    width: 0;
    height: 100%;

    content: '';

    border-radius: 7px;
    background-color: ${themeGet("colors.yellow2")};
    
    transition: width ease-in-out 0.3s;
  }
  
  &:hover :after {
    width: 100%;
  }
`;

export const ElementTitle = styled.p`
  position: relative;
  z-index: 1;
  
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;

  letter-spacing: 0.1em;

  color: ${themeGet("colors.black")};
`;

export const SocialTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SocialIcons = styled.div`
  max-width: 200px;
  display: flex;
  column-gap: 10px;
  
  a {
    height: 25px;
    width: 25px
  }
`;
