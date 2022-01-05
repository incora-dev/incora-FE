import styled from "styled-components";

export  const  Block = styled.div`
  height: 724px;
`;

export  const  Container = styled.div`
  position: relative;

  width: max-content;
  
  display: flex;
  column-gap: 242px;
  
  margin: 120px auto auto;
`;

export  const  PositionLoading = styled.div`
  position: absolute;
  top: 0;
  right: -90px;
  
  svg {
    transform: rotate(-45deg);
    
    path {
      fill: #000;
    }
  }
`;

export  const  Titles = styled.div`
  margin-bottom: 50px;
`;

export  const  H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 96px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #000;
`;

export  const  H4 = styled.h4`
  font-family: Poppins;
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
