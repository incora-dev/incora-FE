import Link from "next/link";
import ClutchIcon from '../../../public/SVG/clutch.svg';
import GoodfirmsIcon from '../../../public/SVG/goodfirms.svg';
import { IconsContainer, IconsWrapper, Icon } from "./style";

const IconsBlock = () => (
  <IconsWrapper>
    <IconsContainer>
      <Link href="https://clutch.co/profile/incora#summary" passHref>
        <Icon>
          <ClutchIcon />
        </Icon>
      </Link>
      <Link href="https://www.goodfirms.co/company/incora" passHref>
        <Icon>
          <GoodfirmsIcon />
        </Icon>
      </Link>
    </IconsContainer>
  </IconsWrapper>
);

export default IconsBlock;
