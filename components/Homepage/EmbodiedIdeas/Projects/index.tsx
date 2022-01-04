import { IProjects } from "@interfaces";
import { Container, Text, Block, H3, P, H4 } from "./Projects.style";
import Technologies from "./Technologies";
import PictureWithAnimation from "./PictureWithAnimation";

function Projects(props: IProjects) {
  const { projects, elementsColor } = props;

  function createProjects(): JSX.Element[] {
    return projects.map(({ title, text, technologies, img}, index) => {
      const flexDirection = (index + 1) % 10 !== 2 ? 'row' : 'row-reverse';
      const marginText = (index + 1) % 10 !== 2 ? '0 0 0 180px;' : '0 180px 0 0';

      return (
        <Container key={index} flexDirection={flexDirection}>
          <Text margin={marginText}>
            <H3>{title}</H3>
            <P>{text}</P>

            <Block>
              <H4>Technologies</H4>

              <Technologies technologies={technologies}/>
            </Block>
          </Text>

          <PictureWithAnimation img={img} index={index} elementsColor={elementsColor}/>
        </Container>
      )
    })
  };

  const projectsArray = createProjects().map((project) => project);

  return(
    <>
      {projectsArray}
    </>
  );
}

export default Projects;
