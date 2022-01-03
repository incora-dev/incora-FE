import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import Image from "next/image";

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
`;
