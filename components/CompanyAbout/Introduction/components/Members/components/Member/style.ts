import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const MemberWrapper = styled.div`
  height: 295px;
  width: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const MemberInfoWrap = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  h5 {
    color: ${themeGet("colors.white")};
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
  }

  span {
    color: ${themeGet("colors.font1")};
    text-transform: capitalize;
    font-size: 13px;
  }
`;

export const SocialLinks = styled.div`
  svg {
    margin-left: 7px;
    cursor: pointer;

    &:hover {
      circle {
        fill: ${themeGet("colors.yellow")};
      }
    }
  }
`;
