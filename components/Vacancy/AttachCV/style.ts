import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const AttachCvWrapper = styled.div`
  width: 297px;
  position: relative;
  top: -13px;

  h3 {
    font-weight: 800;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: ${themeGet("letterSpacing.span")};
    margin-bottom: 20px;
  }

  .personal {
    margin-bottom: 11px;
  }
`;

export const DragAndDropBox = styled.div`
  width: 297px;
  height: 103px;
  border: 1px solid ${themeGet("colors.grey2")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  }

  .clickable {
    color: ${themeGet("colors.yellow")};
    margin-right: 5px;
  }

  .non_clickable {
    color: ${themeGet("colors.black")};
  }

  p {
    width: 167.8px;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    color: ${themeGet("colors.font1")};
  }
`;
