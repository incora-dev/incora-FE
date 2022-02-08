import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const ClientsFeedbackWrapper = styled.div`
  width: 100%;
  background-color: ${themeGet("colors.black")};
  height: 577px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 93px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding-top: 40px;
    height: fit-content;
    padding-bottom: 70px;
  }
`;

export const HeadingWrap = styled.div`
  width: 1006px;
  margin-bottom: 79px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: 100%;
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-bottom: 45px;
    padding: 0 15px;
  }

  h2 {
    font-weight: 800;
    font-size: var(--fs-36);
    line-height: 54px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 40px;
}
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${themeGet("colors.white")};
  }
`;

export const FeedbackWrap = styled.div`
  width: 612px;
  position: relative;
  left: 25px;

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    width: 100%;
    left: 0;
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 15px;
  }

  > svg {
    position: absolute;
    top: -15px;
    left: -50px;

    @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
      left: 25px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      left: 5px;
    }
  }

  > p {
    font-size: var(--fs-14);
    line-height: 30px;
    letter-spacing: 0.1em;
    color: ${themeGet("colors.font1")};
    margin-bottom: 31px;

    @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
      padding-left: 50px;
    }

    @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
      padding-left: 30px;
      margin-top: 3px;
      line-height: 27px;
    }
  }
`;

export const ClientInfoWrap = styled.div`
  display: flex;
  column-gap: 20px;

  img {
    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      width: 100px !important;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h3 {
      font-weight: 600;
      font-size: var(--fs-14);
      line-height: 22px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${themeGet("colors.white")};
    }

    > span {
      font-size: var(--fs-12);
      line-height: 30px;
      letter-spacing: 0.1em;
      color: ${themeGet("colors.font1")};

      @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
        line-height: 24px;
      }

    }
  }
`;
