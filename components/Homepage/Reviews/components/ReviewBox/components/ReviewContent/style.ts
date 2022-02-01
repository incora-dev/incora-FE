import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "../../../../../../../styles/theme";

export const ReviewContentWrap = styled.div`
  width: 816.99px;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
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

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
  }
`;

export const QuoteText = styled.p`
  max-width: 576px;
  padding-top: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;
  color: ${themeGet("colors.font1")};
`;

export const AvatarWrap = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    justify-content: center;
    >div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export const Photo = styled(Image)`
  width: 53px;
  height: 53px;
`;

export const NameWrap = styled.div`
  margin-top: 6px;
  color: ${themeGet("colors.white")};
  font-size: var(--fs-13);
  letter-spacing: 0.1em;

  h3 {
    text-transform: uppercase;
    font-weight: 600;
  }

  span {
    color: ${themeGet("colors.font1")};
  }
`;
