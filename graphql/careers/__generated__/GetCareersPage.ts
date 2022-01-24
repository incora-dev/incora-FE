/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCareersPage
// ====================================================

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

export interface GetCareersPage_careersPage_data_attributes {
  __typename: "CareersPage";
  banner: GetCareersPage_careersPage_data_attributes_banner;
  process: GetCareersPage_careersPage_data_attributes_process;
  currentVacancies: GetCareersPage_careersPage_data_attributes_currentVacancies;
}

export interface GetCareersPage_careersPage_data {
  __typename: "CareersPageEntity";
  attributes: GetCareersPage_careersPage_data_attributes | null;
}

export interface GetCareersPage_careersPage {
  __typename: "CareersPageEntityResponse";
  data: GetCareersPage_careersPage_data | null;
}

export interface GetCareersPage {
  careersPage: GetCareersPage_careersPage | null;
}
