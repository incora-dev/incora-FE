import styled from "styled-components";

interface IVisible {
  animation: boolean;
}

export const Div = styled.div`
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  padding: 15.62vh 0 19.53vh;
  
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  display: none;
  opacity: 0;
  
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  /* or 214% */

  letter-spacing: 0.1em;
`;

export const Title = styled.p`
  max-width: 580px;
  width: 42.46vw;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 27px;

  letter-spacing: 0.05em;
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

export const AccordionWrapper = styled.a`
  display: block;

  padding: 30px 50px;
  max-width: 745px;
  width: 54.75vw;

  &:hover {
    padding: 50px;

    display: flex;
    flex-direction: column;
    row-gap: 25px;

    background-color: black;
    color: white;
  }

  &:hover ${Text} {
    display: block;
    opacity: 1;
  }

  &:hover ${Title} {
    color: white;
  }

  transition: all 0.3s linear;
`;

export const Accordion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: black;
  
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FAQWrapper = styled.div`
  background-color: white;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
