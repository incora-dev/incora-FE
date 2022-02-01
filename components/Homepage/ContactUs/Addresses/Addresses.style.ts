import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  position: relative;
  right: -28px;
  margin-top: 47px;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    svg {
      position: relative;
      left: 55px;
    }

    margin-left: 0;
  }
  @media only screen and (max-width: ${theme.breakpoints.xsMobile}) {
    margin-left: 110px;
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
    left: 20px;
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
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-16);
  line-height: 30px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: #000;
`;

export  const  PositionLoading = styled.div`
  position: absolute;
  top: -32px;
  right: -87px;
  
  svg {
    transform: rotate(-45deg);
    
    path {
      fill: #000;
    }
  }
`;
