import Description from "./components/Description";
import MainPhoto from "./components/MainPhoto";
import Members from "./components/Members";
import { MembersWrapper } from "./components/Members/style";
import { IntroductionWrapper } from "./style";

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <MainPhoto />
      <Description />
      <Members />
    </IntroductionWrapper>
  );
};

export default Introduction;
