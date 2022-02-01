import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const MemberWrapper = styled.div`
  height: 295px;
  width: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: auto;
    width: 150px;
    row-gap: 10px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
    width: 140px;
  }
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
    font-size: var(--fs-14);
  }

  span {
    color: ${themeGet("colors.font1")};
    text-transform: capitalize;
    font-size: var(--fs-13);
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
