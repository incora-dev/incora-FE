import {
  OurTraditionsTextWrap,
  OurTraditionsWrapper,
  Paragraphs,
  Photos,
  TextWrap,
} from "./style";
import { useQuery } from "@apollo/client";

import Image from "next/image";
import { GET_OUR_TRADITIONS } from "../../../graphql/companyAbout/queries";
import { GetOurTraditions } from "../../../graphql/companyAbout/__generated__/GetOurTraditions";
import { IMAGES_LINK } from "../../../constants";

const OurTraditions = () => {
  const { data, loading } = useQuery<GetOurTraditions>(GET_OUR_TRADITIONS);
  const entry = data?.aboutPage?.data?.attributes?.ourTraditions;
  const title = entry?.title;
  const text = entry?.text;
  const gallery = entry?.gallery.data;

  let textArray: string[] = [];

  const photos =
    gallery &&
    gallery.map((photo, index) => {
      const src = IMAGES_LINK + photo.attributes?.url || "";
      return (
        <Image
          loader={() => src}
          src={src}
          width={327}
          height={220}
          key={index * Math.random()}
          alt="team photo"
        />
      );
    });

  if (text) {
    const sectionLength = Math.ceil(text.length / 2);
    for (let index = 0; index < text.length; index += sectionLength) {
      textArray.push(text.slice(index, index + sectionLength));
    }
  }

  return (
    <>
      {!loading && (
        <OurTraditionsWrapper>
          <OurTraditionsTextWrap>
            <TextWrap>
              <h1>{title}</h1>
              <Paragraphs>
                <p>{textArray[0]}</p>
                <p>{textArray[1]}</p>
              </Paragraphs>
            </TextWrap>
          </OurTraditionsTextWrap>
          <Photos>{photos}</Photos>
        </OurTraditionsWrapper>
      )}
    </>
  );
};

export default OurTraditions;
