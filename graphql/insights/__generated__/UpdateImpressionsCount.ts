/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateImpressionsCount
// ====================================================

export interface UpdateImpressionsCount_updateArticle_data_attributes_count {
  __typename: "ComponentCommonCount";
  id: string;
  likes: any | null;
  valuable: any | null;
  exciting: any | null;
  unsatisfied: any | null;
}

export interface UpdateImpressionsCount_updateArticle_data_attributes {
  __typename: "Article";
  count: UpdateImpressionsCount_updateArticle_data_attributes_count;
}

export interface UpdateImpressionsCount_updateArticle_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: UpdateImpressionsCount_updateArticle_data_attributes | null;
}

export interface UpdateImpressionsCount_updateArticle {
  __typename: "ArticleEntityResponse";
  data: UpdateImpressionsCount_updateArticle_data | null;
}

export interface UpdateImpressionsCount {
  updateArticle: UpdateImpressionsCount_updateArticle | null;
}

export interface UpdateImpressionsCountVariables {
  id: string;
  likes?: any | null;
  valuable?: any | null;
  exciting?: any | null;
  unsatisfied?: any | null;
}
