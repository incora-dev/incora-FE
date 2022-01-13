import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  height: 712px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const TextWrap = styled.div`
  margin-top: 120px;
  width: 1004px;
  height: 420px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.div`
  width: 471px;

  h1 {
    font-weight: 800;
    font-size: 36px;
  }
`;

export const Paragraphs = styled.div`
  width: 467px;

  > p {
    margin-bottom: 25px;
  }

  p {
    font-size: 14px;
    font-family: Poppins;
    letter-spacing: 0.5px;
    line-height: 30px;
  }
`;
