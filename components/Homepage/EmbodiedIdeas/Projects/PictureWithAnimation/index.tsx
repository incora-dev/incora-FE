import { Container, Wrapper, BlockContainer } from "./PictureWithAnimation.style";
import Animation from "./Animation";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../../../../constants/routes";
import { isNumberEven } from "../../../../../utils";

interface IPictureWithAnimation {
  id: string | null;
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
    id,
    img,
    index,
    elementsColor,
    shouldHover,
    setShouldHover,
    width,
    height,
    url,
  } = props;
  const borderRadius = isNumberEven(index) ? "50px 0 0 0" : "0 50px 0 0";

  return (
    <Wrapper>
      <Link href={ROUTES.CASE_STUDIES + `${url}/${id}`} passHref>
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
    </Wrapper>
  );
}

export default PictureWithAnimation;
