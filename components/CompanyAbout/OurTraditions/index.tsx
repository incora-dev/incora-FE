import {
  OurTraditionsTextWrap,
  OurTraditionsWrapper,
  Paragraphs,
  Photos,
  TextWrap,
} from "./style";

import Image from "next/image";
import { IMAGES_LINK } from "../../../constants";
import { GetAboutPage_aboutPage_data_attributes_ourTraditions } from "../../../graphql/companyAbout/__generated__/GetAboutPage";

interface IOurTraditions {
  ourTraditions: GetAboutPage_aboutPage_data_attributes_ourTraditions;
}

const OurTraditions = ({ ourTraditions }: IOurTraditions) => {
  const title = ourTraditions.title;
  const text = ourTraditions.text;
  const gallery = ourTraditions.gallery.data;

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
  );
};

export default OurTraditions;
