import {
  MainWrapper,
  Div,
  Wrapper,
  BlockWithIcons,
  BlockWithIconsTop,
  BlockWithIconsBottom,
  IconBlock,
  TitleBlock,
  H4,
  H5,
  H6,
  Text,
  ArrowWithTextBlock,
  ServicesBlock,
  Services,
  Service,
  AllServices,
  AllServicesText,
  PositionLoader,
  PositionLoader2,
  PositionDots,
  SoftwareDevelopment
} from "./ServicesHoverElement.style";
import Link from "next/link"
import TeamExtension from "../../../../public/SVG/services/TeamExtension.svg"
import DedicatedTeam from "../../../../public/SVG/services/DedicatedTeam.svg"
import MobileAppDevelopment from "../../../../public/SVG/services/MobileAppDevelopment.svg"
import Arrow from "../../../../public/navButtonArrow.svg"
import Loader from "../../../../public/loading1.svg"
import Loader2 from "../../../../public/loading5.svg"
import Dots from "../../../Homepage/Cooperate/elements/dots/dots";
import { theme } from "../../../../styles/theme";
import { forwardRef, useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../../services/context/mainMenu";
import { useIsMobile } from "../../../../services/hooks";

interface IServicesHoverElement {
  titleColor: string;
  isShow: boolean;
  backgroundColor: string;
}

interface IServiceUrl {
  title: string;
  url: string;
}

const servicesLabel = [
  {
    title: 'Research & Development',
    url: 'discovery-phase/1'
  },
  {
    title: 'Web App',
    url: 'web-application-development/2'
  },
  {
    title: 'Mobile App',
    url: 'mobile-application-development/4'
  },
  {
    title: 'Team Extension',
    url: 'team-extension/3'
  },
  {
    title: 'Dedicated Team',
    url: 'dedicated-team/6'
  },
  {
    title: 'DevOps',
    url: 'devops-as-a-service/8'
  },
  {
    title: 'Software QA & Testing',
    url: 'qa-software-testing/7'
  },
  {
    title: 'UI/UX design',
    url: 'ui-ux-graphic-design/5'
  },
];

function arrowWithText(text: string, url: string, linkClickHandler: () => void) {
  return (
    <ArrowWithTextBlock>
      <Arrow
        width={16}
        height={8}
        viewBox="0 0 26 14"
      />

      <H5 onClick={linkClickHandler}>

        <Link href={`/services/${url}`}>
          {text}
        </Link>
      </H5>
    </ArrowWithTextBlock>
  )
}

const useGetElementsTop = (titleColor: string, linkClickHandler: () => void) => {
  const {isMobile, isTablet, isSmallTablet} = useIsMobile();

  return (
    <>
      <IconBlock>
        <TitleBlock titleColor={titleColor}>
          <TeamExtension
            width={41.14}
            height={35}
            viewBox="0 0 304 280"
          />

          <H4 onClick={linkClickHandler}>
            <Link href={`/services/team-extension/3`}>
              Team Extension
            </Link>
          </H4>
        </TitleBlock>
        {!isMobile && !isTablet && !isSmallTablet && <Text>Alongside the core functional team, the acquisition of additional human resources would cover up the needed gaps and accelerate the development workflow.</Text>}
      </IconBlock>

      <IconBlock>
        <TitleBlock titleColor={titleColor}>
          <DedicatedTeam
            width={41.14}
            height={35}
            viewBox="0 0 335 292"
          />

          <H4 onClick={linkClickHandler}>
            <Link href={`/services/dedicated-team/6`}>
              Dedicated Team
            </Link>
          </H4>
        </TitleBlock>
        {!isMobile && !isTablet && !isSmallTablet && (
          <Text>
            Assigning the dedicated team for the full cycle of development
            process you get a business model that fulfills your demands on a
            long-term basis.
          </Text>
        )}
      </IconBlock>
    </>
  )
}

function useGetElementsBottom(titleColor: string, linkClickHandler: () => void) {
        const {isMobile, isTablet, isSmallTablet} = useIsMobile();


  return (
    <>
      <IconBlock>
        <TitleBlock titleColor={titleColor}>
          <MobileAppDevelopment
            width={41.14}
            height={35}
            viewBox="0 0 302 291"
          />

          <SoftwareDevelopment>Software Development</SoftwareDevelopment>
        </TitleBlock>
        { arrowWithText('Web App Development', 'web-application-development/2', linkClickHandler) }
        { arrowWithText('Mobile App Development', 'mobile-application-development/4', linkClickHandler) }
      </IconBlock>

      {!isMobile && !isTablet && !isSmallTablet && <H6>Software development is aimed to provide you with support on each stage required for the successful launch of the product: from discovery to production.</H6>}
    </>
  )
}

function getServices(labels: IServiceUrl[], linkClickHandler: () => void) {
  return (
    labels.map((label, index) =>
      <Service key={index}  onClick={linkClickHandler}>
        <Link href={`/services/${label.url}`}>
          {label.title}
        </Link>
      </Service>)
  )
}

function getAllServices(text: string, linkClickHandler: () => void) {
  return (
      <AllServices>
        <AllServicesText  onClick={linkClickHandler}>
          <Link href={'/services'}>
            {text}
          </Link>
        </AllServicesText>
        <Arrow width={25} height={12} viewBox="0 0 26 14"/>
      </AllServices>
    )
}

// eslint-disable-next-line react/display-name
const ServicesHoverElement = forwardRef(({ titleColor, isShow, backgroundColor }: IServicesHoverElement, ref) => {
  const { toggleHoverMenuMode, toggleMenuMode  } = useContext(MenuContext);
  const linkClickHandler = () => {
    toggleMenuMode();
    toggleHoverMenuMode();
  }
  const elementsTop = useGetElementsTop(titleColor, linkClickHandler);
  const elementsBottom = useGetElementsBottom(titleColor, linkClickHandler);
  const services = getServices(servicesLabel, linkClickHandler);
  const getAllServicesText = getAllServices('All services', linkClickHandler);
  const dotsColor = (titleColor: string) =>
    titleColor === theme.colors.black
      ? theme.colors.black
      : theme.colors.white
  ;
    const {isMobile, isTablet, isSmallTablet} = useIsMobile();

  return (
    <MainWrapper titleColor={titleColor}>
      <Div ref={ref as any} backgroundColor={backgroundColor}>
        <Wrapper titleColor={titleColor}>
          <BlockWithIcons>
            <BlockWithIconsTop>
              { elementsTop }
            </BlockWithIconsTop>

            <BlockWithIconsBottom>
              { elementsBottom }
            </BlockWithIconsBottom>
          </BlockWithIcons>

          <ServicesBlock>
            <Services>
              { services }
            </Services>
            { getAllServicesText }
          </ServicesBlock>
        </Wrapper>

       {!isMobile && !isTablet && !isSmallTablet && <>
        <PositionLoader>
          <Loader
            width={169.22}
            height={169.22}
            viewBox="0 0 96 96"
          />
        </PositionLoader>

        <PositionLoader2 titleColor={titleColor}>
          <Loader2
            width={98}
            height={98}
            viewBox="0 0 54 109"
          />
        </PositionLoader2>

        <PositionDots>
          <Dots
              numberOfDots={5}
              dotColor={dotsColor(titleColor)}
              animation={true}
              rowGap={'18px'}
          />
        </PositionDots>
        </>}
      </Div>
    </MainWrapper>
  )
});

export default ServicesHoverElement;
