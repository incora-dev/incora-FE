import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IImageWrap {
  isAnimate: boolean;
}

export const NextProjectWrapper = styled.div`
  width: 100%;
  height: 199px;
  background-color: ${themeGet("colors.black")};
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    height: 160px;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: fit-content;
  }
`;

export const NextProjectButton = styled.div`
  height: 100%;
  width: 543px;
  background-color: ${themeGet("colors.yellow")};
  border-top-left-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${themeGet("boxShadow.initial")};
  transition: ease-out 0.4s;
  padding-right: 50px;

  &:hover {
    box-shadow: inset 543px 0 0 0 #e5b100ff;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 500px;
    padding-right: 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    border-top-left-radius: 30px;
  }
`;

export const ContentWrap = styled.div`
  width: 391px;
  height: 108.37px;
  display: flex;
  align-items: center;

  svg {
    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
     display: none;
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 100%;
    padding: 0 25px 0 40px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding: 20px 15px 20px 20px;
    height: fit-content;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 141px;
  height: 108.17px;
  overflow: hidden;
  margin-right: 20px;

  svg {
    z-index: 1;
    position: absolute;
    transition: ease-out 0.4s;
  }

  .one {
    top: ${({ isAnimate }: IImageWrap) => (isAnimate ? "-35px" : "0")};
  }

  .two {
    right: ${({ isAnimate }: IImageWrap) => (isAnimate ? "-40px" : "0")};
  }

  .three {
    bottom: ${({ isAnimate }: IImageWrap) => (isAnimate ? "-65px" : "1px")};
  }
`;

export const TextWrap = styled.div`
  margin-right: 60px;

  svg {
    display: none;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 108.17px;
    flex: 1;

    svg {
      display: flex;
      align-self: flex-end;
    }
  }

  > div > span {
    font-weight: 800;
    font-size: var(--fs-12);
    line-height: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${themeGet("colors.white")};
  }

  > div > h3 {
    font-weight: 800;
    font-size: var(--fs-21);
    line-height: 31px;
    letter-spacing: 0.05em;

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      font-size: var(--fs-18);
      line-height: 25px;
    }
  }
`;
