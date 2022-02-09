import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../styles/theme";

interface IChangeArrowColor {
  changeColor: boolean;
}

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const NumberBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 366px;

  .paginator {
    display: flex;
    column-gap: 7px;

    @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
      column-gap: 4px;
    }
    

    li {
      cursor: pointer;
      list-style-type: none;
      width: 35px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: normal;
      font-weight: 600;
      font-size: var(--fs-12);
      line-height: 18px;
      letter-spacing: 0.05em;

      @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
        width: 30px;
      }

      @media only screen and (max-width: ${themeGet('breakpoints.miniMobile')}) {
        width: 25px;
      }
    }
  }

  .active {
    background-color: ${themeGet("colors.yellow")};
    color: ${themeGet("colors.black")};
  }
`;

export const LeftArrow = styled.div`
  width: 35px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    transform: rotate(180deg);

    opacity: ${({ changeColor }: IChangeArrowColor) =>
      changeColor ? "0.2" : "1"};
  }
`;

export const RightArrow = styled.div`
  width: 35px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    opacity: ${({ changeColor }: IChangeArrowColor) =>
      changeColor ? "0.2" : "1"};
  }
`;
