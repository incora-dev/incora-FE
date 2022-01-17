import styled from "styled-components";

export const Div = styled.div`
  margin-top: -104px;
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
`;

export const TextBlock = styled.div`
  padding: 117px 0 120px 0;

  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 523px;
  
  display: flex;
  flex-direction: column;
  row-gap: 60px;
`;

export const ContentWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const H1 = styled.h1`
  display: block;

  max-width: 396px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 96px;
  letter-spacing: 0.05em;

  color: #000000;
`;

export const Sphere = styled.div`
  position: absolute;
  z-index: -1;
  top: 3px;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  background: linear-gradient(132.16deg, #FEC506 14.9%, rgba(254, 197, 6, 0.2) 85.57%);
`;

export const H2 = styled.h2`
  margin-top: 11px;
  width: 493px;

  align-self: flex-end;
  
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 23px;
  line-height: 34px;

  letter-spacing: 0.05em;

  color: #000000;
`;

export const Text = styled.p`
  max-width: 493px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  /* or 214% */

  letter-spacing: 0.1em;

  color: #454A4D;
`;
