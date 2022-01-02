import styled from "styled-components";

export const Cooperate = styled.div`
  max-width: 1166px;
  height: 685px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 27px;
`

export const Slider = styled.div`
  display: flex;
  position: relative;
  height: max-content;
  margin-right: 23px;
  margin-top: 23.2vh;
`

export const Number = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 150px;
  line-height: 225px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #18181A;
`

export const PositionNumber = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 20px;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 25px;
`

export const PositionInfo = styled.div`
  position: relative;
  right: ${({ positionRight }) => positionRight};

  margin-top: 6px;
`

export const ElementsPosition = styled.div`
  display: flex;
  position: relative;
  margin-right: 24px;
`

export const PositionScrollSlider = styled.div`
  position: relative;
  top: 37.3vh;
  right: 11px;
`
