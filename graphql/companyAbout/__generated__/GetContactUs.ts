/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetContactUs
// ====================================================

export interface GetContactUs_aboutPage_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetContactUs_aboutPage_data_attributes {
  __typename: "AboutPage";
  contactUs: GetContactUs_aboutPage_data_attributes_contactUs;
}

export interface GetContactUs_aboutPage_data {
  __typename: "AboutPageEntity";
  attributes: GetContactUs_aboutPage_data_attributes | null;
}

export interface GetContactUs_aboutPage {
  __typename: "AboutPageEntityResponse";
  data: GetContactUs_aboutPage_data | null;
}

export interface GetContactUs {
  aboutPage: GetContactUs_aboutPage | null;
}
