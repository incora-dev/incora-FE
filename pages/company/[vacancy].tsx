import FooterComponent from "../../components/Footer";
import MainMenu from "../../components/mainMenu/mainMenu";
import VacancyDescription from "../../components/Vacancy/VacancyDescription";
import { theme } from "../../styles/theme";
import CheckAlso from "../../components/Vacancy/CheckAlso";
import { GET_VACANCY } from "../../graphql/careers/queries";
import { GetVacancy } from "../../graphql/careers/__generated__/GetVacancy";
import { initializeApollo } from "../../graphql/client";
import { NextPage, NextPageContext } from "next";
import Custom404 from "../404";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

interface IVacancy {
  data: GetVacancy;
  networkStatus: number;
}

const Vacancy: NextPage<IVacancy> = ({ data, networkStatus }) => {
  const description = data?.vacancies?.data[0].attributes?.description;
  const currentVacancies =
    data?.vacancies?.data[0].attributes?.currentVacancies;
  const specialties = data?.filterSpecialities;
  const technologies = data?.filterTechnologies;
  const filterTechnologies =
    data?.vacancies?.data[0].attributes?.filter_technologies?.data[0]
      ?.attributes?.name;

  const renderCondition =
    description &&
    currentVacancies &&
    specialties &&
    technologies &&
    filterTechnologies;

  if (networkStatus !== 7) return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <MainMenu
          backgroundColor={theme.colors.white}
          titlesColor={theme.colors.black}
          titles={titles}
        >
          <VacancyDescription
            description={description}
            filterTechnologies={filterTechnologies}
          />
          <CheckAlso
            specialties={specialties}
            technologies={technologies}
            currentVacancies={currentVacancies}
          />
          <FooterComponent />
        </MainMenu>
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const client = initializeApollo();
  const { vacancy } = context.query;

  const { data, networkStatus } = await client.query({
    query: GET_VACANCY,
    variables: { url: vacancy },
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Vacancy;
