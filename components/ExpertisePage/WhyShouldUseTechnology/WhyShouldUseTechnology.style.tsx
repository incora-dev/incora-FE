import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IBackground {
  bgColor: string;
}

interface ITitleColor {
  color: string;
}

export const Div = styled.div`
  margin-top: -104px;

  background-color: ${({ bgColor }: IBackground) => bgColor};
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1006px;
`

export const InfoBlock = styled.div`
  padding-bottom: 120px;
  
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

export const H1 = styled.h1`
  max-width: 681px;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 40px;
}

  letter-spacing: 0.05em;
  
  color: ${({ color }: ITitleColor) => color};
`

export const ArgumentsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const TechnologyWrapper = styled.div`
  max-width: 302px;
  padding: 40px;
  
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  
  background-color: ${themeGet("colors.backgroundBlack2")};
`

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-23);
  line-height: 34px;
  letter-spacing: 0.05em;
  
  color: ${themeGet("colors.yellow2")};
`

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;
  
  color: ${themeGet("colors.font1")};
`
