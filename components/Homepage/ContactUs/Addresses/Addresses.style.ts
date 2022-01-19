import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  margin-top: 47px;
  margin-left: 4px;
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
`;

export const Address = styled.div`
`;

export const Country = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: #9CA3A7;
`;

export const Street = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: #000;
`;
