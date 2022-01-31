/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticle
// ====================================================

export interface GetArticle_articles_data_attributes_industries_data_attributes {
  __typename: "Industry";
  name: string;
}

export interface GetArticle_articles_data_attributes_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetArticle_articles_data_attributes_industries_data_attributes | null;
}

export interface GetArticle_articles_data_attributes_industries {
  __typename: "IndustryRelationResponseCollection";
  data: GetArticle_articles_data_attributes_industries_data[];
}

export interface GetArticle_articles_data_attributes_author_data_attributes_profilePhoto_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
}

export interface GetArticle_articles_data_attributes_author_data_attributes_profilePhoto_data {
  __typename: "UploadFileEntity";
  attributes: GetArticle_articles_data_attributes_author_data_attributes_profilePhoto_data_attributes | null;
}

export interface GetArticle_articles_data_attributes_author_data_attributes_profilePhoto {
  __typename: "UploadFileEntityResponse";
  data: GetArticle_articles_data_attributes_author_data_attributes_profilePhoto_data | null;
}

export interface GetArticle_articles_data_attributes_author_data_attributes {
  __typename: "IncoraWorker";
  name: string;
  position: string;
  facebook: string | null;
  linkedin: string | null;
  profilePhoto: GetArticle_articles_data_attributes_author_data_attributes_profilePhoto;
}

export interface GetArticle_articles_data_attributes_author_data {
  __typename: "IncoraWorkerEntity";
  attributes: GetArticle_articles_data_attributes_author_data_attributes | null;
}

export interface GetArticle_articles_data_attributes_author {
  __typename: "IncoraWorkerEntityResponse";
  data: GetArticle_articles_data_attributes_author_data | null;
}

export interface GetArticle_articles_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string;
}

export interface GetArticle_articles_data_attributes_tags_data {
  __typename: "TagEntity";
  id: string | null;
  attributes: GetArticle_articles_data_attributes_tags_data_attributes | null;
}

export interface GetArticle_articles_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetArticle_articles_data_attributes_tags_data[];
}

export interface GetArticle_articles_data_attributes_impressions {
  __typename: "ComponentArticleImpression";
  intro: string;
}

export interface GetArticle_articles_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data_attributes_previewImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data_attributes_previewImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data_attributes_previewImage_data_attributes | null;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data_attributes_previewImage {
  __typename: "UploadFileEntityResponse";
  data: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data_attributes_previewImage_data | null;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data_attributes {
  __typename: "Article";
  previewImage: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data_attributes_previewImage;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data {
  __typename: "ArticleEntity";
  attributes: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data_attributes | null;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles {
  __typename: "ArticleRelationResponseCollection";
  data: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles_data[];
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string;
  articles: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes_articles | null;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data {
  __typename: "TagEntity";
  id: string | null;
  attributes: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes | null;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags_data[];
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes {
  __typename: "Article";
  url: string | null;
  tags: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes_tags | null;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: GetArticle_articles_data_attributes_relatedArticles_articles_data_attributes | null;
}

export interface GetArticle_articles_data_attributes_relatedArticles_articles {
  __typename: "ArticleRelationResponseCollection";
  data: GetArticle_articles_data_attributes_relatedArticles_articles_data[];
}

export interface GetArticle_articles_data_attributes_relatedArticles {
  __typename: "ComponentArticleRelatedArticles";
  intro: string;
  articles: GetArticle_articles_data_attributes_relatedArticles_articles | null;
}

export interface GetArticle_articles_data_attributes {
  __typename: "Article";
  title: string;
  views: any | null;
  content: string;
  createdAt: any | null;
  industries: GetArticle_articles_data_attributes_industries | null;
  author: GetArticle_articles_data_attributes_author | null;
  tags: GetArticle_articles_data_attributes_tags | null;
  impressions: GetArticle_articles_data_attributes_impressions;
  contactUs: GetArticle_articles_data_attributes_contactUs;
  relatedArticles: GetArticle_articles_data_attributes_relatedArticles | null;
}

export interface GetArticle_articles_data {
  __typename: "ArticleEntity";
  attributes: GetArticle_articles_data_attributes | null;
}

export interface GetArticle_articles {
  __typename: "ArticleEntityResponseCollection";
  data: GetArticle_articles_data[];
}

export interface GetArticle {
  articles: GetArticle_articles | null;
}

export interface GetArticleVariables {
  url?: string | null;
}
