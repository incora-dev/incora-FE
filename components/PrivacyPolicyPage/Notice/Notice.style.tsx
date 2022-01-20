import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IDisplay {
  shouldShowNotice: boolean;
}

export const Div = styled.div`
  position: fixed;
  bottom: 0;

  display: ${({ shouldShowNotice }: IDisplay) => shouldShowNotice ? 'none' : 'block'};

  background-color: ${themeGet("colors.white")};
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
  position: relative;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.05em;

  color: ${themeGet("colors.black")};

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
`;

export const Button = styled.a`
  padding: 23px 61.5px;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  
  cursor: pointer;

  color: ${themeGet("colors.white")};
  
  background-color: ${themeGet("colors.black")};
`;

