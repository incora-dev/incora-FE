/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateViews
// ====================================================

export interface UpdateViews_updateArticle_data_attributes_count {
  __typename: "ComponentCommonCount";
  views: any | null;
}

export interface UpdateViews_updateArticle_data_attributes {
  __typename: "Article";
  count: UpdateViews_updateArticle_data_attributes_count;
}

export interface UpdateViews_updateArticle_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: UpdateViews_updateArticle_data_attributes | null;
}

export interface UpdateViews_updateArticle {
  __typename: "ArticleEntityResponse";
  data: UpdateViews_updateArticle_data | null;
}

export interface UpdateViews {
  updateArticle: UpdateViews_updateArticle | null;
}

export interface UpdateViewsVariables {
  id: string;
  views?: any | null;
}
