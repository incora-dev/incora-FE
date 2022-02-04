/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjects
// ====================================================

export interface GetProjects_projects_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  Technology_name: string | null;
  url: string | null;
}

export interface GetProjects_projects_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetProjects_projects_data_attributes_technologies_data_attributes | null;
}

export interface GetProjects_projects_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetProjects_projects_data_attributes_technologies_data[];
}

export interface GetProjects_projects_data_attributes_featuredImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetProjects_projects_data_attributes_featuredImage_data {
  __typename: "UploadFileEntity";
  attributes: GetProjects_projects_data_attributes_featuredImage_data_attributes | null;
}

export interface GetProjects_projects_data_attributes_featuredImage {
  __typename: "UploadFileRelationResponseCollection";
  data: GetProjects_projects_data_attributes_featuredImage_data[];
}

export interface GetProjects_projects_data_attributes {
  __typename: "Project";
  technologies: GetProjects_projects_data_attributes_technologies | null;
  name: string;
  description: string;
  url: string | null;
  featuredImage: GetProjects_projects_data_attributes_featuredImage;
}

export interface GetProjects_projects_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetProjects_projects_data_attributes | null;
}

export interface GetProjects_projects {
  __typename: "ProjectEntityResponseCollection";
  data: GetProjects_projects_data[];
}

export interface GetProjects {
  projects: GetProjects_projects | null;
}

export interface GetProjectsVariables {
  industry?: string | null;
  country?: string | null;
}
