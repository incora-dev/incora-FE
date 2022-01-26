import ProjectOverviewItem from "./ProjectOverviewItem";
import { ContentWrap, HeadingWrap, ProjectOverviewWrapper } from "./style";
import { GetProjectPage_projects_data_attributes_projectOverview } from "../../../graphql/caseStudies/__generated__/GetProjectPage";

interface IProjectOverview {
  projectOverview: GetProjectPage_projects_data_attributes_projectOverview;
}

const ProjectOverview = ({ projectOverview }: IProjectOverview) => {
  const mapProjectOverviewItems = projectOverview.item.map((item, index) => {
    const text = item?.description;
    const heading = item?.title;
    const key = item?.id;
    const image = item?.image?.data?.attributes;

    return (
      <>
        {item && heading && text && image && (
          <ProjectOverviewItem
            key={key}
            image={image}
            heading={heading}
            text={text}
            index={index}
          />
        )}
      </>
    );
  });

  return (
    <ProjectOverviewWrapper>
      <HeadingWrap>
        <h1>{projectOverview.title}</h1>
      </HeadingWrap>

      <ContentWrap>{mapProjectOverviewItems}</ContentWrap>
    </ProjectOverviewWrapper>
  );
};

export default ProjectOverview;
