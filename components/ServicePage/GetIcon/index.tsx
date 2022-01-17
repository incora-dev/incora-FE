import ResearchAndDevelopment from "../../../public/SVG/services/ResearchAndDevelopment.svg";
import DevOps from "../../../public/SVG/services/DevOps.svg";
import DedicatedTeam from "../../../public/SVG/services/DedicatedTeam.svg";
import MobileAppDevelopment from "../../../public/SVG/services/MobileAppDevelopment.svg";
import WebAppDevelopment from "../../../public/SVG/services/WebAppDevelopment.svg";
import SoftwareQATesting from "../../../public/SVG/services/SoftwareQA&Testing.svg";
import TeamExtension from "../../../public/SVG/services/TeamExtension.svg";
import UIUXdesign from "../../../public/SVG/services/UI:UXdesign.svg";

const GetIcon = (title: string) => {
  console.log(title)
  let icon;

  if (title === 'Research & Development') {
    icon = <ResearchAndDevelopment/>;
  }

  if (title === 'DevOps') {
    icon = <DevOps/>;
  }

  if (title === 'Dedicate dTeam') {
    icon = <DedicatedTeam/>;
  }

  if (title === 'Mobile App Development') {
    icon = <MobileAppDevelopment/>;
  }

  if (title === 'Web App Development') {
    icon = <WebAppDevelopment/>;
  }

  if (title === 'Software QA & Testing') {
    icon = <SoftwareQATesting/>;
  }

  if (title === 'Team Extension') {
    icon = <TeamExtension/>;
  }

  if (title === 'UI/UX Design') {
    icon = <UIUXdesign/>;
  }

  return icon;
}

export default GetIcon;
