import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import {theme} from "../../../styles/theme";

interface ISelect {
  selected: boolean;
}

export const Div = styled.div`
  //overflow: hidden;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 60px 0 100px;
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
  row-gap: 15px;

  height: 70vh;
`;

export const StickyWrapper = styled.div`
  display: block;
`;

export const Line = styled.div`
  width: 7px;
  height: 100%;

  background: #FEC506;
`;

export const Label = styled.p`
  max-width: 264px;

  font-style: normal;
  font-weight: ${({ selected }: ISelect) => selected ? '700' : 'normal'};
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.05em;

  color: ${themeGet("colors.black")};
`;

export const ScrollLabel = styled.div`
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
  
  h1, h2, h3 {
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 42px;

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${themeGet("colors.black")};
  }

  h4, h5, h6 {
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
`;

export const PollBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
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
  row-gap: 5px;

  cursor: pointer;

  border-radius: 7px;
  background-color: ${({ selected }: ISelect) => selected ? theme.colors.yellow2 : theme.colors.grey };

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
