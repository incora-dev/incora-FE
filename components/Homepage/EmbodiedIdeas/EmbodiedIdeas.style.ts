import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IDiv {
  bgColor: string;
  height?: number;
}

interface IPositionTitle {
  disablePadding?: boolean;
}

export const Content = styled.div`
  max-width: 1366px;
  width: 100%;

  padding: 0 15px 0 188px;
  
  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    padding: 0;
  }
`;

export const Div = styled.div`
  background-color: ${({ bgColor }: IDiv) => bgColor};
  padding: 75px 0 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    max-width: 100%;
    padding: 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    max-width: 100%;
    padding: 0 25px 53px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    padding-bottom: 40px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: ${({ height }: IDiv) => (height ? `${height}px` : "max-content")};
    padding: 0 15px 30px;
  }
`;

export const PositionTitle = styled.div`
  padding-top: ${({ disablePadding }: IPositionTitle) =>
  disablePadding ? "0" : "120px"};
  margin-bottom: 46px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding-top: 70px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const Block = styled.div`
  max-width: 1006px;

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    max-width: 100%;
  }
`;

export const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-26);
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #fec506;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding-left: 0;
    font-size: var(--fs-24);
    line-height: 34px;
  }
`;

export const H4 = styled.h4`
  z-index: 1;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-20);
  line-height: 30px;

  letter-spacing: 0.05em;

  color: #fff;

  mix-blend-mode: difference;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 174px;
  align-items: center;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    row-gap: 53px;
  }
`;

export const SeeMoreWorks = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 374px auto 70px;

  display: flex;
  flex-direction: column;
  row-gap: 26px;

  a {
    z-index: 1;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 100%;
    margin: 100px auto 120px;
    height: fit-content;
    padding-bottom: 30px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding-left: 0;
    margin: 50px 0 75px;
  }
`;

export const HexagonPosition = styled.div`
  position: absolute;
  top: -123px;
  left: -286px;

  z-index: 0;

  svg {
    path {
      fill: #18181a;
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    left: -190px;
    padding-top: 0;
    transform: scale(0.6);
  }  
`;

export const LoadingPosition = styled.div`
  position: absolute;
  top: -114px;
  left: -138px;

  z-index: 1;

  svg {
    transform: rotate(195deg);

    path {
      background: #18181a;
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    left: -10%;
  } 
`;

export const DotsPosition = styled.div`
  position: absolute;
  top: -32.5px;
  left: -90px;

  z-index: 1;

  transform: rotate(240deg);
`;
