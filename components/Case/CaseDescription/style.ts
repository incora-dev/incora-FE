import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CaseDescriptionWrapper = styled.div`
  width: 100%;
  height: 727px;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 1006px;
  padding-top: 79px;
  display: flex;
  justify-content: space-between;
`;

export const TextWrap = styled.div`
  width: 540px;
  height: 737px;

  h2 {
    font-weight: 800;
    font-size: 21px;
    line-height: 31px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 19px;
  }

  p {
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.1em;
    color: ${themeGet("colors.font2")};
  }

  .first {
    margin-bottom: 117px;
  }
`;

export const TagsWrap = styled.div`
  width: 406px;
  height: 367px;
  background-color: ${themeGet("colors.background4")};
  padding-top: 35px;
  padding-left: 30px;
`;

export const TagsCategory = styled.div`
  margin-bottom: 40px;
`;

export const TagsHeading = styled.h3`
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 13px;
`;

export const LocationAndIndustryWrap = styled.div`
  display: flex;
  column-gap: 46px;
`;

export const TagFlexBox = styled.div`
  display: flex;
  width: 280px;
  flex-flow: wrap row;
  gap: 7px;
`;

export const TagBox = styled.div`
  cursor: pointer;
  height: 22px;
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet("colors.font2")};
  box-shadow: ${themeGet("boxShadow.initial")};
  transition: ease-out 0.4s;

  > span {
    font-weight: 600;
    font-size: 10px;
    line-height: 28px;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    color: ${themeGet("colors.white")};
  }

  &:hover {
    background-color: ${themeGet("colors.yellow")};
    box-shadow: ${themeGet("boxShadow.hover")};
  }
`;
