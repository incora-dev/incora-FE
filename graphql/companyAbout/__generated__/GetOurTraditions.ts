/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOurTraditions
// ====================================================

export interface GetOurTraditions_aboutPage_data_attributes_ourTraditions_gallery_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetOurTraditions_aboutPage_data_attributes_ourTraditions_gallery_data {
  __typename: "UploadFileEntity";
  attributes: GetOurTraditions_aboutPage_data_attributes_ourTraditions_gallery_data_attributes | null;
}

export interface GetOurTraditions_aboutPage_data_attributes_ourTraditions_gallery {
  __typename: "UploadFileRelationResponseCollection";
  data: GetOurTraditions_aboutPage_data_attributes_ourTraditions_gallery_data[];
}

export interface GetOurTraditions_aboutPage_data_attributes_ourTraditions {
  __typename: "ComponentAboutPageTraditions";
  title: string;
  text: string | null;
  gallery: GetOurTraditions_aboutPage_data_attributes_ourTraditions_gallery;
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
