/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCareersPage
// ====================================================

export interface GetCareersPage_careersPage_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetCareersPage_careersPage_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  attributes: GetCareersPage_careersPage_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetCareersPage_careersPage_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetCareersPage_careersPage_data_attributes_SEO_ogImage_data | null;
}

export interface GetCareersPage_careersPage_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  ogTitle: string | null;
  ogImage: GetCareersPage_careersPage_data_attributes_SEO_ogImage | null;
  keywords: string | null;
  description: string | null;
  ogDescription: string | null;
}

export interface GetCareersPage_careersPage_data_attributes_banner_button {
  __typename: "ComponentButtonsButton";
  url: string;
  label: string;
}

export interface GetCareersPage_careersPage_data_attributes_banner_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetCareersPage_careersPage_data_attributes_banner_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetCareersPage_careersPage_data_attributes_banner_image_data_attributes | null;
}

export interface GetCareersPage_careersPage_data_attributes_banner_image {
  __typename: "UploadFileEntityResponse";
  data: GetCareersPage_careersPage_data_attributes_banner_image_data | null;
}

export interface GetCareersPage_careersPage_data_attributes_banner {
  __typename: "ComponentCareersPageBanner";
  title: string;
  description: string;
  button: GetCareersPage_careersPage_data_attributes_banner_button;
  image: GetCareersPage_careersPage_data_attributes_banner_image;
}

export interface GetCareersPage_careersPage_data_attributes_process_items_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetCareersPage_careersPage_data_attributes_process_items_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetCareersPage_careersPage_data_attributes_process_items_image_data_attributes | null;
}

export interface GetCareersPage_careersPage_data_attributes_process_items_image {
  __typename: "UploadFileEntityResponse";
  data: GetCareersPage_careersPage_data_attributes_process_items_image_data | null;
}

export interface GetCareersPage_careersPage_data_attributes_process_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  image: GetCareersPage_careersPage_data_attributes_process_items_image | null;
  description: string | null;
}

export interface GetCareersPage_careersPage_data_attributes_process {
  __typename: "ComponentCommonList";
  intro: string;
  items: (GetCareersPage_careersPage_data_attributes_process_items | null)[];
}

export interface GetCareersPage_careersPage_data_attributes_currentVacancies {
  __typename: "ComponentCommonCurrentVacancies";
  intro: string;
  filterText1: string;
  filterText2: string;
  header: string;
  text: string;
  buttonText: string;
}

export interface GetCareersPage_careersPage_data_attributes_ourBenefits_items_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetCareersPage_careersPage_data_attributes_ourBenefits_items_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetCareersPage_careersPage_data_attributes_ourBenefits_items_image_data_attributes | null;
}

export interface GetCareersPage_careersPage_data_attributes_ourBenefits_items_image {
  __typename: "UploadFileEntityResponse";
  data: GetCareersPage_careersPage_data_attributes_ourBenefits_items_image_data | null;
}

export interface GetCareersPage_careersPage_data_attributes_ourBenefits_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
  image: GetCareersPage_careersPage_data_attributes_ourBenefits_items_image | null;
}

export interface GetCareersPage_careersPage_data_attributes_ourBenefits {
  __typename: "ComponentCommonList";
  intro: string;
  items: (GetCareersPage_careersPage_data_attributes_ourBenefits_items | null)[];
}

export interface GetCareersPage_careersPage_data_attributes {
  __typename: "CareersPage";
  SEO: GetCareersPage_careersPage_data_attributes_SEO | null;
  banner: GetCareersPage_careersPage_data_attributes_banner;
  process: GetCareersPage_careersPage_data_attributes_process;
  currentVacancies: GetCareersPage_careersPage_data_attributes_currentVacancies;
  ourBenefits: GetCareersPage_careersPage_data_attributes_ourBenefits;
}

export interface GetCareersPage_careersPage_data {
  __typename: "CareersPageEntity";
  attributes: GetCareersPage_careersPage_data_attributes | null;
}

export interface GetCareersPage_careersPage {
  __typename: "CareersPageEntityResponse";
  data: GetCareersPage_careersPage_data | null;
}

export interface GetCareersPage_filterSpecialities_data_attributes {
  __typename: "FilterSpeciality";
  name: string | null;
}

export interface GetCareersPage_filterSpecialities_data {
  __typename: "FilterSpecialityEntity";
  id: string | null;
  attributes: GetCareersPage_filterSpecialities_data_attributes | null;
}

export interface GetCareersPage_filterSpecialities {
  __typename: "FilterSpecialityEntityResponseCollection";
  data: GetCareersPage_filterSpecialities_data[];
}

export interface GetCareersPage_filterTechnologies_data_attributes {
  __typename: "FilterTechnology";
  name: string;
}

export interface GetCareersPage_filterTechnologies_data {
  __typename: "FilterTechnologyEntity";
  id: string | null;
  attributes: GetCareersPage_filterTechnologies_data_attributes | null;
}

export interface GetCareersPage_filterTechnologies {
  __typename: "FilterTechnologyEntityResponseCollection";
  data: GetCareersPage_filterTechnologies_data[];
}

export interface GetCareersPage {
  careersPage: GetCareersPage_careersPage | null;
  filterSpecialities: GetCareersPage_filterSpecialities | null;
  filterTechnologies: GetCareersPage_filterTechnologies | null;
}
