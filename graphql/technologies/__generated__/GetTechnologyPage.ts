/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTechnologyPage
// ====================================================

export interface GetTechnologyPage_technology_data_attributes_icon_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetTechnologyPage_technology_data_attributes_icon_data {
  __typename: "UploadFileEntity";
  attributes: GetTechnologyPage_technology_data_attributes_icon_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_icon {
  __typename: "UploadFileEntityResponse";
  data: GetTechnologyPage_technology_data_attributes_icon_data | null;
}

export interface GetTechnologyPage_technology_data_attributes_tech_stack_data_attributes {
  __typename: "TechStack";
  name: string | null;
}

export interface GetTechnologyPage_technology_data_attributes_tech_stack_data {
  __typename: "TechStackEntity";
  attributes: GetTechnologyPage_technology_data_attributes_tech_stack_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_tech_stack {
  __typename: "TechStackEntityResponse";
  data: GetTechnologyPage_technology_data_attributes_tech_stack_data | null;
}

export interface GetTechnologyPage_technology_data_attributes_whyShouldYouUse_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
}

export interface GetTechnologyPage_technology_data_attributes_whyShouldYouUse {
  __typename: "ComponentCommonList";
  intro: string;
  items: (GetTechnologyPage_technology_data_attributes_whyShouldYouUse_items | null)[];
}

export interface GetTechnologyPage_technology_data_attributes_popularWebsites_pictures_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetTechnologyPage_technology_data_attributes_popularWebsites_pictures_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetTechnologyPage_technology_data_attributes_popularWebsites_pictures_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_popularWebsites_pictures {
  __typename: "UploadFileRelationResponseCollection";
  data: GetTechnologyPage_technology_data_attributes_popularWebsites_pictures_data[];
}

export interface GetTechnologyPage_technology_data_attributes_popularWebsites {
  __typename: "ComponentCommonGallery";
  intro: string;
  pictures: GetTechnologyPage_technology_data_attributes_popularWebsites_pictures;
}

export interface GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items_image_data {
  __typename: "UploadFileEntity";
  attributes: GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items_image_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items_image {
  __typename: "UploadFileEntityResponse";
  data: GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items_image_data | null;
}

export interface GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
  image: GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items_image | null;
}

export interface GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_connections {
  __typename: "ComponentTechnologyConnections";
  text: string | null;
  id: string;
  connectedItems: number | null;
}

export interface GetTechnologyPage_technology_data_attributes_whyDevelopWithUs {
  __typename: "ComponentTechnologyConnectedList";
  items: (GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_items | null)[];
  connections: (GetTechnologyPage_technology_data_attributes_whyDevelopWithUs_connections | null)[] | null;
}

export interface GetTechnologyPage_technology_data_attributes_projects_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  name: string;
  url: string | null;
}

export interface GetTechnologyPage_technology_data_attributes_projects_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetTechnologyPage_technology_data_attributes_projects_data_attributes_technologies_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_projects_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetTechnologyPage_technology_data_attributes_projects_data_attributes_technologies_data[];
}

export interface GetTechnologyPage_technology_data_attributes_projects_data_attributes_featuredImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetTechnologyPage_technology_data_attributes_projects_data_attributes_featuredImage_data {
  __typename: "UploadFileEntity";
  attributes: GetTechnologyPage_technology_data_attributes_projects_data_attributes_featuredImage_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_projects_data_attributes_featuredImage {
  __typename: "UploadFileRelationResponseCollection";
  data: GetTechnologyPage_technology_data_attributes_projects_data_attributes_featuredImage_data[];
}

export interface GetTechnologyPage_technology_data_attributes_projects_data_attributes {
  __typename: "Project";
  technologies: GetTechnologyPage_technology_data_attributes_projects_data_attributes_technologies | null;
  name: string;
  description: string;
  url: string | null;
  featuredImage: GetTechnologyPage_technology_data_attributes_projects_data_attributes_featuredImage;
}

export interface GetTechnologyPage_technology_data_attributes_projects_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetTechnologyPage_technology_data_attributes_projects_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_projects {
  __typename: "ProjectRelationResponseCollection";
  data: GetTechnologyPage_technology_data_attributes_projects_data[];
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_previewImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_previewImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_previewImage_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_previewImage {
  __typename: "UploadFileEntityResponse";
  data: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_previewImage_data | null;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_industries_data_attributes {
  __typename: "Industry";
  url: string | null;
  name: string;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_industries_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_industries {
  __typename: "IndustryRelationResponseCollection";
  data: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_industries_data[];
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_tags_data {
  __typename: "TagEntity";
  id: string | null;
  attributes: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_tags_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_tags_data[];
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes {
  __typename: "Article";
  url: string | null;
  title: string;
  previewImage: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_previewImage;
  industries: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_industries | null;
  tags: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes_tags | null;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: GetTechnologyPage_technology_data_attributes_insights_articles_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_insights_articles {
  __typename: "ArticleRelationResponseCollection";
  data: GetTechnologyPage_technology_data_attributes_insights_articles_data[];
}

export interface GetTechnologyPage_technology_data_attributes_insights {
  __typename: "ComponentCommonInsightsRelation";
  intro: string;
  articles: GetTechnologyPage_technology_data_attributes_insights_articles | null;
}

export interface GetTechnologyPage_technology_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetTechnologyPage_technology_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetTechnologyPage_technology_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetTechnologyPage_technology_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetTechnologyPage_technology_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetTechnologyPage_technology_data_attributes_SEO_ogImage_data | null;
}

export interface GetTechnologyPage_technology_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  id: string;
  keywords: string | null;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: GetTechnologyPage_technology_data_attributes_SEO_ogImage | null;
}

export interface GetTechnologyPage_technology_data_attributes {
  __typename: "Technology";
  name: string;
  icon: GetTechnologyPage_technology_data_attributes_icon | null;
  description: string | null;
  tech_stack: GetTechnologyPage_technology_data_attributes_tech_stack | null;
  whyShouldYouUse: GetTechnologyPage_technology_data_attributes_whyShouldYouUse | null;
  popularWebsites: GetTechnologyPage_technology_data_attributes_popularWebsites | null;
  whyDevelopWithUs: GetTechnologyPage_technology_data_attributes_whyDevelopWithUs | null;
  projects: GetTechnologyPage_technology_data_attributes_projects | null;
  insights: GetTechnologyPage_technology_data_attributes_insights | null;
  contactUs: GetTechnologyPage_technology_data_attributes_contactUs | null;
  SEO: GetTechnologyPage_technology_data_attributes_SEO | null;
}

export interface GetTechnologyPage_technology_data {
  __typename: "TechnologyEntity";
  attributes: GetTechnologyPage_technology_data_attributes | null;
}

export interface GetTechnologyPage_technology {
  __typename: "TechnologyEntityResponse";
  data: GetTechnologyPage_technology_data | null;
}

export interface GetTechnologyPage {
  technology: GetTechnologyPage_technology | null;
}

export interface GetTechnologyPageVariables {
  id?: string | null;
}
