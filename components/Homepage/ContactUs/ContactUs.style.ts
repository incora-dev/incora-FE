import styled from "styled-components";

export  const  Block = styled.div`
  overflow: hidden;
`;

export  const  Container = styled.div`
  position: relative;

  max-width: 1006px;
  
  display: flex;
  column-gap: 242px;
  
  margin: 0 auto;
  padding: 85px 0 122px;
`;

export  const  PositionLoading = styled.div`
  position: absolute;
  top: 101px;
  right: -114px;
  
  svg {
    transform: rotate(-45deg);
    
    path {
      fill: #000;
    }
  }
`;

export  const  Titles = styled.div`
  margin-bottom: 38px;
`;

export  const  H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 96px;

  letter-spacing: 0.05em;
  white-space: nowrap;
  text-transform: capitalize;

  color: #000;
`;

export  const  H4 = styled.h4`
  margin-top: -4px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  letter-spacing: 0.05em;

  color: #000000;
`;

export  const  Form = styled.form`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  letter-spacing: 0.05em;

  color: #000000;
`;
