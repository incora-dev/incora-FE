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
  PositionRectangle
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
  technologies: string[];
  Icon: any;
}

interface IExpertiseHoverElements {
  titleColor: string;
  isShow: boolean;
  backgroundColor: string;
}

const industriesLabels = [
  'Logistics',
  'Delivery & Shipping',
  'EduTech ',
  'Healthcare',
  'ECommerce',
  'Legal Services',
  'Booking systems',
  'Cryptocurrency'
]

const technologiesLabels: ITechnologiesLabels[] = [
  { title: 'frontend', technologies: ['React', 'Angular2'], Icon: Frontend },
  { title: 'backend', technologies: ['Node.js', 'Python ', 'Django' , 'Flask'], Icon: Backend },
  { title: 'database', technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Apollo', 'Redis' ], Icon: DataBase },
  { title: 'mobile apps', technologies: ['React Native', 'Ionic'], Icon: MobileApps },
  { title: 'devops tools', technologies: ['Docker', 'Kubernetes', 'Amazon ECS'], Icon: DevOpsTools },
  { title: 'cloud services', technologies: ['Amazon Web Services', 'Google Cloud Platform', 'Microsoft Azure', 'DigitalOcean'], Icon: CloudServices },
]

function getIndustries(labels: string[], linkClickHandler: () => void) {
  return labels.map((label, index) =>
    <Industry key={index} onClick={linkClickHandler}>
      <Link href={`/expertise/industries/${label.toLowerCase()}`}>
        { label }
      </Link>
    </Industry>
  )
}

function getTechnologies(labels: ITechnologiesLabels[], titleColor: string, linkClickHandler: () => void) {
  return labels.map(({ title, technologies, Icon}, index) =>{

    return (
      <IconBlock key={index} titleColor={titleColor}>
        <Icon/>

        <H4>
          {title}
        </H4>

        <TechnologiesText>
          <TextBlock>
            {technologies.map((technology, index) => {
              const slash = index === technologies.length - 1 ? '' : '/ ';

              return (
                <>
                  <Text key={index} onClick={linkClickHandler}>
                    <Link href={`/expertise/technologies/${technology.toLowerCase()}`}>
                      {technology}
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
