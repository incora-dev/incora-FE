import { ButtonWrap, Ellipse } from "./style";

import Arrow from "../../../public/icons/Arrow.svg";

interface ICarouselButton {
  right: boolean;
}

const CarouselButton = ({ right }: ICarouselButton) => {
  return (
    <ButtonWrap right={right}>
      <Ellipse>
        <Arrow />
      </Ellipse>
    </ButtonWrap>
  );
};

export default CarouselButton;
