import VacancyCard from "./components/VacancyCard";
import {
  ContentWrapper,
  Filter,
  List,
  ListWrap,
  QuickApplyWrap,
  VacanciesWrapper,
  PositionFilter,
  FilterBlock,
} from "./style";

import SmallStar from "../../../public/SmallStar.svg";
import TechnologyIcon from "../../../public/SVG/technologies.svg";
import { theme } from "../../../styles/theme";
import Button from "../../Button";
import { GetCareersPage_careersPage_data_attributes_currentVacancies } from "../../../graphql/careers/__generated__/GetCareersPage";
import {
  GetVacancy_filterSpecialities,
  GetVacancy_filterTechnologies,
} from "../../../graphql/careers/__generated__/GetVacancy";
import { useLazyQuery } from "@apollo/client";
import { GET_VACANCIES_LIST } from "../../../graphql/careers/queries";
import { GetVacanciesList } from "../../../graphql/careers/__generated__/GetVacanciesList";
import { useEffect, useState } from "react";
import CreateFormSelect from "../../FormClassic/FormSelect";
import { ROUTES } from "../../../constants/routes";
import Loader from "../../common/Loader";

interface IVacancies {
  currentVacancies: GetCareersPage_careersPage_data_attributes_currentVacancies;
  specialties: GetVacancy_filterSpecialities;
  technologies: GetVacancy_filterTechnologies;
}

const Vacancies = ({
  currentVacancies,
  specialties,
  technologies,
}: IVacancies) => {
  const [specialty, setSpecialty] = useState<string | undefined>(undefined);
  const [technology, setTechnology] = useState<string | undefined>(undefined);

  const [getVacanciesList, { data, loading }] = useLazyQuery<GetVacanciesList>(
    GET_VACANCIES_LIST,
    {
      variables: {
        specialty: specialty === "all" ? undefined : specialty,
        technology: technology === "all" ? undefined : technology,
      },
    }
  );
  const vacancies = data?.vacancies?.data;

  useEffect(() => {
    getVacanciesList();
  }, []);

  const { intro, header, text, buttonText } = currentVacancies;

  const vacanciesCards =
    vacancies &&
    vacancies.map((vacancy) => {
      const id = vacancy.id;
      const url = ROUTES.COMPANY.DEFAULT + `${vacancy.attributes?.url}/${id}`;
      const isHot = vacancy.attributes?.isHot || false;
      const technology =
        vacancy.attributes?.filter_technologies?.data[0].attributes?.name;
      const specialty =
        vacancy.attributes?.filter_specialities?.data[0].attributes?.name;

      return (
        <>
          {url && specialty && technology && (
            <VacancyCard
              key={id}
              technology={technology}
              specialty={specialty}
              url={url}
              isHot={isHot}
            />
          )}
        </>
      );
    });

  const createOptions = (
    arr: GetVacancy_filterSpecialities | GetVacancy_filterTechnologies
  ) => {
    const options = arr.data.map((option) => {
      const name = option.attributes?.name || "";
      return name;
    });

    options.unshift("all");
    return options;
  };

  const specialtyOptions = createOptions(specialties);
  const technologiesOptions = createOptions(technologies);

  const vacanciesCondition = () => {
    if (vacancies && vacancies.length <= 0) {
      return <span>{"No vacancies founded"}</span>;
    } else if (vacancies && !loading) {
      return <>{vacanciesCards}</>;
    } else {
      return <Loader />;
    }
  };

  return (
    <VacanciesWrapper>
      <ContentWrapper>
        <ListWrap>
          <PositionFilter>
            <h2>{intro}</h2>

            <Filter>
              <FilterBlock>
                <CreateFormSelect
                  fields={specialtyOptions}
                  formTheme={false}
                  setSelectedPurpose={setSpecialty}
                  placeHolder={"specialty"}
                  Icon={SmallStar}
                />

                <CreateFormSelect
                  fields={technologiesOptions}
                  formTheme={false}
                  setSelectedPurpose={setTechnology}
                  placeHolder={"technology"}
                  Icon={TechnologyIcon}
                />
              </FilterBlock>
              <QuickApplyWrap>
                <h3>{header}</h3>
                <p>{text}</p>

                <Button
                  textColor={theme.colors.white}
                  backgroundColor={theme.colors.black}
                  width={180}
                  height={67}
                  label={buttonText}
                  link="/company/send-cv"
                  arrow={theme.colors.white}
                />
              </QuickApplyWrap>
            </Filter>
          </PositionFilter>

          <List>{vacanciesCondition()}</List>
        </ListWrap>
      </ContentWrapper>
    </VacanciesWrapper>
  );
};

export default Vacancies;
