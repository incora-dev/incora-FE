import styled from "styled-components";

interface IColors {
  bgColor?: string;
};

export const MenuBlock = styled.div`
  min-width: 307px;
  position: relative;
  top: 9px;
  left: -30px;
  display: flex;
  flex-direction: column;
  row-gap: 13px;
`;

export const MenuLabel = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.05em;
  border: none;
  background: ${({ bgColor }: IColors) => bgColor || 'none' };
  transition: all 0.3s ease-in-out;
`;