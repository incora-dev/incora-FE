/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCaseStudies
// ====================================================

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  name: string;
  url: string | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies_data_attributes | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies_data[];
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo_item_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo_item_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo_item_image_data_attributes | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo_item_image {
  __typename: "UploadFileEntityResponse";
  data: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo_item_image_data | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo_item {
  __typename: "ComponentCommonItem";
  title: string;
  description: string | null;
  image: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo_item_image | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo {
  __typename: "ComponentProjectMainInfo";
  item: (GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo_item | null)[];
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes {
  __typename: "Project";
  technologies: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies | null;
  url: string | null;
  mainInfo: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_mainInfo;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects {
  __typename: "ProjectRelationResponseCollection";
  data: GetCaseStudies_caseStudiesPage_data_attributes_projects_data[];
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_contactUs {
  __typename: "ComponentCommonContactUsForm";
  title: string;
  subtitle: string;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes {
  __typename: "CaseStudiesPage";
  title: string;
  description: string | null;
  projects: GetCaseStudies_caseStudiesPage_data_attributes_projects | null;
  contactUs: GetCaseStudies_caseStudiesPage_data_attributes_contactUs;
}

export interface GetCaseStudies_caseStudiesPage_data {
  __typename: "CaseStudiesPageEntity";
  attributes: GetCaseStudies_caseStudiesPage_data_attributes | null;
}

export interface GetCaseStudies_caseStudiesPage {
  __typename: "CaseStudiesPageEntityResponse";
  data: GetCaseStudies_caseStudiesPage_data | null;
}

export interface GetCaseStudies {
  caseStudiesPage: GetCaseStudies_caseStudiesPage | null;
}
