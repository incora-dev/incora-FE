import MainMenu from "../../components/mainMenu/mainMenu";
import VacancyDescription from "../../components/Vacancy/VacancyDescription";
import { theme } from "../../styles/theme";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

const Vacancy = () => {
  return (
    <MainMenu
      backgroundColor={theme.colors.white}
      titlesColor={theme.colors.black}
      titles={titles}
    >
      <VacancyDescription />
    </MainMenu>
  );
};

export default Vacancy;
