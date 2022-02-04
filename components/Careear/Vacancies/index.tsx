import VacancyCard from "./components/VacancyCard";
import {
  Block,
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
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_VACANCIES_LIST } from "../../../graphql/careers/queries";
import { GetVacanciesList } from "../../../graphql/careers/__generated__/GetVacanciesList";
import { useEffect, useState } from "react";
import CreateFormSelect from "../../FormClassic/FormSelect";
import { ROUTES } from "../../../constants/routes";

interface IVacancies {
  currentVacancies: GetCareersPage_careersPage_data_attributes_currentVacancies;
  specialties: GetVacancy_filterSpecialities;
  technologies: GetVacancy_filterTechnologies;
}

const optionsSelect = [
  'Project from scratch',
  'Estimation & Proposal',
  'Team extension',
  'Partnership development',
  'Business analysis & Tech consultancy',
  'Job offering',
  'Other'
];

const Vacancies = ({
  currentVacancies,
  specialties,
  technologies,
}: IVacancies) => {
  const [specialtyId, setSpecialtyId] = useState<string | undefined>(undefined);
  const [technologyId, setTechnologyId] = useState<string | undefined>(
    undefined
  );
  const [limit, setLimit] = useState<number>(7);
  const [speciality, setSpeciality] = useState<string | null>(null);
  const [technology, setTechnology] = useState<string | null>(null);

  const [getVacanciesList, { data, loading }] = useLazyQuery<GetVacanciesList>(
    GET_VACANCIES_LIST,
    {
      variables: {
        specialtyId,
        technologyId,
        limit,
      },
      fetchPolicy: "network-only",
    }
  );
  const vacancies = data?.vacancies?.data;

  useEffect(() => {
    getVacanciesList();
  }, [limit]);

  const { intro, filterText1, filterText2, header, text, buttonText } =
    currentVacancies;

  const vacanciesCards = vacancies ? (
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
    })
  ) : (
    <span>Not found</span>
  );

  const specialtiesOptions = specialties.data.map((specialty) => {
    const id = specialty.id || "";
    const name = specialty.attributes?.name || "";

    return { value: id, name };
  });

  const technologiesOptions = technologies.data.map((technology) => {
    const id = technology.id || "";
    const name = technology.attributes?.name || "";

    return { value: id, name };
  });

  return (
    <VacanciesWrapper>
      <ContentWrapper>
        <ListWrap>
          <PositionFilter>
            <h1>{intro}</h1>

            <Filter>
              <FilterBlock>
                <CreateFormSelect
                  fields={optionsSelect}
                  formTheme={false}
                  setSelectedPurpose={setSpeciality}
                  placeHolder={'speciality'}
                  Icon={SmallStar}
                />

                <CreateFormSelect
                  fields={optionsSelect}
                  formTheme={false}
                  setSelectedPurpose={setTechnology}
                  placeHolder={'technology'}
                  Icon={TechnologyIcon}
                />
              </FilterBlock>
              <QuickApplyWrap>
                <h2>{header}</h2>
                <p>{text}</p>

                <Button
                  textColor={theme.colors.white}
                  backgroundColor={theme.colors.black}
                  width={180}
                  height={67}
                  label={buttonText}
                  arrow={theme.colors.white}
                  onClick={() => getVacanciesList()}
                />
              </QuickApplyWrap>
            </Filter>
          </PositionFilter>

          <List>{vacanciesCards}</List>
        </ListWrap>
      </ContentWrapper>
    </VacanciesWrapper>
  );
};

export default Vacancies;
