import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IContainer {
  backgroundColor?: string;
}

const color = theme.colors.black;

export const Container = styled.footer`
  height: 270px;

  background-color: ${({ backgroundColor = color }: IContainer) => backgroundColor};
`;

export const Position = styled.div`
  width: 1006px;
  margin: 0 auto;
  display: flex;
  padding-top: 41px;
  justify-content: space-between;
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const PoliciesBlock = styled.div`
  padding-top: 45px;

  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const PolicyLabel = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 18px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: #FFFFFF;
`;

export const Copyright = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 18px;

  letter-spacing: 0.1em;

  color: #FFFFFF;
  text-transform: capitalize;

  opacity: 0.5;
`;

export const OfficesBlock = styled.div`
  position: relative;
  left: -16px;

  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const H4 = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #9CA3A7;

  opacity: 0.6;
`;

export const Address = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;

  letter-spacing: 0.06em;
  text-transform: capitalize;

  color: #fff;
`;

export const Country = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;

  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: #9CA3A7;
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
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  
  row-gap: 11px;
`;

export const Page = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: #FFFFFF;
  
  cursor: pointer;
`;

export const FollowUsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  
  a {
    cursor: pointer;
  }
`;

export const A = styled.a`
  position: relative;

  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 50%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`;

export const FollowUs = styled.div`
  display: flex;
  column-gap: 12px;
  
  margin-bottom: 18px;
`;

