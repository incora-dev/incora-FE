import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IProjectOverviewItemWrapper {
  isLeft: boolean;
}

interface IImageWrap {
  index: number;
}

const paddingRight = (index: number) => {
  switch (index) {
    case 0:
      return "129px";

    case 1:
      return "0";

    case 3:
      return "0";

    default:
      return "129px";
  }
};

export const ProjectOverviewItemWrapper = styled.div`
  width: 1226px;
  height: 402px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "row" : "row-reverse"};
  padding-right: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "129px" : "0"};
  margin-bottom: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "120px" : "150px"};
  padding-left: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "0" : "110px"};

    @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
      width: 100%;
      height: fit-content;
      padding-right: 0;
      padding-left: 0;
      column-gap: 30px;
    }
`;

export const ImageWrap = styled.div`
  width: 564px;
  height: 350px;
  padding-top: ${({ index }: IImageWrap) => (index === 2 ? "38px" : "10px")};
  position: relative;
`;

export const ImageBackground = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${themeGet("colors.black")};
  border-top-left-radius: 50px;
  border-bottom-right-radius: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "0" : "50px"};
  background: ${themeGet("colors.black")};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-top-left-radius: 20px;
  }
`;

export const TextWrap = styled.div`
  width: 439px;
  padding-top: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "5px" : "70px"};

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: calc(100% - 600px);
    padding-left: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "0" : "25px"};
    padding-right: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "25px" : "0"};
    padding-top: ${({ isLeft }: IProjectOverviewItemWrapper) =>
    isLeft ? "5px" : "50px"};
  }

  > h2 {
    font-weight: 800;
    font-size: var(--fs-28);
    line-height: 42px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-bottom: 26px;
  }

  > p {
    width: 100%;
    font-size: var(--fs-14);
    line-height: 30px;
    letter-spacing: 0.1em;
    color: ${themeGet("colors.font2")};

    > ul {
      padding-left: 24px;
    }
  }
`;

export const DecorationWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  > svg {
    position: absolute;
  }

  .decoration1 {
    z-index: 0;
    top: -65px;
    left: -74px;
  }

  .black_semicircle {
    z-index: 2;
    bottom: -90px;
    left: -65px;
  }

  .transparent {
    z-index: 0;
    right: 35px;
    bottom: -70px;
  }

  .transparent_semicircle {
    z-index: 0;
    right: -45px;
    bottom: -45px;

    @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
      right: 0;
      bottom: -70px;
    }
  }

  .dots1_wrap {
    position: absolute;
    z-index: 2;
  }

  .decoration2 {
    z-index: 0;
    left: 50px;
    top: -35px;
  }

  .decoration_black {
    z-index: 2;
    top: -190px;
    left: -70px;
  }

  .decoration_semicircle {
    z-index: 0;
    bottom: -160px;
    left: -70px;
  }
`;
