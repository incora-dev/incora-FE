import styled from "styled-components";

export const Cover = styled.header`
  background-color: #18181A;

  overflow: hidden;
`

export const Container = styled.div`
  max-width: 1166px;

  position: relative;
  margin: 0 auto;

  text-align: left;
`

export const PositionHexagon1 = styled.div`
  position: absolute;

  bottom: -216px;
  right: 134px;
`

export const PositionHexagon2 = styled.div`
  position: absolute;

  bottom: -13px;
  right: 18px;
`

export const PositionHexagon3 = styled.div`
  position: absolute;

  bottom: -216px;
  right: -100px;
`

export const PositionHexagon4 = styled.div`
  position: absolute;

  bottom: 123px;
  right: -216px;
`

export const Div = styled.div`
  margin-left: 50px;
  margin-top: 1px;

  padding: 79px 0 205px;

  text-align: left;
`

export const VideoBlock = styled.div`
  position: relative;
  
  width: 710px;
  height: 380px;
`

export const PositionVideoSVG = styled.div`
  position: absolute;
  
  right: 0;
  top: 0;
  
  width: 710px;
  height: 380px;
`

export const VideoContainer = styled.video`
  position: relative;
  width: 100%;
  height: 50%;
`

export const Titles = styled.div`
  margin-left: -47px;
`

export const Title1 = styled.h1`
  font-size: 120px;
  font-weight: 900;
  line-height: 127px;
  letter-spacing: 0.05em;
`

export const Title2 = styled.h1`
  margin-left: 52.5px;

  font-size: 120px;
  font-weight: 900;
  line-height: 127px;
  letter-spacing: 0.05em;
`

export const Title3 = styled.h1`
  position: relative;
  z-index: 1;
  margin-left: 237.5px;

  font-size: 120px;
  font-weight: 900;
  line-height: 127px;
  letter-spacing: 0.05em;
`

export const Title4 = styled.h1`
  position: absolute;
  top: 10.5px;
  left: 5px;
  margin-left: 240px;

  font-size: 120px;
  font-weight: 900;
  line-height: 127px;
  letter-spacing: 0.05em;

  -webkit-text-stroke: 1px #fec506;
  color: rgba(0,0,0,0);
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
  font-size: 12px;
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
