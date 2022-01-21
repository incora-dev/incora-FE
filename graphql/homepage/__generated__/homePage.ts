/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homePage
// ====================================================

export interface homePage_homePage_data_attributes_aboutUs {
  __typename: "ComponentHomepageAboutUs";
  title: string;
}

export interface homePage_homePage_data_attributes {
  __typename: "HomePage";
  aboutUs: homePage_homePage_data_attributes_aboutUs;
}

export interface homePage_homePage_data {
  __typename: "HomePageEntity";
  attributes: homePage_homePage_data_attributes | null;
}

export interface homePage_homePage {
  __typename: "HomePageEntityResponse";
  data: homePage_homePage_data | null;
}

export interface homePage {
  homePage: homePage_homePage | null;
}
