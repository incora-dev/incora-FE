/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCount
// ====================================================

export interface UpdateCount_updateArticle_data_attributes_count {
  __typename: "ComponentCommonCount";
  id: string;
  likes: any | null;
  valuable: any | null;
  exciting: any | null;
  unsatisfied: any | null;
  views: any | null;
}

export interface UpdateCount_updateArticle_data_attributes {
  __typename: "Article";
  count: UpdateCount_updateArticle_data_attributes_count;
}

export interface UpdateCount_updateArticle_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: UpdateCount_updateArticle_data_attributes | null;
}

export interface UpdateCount_updateArticle {
  __typename: "ArticleEntityResponse";
  data: UpdateCount_updateArticle_data | null;
}

export interface UpdateCount {
  updateArticle: UpdateCount_updateArticle | null;
}

export interface UpdateCountVariables {
  id: string;
  likes?: any | null;
  valuable?: any | null;
  exciting?: any | null;
  unsatisfied?: any | null;
  views?: any | null;
}
