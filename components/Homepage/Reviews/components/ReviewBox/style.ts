import themeGet from "@styled-system/theme-get";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { theme } from "../../../../../styles/theme";

export const ReviewBoxWrapper = styled.div`
  width: 1366px;
  min-height: 270px;
  display: flex;
  justify-content: space-between;

  .right_btn {
    justify-content: flex-end;
  }

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 90%;
    min-height: fit-content;
    padding-bottom: 53px;
  }
`;

export const CarouselButtonWrapper = styled.div`
  width: 269px;
  display: flex;
  align-items: flex-end;
`;
export const CarouselButtonsContainer = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
  }
`;
export const CarouselReviewWrapper = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    height: fit-content;
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

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
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
