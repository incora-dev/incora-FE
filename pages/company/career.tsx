import Invitation from "../../components/Careear/Invitation";
import Vacancies from "../../components/Careear/Vacancies";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

const Career = () => {
  return (
    <MainMenu titles={titles} backgroundColor={theme.colors.black}>
      <Invitation />
      <Vacancies />
    </MainMenu>
  );
};

export default Career;
