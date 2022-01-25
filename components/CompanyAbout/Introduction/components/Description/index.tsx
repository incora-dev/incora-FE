import { DescriptionWrapper, Paragraphs, HeaderText, TextWrap } from "./style";

interface IDescription {
  description: string;
  text: string;
}

const Description = ({ description, text }: IDescription) => {
  return (
    <DescriptionWrapper>
      <TextWrap>
        <HeaderText>
          <h1>{description}</h1>
        </HeaderText>

        <Paragraphs>
          <p>{text}</p>
        </Paragraphs>
      </TextWrap>
    </DescriptionWrapper>
  );
};

export default Description;
