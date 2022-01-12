import {
  OurTraditionsTextWrap,
  OurTraditionsWrapper,
  Paragraphs,
  Photos,
  TextWrap,
} from "./style";

import teamPhoto1 from "../../../public/teamPhoto1.jpg";
import teamPhoto2 from "../../../public/teamPhoto2.jpg";
import teamPhoto3 from "../../../public/teamPhoto3.jpg";
import teamPhoto4 from "../../../public/teamPhoto4.jpg";
import Image from "next/image";

const teamPhotos = [
  teamPhoto1,
  teamPhoto2,
  teamPhoto3,
  teamPhoto4,
  teamPhoto1,
  teamPhoto2,
  teamPhoto3,
  teamPhoto4,
];

const OurTraditions = () => {
  const photos = teamPhotos.map((photo, index) => (
    <Image
      src={photo.src}
      width={327}
      height={220}
      key={index * Math.random()}
      alt="team photo"
    />
  ));

  return (
    <OurTraditionsWrapper>
      <OurTraditionsTextWrap>
        <TextWrap>
          <h1>Our traditions</h1>
          <Paragraphs>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              laboriosam sapiente eveniet nemo dicta earum in quam, quod optio
              fugit officiis ex, doloremque vel repellendus at cumque modi, odio
              magni. Facilis, iste natus officia cumque repellat dignissimos
              culpa maiores officiis odio necessitatibus laborum incidunt nam
              totam. Autem, cupiditate perferendis cumque quisquam molestias
              natus illo exercitationem, aperiam, voluptatem ipsa voluptate sit
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              cupiditate perspiciatis totam soluta nesciunt expedita eligendi
              omnis inventore harum vel laboriosam et, excepturi reprehenderit
              sapiente officia veniam, sed perferendis culpa aspernatur ad
              pariatur ipsa tenetur. Aliquid ab quis vero nostrum consectetur
              adipisci necessitatibus eveniet possimus culpa, est ad ullam
              quaerat beatae, quam doloribus totam. Cum aliquid exercitationem
            </p>
          </Paragraphs>
        </TextWrap>
      </OurTraditionsTextWrap>
      <Photos>{photos}</Photos>
    </OurTraditionsWrapper>
  );
};

export default OurTraditions;
