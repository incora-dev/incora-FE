import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IContainer {
  backgroundColor?: string;
}

const color = theme.colors.black;

export const Container = styled.footer`
  position: relative;
  z-index: 5;

  height: 270px;

  background-color: ${({ backgroundColor = color }: IContainer) =>
    backgroundColor};

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    height: fit-content;
  }
`;

export const Position = styled.div`
  width: 1006px;
  margin: 0 auto;
  display: flex;
  padding-top: 41px;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 40px 25px;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;

  svg {
    cursor: pointer;
  }
`;

export const PoliciesBlock = styled.div`
  padding-top: 45px;

  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding-top: 0;
  }
`;

export const PolicyLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: var(--fs-11);
  line-height: 18px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  cursor: pointer;

  color: ${themeGet("colors.white")};

  &:hover {
    color: ${themeGet("colors.yellow")};
  }
`;

export const Copyright = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: var(--fs-11);
  line-height: 18px;

  letter-spacing: 0.1em;

  color: #ffffff;
  text-transform: capitalize;

  opacity: 0.5;
`;

export const OfficesBlock = styled.div`
  position: relative;
  left: -16px;

  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    display: none;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    display: block;
    left: 0;
  }
`;

export const H4 = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-12);
  line-height: 18px;

  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #9ca3a7;

  opacity: 0.6;
`;

export const Address = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: var(--fs-13);
  line-height: 24px;

  letter-spacing: 0.06em;
  text-transform: capitalize;

  color: #fff;
`;

export const Country = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-12);
  line-height: 24px;

  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: #9ca3a7;
`;

export const Offices = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 12px;
`;

export const PagesBlock = styled.div`
  position: relative;
  left: -6px;

  display: flex;
  flex-direction: column;
  row-gap: 18px;

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    left: 0;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 11px;
`;

export const Page = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-12);
  line-height: 18px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: ${themeGet("colors.white")};

  cursor: pointer;

  &:hover {
    color: ${themeGet("colors.yellow")};
  }
`;

export const FollowUsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;

  a {
    cursor: pointer;
  }

  .clutch-widget {
    width: 200px;
  }
`;

export const FollowUs = styled.div`
  display: flex;
  column-gap: 12px;

  margin-bottom: 18px;

  svg {
    circle {
      fill: ${themeGet("colors.white")};
    }

    &:hover circle {
      fill: ${themeGet("colors.yellow")};
    }
  }
`;
