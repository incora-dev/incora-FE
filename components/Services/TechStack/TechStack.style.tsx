import styled, {keyframes} from "styled-components";

interface IStacksBlock {
  columns: number;
}

interface IAnimation {
  animation: boolean;
}

export const Div = styled.div`
  height: max-content;

  overflow: hidden;
`

export const Container = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 117px auto auto;

  display: flex;
  flex-direction: column;
  row-gap: 22px;
`

export const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 96px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000000;
`

export const H3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;

  letter-spacing: 0.05em;

  color: #000000;
`

export const StackText = styled.p`
  max-width: 495px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #454A4D;
`

export const StacksContainer = styled.div`
  width: 403px;
  height: max-content;
  
  padding: 50px;
  background: #FBFBFB;
`

export const StacksBlock = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }: IStacksBlock) => `repeat(${columns}, max-content)`};
  grid-row-gap: 35px;
  grid-column-gap: 55px;
`

export const LogoAndTitle = styled.a`
  display: flex;
  flex-direction: column;
  row-gap: 11px;

  justify-content: center;

  cursor: pointer;

  svg {
    align-self: center;
  }
`

export const StackTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000000;
`

export const InfoBlock = styled.div`
  margin-top: 38px;
  margin-bottom: 155px;

  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`

export const DotsPosition = styled.div`
  position: absolute;
  top: -17px;
  right: -115px;
  
  div {
    transform: rotate(60deg);
  }
`

const rotation = keyframes`
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(0);
  }
`

export const LoaderPosition = styled.div`
  position: absolute;
  top: 16px;
  right: -249px;
  
  svg {
    path {
      fill: black;
    }

    opacity: ${({ animation }: IAnimation) => {
      if (animation) {
        return '1';
      } else {
        return '0';
      }
    }};

    animation: ${rotation} 0.5s linear;

    transition: all 0.5s ease-in-out;
  }
`

export const PositionButtonWithArrow = styled.div`
  margin-top: 12px;
`
