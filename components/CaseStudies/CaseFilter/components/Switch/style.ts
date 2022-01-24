import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface ISwitchWrap {
  toggle: boolean;
  backgroundColor?: string;
}

export const SwitchWrap = styled.div`
  width: 232px;
  height: 44px;
  border-radius: 50px;
  position: relative;
  background: ${({ backgroundColor }: ISwitchWrap) =>
    backgroundColor ? `${backgroundColor}` : themeGet("colors.background")};
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  span {
    z-index: 1;
    font-weight: 500;
    font-size: var(--fs-14);
    line-height: 21px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin: 0;
  }

  .left {
    color: ${({ toggle }: ISwitchWrap) =>
      toggle ? themeGet("colors.font1") : "black"};
  }

  .right {
    color: ${({ toggle }: ISwitchWrap) =>
      toggle ? "black" : themeGet("colors.font1")};
  }
`;

export const YellowButton = styled.div`
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: ${({ toggle }: ISwitchWrap) => (toggle ? "50%" : "0px")};
  width: 50%;
  height: 100%;
  border-radius: 50px;
  background: ${themeGet("colors.yellow")};
`;
