/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVacanciesList
// ====================================================

export interface GetVacanciesList_vacancies_data_attributes_filter_technologies_data_attributes {
  __typename: "FilterTechnology";
  name: string;
}

export interface GetVacanciesList_vacancies_data_attributes_filter_technologies_data {
  __typename: "FilterTechnologyEntity";
  id: string | null;
  attributes: GetVacanciesList_vacancies_data_attributes_filter_technologies_data_attributes | null;
}

export interface GetVacanciesList_vacancies_data_attributes_filter_technologies {
  __typename: "FilterTechnologyRelationResponseCollection";
  data: GetVacanciesList_vacancies_data_attributes_filter_technologies_data[];
}

export interface GetVacanciesList_vacancies_data_attributes_filter_specialities_data_attributes {
  __typename: "FilterSpeciality";
  name: string | null;
}

export interface GetVacanciesList_vacancies_data_attributes_filter_specialities_data {
  __typename: "FilterSpecialityEntity";
  id: string | null;
  attributes: GetVacanciesList_vacancies_data_attributes_filter_specialities_data_attributes | null;
}

export interface GetVacanciesList_vacancies_data_attributes_filter_specialities {
  __typename: "FilterSpecialityRelationResponseCollection";
  data: GetVacanciesList_vacancies_data_attributes_filter_specialities_data[];
}

export interface GetVacanciesList_vacancies_data_attributes {
  __typename: "Vacancy";
  url: string;
  isHot: boolean | null;
  filter_technologies: GetVacanciesList_vacancies_data_attributes_filter_technologies | null;
  filter_specialities: GetVacanciesList_vacancies_data_attributes_filter_specialities | null;
}

export interface GetVacanciesList_vacancies_data {
  __typename: "VacancyEntity";
  id: string | null;
  attributes: GetVacanciesList_vacancies_data_attributes | null;
}

export interface GetVacanciesList_vacancies {
  __typename: "VacancyEntityResponseCollection";
  data: GetVacanciesList_vacancies_data[];
}

export interface GetVacanciesList {
  vacancies: GetVacanciesList_vacancies | null;
}

export interface GetVacanciesListVariables {
  specialtyId?: string | null;
  technologyId?: string | null;
}
