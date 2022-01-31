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
  PositionDots
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
import { forwardRef, useEffect, useState } from "react";

interface IServicesHoverElement {
  titleColor: string;
  isShow: boolean;
  backgroundColor: string;
}

const servicesLabel = [
  'Research & Development',
  'Web App',
 ' Mobile App',
  'Team Extension',
  'Dedicated Team',
  'DevOps',
  'Software QA & Testing',
  'UI/UX design'
];

function arrowWithText(text: string) {
  return (
    <ArrowWithTextBlock>
      <Arrow
        width={16}
        height={8}
        viewBox="0 0 26 14"
      />

      <H5>

        <Link href={`/services/${text.toLowerCase()}`}>
          {text}
        </Link>
      </H5>
    </ArrowWithTextBlock>
  )
}

function getElementsTop(titleColor: string) {
    const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);
  return (
    <>
      <IconBlock>
        <TitleBlock titleColor={titleColor}>
          <TeamExtension
            width={41.14}
            height={35}
            viewBox="0 0 304 280"
          />

          <H4>
            <Link href={`/services/Team Extension`}>
              Team Extension
            </Link>
          </H4>
        </TitleBlock>
        {!isMobile && <Text>Alongside the core functional team, the acquisition of additional human resources would cover up the needed gaps and accelerate the development workflow.</Text>}
      </IconBlock>

      <IconBlock>
        <TitleBlock titleColor={titleColor}>
          <DedicatedTeam
            width={41.14}
            height={35}
            viewBox="0 0 335 292"
          />

          <H4>
            <Link href={`/services/Dedicated Team`}>
              Dedicated Team
            </Link>
          </H4>
        </TitleBlock>
        {!isMobile && <Text>Alongside the core functional team, the acquisition of additional human resources would cover up the needed gaps and accelerate the development workflow.</Text>}
      </IconBlock>
    </>
  )
}

function getElementsBottom(titleColor: string) {
    const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);
  return (
    <>
      <IconBlock>
        <TitleBlock titleColor={titleColor}>
          <MobileAppDevelopment
            width={41.14}
            height={35}
            viewBox="0 0 302 291"
          />

          <H4>
            <Link href={`/services/Software Development`}>
              Software Development
            </Link>
          </H4>
        </TitleBlock>
        { arrowWithText('Web App Development') }
        { arrowWithText('Mobile App Development') }
      </IconBlock>

      {!isMobile && <H6>Software development is aimed to provide you with support on each stage required for the successful launch of the product: from discovery to production.</H6>}
    </>
  )
}

function getServices(labels: string[]) {
  return (
    labels.map((label, index) =>
      <Service key={index}>
        <Link href={`/services/${label.toLowerCase()}`}>
          {label}
        </Link>
      </Service>)
  )
}

function getAllServices(text: string) {
  return (
      <AllServices>
        <AllServicesText>
          <Link href={'/services'}>
            {text}
          </Link>
        </AllServicesText>
        <Arrow width={25} height={12} viewBox="0 0 26 14"/>
      </AllServices>
    )
}

const ServicesHoverElement = forwardRef(({ titleColor, isShow, backgroundColor }: IServicesHoverElement, ref) => {
  const elementsTop = getElementsTop(titleColor);
  const elementsBottom = getElementsBottom(titleColor);
  const services = getServices(servicesLabel);
  const getAllServicesText = getAllServices('All services');
  const dotsColor = (titleColor: string) =>
    titleColor === theme.colors.black
      ? theme.colors.black
      : theme.colors.white
  ;

    const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);

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

       {!isMobile && <>
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
