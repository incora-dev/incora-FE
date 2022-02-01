/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIndustryPage
// ====================================================

export interface GetIndustryPage_industries_data_attributes_icon_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetIndustryPage_industries_data_attributes_icon_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes_icon_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_icon {
  __typename: "UploadFileEntityResponse";
  data: GetIndustryPage_industries_data_attributes_icon_data | null;
}

export interface GetIndustryPage_industries_data_attributes_offeredSolutions_items_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetIndustryPage_industries_data_attributes_offeredSolutions_items_image_data {
  __typename: "UploadFileEntity";
  attributes: GetIndustryPage_industries_data_attributes_offeredSolutions_items_image_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_offeredSolutions_items_image {
  __typename: "UploadFileEntityResponse";
  data: GetIndustryPage_industries_data_attributes_offeredSolutions_items_image_data | null;
}

export interface GetIndustryPage_industries_data_attributes_offeredSolutions_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
  image: GetIndustryPage_industries_data_attributes_offeredSolutions_items_image | null;
}

export interface GetIndustryPage_industries_data_attributes_offeredSolutions {
  __typename: "ComponentCommonList";
  intro: string;
  items: (GetIndustryPage_industries_data_attributes_offeredSolutions_items | null)[];
}

export interface GetIndustryPage_industries_data_attributes_projects_data_attributes_industry_data_attributes {
  __typename: "Industry";
  name: string;
  url: string | null;
}

export interface GetIndustryPage_industries_data_attributes_projects_data_attributes_industry_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes_projects_data_attributes_industry_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_projects_data_attributes_industry {
  __typename: "IndustryEntityResponse";
  data: GetIndustryPage_industries_data_attributes_projects_data_attributes_industry_data | null;
}

export interface GetIndustryPage_industries_data_attributes_projects_data_attributes_featuredImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetIndustryPage_industries_data_attributes_projects_data_attributes_featuredImage_data {
  __typename: "UploadFileEntity";
  attributes: GetIndustryPage_industries_data_attributes_projects_data_attributes_featuredImage_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_projects_data_attributes_featuredImage {
  __typename: "UploadFileRelationResponseCollection";
  data: GetIndustryPage_industries_data_attributes_projects_data_attributes_featuredImage_data[];
}

export interface GetIndustryPage_industries_data_attributes_projects_data_attributes {
  __typename: "Project";
  url: string | null;
  name: string;
  description: string;
  industry: GetIndustryPage_industries_data_attributes_projects_data_attributes_industry | null;
  featuredImage: GetIndustryPage_industries_data_attributes_projects_data_attributes_featuredImage;
}

export interface GetIndustryPage_industries_data_attributes_projects_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes_projects_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_projects {
  __typename: "ProjectRelationResponseCollection";
  data: GetIndustryPage_industries_data_attributes_projects_data[];
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_previewImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_previewImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_previewImage_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_previewImage {
  __typename: "UploadFileEntityResponse";
  data: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_previewImage_data | null;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_industries_data_attributes {
  __typename: "Industry";
  url: string | null;
  name: string;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_industries_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_industries {
  __typename: "IndustryRelationResponseCollection";
  data: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_industries_data[];
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_tags_data {
  __typename: "TagEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_tags_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_tags_data[];
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data_attributes {
  __typename: "Article";
  url: string | null;
  title: string;
  previewImage: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_previewImage;
  industries: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_industries | null;
  tags: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes_tags | null;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes_insights_articles_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_insights_articles {
  __typename: "ArticleRelationResponseCollection";
  data: GetIndustryPage_industries_data_attributes_insights_articles_data[];
}

export interface GetIndustryPage_industries_data_attributes_insights {
  __typename: "ComponentArticleRelatedArticles";
  intro: string;
  articles: GetIndustryPage_industries_data_attributes_insights_articles | null;
}

export interface GetIndustryPage_industries_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetIndustryPage_industries_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetIndustryPage_industries_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetIndustryPage_industries_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetIndustryPage_industries_data_attributes_SEO_ogImage_data | null;
}

export interface GetIndustryPage_industries_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  id: string;
  keywords: string | null;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: GetIndustryPage_industries_data_attributes_SEO_ogImage | null;
}

export interface GetIndustryPage_industries_data_attributes {
  __typename: "Industry";
  name: string;
  description: string | null;
  icon: GetIndustryPage_industries_data_attributes_icon | null;
  offeredSolutions: GetIndustryPage_industries_data_attributes_offeredSolutions | null;
  projects: GetIndustryPage_industries_data_attributes_projects | null;
  insights: GetIndustryPage_industries_data_attributes_insights;
  contactUs: GetIndustryPage_industries_data_attributes_contactUs | null;
  SEO: GetIndustryPage_industries_data_attributes_SEO | null;
}

export interface GetIndustryPage_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetIndustryPage_industries_data_attributes | null;
}

export interface GetIndustryPage_industries {
  __typename: "IndustryEntityResponseCollection";
  data: GetIndustryPage_industries_data[];
}

export interface GetIndustryPage {
  industries: GetIndustryPage_industries | null;
}

export interface GetIndustryPageVariables {
  url?: string | null;
}
