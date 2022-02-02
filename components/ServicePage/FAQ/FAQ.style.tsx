import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IAccordion {
  isOpen: boolean;
  lastBlock: boolean;
  textColor?: string;
}

interface IText {
  isOpen: boolean;
}
interface IIcon {
  color?: string;
}

export const Div = styled.div`
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    width: 100%;
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  padding: 15.3vh 0 15.8vh;
  
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 70px 0 60px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 53px 15px;
    flex-direction: column;
    row-gap: 25px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: ${({ isOpen }: IText) => isOpen ? theme.colors.white : theme.colors.black};
  transition: all 0.3s linear;

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    line-height: 27px;
  }
`;

export const Title = styled.p`
  max-width: 580px;
  width: 42.46vw;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-18);
  line-height: 27px;

  letter-spacing: 0.05em;
  
  cursor: pointer;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 60vw;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 80vw;
    font-size: var(--fs-16);
  }
`;

export const PlusIconVisible = styled.div<IIcon>`
  svg {
    cursor: pointer;
    path {
      fill: ${({color}) => color ? color : '#000'};
    }
  }
`;

export const MinusIconVisible = styled.div`
  margin-top: -10px;

  svg {
    cursor: pointer;
    path {
      fill: ${({color}) => color ? color : '#000'};
    }
  }
`;

export const AccordionWrapper = styled.div<IAccordion>`
  display: flex;
  flex-direction: column;
  row-gap: 21px;

  padding: ${({ isOpen }: IAccordion) => isOpen ? '50px' : '30px 50px'};
  max-width: 745px;
  width: 54.75vw;
  
  color: ${({ isOpen }: IAccordion) => isOpen ? theme.colors.white : theme.colors.black};
  background-color: ${({ isOpen }: IAccordion) => isOpen ? theme.colors.black : 'none'};
  border-bottom: ${({ lastBlock }: IAccordion) => lastBlock ? 'none' : '1px solid #EFEFEF'};

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 70vw;
    padding: 30px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    width: 65vw;
    padding: 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding: 20px;
    row-gap: 15px;
    color: ${({textColor, isOpen}) => textColor 
      ? textColor 
      : isOpen 
        ? theme.colors.white 
        : theme.colors.black};
  }
`;

export const Accordion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 30px;
`;

export const TextBlock = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  & :last-child {
    border: none;
  }
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 40px;
}
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
