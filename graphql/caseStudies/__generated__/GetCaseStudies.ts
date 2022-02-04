/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCaseStudies
// ====================================================

export interface GetCaseStudies_caseStudiesPage_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes {
  __typename: "CaseStudiesPage";
  title: string;
  description: string;
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

export interface GetCaseStudies_industries_data_attributes {
  __typename: "Industry";
  name: string;
}

export interface GetCaseStudies_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetCaseStudies_industries_data_attributes | null;
}

export interface GetCaseStudies_industries {
  __typename: "IndustryEntityResponseCollection";
  data: GetCaseStudies_industries_data[];
}

export interface GetCaseStudies {
  caseStudiesPage: GetCaseStudies_caseStudiesPage | null;
  industries: GetCaseStudies_industries | null;
}
