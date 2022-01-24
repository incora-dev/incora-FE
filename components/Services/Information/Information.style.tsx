import styled from "styled-components";

interface IColors {
  bgColor: string;
}

export const Div = styled.div`
  font-family: Poppins, serif;

  overflow: hidden;
  
  background-color: ${({ bgColor }: IColors) => bgColor};
`;

export const Container = styled.div`
  position: relative;

  max-width: 1006px;
  padding: 120px  0 130px 0;
  margin: auto;
  
  display: flex;
  column-gap: 20px;
`;

export const MenuBlock = styled.div`
  min-width: 307px;
  position: relative;
  top: 9px;
  left: -30px;

  display: flex;
  flex-direction: column;
  row-gap: 13px;
`;

export const EstimatedTimeAndOutcomesBlock = styled.div`
  margin-top: 10px;
  padding: 38px 30px;

  display: flex;
  justify-content: space-between;

  background: #212125;
`;

export const Block = styled.div`
  display: flex;
  column-gap: 15px;
`;

export const Package = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const EstimatedTime = styled.div`
  padding: 40px 30px 0;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const TextBlock = styled.div`
  max-width: 679px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const H2 = styled.h2`
  width: 490px;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
  letter-spacing: 0.05em;

  color: #FFFFFF;
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-12);
  line-height: 18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #FFFFFF;
`;

export const P = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #BCBCC0;
`;

export const Text = styled.p`
  max-width: 382px;
  
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-12);
  line-height: 23px;

  letter-spacing: 0.1em;

  color: #BCBCC0;
`;

export const MenuLabel = styled.button`
  //padding: 8px 30px;
  
  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-16);
  line-height: 24px;
  
  text-align: left;

  letter-spacing: 0.05em;
  border: none;

  //color: #FFFFFF;
  background: ${({bgColor}: IColors) => {
    if (bgColor === '#FEC602') {
      return '#FEC602';
    } else {
      return 'none';
    }
  }};

  transition: all 0.3s ease-in-out;

  //:focus {
  //  background-color: #FEC602;
  //
  //  color: black;
  //}
`;

export const PositionButtonWithArrow = styled.div`
  margin-top: 22px;
`;
