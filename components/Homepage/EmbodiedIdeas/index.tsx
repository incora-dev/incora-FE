import {
  Div,
  H2,
  H4,
  PositionTitle,
  ProjectsContainer,
  Block,
  SeeMoreWorks,
  HexagonPosition,
  LoadingPosition,
  DotsPosition,
} from "./EmbodiedIdeas.style";
import Projects from "./Projects";
import ButtonWithArrow from "../../ButtonWithArrow";
import HexagonFilled from "../../../public/hexagonFilled.svg";
import Loading from "../../../public/loading1.svg";
import Dots from "../Cooperate/elements/dots/dots";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../../graphql/caseStudies/queries";
import {
  GetProjects,
  GetProjects_projects_data,
} from "../../../graphql/caseStudies/__generated__/getProjects";
import { theme } from "../../../styles/theme";
import {
  GetService_services_data_attributes,
  GetService_services_data_attributes_projects_data,
} from "../../../graphql/services/__generated__/GetService";

interface IEmbodiedIdeas {
  title?: string;
  bgColor: string;
  projects: GetProjects_projects_data[];
  elementsColor: string;
  disablePadding?: boolean;
  disableSeeMore?: boolean;
}

function EmbodiedIdeasComponent({
  projects,
  title,
  bgColor,
  elementsColor,
  disablePadding,
  disableSeeMore,
}: IEmbodiedIdeas) {
  const [animation, setAnimation] = useState(false);

  return (
    <>
      <Div bgColor={bgColor} onMouseEnter={() => setAnimation(true)}>
        <PositionTitle disablePadding={disablePadding}>
          <Block>
            <H2>{title}</H2>
          </Block>
        </PositionTitle>

        <ProjectsContainer>
          <Projects projects={projects} elementsColor={elementsColor} />
        </ProjectsContainer>

        {!disableSeeMore && (
          <SeeMoreWorks>
            <H4>Want to see more works?</H4>

            <ButtonWithArrow
              buttonLabel={"see portfolio"}
              redirectTo={"see_portfolio"}
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
      </Div>
    </>
  );
}

export default EmbodiedIdeasComponent;
