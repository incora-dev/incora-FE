import {
  Div,
  MainWrapper,
  Wrapper,
  InfoWrapper,
  InfoTextBlock,
  H4,
  Text,
  ButtonBlock,
  ButtonText,
  PositionArrow,
  PositionLoader,
  PositionPluses,
  PositionSquare,
  Square,
  Icons
} from "./CompanyHoverElement.style";
import Link from "next/link"
import AboutUsIcon from "../../../../public/SVG/menuIcons/AboutUsIcon.svg";
import CareersIcon from "../../../../public/SVG/menuIcons/CareersIcon.svg";
import Arrow from "../../../../public/navButtonArrow.svg"
import Loader from "../../../../public/loading2.svg"
import Pluses from "../../../Homepage/Cooperate/elements/pluses/pluses";
import {theme} from "../../../../styles/theme";
import {forwardRef, useState, useContext} from "react";
import { MenuContext } from "../../../../services/context/mainMenu";

interface ICompanyHoverElement {
  titleColor: string;
  backgroundColor: string;
}

interface ICompanyInfo {
  title: string;
  text: string;
  Icon: any;
  href: string;
}

const companyInfo: ICompanyInfo[] = [
  { title: 'About Us', text: 'We are a talented software development company that helps business build, launch, and grow outstanding software products.', Icon: AboutUsIcon, href: '/company/about'},
  { title: 'Careers', text: 'We welcome proficient talents, who strive to do more and be more. Join the team of diligent minds!', Icon: CareersIcon,  href: '/company/career'}
]

function getCompanyBlock(companyInfo: ICompanyInfo[], titleColor: string, linkClickHandler: () => void) {
  return companyInfo.map(({ title, text, Icon, href }, index) =>
    <InfoWrapper key={index} titleColor={titleColor}>
      <Icons>
        <Icon/>
      </Icons>

      <InfoTextBlock>
        <H4 onClick={linkClickHandler}>
          <Link href={href}>
            {title}
          </Link>
        </H4>

        <Text>{text}</Text>

        <ButtonBlock>
          <ButtonText onClick={linkClickHandler}>
            <Link href={href}>
              Read More
            </Link>
          </ButtonText>

          <PositionArrow>
            <Arrow
              className={'arrowSVG'}
              width="25"
              height="12"
              viewBox="0 0 26 14"
            />
          </PositionArrow>
        </ButtonBlock>
      </InfoTextBlock>
    </InfoWrapper>
  )
}

const CompanyHoverElement = forwardRef(({ titleColor, backgroundColor }: ICompanyHoverElement, ref) => {
  const { toggleHoverMenuMode, toggleMenuMode  } = useContext(MenuContext);
  const linkClickHandler = () => {
    toggleMenuMode();
    toggleHoverMenuMode();
  }
  const [shouldAnimate, setAnimate] = useState(false);
  const companyBlock = getCompanyBlock(companyInfo, titleColor, linkClickHandler);

  return (
    <MainWrapper
      titleColor={titleColor}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
    >
      <Div ref={ref as any} titleColor={titleColor} backgroundColor={backgroundColor}>
        <PositionLoader>
          <Loader
            width="181.74"
            height="181"
            viewBox="0 0 54 54"
          />
        </PositionLoader>

        <PositionSquare>
          <Square titleColor={titleColor}/>
        </PositionSquare>

        <PositionPluses>
          <Pluses
            plusesColor={theme.colors.yellow2}
            animation={shouldAnimate}
            animationDelay={10}
          />
        </PositionPluses>

        <Wrapper>
          { companyBlock }
        </Wrapper>
      </Div>
    </MainWrapper>
  )
});

export default CompanyHoverElement;
