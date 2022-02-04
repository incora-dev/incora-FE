/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticle
// ====================================================

export interface GetArticle_article_data_attributes_count {
  __typename: "ComponentCommonCount";
  views: any | null;
  likes: any | null;
  valuable: any | null;
  exciting: any | null;
  unsatisfied: any | null;
  id: string;
}

export interface GetArticle_article_data_attributes_industries_data_attributes {
  __typename: "Industry";
  name: string;
}

export interface GetArticle_article_data_attributes_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetArticle_article_data_attributes_industries_data_attributes | null;
}

export interface GetArticle_article_data_attributes_industries {
  __typename: "IndustryRelationResponseCollection";
  data: GetArticle_article_data_attributes_industries_data[];
}

export interface GetArticle_article_data_attributes_author_data_attributes_profilePhoto_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
}

export interface GetArticle_article_data_attributes_author_data_attributes_profilePhoto_data {
  __typename: "UploadFileEntity";
  attributes: GetArticle_article_data_attributes_author_data_attributes_profilePhoto_data_attributes | null;
}

export interface GetArticle_article_data_attributes_author_data_attributes_profilePhoto {
  __typename: "UploadFileEntityResponse";
  data: GetArticle_article_data_attributes_author_data_attributes_profilePhoto_data | null;
}

export interface GetArticle_article_data_attributes_author_data_attributes {
  __typename: "IncoraWorker";
  name: string;
  position: string;
  facebook: string | null;
  linkedin: string | null;
  profilePhoto: GetArticle_article_data_attributes_author_data_attributes_profilePhoto;
}

export interface GetArticle_article_data_attributes_author_data {
  __typename: "IncoraWorkerEntity";
  attributes: GetArticle_article_data_attributes_author_data_attributes | null;
}

export interface GetArticle_article_data_attributes_author {
  __typename: "IncoraWorkerEntityResponse";
  data: GetArticle_article_data_attributes_author_data | null;
}

export interface GetArticle_article_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string;
}

export interface GetArticle_article_data_attributes_tags_data {
  __typename: "TagEntity";
  id: string | null;
  attributes: GetArticle_article_data_attributes_tags_data_attributes | null;
}

export interface GetArticle_article_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetArticle_article_data_attributes_tags_data[];
}

export interface GetArticle_article_data_attributes_impressions {
  __typename: "ComponentArticleImpression";
  intro: string;
}

export interface GetArticle_article_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_previewImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_previewImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_previewImage_data_attributes | null;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_previewImage {
  __typename: "UploadFileEntityResponse";
  data: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_previewImage_data | null;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_industries_data_attributes {
  __typename: "Industry";
  url: string | null;
  name: string;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_industries_data_attributes | null;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_industries {
  __typename: "IndustryRelationResponseCollection";
  data: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_industries_data[];
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_tags_data {
  __typename: "TagEntity";
  id: string | null;
  attributes: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_tags_data_attributes | null;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_tags_data[];
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data_attributes {
  __typename: "Article";
  url: string | null;
  title: string;
  previewImage: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_previewImage;
  industries: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_industries | null;
  tags: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes_tags | null;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: GetArticle_article_data_attributes_relatedArticles_articles_data_attributes | null;
}

export interface GetArticle_article_data_attributes_relatedArticles_articles {
  __typename: "ArticleRelationResponseCollection";
  data: GetArticle_article_data_attributes_relatedArticles_articles_data[];
}

export interface GetArticle_article_data_attributes_relatedArticles {
  __typename: "ComponentArticleRelatedArticles";
  intro: string;
  articles: GetArticle_article_data_attributes_relatedArticles_articles | null;
}

export interface GetArticle_article_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetArticle_article_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  attributes: GetArticle_article_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetArticle_article_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetArticle_article_data_attributes_SEO_ogImage_data | null;
}

export interface GetArticle_article_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  ogTitle: string | null;
  ogImage: GetArticle_article_data_attributes_SEO_ogImage | null;
  keywords: string | null;
  description: string | null;
  ogDescription: string | null;
}

export interface GetArticle_article_data_attributes {
  __typename: "Article";
  title: string;
  content: string;
  createdAt: any | null;
  count: GetArticle_article_data_attributes_count;
  industries: GetArticle_article_data_attributes_industries | null;
  author: GetArticle_article_data_attributes_author | null;
  tags: GetArticle_article_data_attributes_tags | null;
  impressions: GetArticle_article_data_attributes_impressions;
  contactUs: GetArticle_article_data_attributes_contactUs;
  relatedArticles: GetArticle_article_data_attributes_relatedArticles | null;
  SEO: GetArticle_article_data_attributes_SEO | null;
}

export interface GetArticle_article_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: GetArticle_article_data_attributes | null;
}

export interface GetArticle_article {
  __typename: "ArticleEntityResponse";
  data: GetArticle_article_data | null;
}

export interface GetArticle {
  article: GetArticle_article | null;
}

export interface GetArticleVariables {
  id?: string | null;
}
