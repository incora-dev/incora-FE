/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVacancy
// ====================================================

export interface GetVacancy_vacancy_data_attributes_currentVacancies {
  __typename: "ComponentCommonCurrentVacancies";
  intro: string;
  filterText1: string;
  filterText2: string;
  header: string;
  text: string;
  buttonText: string;
}

export interface GetVacancy_vacancy_data_attributes_filter_technologies_data_attributes {
  __typename: "FilterTechnology";
  name: string;
}

export interface GetVacancy_vacancy_data_attributes_filter_technologies_data {
  __typename: "FilterTechnologyEntity";
  attributes: GetVacancy_vacancy_data_attributes_filter_technologies_data_attributes | null;
}

export interface GetVacancy_vacancy_data_attributes_filter_technologies {
  __typename: "FilterTechnologyRelationResponseCollection";
  data: GetVacancy_vacancy_data_attributes_filter_technologies_data[];
}

export interface GetVacancy_vacancy_data_attributes {
  __typename: "Vacancy";
  description: string;
  currentVacancies: GetVacancy_vacancy_data_attributes_currentVacancies;
  filter_technologies: GetVacancy_vacancy_data_attributes_filter_technologies | null;
}

export interface GetVacancy_vacancy_data {
  __typename: "VacancyEntity";
  attributes: GetVacancy_vacancy_data_attributes | null;
}

export interface GetVacancy_vacancy {
  __typename: "VacancyEntityResponse";
  data: GetVacancy_vacancy_data | null;
}

export interface GetVacancy_filterSpecialities_data_attributes {
  __typename: "FilterSpeciality";
  name: string | null;
}

export interface GetVacancy_filterSpecialities_data {
  __typename: "FilterSpecialityEntity";
  id: string | null;
  attributes: GetVacancy_filterSpecialities_data_attributes | null;
}

export interface GetVacancy_filterSpecialities {
  __typename: "FilterSpecialityEntityResponseCollection";
  data: GetVacancy_filterSpecialities_data[];
}

export interface GetVacancy_filterTechnologies_data_attributes {
  __typename: "FilterTechnology";
  name: string;
}

export interface GetVacancy_filterTechnologies_data {
  __typename: "FilterTechnologyEntity";
  id: string | null;
  attributes: GetVacancy_filterTechnologies_data_attributes | null;
}

export interface GetVacancy_filterTechnologies {
  __typename: "FilterTechnologyEntityResponseCollection";
  data: GetVacancy_filterTechnologies_data[];
}

export interface GetVacancy {
  vacancy: GetVacancy_vacancy | null;
  filterSpecialities: GetVacancy_filterSpecialities | null;
  filterTechnologies: GetVacancy_filterTechnologies | null;
}

export interface GetVacancyVariables {
  id?: string | null;
}
