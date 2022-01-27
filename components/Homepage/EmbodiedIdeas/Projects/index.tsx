import { Container, Text, Block, H3, P, H4 } from "./Projects.style";
import Technologies from "./Technologies";
import PictureWithAnimation from "./PictureWithAnimation";
import Project from './Project';
import { useEffect, useState } from "react";
import { IMAGES_LINK } from "../../../../constants";
import Link from "next/link";
import { GetProjects_projects } from "../../../../graphql/caseStudies/__generated__/getProjects";

interface IProjects {
  projects: GetProjects_projects;
  elementsColor: string;
}

function Projects({ projects, elementsColor }: IProjects) {
  // const [shouldHover, setShouldHover] = useState(-1);

  useEffect(() => {
    console.log("projects", projects);
  });

  function createProjects(): JSX.Element[] {
    return projects.data.map(({ id, attributes }, index) => {
      // const flexDirection = (index + 1) % 10 !== 2 ? "row" : "row-reverse";
      // const marginText =
      //   (index + 1) % 10 !== 2 ? "81px 0 0 180px;" : "81px 180px 0 0";

      // const url = attributes?.url;
      // const technologies = attributes?.technologies;
      // const mainInfoEntry = attributes?.mainInfo.item[0];
      // const imageEntry = mainInfoEntry?.image?.data?.attributes;
      // const image = IMAGES_LINK + imageEntry?.url;
    // return projects.map(({ id, attributes }, index) => {
      return <Project key={`project-${id}`} id={id} project={attributes} index={index} elementsColor={elementsColor} />;
    });
  }

  const projectsArray = createProjects().map((project) => project);

  return <>{projectsArray}</>;
}

export default Projects;
