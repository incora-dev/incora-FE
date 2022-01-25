import {
  GetAboutPage_aboutPage_data_attributes_bannerImage,
  GetAboutPage_aboutPage_data_attributes_mainInfo,
} from "../../../graphql/companyAbout/__generated__/GetAboutPage";
import Description from "./components/Description";
import MainPhoto from "./components/MainPhoto";
import Members from "./components/Members";
import { IntroductionWrapper } from "./style";

interface IIntroduction {
  mainInfo: GetAboutPage_aboutPage_data_attributes_mainInfo;
  bannerImage: GetAboutPage_aboutPage_data_attributes_bannerImage;
}

const Introduction = ({ mainInfo, bannerImage }: IIntroduction) => {
  const { description, text } = mainInfo;

  return (
    <IntroductionWrapper>
      <MainPhoto bannerImage={bannerImage} />
      <Description description={description} text={text} />
      <Members mainInfo={mainInfo} />
    </IntroductionWrapper>
  );
};

export default Introduction;
