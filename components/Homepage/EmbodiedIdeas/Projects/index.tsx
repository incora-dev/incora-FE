import { Container, Text, Block, H3, P, H4 } from "./Projects.style";
import Technologies from "./Technologies";
import PictureWithAnimation from "./PictureWithAnimation";
import { useEffect, useState } from "react";
import { theme } from "../../../../styles/theme";
import { IMAGES_LINK } from "../../../../constants";
import Link from "next/link";
import { GetProjects_projects } from "../../../../graphql/caseStudies/__generated__/getProjects";
import { useIsMobile } from "../../../../services/hooks";
import { GetProjects_projects_data } from "../../../../graphql/caseStudies/__generated__/getProjects";
import { ROUTES } from "../../../../constants/routes";
import {isNumberEven} from "../../../../utils";

interface IProjects {
  projects: GetProjects_projects_data[];
  elementsColor: string;
}

function indexesArray(length: number) {
  const indexes = [];

  for (let i = 0; i < length + 1; i++) {
    if (indexes.length === 0 || indexes[indexes.length - 1] === 2) {
      indexes.push(0)
    }

    if (indexes[indexes.length - 1] === 0) {
      indexes.push(1)
    }

    if (indexes[indexes.length - 1] === 1) {
      indexes.push(2)
    }
  }

  return indexes;
}

function Projects({ projects, elementsColor }: IProjects) {
  const [shouldHover, setShouldHover] = useState(-1);
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();
  const getIndex = indexesArray(projects.length);

  function createProjects(): JSX.Element[] {
    return projects.map(({ id, attributes }, index) => {
      const flexDirection = isNumberEven(index) ? "row" : "row-reverse";
      const marginText =
        (index + 1) % 10 !== 2
          ? isMobile || isTablet || isSmallTablet
            ? "53px 15px;"
            : "81px 0 0 180px;"
          : isMobile || isTablet || isSmallTablet
          ? "53px 15px;"
          : "81px 180px 0 0";

      const url = attributes?.url;
      const technologies = attributes?.technologies?.data;
      const name = attributes?.name;
      const description = attributes?.description;
      const imageEntry = attributes?.featuredImage.data[0].attributes;
      const image = IMAGES_LINK + imageEntry?.url;

      return (
        <>
          {name && description && technologies && image && (
            <Container key={id} flexDirection={flexDirection}>
              <Text>
                <Link href={ROUTES.CASE_STUDIES + `${url}/${id}`} passHref>
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
                id={id}
                img={image}
                width={700}
                height={537}
                index={getIndex[index]}
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
