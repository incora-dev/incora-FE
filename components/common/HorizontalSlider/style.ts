import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface ISlider {
  maxWidth?: number;
};

export const AbsoluteRect = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  border: 1px solid ${themeGet("colors.yellow2")};
  height: 100%;
`;

export const Slider = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  overflow-y: hidden;
  width: 100%;
  height: 700px;
  background: ${themeGet("colors.backgroundBlack")};

  @media only screen and (min-width: ${themeGet('breakpoints.desk')}) {
    max-width: ${({ maxWidth }: ISlider) => maxWidth ? `calc((100vw - ${maxWidth}px) / 2 + ${maxWidth}px + 100px)` : '1006px'};
    margin-left: ${({ maxWidth }: ISlider) => maxWidth ? `calc((100vw - ${maxWidth}px) / 2 - 100px)` : 'auto'};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    height: auto;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
  }
`;

export const Slide = styled.div`
  display: inline-block;
  width: 74vw;
  position: relative;
  padding: 177px 20px 170px 93px;
  transform: scale(0.85);
  -webkit-transition-duration: .5s;
  -moz-transition-duration: .5s;
  -o-transition-duration: .5s;
  transition-duration: .5s;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;

  @media only screen and (min-width: ${themeGet('breakpoints.desk')}) {
    max-width: 1008px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 70px 20px 40px 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 85vw;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    width: 100vw;
    padding-bottom: 0;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding: 50px 15px 35px 15px;
  }

  :nth-child(1) {
    transform: scale(1);
  }

  .image {
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: flex;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 697px;
  width: 100%;
  padding-right: 40px;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  color: ${themeGet("colors.white")};
  text-transform: uppercase;
  font-size: 26px;
  line-height: 39px;
  font-weight: 800;
  letter-spacing: calc(1em / 20);
  max-width: 200px;
  white-space: break-spaces;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: var(--fs-24);
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    font-size: var(--fs-20);
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    max-width: 100%;
  }
`;

export const ArrowButton = styled.button`
  height: 20px;
  background: transparent;
  border: 0;
  margin-top: 31px;
  cursor: pointer;

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    margin-top: 20px;
  }
`;

export const Controls = styled.div`
	display: flex;
	left: 500px;
	align-items: center;
  margin-top: 30px;
  padding-left: 5px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-top: 0;
  }
`;

export const Line = styled.div`
	width: 50px;
	height: 1px;
	background: ${themeGet("colors.white")};
	margin: 0 5px;
`;

export const ControlsText = styled.div`
	font-size: 20px;
	font-weight: 800;
	line-height: 30px;
	letter-spacing: calc(1em / 20);
	color: ${themeGet("colors.white")};
`;

export const ImageBlock = styled.div`
  position: relative;
  width: 100%;
  max-height: 377px;
`;

export const RightBlock = styled.div`
  display: flex;
  padding-top: 10%;
  padding-bottom: 7.7%;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding-top: 20px;
    padding-bottom: 0;
  }
  
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 26px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding-left: 5px;
  }
`;
