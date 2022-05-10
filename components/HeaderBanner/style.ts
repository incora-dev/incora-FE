import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

interface IBanner {
  isHidden: boolean
};

export const BannerWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${themeGet("colors.black1")};
  display: flex;
  display: ${({ isHidden }: IBanner) => (isHidden ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    display: none;
  }
`;

export const Emoji = styled.p`
  font-size: var(--fs-24);
  margin-left: 5px;
`

export const Text = styled.p`
  font-family: Poppins;
  color: ${themeGet("colors.white")};
  font-size: var(--fs-18);
  font-weight: 600;
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseBtn = styled.button`
  mix-blend-mode: difference;
  background: black;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  font-size: 20px;
  position: fixed;
  margin: 10px;
  right: 0;
  z-index: 21;
  display: block;
  cursor: pointer;
`;
