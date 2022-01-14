import styled from "styled-components";

interface IStacksBlock {
  columns: number;
}

export const Div = styled.div`
  position: relative;
  height: max-content;

  overflow: hidden;
`

export const Container = styled.div`
  max-width: 1006px;
  margin: 120px auto auto;
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
  grid-template-columns: ${({ columns }: IStacksBlock) => `repeat(${columns}, 1fr)`};
  grid-row-gap: 35px;
`

export const LogoAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;

  justify-content: center;
  
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
  margin-top: 62px;
  margin-bottom: 155px;

  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const Button = styled.button`
  padding: 8px 30px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.05em;

  color: #000000;
  background: none;
  
  border: 1px solid #EFEFEF;
  
  &:focus {
    background: #FEC602;
    border: 1px solid #FEC602;
  }
`

export const ButtonsBlock = styled.div`
  display: flex;
  column-gap: 20px;

  box-sizing: border-box;
`

export const DotsPosition = styled.div`
  position: absolute;
  bottom: 100px;
  right: 150px;
`
