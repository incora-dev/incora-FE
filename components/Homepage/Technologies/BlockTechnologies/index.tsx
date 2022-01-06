import { Component, Container, Technology, TechnologyHover, ContainerTop } from "./BlockTechnologies.style";
import Frontend from "../../../../public/SVG/TechnologyFrontend.svg";
import Backend from "../../../../public/SVG/TechnologyBackend.svg";
import Database from "../../../../public/SVG/TechnologyDatabase.svg";
import MobileApps from "../../../../public/SVG/TechnologyMobileApps.svg";
import DevopsTools from "../../../../public/SVG/TechnologyDevOpsTools.svg";
import CloudServices from "../../../../public/SVG/TechnologyCloudServices.svg";
import { IBlockTechnologies } from "@interfaces";
import TechnologyContainer from "./TechnologyContainer";

function BlockTechnologies({ technologies }: IBlockTechnologies) {
  const setTechnologies = () => {
    return technologies.map(({ technology: { label }}, index) => {
      let icon;

      if (index === 0) {
        icon = <Frontend/>
      }

      if (index === 1) {
        icon = <Backend/>
      }

      if (index === 2) {
        icon = <Database/>
      }

      if (index === 3) {
        icon = <MobileApps/>
      }

      if (index === 4) {
        icon = <DevopsTools/>
      }

      if (index === 5) {
        icon = <CloudServices/>
      }

      return (
        <Container key={index}>
          <TechnologyHover>
            <TechnologyContainer/>
          </TechnologyHover>

          <Technology>
            <ContainerTop>
              {icon}
              <p>{label}</p>
            </ContainerTop>
          </Technology>
        </Container>
      )
    });
  }

  const technologiesArray = setTechnologies();

  return (
    <Component number={technologiesArray.length}>
      {technologiesArray.map((technology) => technology)}
    </Component>
  )
}

export default BlockTechnologies;
