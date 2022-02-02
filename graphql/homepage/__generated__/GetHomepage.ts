/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHomepage
// ====================================================

export interface GetHomepage_homePage_data_attributes_banner_titleTexture_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetHomepage_homePage_data_attributes_banner_titleTexture_data {
  __typename: "UploadFileEntity";
  attributes: GetHomepage_homePage_data_attributes_banner_titleTexture_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_banner_titleTexture {
  __typename: "UploadFileEntityResponse";
  data: GetHomepage_homePage_data_attributes_banner_titleTexture_data | null;
}

export interface GetHomepage_homePage_data_attributes_banner {
  __typename: "ComponentHomepageHomepage";
  title: string;
  titleTexture: GetHomepage_homePage_data_attributes_banner_titleTexture;
}

export interface GetHomepage_homePage_data_attributes_coopSteps_steps_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetHomepage_homePage_data_attributes_coopSteps_steps_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_coopSteps_steps_image_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_coopSteps_steps_image {
  __typename: "UploadFileEntityResponse";
  data: GetHomepage_homePage_data_attributes_coopSteps_steps_image_data | null;
}

export interface GetHomepage_homePage_data_attributes_coopSteps_steps {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
  image: GetHomepage_homePage_data_attributes_coopSteps_steps_image | null;
}

export interface GetHomepage_homePage_data_attributes_coopSteps_button {
  __typename: "ComponentButtonsButton";
  url: string;
  label: string;
}

export interface GetHomepage_homePage_data_attributes_coopSteps {
  __typename: "ComponentHomepageCoopSteps";
  intro: string;
  steps: (GetHomepage_homePage_data_attributes_coopSteps_steps | null)[];
  button: GetHomepage_homePage_data_attributes_coopSteps_button;
}

export interface GetHomepage_homePage_data_attributes_services_services_data_attributes {
  __typename: "Service";
  url: string | null;
  name: string;
}

export interface GetHomepage_homePage_data_attributes_services_services_data {
  __typename: "ServiceEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_services_services_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_services_services {
  __typename: "ServiceRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_services_services_data[];
}

export interface GetHomepage_homePage_data_attributes_services {
  __typename: "ComponentHomepageServices";
  title: string;
  description: string;
  services: GetHomepage_homePage_data_attributes_services_services | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_icon_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_icon_data {
  __typename: "UploadFileEntity";
  attributes: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_icon_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_icon {
  __typename: "UploadFileEntityResponse";
  data: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_icon_data | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data_attributes_iconForOtherPages_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data_attributes_iconForOtherPages_data {
  __typename: "UploadFileEntity";
  attributes: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data_attributes_iconForOtherPages_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data_attributes_iconForOtherPages {
  __typename: "UploadFileEntityResponse";
  data: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data_attributes_iconForOtherPages_data | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  name: string;
  url: string | null;
  iconForOtherPages: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data_attributes_iconForOtherPages | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data[];
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes {
  __typename: "TechStack";
  name: string | null;
  icon: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_icon;
  technologies: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks_data {
  __typename: "TechStackEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_technologies_tech_stacks {
  __typename: "TechStackRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data[];
}

export interface GetHomepage_homePage_data_attributes_technologies {
  __typename: "ComponentHomepageTechnologies";
  title: string;
  tech_stacks: GetHomepage_homePage_data_attributes_technologies_tech_stacks | null;
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  name: string;
  url: string | null;
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_technologies_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_technologies_data[];
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_featuredImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_featuredImage_data {
  __typename: "UploadFileEntity";
  attributes: GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_featuredImage_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_featuredImage {
  __typename: "UploadFileRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_featuredImage_data[];
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes {
  __typename: "Project";
  technologies: GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_technologies | null;
  name: string;
  description: string;
  url: string | null;
  featuredImage: GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes_featuredImage;
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_projects {
  __typename: "ProjectRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_embodiedIdeas_projects_data[];
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas_button {
  __typename: "ComponentButtonsButton";
  url: string;
  label: string;
}

export interface GetHomepage_homePage_data_attributes_embodiedIdeas {
  __typename: "ComponentHomepageEmbodiedIdeas";
  title: string;
  buttonIntro: string;
  projects: GetHomepage_homePage_data_attributes_embodiedIdeas_projects | null;
  button: GetHomepage_homePage_data_attributes_embodiedIdeas_button;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_video_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_video_data {
  __typename: "UploadFileEntity";
  attributes: GetHomepage_homePage_data_attributes_aboutUs_video_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_video {
  __typename: "UploadFileEntityResponse";
  data: GetHomepage_homePage_data_attributes_aboutUs_video_data | null;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data_attributes_clientPhoto_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data_attributes_clientPhoto_data {
  __typename: "UploadFileEntity";
  attributes: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data_attributes_clientPhoto_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data_attributes_clientPhoto {
  __typename: "UploadFileEntityResponse";
  data: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data_attributes_clientPhoto_data | null;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data_attributes {
  __typename: "Feedback";
  text: string;
  clientName: string;
  clientPosition: string;
  clientPhoto: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data_attributes_clientPhoto;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data {
  __typename: "FeedbackEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_aboutUs_feedbacks {
  __typename: "FeedbackRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_aboutUs_feedbacks_data[];
}

export interface GetHomepage_homePage_data_attributes_aboutUs {
  __typename: "ComponentHomepageAboutUs";
  title: string;
  description: string;
  video: GetHomepage_homePage_data_attributes_aboutUs_video;
  feedbacks: GetHomepage_homePage_data_attributes_aboutUs_feedbacks | null;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_previewImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_previewImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_previewImage_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_previewImage {
  __typename: "UploadFileEntityResponse";
  data: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_previewImage_data | null;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_industries_data_attributes {
  __typename: "Industry";
  url: string | null;
  name: string;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_industries_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_industries_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_industries {
  __typename: "IndustryRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_industries_data[];
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_tags_data_attributes {
  __typename: "Tag";
  name: string;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_tags_data {
  __typename: "TagEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_tags_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes_tags {
  __typename: "TagRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_tags_data[];
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data_attributes {
  __typename: "Article";
  url: string | null;
  title: string;
  previewImage: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_previewImage;
  industries: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_industries | null;
  tags: GetHomepage_homePage_data_attributes_insights_articles_data_attributes_tags | null;
}

export interface GetHomepage_homePage_data_attributes_insights_articles_data {
  __typename: "ArticleEntity";
  id: string | null;
  attributes: GetHomepage_homePage_data_attributes_insights_articles_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_insights_articles {
  __typename: "ArticleRelationResponseCollection";
  data: GetHomepage_homePage_data_attributes_insights_articles_data[];
}

export interface GetHomepage_homePage_data_attributes_insights {
  __typename: "ComponentArticleRelatedArticles";
  intro: string;
  articles: GetHomepage_homePage_data_attributes_insights_articles | null;
}

export interface GetHomepage_homePage_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetHomepage_homePage_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetHomepage_homePage_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  attributes: GetHomepage_homePage_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetHomepage_homePage_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetHomepage_homePage_data_attributes_SEO_ogImage_data | null;
}

export interface GetHomepage_homePage_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  ogTitle: string | null;
  ogImage: GetHomepage_homePage_data_attributes_SEO_ogImage | null;
  keywords: string | null;
  description: string | null;
  ogDescription: string | null;
}

export interface GetHomepage_homePage_data_attributes {
  __typename: "HomePage";
  banner: GetHomepage_homePage_data_attributes_banner;
  coopSteps: GetHomepage_homePage_data_attributes_coopSteps;
  services: GetHomepage_homePage_data_attributes_services;
  technologies: GetHomepage_homePage_data_attributes_technologies;
  embodiedIdeas: GetHomepage_homePage_data_attributes_embodiedIdeas;
  aboutUs: GetHomepage_homePage_data_attributes_aboutUs;
  insights: GetHomepage_homePage_data_attributes_insights;
  contactUs: GetHomepage_homePage_data_attributes_contactUs;
  SEO: GetHomepage_homePage_data_attributes_SEO | null;
}

export interface GetHomepage_homePage_data {
  __typename: "HomePageEntity";
  attributes: GetHomepage_homePage_data_attributes | null;
}

export interface GetHomepage_homePage {
  __typename: "HomePageEntityResponse";
  data: GetHomepage_homePage_data | null;
}

export interface GetHomepage {
  homePage: GetHomepage_homePage | null;
}
