import ProjectOverviewItem from "./ProjectOverviewItem";
import { ContentWrap, HeadingWrap, ProjectOverviewWrapper } from "./style";
import casePhoto1 from "../../../public/CasePhoto1.png";
import casePhoto2 from "../../../public/CasePhoto2.png";
import casePhoto3 from "../../../public/CasePhoto3.png";

const list = [
  "Single Sign On / SSO Solutions",
  "Two Factor Authentication",
  "Simple Knowledge Based Authentication (KBA)",
  "Selfie ID Photos",
  "Video ID Selfies",
  "Age Verification",
];

const projectOverviewItems = [
  {
    image: casePhoto1.src,
    heading: "multiple verification types",
    text: "The widget helps businesses to validate new users within seconds. Integration of different social media accounts makes the process even faster. You can combine multiple verification types or use just one. The widget enables such verification options:",
    list: list,
  },
  {
    image: casePhoto2.src,
    heading: "High level of security",
    text: "All of the methods are simple and secure to implement. To protect users’ websites from bots, the widget uses CAPTCHA. This program generates and grades tests that only humans can pass. This solution provides many levels of verifying for different membership plans – from sending some SMS code to video verification.",
  },
  {
    image: casePhoto3.src,
    heading: "Support of different platforms",
    text: "The widget helps businesses to validate new users within seconds. Integration of different social media accounts makes the process even faster. You can combine multiple verification types or use just one. The widget enables such verification options:",
  },
];

const ProjectOverview = () => {
  const mapProjectOverviewItems = projectOverviewItems.map((item, index) => (
    <ProjectOverviewItem
      key={index * Math.random()}
      image={item.image}
      heading={item.heading}
      text={item.text}
      list={item.list}
      index={index}
    />
  ));

  return (
    <ProjectOverviewWrapper>
      <HeadingWrap>
        <h1>Project Overview</h1>
      </HeadingWrap>

      <ContentWrap>{mapProjectOverviewItems}</ContentWrap>
    </ProjectOverviewWrapper>
  );
};

export default ProjectOverview;
