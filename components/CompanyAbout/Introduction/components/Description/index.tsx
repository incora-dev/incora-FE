import { DescriptionWrapper, Paragraphs, HeaderText, TextWrap } from "./style";
import { useQuery } from "@apollo/client";
import { GET_DESCRIPTION } from "../../../../../graphql/companyAbout/queries";
import { GetDescription } from "../../../../../graphql/companyAbout/__generated__/GetDescription";

const Description = () => {
  const { data, loading } = useQuery<GetDescription>(GET_DESCRIPTION);
  const description = data?.aboutPage?.data?.attributes?.mainInfo.description;
  const text = data?.aboutPage?.data?.attributes?.mainInfo.text;

  return (
    <>
      {!loading && (
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
      )}
    </>
  );
};

export default Description;
