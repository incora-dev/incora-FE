import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const OurTraditionsWrapper = styled.div`
  width: 100%;

  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 70px 25px 15px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding: 60px 25px 15px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 40px 15px 15px;
  }
`;

export const OurTraditionsTextWrap = styled.div`
  width: 100%;
  height: 421px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: auto;
    margin-bottom: 40px;
  }
`;

export const TextWrap = styled.div`
  height: 330px;
  width: 1002px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: var(--fs-26);
    letter-spacing: ${themeGet("letterSpacing.h1")};
  }
`;

export const Paragraphs = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    column-gap: 20px;
    margin-top: 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-top: 25px;
    flex-direction: column;
  }

  p {
    font-size: var(--fs-14);
    width: 463px;
    line-height: 30px;

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      width: 100%;
      line-height: 27px;
    }
  }
`;

export const PhotosBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  
  overflow: hidden;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    row-gap: 10px;
  }
`;


export const Photos = styled.div`
  display: flex;
  //justify-content: space-between;
  //flex-flow: wrap;
  column-gap: 19px;
  overflow: scroll;

  span {
    @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
      display:none !important;
    }
  }
  span:nth-child(-n+3) {
    @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
      display:inline-block !important;
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    flex-direction: column;
    overflow: auto;
    row-gap: 10px;
    display: flex;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
