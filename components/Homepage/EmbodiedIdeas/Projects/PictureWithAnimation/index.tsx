import { Container } from "./PictureWithAnimation.style";
import Animation from "./Animation";
import Image from "next/image";
import Link from "next/link";

interface IPictureWithAnimation {
  img: string;
  width: number;
  height: number;
  index: number;
  elementsColor: string;
  shouldHover: number;
  setShouldHover: Function;
  url: string | null | undefined;
}

function PictureWithAnimation(props: IPictureWithAnimation) {
  const {
    img,
    index,
    elementsColor,
    shouldHover,
    setShouldHover,
    width,
    height,
    url,
  } = props;
  const borderRadius = (index + 1) % 10 !== 2 ? "50px 0 0 0" : "0 50px 0 0";

  return (
    <Link href={`/case_studies/case/${url}`} passHref>
      <Container
        borderRadius={borderRadius}
        onMouseEnter={() => setShouldHover(index)}
        onMouseLeave={() => setShouldHover(-1)}
      >
        <Image
          loader={() => img}
          src={img}
          width={width}
          height={height}
          alt="case image"
          layout="responsive"
        />

        <Animation
          index={index}
          elementsColor={elementsColor}
          shouldHover={shouldHover}
        />
      </Container>
    </Link>
  );
}

export default PictureWithAnimation;
