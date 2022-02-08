import {
  Div,
  Span,
  H4,
  PositionTitle,
  ProjectsContainer,
  Block,
  SeeMoreWorks,
  HexagonPosition,
  LoadingPosition,
  DotsPosition,
  Content,
} from "./EmbodiedIdeas.style";
import Projects from "./Projects";
import ButtonWithArrow from "../../ButtonWithArrow";
import HexagonFilled from "../../../public/hexagonFilled.svg";
import Loading from "../../../public/loading1.svg";
import Dots from "../Cooperate/elements/dots/dots";
import { useState } from "react";
import { GetProjects_projects_data } from "../../../graphql/caseStudies/__generated__/getProjects";
import { GetHomepage_homePage_data_attributes_embodiedIdeas_button } from "../../../graphql/homepage/__generated__/GetHomepage";
import { ROUTES } from "../../../constants/routes";

interface IEmbodiedIdeas {
  title?: string;
  bgColor: string;
  elementsColor: string;
  buttonIntro?: string;
  button?: GetHomepage_homePage_data_attributes_embodiedIdeas_button;
  disablePadding?: boolean;
  disableSeeMore?: boolean;
  projects: GetProjects_projects_data[];
}

function EmbodiedIdeasComponent({
  projects,
  title,
  bgColor,
  elementsColor,
  disablePadding,
  disableSeeMore,
  button,
  buttonIntro,
}: IEmbodiedIdeas) {
  const [animation, setAnimation] = useState(false);

  const buttonLabel = button?.label;
  const buttonUrl = button?.url;

  const renderCondition = buttonIntro && buttonLabel && buttonUrl;

  return (
    <>
        <Div bgColor={bgColor} onMouseEnter={() => setAnimation(true)}>
          <Content>
            <PositionTitle disablePadding={disablePadding}>
              <Block>
                <Span>{title}</Span>
              </Block>
            </PositionTitle>

            <ProjectsContainer>
              <Projects projects={projects} elementsColor={elementsColor} />
            </ProjectsContainer>

          {renderCondition && !disableSeeMore && (
            <SeeMoreWorks>
              <H4>{buttonIntro}</H4>

              <ButtonWithArrow
                buttonLabel={buttonLabel}
                redirectTo={buttonUrl}
                padding={"23px 35px"}
              />

                <HexagonPosition>
                  <HexagonFilled width={350} height={404} viewBox="0 0 195 225" />
                </HexagonPosition>

                <LoadingPosition>
                  <Loading width={170} height={170} viewBox="0 0 96 96" />
                </LoadingPosition>

                <DotsPosition>
                  <Dots numberOfDots={5} dotColor={"#fff"} animation={animation} />
                </DotsPosition>
              </SeeMoreWorks>
            )}
          </Content>
        </Div>
    </>
  );
}

export default EmbodiedIdeasComponent;
