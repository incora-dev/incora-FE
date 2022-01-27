import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const SelectorWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 33px;
  border-bottom: 1px solid ${themeGet("colors.grey2")};
  cursor: pointer;
  padding-top: 5px;

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .arrow {
    position: absolute;
    top: 5px;
    right: 0;
    z-index: 1;
  }
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
    font-size: 12px;
    text-transform: capitalize;
  
    color: ${themeGet("colors.grey2")};
  }
`;
