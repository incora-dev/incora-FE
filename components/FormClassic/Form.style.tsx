import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IInput {
  formTheme: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 35.5px;

  a {
    margin-top: 5px;
  }
`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 31px;
`;

export const FormContainer = styled.form`
   max-width: 400px;
   display: flex;
   flex-direction: column;
   row-gap: 21px;
`;

export const Input = styled.input`
   box-sizing: content-box;
   width: 100%;
   padding-bottom: 2px;
   display: inline-block;
   height: 41px;
   background-color: ${({ formTheme }: IInput) =>
     formTheme ? themeGet("colors.black") : themeGet("colors.white")};

   color: ${({ formTheme }: IInput) =>
     formTheme ? themeGet("colors.white") : themeGet("colors.black") };
  
  font-style: normal;
  font-weight: 500;
  font-size: var(--fs-12);
  line-height: 18px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  margin: 0;
  text-decoration: none;
  border: none;
  box-shadow: inset 0 -1px 0 0 #9ca3a7;
  -webkit-transition: ease-in-out 0.4s;
   -moz-transition: ease-in-out 0.4s;
   transition: all ease-in-out 0.4s;
   &::-webkit-outer-spin-button,
   &::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
   }
   &[type=number] {
     -moz-appearance: textfield;
   }
   @media only screen and (max-width: ${theme.breakpoints.mobile}) {
     width: 100%;
   }
  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: var(--fs-12);
    line-height: 18px;
    letter-spacing: 0.03em;
    text-transform: capitalize;
  }
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 -2px 0 0 #e5b100;
    -webkit-transition: ease-in-out 0.4s;
    -moz-transition: ease-in-out 0.4s;
     transition: all ease-in-out 0.4s;
   }
`;
