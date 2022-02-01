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

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_featuredImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_featuredImage_data {
  __typename: "UploadFileEntity";
  attributes: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_featuredImage_data_attributes | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_featuredImage {
  __typename: "UploadFileRelationResponseCollection";
  data: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_featuredImage_data[];
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes {
  __typename: "Project";
  technologies: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies | null;
  name: string;
  description: string;
  url: string | null;
  featuredImage: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_featuredImage;
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
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes {
  __typename: "CaseStudiesPage";
  title: string;
  description: string;
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

export interface GetCaseStudiesVariables {
  industry?: string | null;
}
