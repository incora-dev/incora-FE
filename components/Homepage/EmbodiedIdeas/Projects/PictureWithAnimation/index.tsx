import { Container } from "./PictureWithAnimation.style";
import { IPictureWithAnimation } from "@interfaces";
import Animation from "./Animation";

function PictureWithAnimation(props: IPictureWithAnimation) {
  const { img, index, elementsColor } = props;
  const borderRadius = (index + 1) % 10 !== 2 ? '50px 0 0 0' : '0 50px 0 0';

  return (
    <Container borderRadius={borderRadius}>
      <img src={img}/>

      <Animation index={index} elementsColor={elementsColor}/>
    </Container>
  )
}

export default PictureWithAnimation;
