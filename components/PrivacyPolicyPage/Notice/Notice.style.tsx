import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IDisplay {
  shouldShowNotice: boolean | null;
}

export const Div = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;

  display: ${({ shouldShowNotice }: IDisplay) => shouldShowNotice ? 'none' : 'block'};
  background-color: #fff;

  a {
    position: relative;

    @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
      font-weight: 600;
      display: inline-block;
      padding-left: 0;
    }
    &:after {
      position: absolute;
      bottom: 5px;
      right: -8px;

      z-index: -1;

      content: '';
      height: 7px;
      width: 94px;
      background-color: #FEC602;

      @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) { 
        bottom: 2px;
        right: 0;
        width: 82px;
        }
      }
    }
  }
  
`;

export const Wrapper = styled.div`
  width: 100vw;
  padding: 16.5px 0;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding: 10px 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 5px 15px;
  }
`;

export const TextBlock = styled.div`
  margin: auto;

  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 37px;
  color: ${themeGet("colors.black")};

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    display: block;
    width: 100%;
  }
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-16);
  line-height: 24px;

  letter-spacing: 0.05em;

  color: #18181A;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    font-size: var(--fs-14);
  }
`;

export const Button = styled.div`
  padding: 23px 61.5px;

  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-14);
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  
  cursor: pointer;

  color: #fff;
  
  background-color: #18181A;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 8px 61.5px;
    margin-top: 3px;
  }
`;

