import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Cover = styled.header`
  background-color: #18181A;
`

export const Container = styled.div`
  height: calc(100vh - 104px);
  max-width: 1166px;

  position: relative;
  margin: 0 auto;

  text-align: left;

  --line-height: 127px;
  @media (max-width: ${theme.breakpoints.mobile}) {
    --line-height: 80px;
  }
`

export const Div = styled.div`
  margin: 0 100px;

  text-align: left;
`

export const VideoContainer = styled.video`
  position: relative;
  width: 100%;
  height: 50%;
`

export const Titles = styled.div`
  padding-top: 11vh;
  margin-left: -47px;
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: -80px;
    padding-top: 3vh;
  }
`

export const Title1 = styled.h1`
  font-size: var(--fs-120);
  font-weight: 900;
  line-height: var(--line-height);
  letter-spacing: 0.05em;
`

export const Title2 = styled.h1`
  margin-left: 52.5px;

  font-size: var(--fs-120);
  font-weight: 900;
  line-height: var(--line-height);
  letter-spacing: 0.05em;
`

export const Title3 = styled.h1`
  position: relative;
  z-index: 1;
  margin-left: 237.5px;

  font-size: var(--fs-120);
  font-weight: 900;
  line-height: var(--line-height);
  letter-spacing: 0.05em;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: 105.5px;
  }
`

export const Title4 = styled.h1`
  position: absolute;
  top: 10.5px;
  left: 5px;
  margin-left: 240px;

  font-size: var(--fs-120);
  font-weight: 900;
  line-height: var(--line-height);
  letter-spacing: 0.05em;

  -webkit-text-stroke: 1px #fec506;
  color: rgba(0,0,0,0);

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: 108px;
  }
`

export const TitleContainer = styled.div`
  position: relative;
`;

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: 96px;
  left: -105px;

  width: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  transform: rotate(-90deg);
`;

export const ScrollText = styled.p`
  font-size: var(--fs-12);
  line-height: 18px;

  font-weight: 700;
  text-align: center;
  letter-spacing: 0.03em;

  color: #fff;
`;

export const Line = styled.div`
  width: 158px;
  margin-right: 17px;

  border: 1px solid #FEC506;
`;
