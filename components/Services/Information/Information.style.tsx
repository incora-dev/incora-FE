import styled from "styled-components";

interface IColors {
  bgColor: string;
}

interface ISelect {
  select: number;
}

export const Div = styled.div`
  height: 824px;
  
  background-color: ${({ bgColor }: IColors) => bgColor};
`;

export const Container = styled.div`
  position: relative;

  max-width: 1006px;
  padding-top: 120px;
  margin: auto;
  
  display: flex;
  column-gap: 20px;
`;

export const MenuBlock = styled.div`
  min-width: 307px;
  position: relative;
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
  row-gap: 15px;
`;

export const H2 = styled.h2`
  width: 490px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: 0.05em;

  color: #FFFFFF;
`;

export const H3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #FFFFFF;
`;

export const P = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #BCBCC0;
`;

export const Text = styled.p`
  max-width: 382px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;

  letter-spacing: 0.1em;

  color: #BCBCC0;
`;

export const MenuLabel = styled.button`
  padding: 8px 30px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  
  text-align: left;

  letter-spacing: 0.05em;
  border: none;

  color: #FFFFFF;
  background: ${({bgColor}: IColors) => {
    if (bgColor === '#FEC602') {
      return '#FEC602';
    } else {
      return 'none';
    }
  }};

  transition: all 0.3s ease-in-out;

  :focus {
    background-color: #FEC602;

    color: black;
  }
`;

export const PositionButtonWithArrow = styled.div`
  margin-top: 22px;
`;

export const Circle = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;

  width: 54px;
  height: 54px;

  border-radius: 50%;
  background: #FEC506;
`;

export const CircleBlock = styled.div`
  position: relative;
`;

export const PositionText = styled.div`
  position: absolute;
  top: 0;
`;

export const PositionCircleBlock = styled.div`
  position: absolute;
  bottom: 12px;
  right: -40px;
`;
