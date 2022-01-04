import styled from "styled-components";

interface IDiv {
  bgColor: string;
}

export const Div = styled.div`
  height: max-content;
  background-color: ${({ bgColor }: IDiv) => bgColor};
`;

export const PositionTitle = styled.div`
  margin-top: 120px;
  margin-bottom: 46px;
`;

export const Block = styled.div`
  max-width: 1006px;

  margin: 0 auto;
`;

export const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #FEC506;
`;

export const H4 = styled.h4`
  z-index: 1;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  letter-spacing: 0.05em;

  color: #fff;

  mix-blend-mode: difference;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 180px;
  align-items: center;
`;

export const SeeMoreWorks = styled.div`
  position: relative;
  
  max-width: 1006px;
  margin: 174px auto 0;

  display: flex;
  flex-direction: column;
  row-gap: 26px;
  
  a {
    z-index: 1;
  }
`;

export const HexagonPosition = styled.div`
  svg {
    position: absolute;
    top: -110px;
    left: -287px;

    z-index: 0;
    
    path {
      fill: #18181A;
    }
  }
`;

export const LoadingPosition = styled.div`
  svg {
    position: absolute;
    top: -120px;
    left: -133px;

    z-index: 1;

    transform: rotate(195deg);
    
    path {
      background: #18181A;
    }
  }
`;

export const DotsPosition = styled.div`
  position: absolute;
  top: -32.5px;
  left: -90px;

  z-index: 1;

  transform: rotate(240deg);
`;
