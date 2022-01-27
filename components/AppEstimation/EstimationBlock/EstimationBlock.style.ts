import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Button = styled.div`
  background-color: ${themeGet("colors.black")};
  color: ${themeGet("colors.white")};
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: calc(1em / 100 * 3);
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
`;

export const Content = styled.div`
  margin-top: 25px;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: calc(1em / 100 * 3);
  color: ${themeGet("colors.grey2")};
  text-transform: capitalize;
`;

export const TimeBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 13.5px 0;
`;

export const TimeValue = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
`;

export const Title = styled.div`
  font-size: 21px;
  font-weight: 800;
  line-height: 31.5px;
  letter-spacing: calc(1em / 20);
  margin-bottom: 17.5px;
`;
