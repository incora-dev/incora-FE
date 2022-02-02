import themeGet from "@styled-system/theme-get";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

export const CircleBlock = styled.div`
  position: relative;
  display: none;
`;

export const Circle = styled.a`
  position: absolute;
  bottom: 50px;
  right: 15px;

  width: 54px;
  height: 54px;

  border-radius: 50%;
  background: #FEC506;
`;

export const PositionText = styled.div`
  position: absolute;
  bottom: 27px;
  right: 0;
`;

const rotation = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
`

export const PositionCircleBlock = styled.div`
  position: sticky;
  bottom: 0;
  right: 56px;

  &:hover ${PositionText} {
    animation: ${rotation} 5s linear infinite;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-right: 5vw;
  }
`;
