import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const OurPhotosWrap = styled.div`
  width: 100%;
  height: 1221px;
  position: relative;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  right: 0;
  top: -278px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    position: relative;
    top: 0;
  }
`;

export const PhotosWrap = styled.div`
  position: absolute;
  top: 515px;
  width: 1004px;
  display: flex;
  flex-flow: wrap;
  gap: 56px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    position: relative;
    width: 100%;
    top: 0;
    margin-top: 30px;
    gap: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
    padding: 0 15px;
    margin-top: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: calc((100% - 30px) / 2);
  margin-bottom: 30px;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 100%;
    margin: 15px;
  }
  
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
    max-height: 300px;
    margin: 0;
    margin-bottom: 15px;
  }

  :nth-child(2n + 1) {
    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      margin-right: 30px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
      margin-right: 15px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      margin-right: 0;
    }
  }
`
