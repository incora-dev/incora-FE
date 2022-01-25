import { Container, Text, Block, H3, P, H4 } from "./Projects.style";
import Technologies from "./Technologies";
import PictureWithAnimation from "./PictureWithAnimation";
import {useEffect, useState} from "react";
import { theme } from "../../../../styles/theme";
import { GetCaseStudies } from "../../../../graphql/caseStudies/__generated__/GetCaseStudies";
import { IMAGES_LINK } from "../../../../constants";
import Link from "next/link";
import { GetProjects_projects } from "../../../../graphql/caseStudies/__generated__/getProjects";

interface IProjects {
  projects: GetProjects_projects;
  elementsColor: string;
}

function Projects({ projects, elementsColor }: IProjects) {
  const [shouldHover, setShouldHover] = useState(-1);
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);

  useEffect(() => {
    console.log("projects", projects);
  });

  function createProjects(): JSX.Element[] {
    return projects.data.map(({ id, attributes }, index) => {
      const flexDirection = (index + 1) % 10 !== 2 ? "row" : "row-reverse";
      const marginText = (index + 1) % 10 !== 2 
        ? isMobile 
          ? '81px 10px 0 160px;'
          : '81px 0 0 180px;' 
        : isMobile 
          ? '81px 160px 0 10px' 
          : '81px 180px 0 0';

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
                <Link href={`/case_studies/case/${url}`} passHref>
                  <H3
                    onMouseEnter={() => setShouldHover(index)}
                    onMouseLeave={() => setShouldHover(-1)}
                  >
                    {mainInfoEntry.title}
                  </H3>
                </Link>
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
