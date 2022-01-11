import { Container } from "./PictureWithAnimation.style";
import { IPictureWithAnimation } from "@interfaces";
import Animation from "./Animation";

function PictureWithAnimation(props: IPictureWithAnimation) {
  const { img, index, elementsColor, shouldHover, setShouldHover } = props;
  const borderRadius = (index + 1) % 10 !== 2 ? '50px 0 0 0' : '0 50px 0 0';

  return (
    <Container
      borderRadius={borderRadius}
      onMouseEnter={() => setShouldHover(index)}
      onMouseLeave={() => setShouldHover(-1)}
    >
      <img src={img}/>

      <Animation
        index={index}
        elementsColor={elementsColor}
        shouldHover={shouldHover}
      />
    </Container>
  )
}

export default PictureWithAnimation;
