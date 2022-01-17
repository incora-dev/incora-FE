import styled from "styled-components";

export const Div = styled.div`
  font-family: Poppins, serif;

  color: #FFFFFF;
  background: #181819;
`

export const Wrapper = styled.div`
  padding-top: 119px;
`

export const H1 = styled.h1`
  max-width: 1006px;
  //padding: 0 13.2vw;
  margin: 0 auto;

  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;

  letter-spacing: 0.05em;
`

export const Content = styled.div`
  max-width: 1166px;
  padding: 63px 0 158px 0;
  margin: 0 auto;
  
  
  position: relative;
  left: 44px;
  
  display: flex;
  column-gap: 100px;
  row-gap: 70px;
  flex-wrap: wrap;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  display: flex;

  svg {
    transform: rotate(195deg);
  }
`

export const Text = styled.p`
  position: relative;
  top: 51px;
  right: 25px;

  max-width: 229px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
`
