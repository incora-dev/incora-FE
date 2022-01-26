import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  position: relative;

  margin-top: 47px;
  margin-left: 4px;
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    svg {
      position: relative;
      left: 55px;
    }

    margin-left: 0;
  }
`;

export const AddressesContainer = styled.div`
  position: absolute;
  top: 131px;
  left: -51px;
  
  max-width: 302px;
  
  display: flex;
  flex-direction: column;
  row-gap: 27px;

  margin: auto;
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    left: 0px;
  }
`;

export const Address = styled.div`
`;

export const Country = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-14);
  line-height: 28px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: #9CA3A7;
`;

export const Street = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-16);
  line-height: 30px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: #000;
`;
