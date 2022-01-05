import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IContainer {
  backgroundColor?: string;
}

const color = theme.colors.black;

export const Container = styled.div`
  height: 270px;

  background-color: ${({ backgroundColor = color }: IContainer) => backgroundColor};
`;

export const Position = styled.div`
  width: 1006px;
  margin: 0 auto;
  display: flex;
  padding-top: 40px;
  justify-content: space-between;
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
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
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const H4 = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #9CA3A7;

  opacity: 0.6;
`;

export const Address = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #fff;
`;

export const Country = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;

  letter-spacing: 0.1em;
  text-transform: capitalize;

  color: #9CA3A7;
`;

export const Offices = styled.div`
  display: flex;
  flex-direction: column;
  
  row-gap: 12px;
`;

export const PagesBlock = styled.div`
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
`;

export const FollowUsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
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
  
  margin-bottom: 36px;
`;

