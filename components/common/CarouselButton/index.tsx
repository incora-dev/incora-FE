import { ButtonWrap, Ellipse } from "./style";

import Arrow from "../../../public/icons/Arrow.svg";

interface ICarouselButton {
  right: boolean;
  changeReview: (right: boolean) => void;
}

const CarouselButton = ({ right, changeReview }: ICarouselButton) => {
  const onClick = () => {
    changeReview(right);
  };

  return (
    <ButtonWrap right={right}>
      <Ellipse onClick={onClick}>
        <Arrow />
      </Ellipse>
    </ButtonWrap>
  );
};

export default CarouselButton;
