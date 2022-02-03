import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../../graphql/caseStudies/queries";
import { GetProjects } from "../../../graphql/caseStudies/__generated__/getProjects";
import { theme } from "../../../styles/theme";
import Loader from "../../common/Loader";
import EmbodiedIdeasComponent from "../../Homepage/EmbodiedIdeas";
import { NoCasesFounded, ProjectsWrapper } from "./style";

interface IProjects {
  industry: string | undefined;
}

const Projects = ({ industry }: IProjects) => {
  const { data, loading } = useQuery<GetProjects>(GET_PROJECTS, {
    variables: { industry },
  });
  const projects = data?.projects?.data;

  const renderCondition = () => {
    if (projects && projects.length <= 0) {
      return (
        <NoCasesFounded>
          <span>{"No cases founded"}</span>
        </NoCasesFounded>
      );
    } else if (projects && !loading) {
      return (
        <EmbodiedIdeasComponent
          projects={projects}
          bgColor={theme.colors.white}
          elementsColor={theme.colors.yellow}
          disablePadding
          disableSeeMore
        />
      );
    } else {
      return <Loader />;
    }
  };

  return <ProjectsWrapper>{renderCondition()}</ProjectsWrapper>;
};

export default Projects;
