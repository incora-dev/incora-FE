import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IComponent {
  bgColor: string;
}

export const Component = styled.div`
  height: 623px;
  width: 100%;
  padding-top: 100px;

  background-color: ${({ bgColor }: IComponent) => bgColor};

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
    padding-top: 50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: fit-content;
    padding-top: 40px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding-left: 180px;
  padding-right: 80px;
  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 0 25px;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 15px;
  }
`;

export const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    margin-bottom: 0;
  }

  svg {
    margin: auto 0;

    cursor: pointer;

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      position: relative;
      top: 2px;
    }
  }
`;

export const H2 = styled.h2`
  display: block;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-26);
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: ${({ color }) => color};

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    font-size: var(--fs-23);
  }
`;

export const NewsWrap = styled.div`
  width: 100%;
  margin-top: 58px;

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    margin-top: 35px;
  }
`;
