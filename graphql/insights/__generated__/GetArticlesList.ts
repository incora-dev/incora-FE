/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticlesList
// ====================================================

export interface GetArticlesList_articles_meta_pagination {
  __typename: "Pagination";
  total: number;
}

export interface GetArticlesList_articles_meta {
  __typename: "ResponseCollectionMeta";
  pagination: GetArticlesList_articles_meta_pagination;
}

export interface GetArticlesList_articles_data_attributes_industries_data_attributes {
  __typename: "Industry";
  name: string;
  url: string | null;
}

export interface GetArticlesList_articles_data_attributes_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetArticlesList_articles_data_attributes_industries_data_attributes | null;
}

export interface GetArticlesList_articles_data_attributes_industries {
  __typename: "IndustryRelationResponseCollection";
  data: GetArticlesList_articles_data_attributes_industries_data[];
}

export interface GetArticlesList_articles_data_attributes_previewImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetArticlesList_articles_data_attributes_previewImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetArticlesList_articles_data_attributes_previewImage_data_attributes | null;
}

export interface GetArticlesList_articles_data_attributes_previewImage {
  __typename: "UploadFileEntityResponse";
  data: GetArticlesList_articles_data_attributes_previewImage_data | null;
}

export interface GetArticlesList_articles_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string;
}

export interface GetArticlesList_articles_data_attributes_tags_data {
  __typename: "TagEntity";
  id: string | null;
  attributes: GetArticlesList_articles_data_attributes_tags_data_attributes | null;
}

export interface GetArticlesList_articles_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetArticlesList_articles_data_attributes_tags_data[];
}

export interface GetArticlesList_articles_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetArticlesList_articles_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  attributes: GetArticlesList_articles_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetArticlesList_articles_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetArticlesList_articles_data_attributes_SEO_ogImage_data | null;
}

export interface GetArticlesList_articles_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  ogTitle: string | null;
  ogImage: GetArticlesList_articles_data_attributes_SEO_ogImage | null;
  keywords: string | null;
  description: string | null;
  ogDescription: string | null;
}

export interface GetArticlesList_articles_data_attributes {
  __typename: "Article";
  url: string | null;
  title: string;
  industries: GetArticlesList_articles_data_attributes_industries | null;
  previewImage: GetArticlesList_articles_data_attributes_previewImage;
  tags: GetArticlesList_articles_data_attributes_tags | null;
  SEO: GetArticlesList_articles_data_attributes_SEO | null;
}

export interface GetArticlesList_articles_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: GetArticlesList_articles_data_attributes | null;
}

export interface GetArticlesList_articles {
  __typename: "ArticleEntityResponseCollection";
  meta: GetArticlesList_articles_meta;
  data: GetArticlesList_articles_data[];
}

export interface GetArticlesList {
  articles: GetArticlesList_articles | null;
}

export interface GetArticlesListVariables {
  query?: string | null;
  industry?: string | null;
  page?: number | null;
}
