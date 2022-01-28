import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface ICheckbox {
  checked?: boolean;
};

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  margin: -1px;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  opacity: 0;
  width: 100%;
  height: 100%;
`;

export const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 1px solid;
  border-color: ${({ checked }: ICheckbox) => checked ? themeGet("colors.black") : '#DDDDDD'};
  background-color: ${props => props.checked ? themeGet("colors.black") : 'transparent'};;
  border-radius: 50%;
  transition: all 150ms;
`;

export const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-items: center;
  width: 302px;
  height: 80px;
  background: ${({ checked }: ICheckbox) => checked ? themeGet("colors.yellow") : themeGet("colors.greyCheckbox")};
  padding: 0 40px;
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  max-width: calc(100% - 20px);
  letter-spacing: calc(1em / 20);
`;
