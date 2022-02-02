import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const SelectorWrapper = styled.div`
  width: 300px;
  height: 43px;
  position: relative;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    width: 100%;
    margin-bottom: 5px;
  }

  .react-select-container,
  .react-select__control {
    width: 100%;
    height: 43px;
    min-height: 43px;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid ${themeGet("colors.grey")};
    border-radius: 0;

    &:hover {
      border-bottom: 1px solid ${themeGet("colors.grey")};
    }
  }

  .react-select__placeholder {
    position: absolute;

    letter-spacing: 0.5px;
    font-weight: 500;
    font-size: 12px;
    text-transform: capitalize;

    color: ${themeGet("colors.grey2")};
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__menu {

  }

  .react-select__option {
    &:hover {
      background-color: ${themeGet("colors.grey")};
    }

    &::selection {
      background-color: ${themeGet("colors.grey")};
    }
  }

  .react-select__option--is-focused {
    background: none;
  }
  .react-select__value-container {
    padding-left: 20px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 53%;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  padding-left: 25px;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    position: absolute;

    letter-spacing: 0.5px;
    font-weight: 500;
    text-transform: capitalize;
    font-size: var(--fs-12);
  
    color: ${themeGet("colors.grey2")};
  }
`;

export const Option = styled.div`
  position: absolute;
  border: 1px solid red;
  width: 300px;
  cursor: pointer;
`;

export const OptionButton = styled.button``;
