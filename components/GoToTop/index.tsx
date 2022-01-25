import GoToTopIcon from '../../public/SVG/GoToTopIcon.svg';
import { Wrapper } from "./GoToTop.style";

interface GoToTop {
  isVisible: boolean;
}

const GoToTop = ({ isVisible }: GoToTop) => {
  return (
    <Wrapper isVisible={isVisible} onClick={() => window.scrollTo(0, 0)}>
      <GoToTopIcon/>
    </Wrapper>
  )
}

export default GoToTop;
