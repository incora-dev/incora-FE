import Selector from "../../Selector";
import VacancyCard from "./components/VacancyCard";
import {
  ContentWrapper,
  Filter,
  List,
  ListWrap,
  QuickApplyWrap,
  VacanciesWrapper,
} from "./style";

import SmallStar from "../../../public/SmallStar.svg";
import { theme } from "../../../styles/theme";
import Button from "../../Button";
import { GetCareersPage_careersPage_data_attributes_currentVacancies } from "../../../graphql/careers/__generated__/GetCareersPage";

const vacancies = [
  {
    department: "sales & marketing",
    title: "business development manager",
    link: "",
    isHot: true,
  },
  {
    department: "js stack",
    title: "senior full stack developer",
    link: "",
    isHot: true,
  },
  {
    department: "node.js",
    title: "senior back-end developer",
    link: "",
    isHot: false,
  },
  {
    department: "title",
    title: "team lead front-end engineer",
    link: "",
    isHot: false,
  },
];

const options = [
  { value: "1", name: "Option 1" },
  { value: "2", name: "Option 2" },
  { value: "3", name: "Option 3" },
];

interface IVacancies {
  currentVacancies: GetCareersPage_careersPage_data_attributes_currentVacancies;
}

const Vacancies = ({ currentVacancies }: IVacancies) => {
  const { intro, filterText1, filterText2, header, text, buttonText } =
    currentVacancies;

  const vacanciesCards = vacancies.map((vacancy, index) => (
    <VacancyCard
      key={index * Math.random()}
      department={vacancy.department}
      title={vacancy.title}
      link={vacancy.link}
      isHot={vacancy.isHot}
    />
  ));

  return (
    <VacanciesWrapper>
      <ContentWrapper>
        <h1>{intro}</h1>

        <ListWrap>
          <Filter>
            <Selector
              placeholder={filterText1}
              options={options}
              icon={SmallStar}
            />
            <Selector
              placeholder={filterText2}
              options={options}
              icon={SmallStar}
            />

            <QuickApplyWrap>
              <h2>{header}</h2>
              <p>{text}</p>

              <Button
                textColor={theme.colors.white}
                backgroundColor={theme.colors.black}
                width={180}
                height={67}
                label={buttonText}
                link={""}
                arrow={theme.colors.white}
              />
            </QuickApplyWrap>
          </Filter>

          <List>{vacanciesCards}</List>
        </ListWrap>
      </ContentWrapper>
    </VacanciesWrapper>
  );
};

export default Vacancies;
