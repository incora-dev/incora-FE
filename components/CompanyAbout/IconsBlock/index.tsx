import ClitchIcon from '../../../public/SVG/clutch.svg';
import GoodfirmsIcon from '../../../public/SVG/goodfirms.svg';
import { IconsContainer, IconsWrapper, Icon } from "./style";

const IconsBlock = () => (
  <IconsWrapper>
    <IconsContainer>
      <Icon>
        <ClitchIcon />
      </Icon>
      <Icon>
        <GoodfirmsIcon />
      </Icon>
    </IconsContainer>
  </IconsWrapper>
);

export default IconsBlock;
