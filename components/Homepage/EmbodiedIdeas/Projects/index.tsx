import { Container, Text, Block, H3, P, H4 } from "./Projects.style";
import Technologies from "./Technologies";
import PictureWithAnimation from "./PictureWithAnimation";
import {useEffect, useState} from "react";
import { theme } from "../../../../styles/theme";
import { IMAGES_LINK } from "../../../../constants";
import Link from "next/link";
import { GetProjects_projects } from "../../../../graphql/caseStudies/__generated__/getProjects";
import { useIsMobile } from "../../../../services/hooks";

interface IProjects {
  projects: GetProjects_projects;
  elementsColor: string;
}

function Projects({ projects, elementsColor }: IProjects) {
  const [shouldHover, setShouldHover] = useState(-1);
    const isMobile = useIsMobile();


  useEffect(() => {
    console.log("projects", projects);
  });

  function createProjects(): JSX.Element[] {
    return projects.data.map(({ id, attributes }, index) => {
      const flexDirection = (index + 1) % 10 !== 2 ? "row" : "row-reverse";
      const marginText = (index + 1) % 10 !== 2 
        ? isMobile 
          ? '53px 20px;'
          : '81px 0 0 180px;' 
        : isMobile 
          ? '53px 20px;' 
          : '81px 180px 0 0';

      const url = attributes?.url;
      const technologies = attributes?.technologies?.data;
      const name = attributes?.name;
      const description = attributes?.description;
      const imageEntry = attributes?.featuredImage.data[0].attributes;
      const image = IMAGES_LINK + imageEntry?.url;
      const width = imageEntry?.width;
      const height = imageEntry?.height;

      return (
        <>
          {name && description && technologies && image && width && height && (
            <Container key={id} flexDirection={flexDirection}>
              <Text margin={marginText}>
                <Link href={`/case_studies/case/${url}`} passHref>
                  <H3
                    onMouseEnter={() => setShouldHover(index)}
                    onMouseLeave={() => setShouldHover(-1)}
                  >
                    {name}
                  </H3>
                </Link>
                <P
                  onMouseEnter={() => setShouldHover(index)}
                  onMouseLeave={() => setShouldHover(-1)}
                >
                  {description}
                </P>

                <Block
                  onMouseEnter={() => setShouldHover(index)}
                  onMouseLeave={() => setShouldHover(-1)}
                >
                  {technologies.length > 0 && (
                    <>
                      <H4>Technologies</H4>
                      <Technologies technologies={technologies} />
                    </>
                  )}
                </Block>
              </Text>

              <PictureWithAnimation
                img={image}
                width={700}
                height={537}
                index={index}
                elementsColor={elementsColor}
                shouldHover={shouldHover}
                setShouldHover={setShouldHover}
                url={url}
              />
            </Container>
          )}
        </>
      );
    });
  }

  const projectsArray = createProjects().map((project) => project);

  return <>{projectsArray}</>;
}

export default Projects;
