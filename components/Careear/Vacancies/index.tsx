import VacancyCard from "./components/VacanсyCard";
import {
  ContentWrapper,
  Filter,
  List,
  ListWrap,
  VacanciesWrapper,
} from "./style";

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

const Vacancies = () => {
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
        <h1>We are looking for</h1>

        <ListWrap>
          <Filter></Filter>

          <List>{vacanciesCards}</List>
        </ListWrap>
      </ContentWrapper>
    </VacanciesWrapper>
  );
};

export default Vacancies;
