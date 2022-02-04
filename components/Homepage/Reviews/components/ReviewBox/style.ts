import themeGet from "@styled-system/theme-get";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { theme } from "../../../../../styles/theme";

export const ReviewBoxWrapper = styled.div`
  width: max-content;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  .right_btn {
    justify-content: flex-end;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 90%;
    min-height: fit-content;
  }
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 90%;
    min-height: fit-content;
  }
`;

export const CarouselButtonWrapper = styled.div`
  width: 269px;
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 100%;
  }
`;
export const CarouselButtonsContainer = styled.div`
  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    display: flex;
    position: relative;
    left: 7vw;
  }
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    display: flex;
    position: relative;
    left: 7vw;
  }
`;
export const CarouselReviewWrapper = styled.div`
  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    height: fit-content;
    position: relative;
    top: -70px;
    gap: 10px;
  }
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    height: fit-content;
    position: relative;
    top: -60px;
    gap: 10px;
  }
`;

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const Ellipse = styled.div`
  border-radius: 100px;
  width: 100px;
  height: 100px;
  background-color: ${themeGet("colors.white")};
  display: flex;
  justify-content: center;
  align-items: center;

  .right_arrow {
    transform: rotate(180deg);
  }

  svg {
    path {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: ${dash} 5s linear forwards;
    }
  }
`;

export const ReviewContentWrap = styled.div`
  width: 816.99px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 90%;
  }
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 90%;
  }
`;

export const QuoteWrap = styled.div`
  display: flex;
  width: 576px;

  > div {
    > svg {
      position: relative;
      right: 6px;
    }
  }
`;

export const QuoteText = styled.p`
  padding-top: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;
  color: ${themeGet("colors.font1")};
`;

export const AvatarWrap = styled.div`
  width: 221px;
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
`;

export const Photo = styled(Image)`
  width: 53px;
  height: 53px;
`;

export const NameWrap = styled.div`
  padding-top: 10px;

  color: ${themeGet("colors.white")};
  font-size: var(--fs-13);
  letter-spacing: 1px;

  h3 {
    text-transform: uppercase;
    font-weight: 600;
  }

  span {
    color: ${themeGet("colors.font1")};
  }
  height: 269px;
`;
