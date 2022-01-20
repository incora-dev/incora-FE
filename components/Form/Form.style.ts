import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../styles/theme";
const yellow = theme.colors.yellow;

interface IInput {
  formBlack: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 35.5px;
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
`;

// export const SelectBlock = styled.div`
//   max-width: 400px;
//   position: relative;
//
//   select {
//     display: none;
//
//     &:after {
//       position: absolute;
//       content: "";
//       top: 14px;
//       right: 10px;
//       width: 0;
//       height: 0;
//       border: 6px solid transparent;
//       border-color: #fff transparent transparent transparent;
//     }
//   }
// `;

export const FormInputFile = styled.div`
  margin-top: -4px;
  box-sizing: border-box;
  height: max-content;

  position: relative;
  border: 1px solid ${themeGet("colors.grey2")};

  input {
    padding-top: 5px;
    height: 63px;
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
    
    padding: 7px 36px 14px 35px;

    font-style: normal;
    font-weight: 600;
    font-size: 12px;
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
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.03em;
  text-transform: capitalize;

  margin: 0;

  text-decoration: none;
  border: none;
  //border-bottom: 1px solid #9ca3a7;

  box-shadow: inset 0 -1px 0 0 #9ca3a7;
  -webkit-transition: ease-in-out 0.4s;
  -moz-transition: ease-in-out 0.4s;
  transition: all ease-in-out 0.4s;

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
    //border-bottom: 3px solid #e5b100;
    -webkit-transition: ease-in-out 0.4s;
    -moz-transition: ease-in-out 0.4s;
    transition: all ease-in-out 0.4s;
  }
`;
