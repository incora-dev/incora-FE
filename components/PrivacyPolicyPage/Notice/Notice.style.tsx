import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IDisplay {
  shouldShowNotice: boolean;
}

export const Div = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;

  display: ${({ shouldShowNotice }: IDisplay) => shouldShowNotice ? 'none' : 'block'};

  background-color: ${themeGet("colors.white")};
  
  a {
    position: relative;
    &:after {
      position: absolute;
      bottom: 5px;
      right: -8px;

      z-index: -1;

      content: '';
      height: 7px;
      width: 94px;
      background-color: ${themeGet("colors.yellow")};
    }
  }
  
`;

export const Wrapper = styled.div`
  width: 100vw;
  padding: 16.5px 0;
`;

export const TextBlock = styled.div`
  margin: auto;

  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 37px;
  color: ${themeGet("colors.black")};
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-16);
  line-height: 24px;

  letter-spacing: 0.05em;

  color: ${themeGet("colors.black")};
`;

export const Button = styled.div`
  padding: 23px 61.5px;

  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-14);
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  
  cursor: pointer;

  color: ${themeGet("colors.white")};
  
  background-color: ${themeGet("colors.black")};
`;

