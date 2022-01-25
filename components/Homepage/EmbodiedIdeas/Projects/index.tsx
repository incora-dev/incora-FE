import { Container, Text, Block, H3, P, H4 } from "./Projects.style";
import Technologies from "./Technologies";
import PictureWithAnimation from "./PictureWithAnimation";
import { useEffect, useState } from "react";
import {
  GetCaseStudies,
  GetCaseStudies_caseStudiesPage_data_attributes_projects,
} from "../../../../graphql/caseStudies/__generated__/GetCaseStudies";
import { IMAGES_LINK } from "../../../../constants";

interface IProjects {
  projects: GetCaseStudies_caseStudiesPage_data_attributes_projects;
  elementsColor: string;
}

function Projects({ projects, elementsColor }: IProjects) {
  const [shouldHover, setShouldHover] = useState(-1);

  useEffect(() => {
    console.log("projects", projects);
  });

  function createProjects(): JSX.Element[] {
    return projects.data.map(({ id, attributes }, index) => {
      const flexDirection = (index + 1) % 10 !== 2 ? "row" : "row-reverse";
      const marginText =
        (index + 1) % 10 !== 2 ? "81px 0 0 180px;" : "81px 180px 0 0";

      const url = attributes?.url;
      const technologies = attributes?.technologies;
      const mainInfoEntry = attributes?.mainInfo.item[0];
      const imageEntry = mainInfoEntry?.image?.data?.attributes;
      const image = IMAGES_LINK + imageEntry?.url;

      return (
        <>
          {mainInfoEntry && imageEntry && technologies && (
            <Container key={id} flexDirection={flexDirection}>
              <Text margin={marginText}>
                <H3
                  onMouseEnter={() => setShouldHover(index)}
                  onMouseLeave={() => setShouldHover(-1)}
                >
                  {mainInfoEntry.title}
                </H3>
                <P
                  onMouseEnter={() => setShouldHover(index)}
                  onMouseLeave={() => setShouldHover(-1)}
                >
                  {mainInfoEntry.description}
                </P>

                <Block
                  onMouseEnter={() => setShouldHover(index)}
                  onMouseLeave={() => setShouldHover(-1)}
                >
                  {technologies.data.length > 0 && (
                    <>
                      <H4>Technologies</H4>
                      <Technologies technologies={technologies} />
                    </>
                  )}
                </Block>
              </Text>

              <PictureWithAnimation
                img={image}
                width={imageEntry.width || 0}
                height={imageEntry.height || 0}
                index={index}
                elementsColor={elementsColor}
                shouldHover={shouldHover}
                setShouldHover={setShouldHover}
              />
            </Container>
          )}
        </>
      );
    });
  }

  const projectsArray = createProjects().map((project) => project);

  return <>{projectsArray}</>;

  return <></>;
}

export default Projects;
