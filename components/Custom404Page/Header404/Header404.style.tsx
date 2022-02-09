import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  overflow: hidden;
  height: calc(100vh - 374px);

  background-color: ${themeGet("colors.black")};

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    height: calc(100vh - 374px);
    min-height: 500px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    height: calc(100vh - 290px);
    min-height: 500px;
    width: 100vh;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    height: auto;
  }
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 181px 0 237px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 181px 25px 237px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
    padding: 70px 15px 99px;
  }
`;

export const MainBlock = styled.div`
  position: relative;
  right: -11px;

  display: flex;
  flex-direction: column;
  row-gap: 68px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    row-gap: 0;
    right: 0;
  }
`;

export const IconBlock = styled.div`
  width: max-content;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    transform: scale(0.6);
    position: relative;
    left: -97px;
  }
`;

export const TextBlock = styled.div`
  margin-left: 24px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    margin-left: 0;
  }
`;

export const Text = styled.p`
  width: max-content;
  position: relative;
  z-index: 1;

  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-16);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: ${themeGet("colors.white")};

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    font-size: var(--fs-14);
  }

  span {
    cursor: pointer;
  }

  &:before {
    position: absolute;
    bottom: 7px;
    right: -6px;

    width: 79px;
    height: 10px;

    z-index: -1;

    content: "";
    background-color: ${themeGet("colors.yellow")};
  }

  &:after {
    position: absolute;
    bottom: 7px;
    right: -6px;

    z-index: -1;

    width: 0;
    height: 10px;

    content: "";

    background-color: ${themeGet("colors.yellow5")};

    transition: width ${themeGet("transition.button")};

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      right: -5px;
      width: 73px;
      height: 6px;
    }
  }

  &:hover :after {
    width: 79px;
  }
`;
