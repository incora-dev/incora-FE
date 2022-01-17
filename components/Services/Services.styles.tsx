import styled, {keyframes} from "styled-components";

interface IAnimation {
  animation: boolean;
}

export const Div = styled.div`
  position: relative;
  height: calc(565px - 104px);
  
  overflow: hidden;
  
  svg {
    position: absolute;
    bottom: -5px;
    right: 0;
  }
`

export const Container = styled.div`
  max-width: 1006px;
  margin: auto;
`

export const TextBlock = styled.div`
  padding-top: 116px;
  
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const H1 = styled.h1`
  max-width: 560px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 96px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000000;
`

export const Strong = styled.strong`
  max-width: 560px;
  
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  /* or 214% */

  letter-spacing: 0.1em;

  color: #454A4D;
`

export const PositionDots = styled.span`
  position: absolute;
  bottom: 117px;
  right: 0;
`
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
`

export const PositionLoaderBagelTrimmed = styled.div`
  position: absolute;
  bottom: 300px;
  right: 299px;

  svg {
    opacity: ${({ animation }: IAnimation) => {
      if (animation) {
        return '1';
      } else {
        return '0';
      }
    }};

    transition: all 1s ease-in-out;
    transform: rotate(-180deg);

    animation: ${rotation} 0.5s linear;
    path {
      fill: ${({color}) => color};
    }
  }
`
