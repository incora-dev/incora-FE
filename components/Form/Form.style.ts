import styled from "styled-components";
import { theme } from "../../styles/theme";
const yellow = theme.colors.yellow;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  row-gap: 56px;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  row-gap: 31px;
`;

export const FormContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  
  row-gap: 31px;
`;

export const Input = styled.input`
  height: 34px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: #000000;

  border: none;
  border-bottom: 1px solid #9CA3A7;

  ::placeholder {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    letter-spacing: 0.03em;
    text-transform: capitalize;

    color: #9CA3A7;
  }

  &:focus-visible {
    outline: none;
    //border:none;
    border: 1px solid ${yellow};
  }
`;
