/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCaseStudies
// ====================================================

export interface GetCaseStudies_caseStudiesPage_data_attributes_contactUs {
  __typename: "ComponentCommonContactUsForm";
  title: string;
  subtitle: string;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes {
  __typename: "CaseStudiesPage";
  title: string;
  description: string | null;
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
