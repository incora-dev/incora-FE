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
import ButtonWithArrow from "../../ButtonWithArrow";
import { theme } from "../../../styles/theme";
import Button from "../../Button";

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
  title: string;
}

const Vacancies = ({ title }: IVacancies) => {
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
        <h1>{title}</h1>

        <ListWrap>
          <Filter>
            <Selector
              placeholder="Specialty"
              options={options}
              icon={SmallStar}
            />
            <Selector
              placeholder="Technology"
              options={options}
              icon={SmallStar}
            />

            <QuickApplyWrap>
              <h2>Quick apply</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                natus illum alias atque enim ullam.
              </p>

              <Button
                textColor={theme.colors.white}
                backgroundColor={theme.colors.black}
                width={180}
                height={67}
                label={"Apply now"}
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
