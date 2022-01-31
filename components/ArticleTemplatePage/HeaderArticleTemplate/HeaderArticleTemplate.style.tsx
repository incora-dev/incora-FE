import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

export const Div = styled.div`
  position: relative;
  top: -104px;

  overflow: hidden;

  background-color: ${themeGet("colors.black")};
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1006px;
  height: max-content;
`;

export const InfoBlock = styled.div`
  position: relative;
  z-index: 1;

  padding: 147px 0 78px;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 120px 15px 45px;
    flex-direction: column;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Category = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: ${themeGet("colors.yellow")};
`;

export const Title = styled.h1`
  max-width: 792px;

  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;
@media only screen and (max-width: ${theme.breakpoints.mobile}) {
  line-height: 40px;
}
 @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
     line-height: 40px;
  }

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: ${themeGet("colors.white")};

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    font-size: var(--fs-24);
    line-height: 36px;
  }
`;

export const DatePublishedAndViews = styled.p`
  margin-top: 4px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: ${themeGet("colors.white")};
`;

export const ArticleOwnerBlock = styled.div`
  position: relative;
  top: 31px;
  right: -80px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: flex-end;

  text-align: right;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    top: 0;
    right: 0;
    left: 0;
    align-items: flex-start;
    text-align: LEFT;
    flex-direction: initial;
    column-gap: 16px;
    margin-top: 10px;
  }
`;

export const OwnerPhoto = styled.div`
  width: 60px;
  height: 60px;

  img {
    border-radius: 100px;
  }
`;

export const ArticleOwnerTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding-top: 13px;
  }
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: ${themeGet("colors.white")};
`;

export const Role = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: ${themeGet("colors.font2")};
`;
