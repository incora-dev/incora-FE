/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetInsightsPage
// ====================================================

export interface GetInsightsPage_insightsPage_data_attributes {
  __typename: "InsightsPage";
  title: string;
  description: string;
  searchBarText: string;
}

export interface GetInsightsPage_insightsPage_data {
  __typename: "InsightsPageEntity";
  attributes: GetInsightsPage_insightsPage_data_attributes | null;
}

export interface GetInsightsPage_insightsPage {
  __typename: "InsightsPageEntityResponse";
  data: GetInsightsPage_insightsPage_data | null;
}

export interface GetInsightsPage_industries_data_attributes {
  __typename: "Industry";
  name: string;
}

export interface GetInsightsPage_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetInsightsPage_industries_data_attributes | null;
}

export interface GetInsightsPage_industries {
  __typename: "IndustryEntityResponseCollection";
  data: GetInsightsPage_industries_data[];
}

export interface GetInsightsPage {
  insightsPage: GetInsightsPage_insightsPage | null;
  industries: GetInsightsPage_industries | null;
}
