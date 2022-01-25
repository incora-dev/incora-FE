import { Container } from "./PictureWithAnimation.style";
import Animation from "./Animation";
import Image from "next/image";

interface IPictureWithAnimation {
  img: string;
  width: number;
  height: number;
  index: number;
  elementsColor: string;
  shouldHover: number;
  setShouldHover: Function;
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
  } = props;
  const borderRadius = (index + 1) % 10 !== 2 ? "50px 0 0 0" : "0 50px 0 0";

  return (
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
      />

      <Animation
        index={index}
        elementsColor={elementsColor}
        shouldHover={shouldHover}
      />
    </Container>
  );
}

export default PictureWithAnimation;
