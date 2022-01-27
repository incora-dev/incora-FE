/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIndustriesNames
// ====================================================

export interface GetIndustriesNames_industries_data_attributes {
  __typename: "Industry";
  name: string;
}

export interface GetIndustriesNames_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetIndustriesNames_industries_data_attributes | null;
}

export interface GetIndustriesNames_industries {
  __typename: "IndustryEntityResponseCollection";
  data: GetIndustriesNames_industries_data[];
}

export interface GetIndustriesNames {
  industries: GetIndustriesNames_industries | null;
}
