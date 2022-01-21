/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDescription
// ====================================================

export interface GetDescription_aboutPage_data_attributes_mainInfo {
  __typename: "ComponentAboutPageMainInfo";
  description: string;
  text: string;
}

export interface GetDescription_aboutPage_data_attributes {
  __typename: "AboutPage";
  mainInfo: GetDescription_aboutPage_data_attributes_mainInfo;
}

export interface GetDescription_aboutPage_data {
  __typename: "AboutPageEntity";
  attributes: GetDescription_aboutPage_data_attributes | null;
}

export interface GetDescription_aboutPage {
  __typename: "AboutPageEntityResponse";
  data: GetDescription_aboutPage_data | null;
}

export interface GetDescription {
  aboutPage: GetDescription_aboutPage | null;
}
