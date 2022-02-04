import { GetProjectPage_project_data_attributes_gallery_pictures_data } from "../../../graphql/caseStudies/__generated__/GetProjectPage";
import HorizontalSlider from "../../common/HorizontalSlider";
import { InsideTheProjectWrapper } from "./style";

interface IInsideTheProject {
  intro: string;
  slides: GetProjectPage_project_data_attributes_gallery_pictures_data[];
}

const InsideTheProject = ({ intro, slides }: IInsideTheProject) => {
  return (
    <InsideTheProjectWrapper>
      <HorizontalSlider intro={intro} slides={slides} maxWidth={1006} />
    </InsideTheProjectWrapper>
  );
};

export default InsideTheProject;
