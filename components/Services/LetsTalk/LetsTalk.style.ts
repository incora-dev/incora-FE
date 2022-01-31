import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ILetsTalk {
  flexDirection: string;
}

interface IDiv {
  isWhite?: boolean;
}

export const Div = styled.div`
  background-color: ${({ isWhite }: IDiv) =>
    isWhite ? themeGet("colors.white") : themeGet("colors.black")};
  overflow: hidden;

  color: ${({ isWhite }: IDiv) =>
    isWhite ? "black" : themeGet("colors.white")};
`;

export const Wrapper = styled.div`
  padding: 87px 0 99px 0;

  max-width: 1006px;
  margin: 0 auto;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 53px 20px 20px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 43px;
`;

export const TextBlock = styled.div`
  max-width: 565px;

  display: flex;
  flex-direction: ${({ flexDirection }: ILetsTalk) => flexDirection};
  row-gap: 10px;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    font-size: var(--fs-28);
    line-height: 39px;
  }

  letter-spacing: 0.05em;
  text-transform: capitalize;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: var(--fs-18);
  line-height: 30px;

  letter-spacing: 0.05em;
`;

export const PositionHexagon = styled.div`
  position: absolute;
  top: ${({ isWhite }: IDiv) => (isWhite ? "70px" : "-239px")};
  right: -47px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    display: none;
  }
`;

export const PositionButtonWithArrow = styled.div`
  margin-top: 43px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
