/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOurTraditions
// ====================================================

export interface GetOurTraditions_aboutPage_data_attributes_ourTraditions {
  __typename: "ComponentAboutPageTraditions";
  title: string;
  text: string | null;
}

export interface GetOurTraditions_aboutPage_data_attributes {
  __typename: "AboutPage";
  ourTraditions: GetOurTraditions_aboutPage_data_attributes_ourTraditions;
}

export interface GetOurTraditions_aboutPage_data {
  __typename: "AboutPageEntity";
  attributes: GetOurTraditions_aboutPage_data_attributes | null;
}

export interface GetOurTraditions_aboutPage {
  __typename: "AboutPageEntityResponse";
  data: GetOurTraditions_aboutPage_data | null;
}

export interface GetOurTraditions {
  aboutPage: GetOurTraditions_aboutPage | null;
}
