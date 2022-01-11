import themeGet from "@styled-system/theme-get";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const ReviewBoxWrapper = styled.div`
  width: 1366px;
  min-height: 270px;
  display: flex;
  justify-content: space-between;

  .right_btn {
    justify-content: flex-end;
  }
`;

export const CarouselButtonWrapper = styled.div`
  width: 269px;
  display: flex;
  align-items: flex-end;
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
  font-size: 14px;
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
  font-size: 13px;
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
