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
  display: inline-block;
  height: 34px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.03em;
  text-transform: capitalize;

  margin: 0;

  text-decoration: none;
  border: none;

  box-shadow: inset 0 -1px 0 0 #9CA3A7;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: all ease-out 0.4s;

  &::placeholder {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    letter-spacing: 0.03em;
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: none;

    box-shadow: inset 0 -2px 0 0 #e5b100;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: all ease-out 0.4s;
  }
`;
