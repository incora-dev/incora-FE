import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IAccordion {
  isOpen: boolean;
  lastBlock: boolean;
}

interface IText {
  isOpen: boolean;
}

export const Div = styled.div`
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  padding: 15.3vh 0 15.8vh;
  
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 53px 20px;
    flex-direction: column;
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
`;

export const PlusIconVisible = styled.div`
  svg {
    cursor: pointer;
  }
`;

export const MinusIconVisible = styled.div`
  svg {
    cursor: pointer;
  }
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;

  padding: ${({ isOpen }: IAccordion) => isOpen ? '50px' : '30px 50px'};
  max-width: 745px;
  width: 54.75vw;
  
  color: ${({ isOpen }: IAccordion) => isOpen ? theme.colors.white : theme.colors.black};
  background-color: ${({ isOpen }: IAccordion) => isOpen ? theme.colors.black : 'none'};
  border-bottom: ${({ lastBlock }: IAccordion) => lastBlock ? 'none' : '1px solid #EFEFEF'};
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
        width: 100%;
  }
`;

export const Accordion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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
