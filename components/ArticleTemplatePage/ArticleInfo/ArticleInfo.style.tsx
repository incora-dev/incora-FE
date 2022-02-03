import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

interface ISelect {
  selected: boolean;
}

interface ISideBarRowGap {
  rowGap: string;
}

export const Icons = styled.div`
  display: flex;
  column-gap: 10px;

  svg {
    height: 25px;
    width: 25px;

    circle {
      fill: ${themeGet("colors.yellow")};
    }

    path {
      fill: ${themeGet("colors.black")};
    }

    &:hover {
      circle {
        fill: ${themeGet("colors.black")};
      }

      path {
        fill: ${themeGet("colors.yellow")};
      }
    }
  }
`;

export const Div = styled.div`
  //overflow: hidden;
  margin-top: -49px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    margin-top: -70px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  
  display: flex;
  column-gap: 63px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    max-width: 100%;
    column-gap: 34px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    row-gap: 10px;
    flex-direction: column;
  }
`;

export const ScrollLabels = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 150px;

  display: flex;
  flex-direction: column;
  row-gap: ${({ rowGap }: ISideBarRowGap) => rowGap};

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    max-width: 240px;
  }
  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    display: none;
  }
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
  width: 264px;
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

    &:hover {
      color: ${themeGet("colors.yellow")};
    }
  }

  h3, h4, h5, h6 {
    font-style: normal;
    font-weight: ${({ selected }: ISelect) => selected ? '700': 'normal' };
    font-size: 12px;
    line-height: 18px;

    letter-spacing: 0.05em;

    color: ${themeGet("colors.black")};

    &:hover {
      color: ${themeGet("colors.yellow")};
    }
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
  
  cursor: pointer;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    width: 100%;
  }
`;

export const SocialTitleAndTagsBlock = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
  
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 20px 25px 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 20px 15px 0;
  }
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

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    max-width: 580px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 0 25px 0;
    row-gap: 20px;
    max-width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px 0;
    row-gap: 15px;
  }
  
  h1, h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 42px;

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${themeGet("colors.black")};

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: var(--fs-24);
      line-height: 34px;
      margin: 10px 0px;
    }
  }

  h3, h4, h5, h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;

    letter-spacing: 0.1em;

    color: ${themeGet("colors.font2")};

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      line-height: 28px;
    }
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

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      line-height: 28px;
    }
  }

  strong, b {
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;

    letter-spacing: 0.05em;

    color: ${themeGet("colors.black")};

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      line-height: 28px;
    }
  }

  a {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;

    cursor: pointer;

    letter-spacing: 0.1em;

    color: ${themeGet("colors.yellow2")};
    
    &:hover {
      color: ${themeGet("colors.yellow5")};
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      line-height: 28px;
    }
  }

  pre {
    padding: 20px;
    overflow: scroll;

    color: ${themeGet("colors.tagPreText")};
    background-color: ${themeGet("colors.tagPreBg")};
  }
`;

export const PollBlock = styled.div`
  padding: 63px 0 88px;
  margin: 0 auto;
  max-width: 653px;

  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    max-width: 580px;
    margin-left: 274px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 30px 25px 50px;
    row-gap: 20px;
    max-width: 100%;
    margin-left: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 30px 15px 50px;
    row-gap: 15px;
  }
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

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    font-size: var(--fs-18);
    line-height: 28px;
  }
`;

export const ChooseElements = styled.div`
  display: flex;
  column-gap: 10px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    flex-direction: column;
    row-gap: 8px;
  }
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
