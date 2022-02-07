import {
  Component,
  Container,
  Technology,
  TechnologyHover,
  ContainerTop,
} from "./BlockTechnologies.style";
import Frontend from "../../../../public/SVG/TechnologyFrontend.svg";
import Backend from "../../../../public/SVG/TechnologyBackend.svg";
import Database from "../../../../public/SVG/TechnologyDatabase.svg";
import MobileApps from "../../../../public/SVG/TechnologyMobileApps.svg";
import DevopsTools from "../../../../public/SVG/TechnologyDevOpsTools.svg";
import CloudServices from "../../../../public/SVG/TechnologyCloudServices.svg";
import TechnologyContainer from "./TechnologyContainer";
import { GetHomepage_homePage_data_attributes_technologies_tech_stacks_data } from "../../../../graphql/homepage/__generated__/GetHomepage";
import Image from "next/image";
import { IMAGES_LINK } from "../../../../constants";

interface IBlockTechnologies {
  techStacks: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data[];
}

function BlockTechnologies({ techStacks }: IBlockTechnologies) {
  const technologies = techStacks.map((stack) => {
    const { id, attributes } = stack;
    const name = attributes?.name;
    const stackIcon = attributes?.icon.data?.attributes;
    const src = IMAGES_LINK + stackIcon?.url;
    const width = stackIcon?.width;
    const height = stackIcon?.height;
    const techArray = attributes?.technologies?.data;

    const renderCondition = name && width && height && techArray;

    return (
      <>
        {renderCondition && (
          <Container key={id}>
            <TechnologyHover>
              <TechnologyContainer techArray={techArray} />
            </TechnologyHover>

            <Technology>
              <ContainerTop>
                <Image
                  loader={() => src}
                  src={src}
                  width={width}
                  height={height}
                  alt="tech stack icon"
                />
                <p>{name}</p>
              </ContainerTop>
            </Technology>
          </Container>
        )}
      </>
    );
  });

  return <Component number={technologies.length} maxWidth={1006}>{technologies}</Component>;
}

export default BlockTechnologies;
