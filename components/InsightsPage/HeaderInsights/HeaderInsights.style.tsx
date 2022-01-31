import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  position: relative;

  overflow: hidden;
`;

export const PositionLoader = styled.div`
  position: absolute;
  right: 0;
  top: 72px;

  svg  {
    transform: rotate(90deg);
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    top: 0;
  }
`;

export const PositionLoaderSemiCircle = styled.div`
  position: absolute;
  right: 104px;
  top: 117px;

  svg  {
    path {
      fill: ${themeGet("colors.black")};
    }
  }
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    right: -18px;
    top: 110px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 74px 0 10px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 40px 15px 10px;
  }
`;
 
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const H1 = styled.h1`
  max-width: 749px;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 81px;

  letter-spacing: 0.05em; 
  text-transform: capitalize;
  
  color: ${themeGet("colors.black")};

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    font-size: var(--fs-36);
    z-index: 1;
    line-height: 41px;
  }
`;

export const Text = styled.p`
  max-width: 788px;

  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-21);
  line-height: 32px;

  letter-spacing: 0.1em;

  color: ${themeGet("colors.black")};

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    font-size: var(--fs-16);
    line-height: 26px;
    width: 80%;
  }
`;

export const SearchBlock = styled.div`
  position: relative;
  margin-top: 41px;
  
  svg {
    position: absolute;
    top: 50%;
    left: 27px;
    
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    margin-top: 20px;

    svg {
      left: 10px;
    }
  }
`;

export const PositionTags = styled.div`
  margin-top: 25px;
`;

export const Search = styled.input`
  margin-top: 30px;
  padding: 15px 0px 15px 49px;

  width: 100%;
  height: 48px;

  display: flex;
  column-gap: 15px;
  
  border: none;
  
  background-color: ${themeGet("colors.background5")};

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: var(--fs-12);
    line-height: 18px;

    letter-spacing: 0.03em;

    color: ${themeGet("colors.grey2")};
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding-left: 35px;
    margin-top: 20px;
  }
`;
