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

export interface GetCaseStudies_caseStudiesPage_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  attributes: GetCaseStudies_caseStudiesPage_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetCaseStudies_caseStudiesPage_data_attributes_SEO_ogImage_data | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  ogTitle: string | null;
  ogImage: GetCaseStudies_caseStudiesPage_data_attributes_SEO_ogImage | null;
  keywords: string | null;
  description: string | null;
  ogDescription: string | null;
}

export interface GetCaseStudies_caseStudiesPage_data_attributes {
  __typename: "CaseStudiesPage";
  title: string;
  description: string;
  contactUs: GetCaseStudies_caseStudiesPage_data_attributes_contactUs;
  SEO: GetCaseStudies_caseStudiesPage_data_attributes_SEO | null;
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

export interface GetCaseStudies_locations_data_attributes_location {
  __typename: "ComponentProjectLocation";
  lat: number;
  lng: number;
  id: string;
}

export interface GetCaseStudies_locations_data_attributes {
  __typename: "Location";
  country: string;
  location: GetCaseStudies_locations_data_attributes_location | null;
}

export interface GetCaseStudies_locations_data {
  __typename: "LocationEntity";
  attributes: GetCaseStudies_locations_data_attributes | null;
}

export interface GetCaseStudies_locations {
  __typename: "LocationEntityResponseCollection";
  data: GetCaseStudies_locations_data[];
}

export interface GetCaseStudies {
  caseStudiesPage: GetCaseStudies_caseStudiesPage | null;
  industries: GetCaseStudies_industries | null;
  locations: GetCaseStudies_locations | null;
}
