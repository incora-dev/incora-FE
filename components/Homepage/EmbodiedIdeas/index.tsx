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
  DotsPosition
} from "./EmbodiedIdeas.style";
import { IEmbodiedIdeas } from "@interfaces";
import Projects from "./Projects";
import ButtonWithArrow from "../../ButtonWithArrow";
import HexagonFilled from "../../../public/hexagonFilled.svg";
import Loading from "../../../public/loading1.svg";
import Dots from "../Cooperate/elements/dots/dots";

function EmbodiedIdeasComponent(props: IEmbodiedIdeas) {
  const { title, bgColor, projects, elementsColor } = props;

  return(
    <Div bgColor={bgColor}>
      <PositionTitle>
        <Block>
          <H2>{title}</H2>
        </Block>
      </PositionTitle>

      <ProjectsContainer>
          <Projects projects={projects} elementsColor={elementsColor}/>
      </ProjectsContainer>

      <SeeMoreWorks>
        <H4>Want to see more works?</H4>

        <ButtonWithArrow buttonLabel={'see portfolio'} redirectTo={'see_portfolio'}/>

        <HexagonPosition>
          <HexagonFilled width={350} height={404} viewBox="0 0 195 225"/>
        </HexagonPosition>

        <LoadingPosition>
          <Loading width={170} height={170} viewBox="0 0 96 96"/>
        </LoadingPosition>

        <DotsPosition>
          <Dots numberOfDots={5} dotColor={'#fff'} />
        </DotsPosition>
      </SeeMoreWorks>
    </Div>
  )
}

export default EmbodiedIdeasComponent;
