import {
  Div,
  MainWrapper,
  Wrapper,
  IndustriesBlock,
  H3,
  H4,
  Industries,
  Industry,
  TechnologiesBlock,
  TechnologiesWrapper,
  TechnologiesIconsBlock,
  IconBlock,
  Technologies,
  TechnologiesDiv,
  TechnologiesText,
  TextBlock,
  Text,
  Slash,
  PositionLoader,
  PositionSphere,
  Sphere,
  PositionRectangle,
  LabelBlock,
} from "./ExpertiseHoverElements.style";
import Link from "next/link"
import Frontend from "../../../../public/SVG/menuIcons/FrontendMini.svg";
import Backend from "../../../../public/SVG/menuIcons/BackendMini.svg";
import DataBase from "../../../../public/SVG/menuIcons/DataBaseMini.svg";
import MobileApps from "../../../../public/SVG/menuIcons/MobileAppsMini.svg";
import DevOpsTools from "../../../../public/SVG/menuIcons/DevOpsToolsMini.svg";
import CloudServices from "../../../../public/SVG/menuIcons/CloudServices.svg";
import Loader from "../../../../public/loading5.svg"
import Rectangle from "../../../../public/SVG/rectangleWithGradient.svg"
import { forwardRef, useContext } from "react";
import { MenuContext } from "../../../../services/context/mainMenu";

interface ITechnologiesLabels {
  title: string;
  technologies: IUrl[];
  Icon: any;
}

interface IExpertiseHoverElements {
  titleColor: string;
  isShow: boolean;
  backgroundColor: string;
}

interface IUrl {
  title: string;
  url: string;
}

const industriesLabels = [
  {
    title: 'Logistics',
    url: 'supply-chain-software-development/4'
  },
  {
    title: 'Delivery&Shipping',
    url: 'delivery-and-shipping-apps/3'
  },
  {
    title: 'EduTech',
    url: 'edutech/5'
  },
  {
    title: 'Healthcare',
    url: 'healthtech-solutions/6'
  },
  {
    title: 'ECommerce',
    url: 'ecommerce-marketplace-development/7'
  },
  {
    title: 'Fintech',
    url: 'fintech-app-development/8'
  },
  {
    title: 'Booking Systems',
    url: 'reservation-and-booking-software/9'
  },
  {
    title: 'Cryptocurrency',
    url: 'cryptosystems/10'
  },
]

const technologiesLabels: ITechnologiesLabels[] = [
  { 
    title: 'frontend', 
    technologies: [
      {
        title: 'React',
        url: 'react-js-development/1'
      },
      {
        title: 'Angular2',
        url: 'angular2-development/3'
      },
    ], Icon: Frontend },
  { 
    title: 'backend', 
    technologies: [
        {
          title: 'Node.js',
          url: 'node-js-development/4'
        },
        {
          title: 'Python',
          url: 'python-development/5'
        },
        {
          title: 'Django',
          url: 'django-development/6'
        },
        {
          title: 'Flask',
          url: 'flask-development/7'
        },
      ], Icon: Backend },
  { 
    title: 'database', 
    technologies: [
        {
          title: 'PostgreSQL',
          url: 'postgresql-development-services/8'
        },
        {
          title: 'MySQL',
          url: 'mysql-development-services/9'
        },
        {
          title: 'MongoDB',
          url: 'mongodb-development-services/10'
        },
        {
          title: 'Apollo',
          url: 'apollo-development/12'
        },
        {
          title: 'Redis',
          url: 'redis-development/11'
        },
      ], Icon: DataBase },
  { 
    title: 'mobile apps', 
    technologies: [
        {
          title: 'React Native',
          url: 'react-native-development/13'
        },
        {
          title: 'Ionic',
          url: 'ionic-development/14'
        },
      ], Icon: MobileApps },
  { 
    title: 'devops tools', 
    technologies: [
        {
          title: 'Docker',
          url: 'docker-development-services/2'
        },
        {
          title: 'Kubernetes',
          url: 'kubernetes-development-tools/15'
        },
        {
          title: 'Amazon ECS',
          url: 'amazon-ec2-development/16'
        },
      ], Icon: DevOpsTools },
  { 
    title: 'cloud services', 
    technologies: [
        {
          title: 'Amazon Web Services',
          url: 'aws-software-development/17'
        },
        {
          title: 'Google Cloud Platform',
          url: 'gcp-software-development/18'
        },
        {
          title: 'Microsoft Azure',
          url: 'microsoft-azure-development/19'
        },
        {
          title: 'DigitalOcean',
          url: 'digitalocean-development/20'
        },
      ], Icon: CloudServices },
]

function getIndustries(labels: IUrl[], linkClickHandler: () => void) {
  return labels.map((label, index) =>
    <Industry key={index} onClick={linkClickHandler}>
      <Link href={`/expertise/industries/${label.url}`}>
        { label.title }
      </Link>
    </Industry>
  )
}

function getTechnologies(labels: ITechnologiesLabels[], titleColor: string, linkClickHandler: () => void) {
  return labels.map(({ title, technologies, Icon}, index) =>{

    return (
      <IconBlock key={index} titleColor={titleColor}>
        <LabelBlock>
          <Icon/>

          <H4>
            {title}
          </H4>
        </LabelBlock>

        <TechnologiesText>
          <TextBlock>
            {technologies.map((technology, index) => {
              const slash = index === technologies.length - 1 ? '' : '/ ';

              return (
                <>
                  <Text key={index} onClick={linkClickHandler}>
                    <Link href={`/expertise/technologies/${technology.url}`}>
                      {technology.title}
                    </Link>
                  </Text>
                  <Slash>{slash}</Slash>
                </>
              )
            })}
          </TextBlock>
        </TechnologiesText>
      </IconBlock>
    )
  })
}

// eslint-disable-next-line react/display-name
const ExpertiseHoverElements = forwardRef(({ titleColor, isShow, backgroundColor }:IExpertiseHoverElements, ref) => {
  const { toggleHoverMenuMode, toggleMenuMode  } = useContext(MenuContext);
  const linkClickHandler = () => {
    toggleMenuMode();
    toggleHoverMenuMode();
  }
  const industries = getIndustries(industriesLabels, linkClickHandler);
  const technologies = getTechnologies(technologiesLabels, titleColor, linkClickHandler);

  return (
    <MainWrapper titleColor={titleColor}>
      <Div ref={ref as any} titleColor={titleColor} backgroundColor={backgroundColor}>
        <PositionSphere>
          <Sphere titleColor={titleColor}/>
        </PositionSphere>

        <PositionRectangle>
          <Rectangle/>
        </PositionRectangle>

        <PositionLoader titleColor={titleColor}>
          <Loader
            width={40}
            heigh={40}
            viewBox="0 0 54 109"
          />
        </PositionLoader>

        <Wrapper>
          <IndustriesBlock>
            <H3>Industries</H3>

            <Industries>{industries}</Industries>
          </IndustriesBlock>

          <TechnologiesBlock>
            <TechnologiesWrapper>
              <TechnologiesIconsBlock>
                <H3>Technologies</H3>

                <TechnologiesDiv>
                  <Technologies>{technologies}</Technologies>
                </TechnologiesDiv>
              </TechnologiesIconsBlock>
            </TechnologiesWrapper>
          </TechnologiesBlock>
        </Wrapper>
      </Div>
    </MainWrapper>
  )
});

export default ExpertiseHoverElements;
