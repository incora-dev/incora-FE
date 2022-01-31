import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IInput {
  formBlack: boolean;
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

export const FormContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;

  row-gap: 21px;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const FormInputFile = styled.div`
  margin-top: -4px;
  box-sizing: border-box;
  height: max-content;

  position: relative;
  border: 1px solid ${themeGet("colors.grey2")};

  input {
    padding-top: 5px;
    height: 56px;
    opacity: 0;

    ::file-selector-button {
      display: none;
    }
    ::-webkit-file-upload-button {
      display: none;
    }
  }
  
  label {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 400px;

    padding: 0 35px;

    font-style: normal;
    font-weight: 600;
    font-size: var(--fs-12);
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.05em;

    color: ${themeGet("colors.black")};
  }
`;

export const Input = styled.input`
  box-sizing: content-box;
  width: 400px;

  padding-bottom: 2px;
  display: inline-block;
  height: 41px;

  background-color: ${({ formBlack }: IInput) =>
    formBlack ? themeGet("colors.black") : themeGet("colors.white")};

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

  @media only screen and (max-width: 600px) {
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

export const SelectedFile = styled.p`
  text-align: left;

  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-12);
  line-height: 18px;

  color: ${themeGet("colors.black")};
`;

export const FilesSelected = styled.div`
  margin-top: 35.5px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    margin-top: 35.5px;
  }
`;
