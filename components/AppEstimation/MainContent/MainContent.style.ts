import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  max-width: 1006px;
  margin: auto;
  padding: 119px 0 139px;
`;

export const Content = styled.div`
  display: flex;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 20px;
`;

export const RightColumn = styled.div`
  position: sticky;
  min-width: 300px;
  height: 300px;
  padding-top: 5px;
  top: 155px;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: ${themeGet("colors.grey2")};
  text-transform: capitalize;
`;

export const TimeBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TimeValue = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 54px;
 @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
     line-height: 40px;
  }
  letter-spacing: 1.8px;
  margin-bottom: 25px;
`;
