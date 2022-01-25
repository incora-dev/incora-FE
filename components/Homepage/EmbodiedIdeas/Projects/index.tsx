import { IProjects } from "@interfaces";
import { Container, Text, Block, H3, P, H4 } from "./Projects.style";
import Technologies from "./Technologies";
import PictureWithAnimation from "./PictureWithAnimation";
import {useEffect, useState} from "react";
import { theme } from "../../../../styles/theme";

function Projects(props: IProjects) {
  const { projects, elementsColor } = props;
  const [shouldHover, setShouldHover]  = useState(-1);
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);


  function createProjects(): JSX.Element[] {
    return projects.map(({ title, text, technologies, img}, index) => {
      const flexDirection = (index + 1) % 10 !== 2 ? 'row' : 'row-reverse';
      const marginText = (index + 1) % 10 !== 2 
        ? isMobile 
          ? '81px 10px 0 160px;'
          : '81px 0 0 180px;' 
        : isMobile 
          ? '81px 160px 0 10px' 
          : '81px 180px 0 0';

      return (
        <Container
          key={index}
          flexDirection={flexDirection}
        >
          <Text margin={marginText}>
            <H3 onMouseEnter={() => setShouldHover(index)} onMouseLeave={() => setShouldHover(-1)}>{title}</H3>
            <P onMouseEnter={() => setShouldHover(index)} onMouseLeave={() => setShouldHover(-1)}>{text}</P>

            <Block onMouseEnter={() => setShouldHover(index)} onMouseLeave={() => setShouldHover(-1)}>
              <H4>Technologies</H4>

              <Technologies technologies={technologies}/>
            </Block>
          </Text>

          <PictureWithAnimation
            img={img}
            index={index}
            elementsColor={elementsColor}
            shouldHover={shouldHover}
            setShouldHover={setShouldHover}
          />
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
