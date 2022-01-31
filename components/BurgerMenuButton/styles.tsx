import styled from 'styled-components';
import themeGet from "@styled-system/theme-get";

interface IBtn {
  width: number;
  height: number;
  backgroundColor?: string;
  textColor?: string;
  arrow?: string;
}
interface IBar {
  noMargin?: boolean;
}

export const Bar = styled.span`
  display: block;
  width: 40px;
  height: 2px;
  margin-bottom: ${({noMargin}: IBar) => noMargin ? 0 : '7px'};
  background-color: #fff;
  mix-blend-mode: difference;
`;

export const MenuButton = styled.button`
  display: block;
  border: 0;
  padding: 10px 0;
  background: none;
  width: fit-content;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover {
    span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    }
  }
`;
