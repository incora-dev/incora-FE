import { gql } from "@apollo/client";

export const GET_CASE_STUDIES = gql`
  query GetCaseStudies {
    caseStudiesPage(publicationState: LIVE) {
      data {
        attributes {
          title
          description

          contactUs {
            title
            subtitle
          }
        }
      }
    }
  }
`;

export const GET_INDUSTRIES_NAMES = gql`
  query GetIndustriesNames {
    industries(pagination: { limit: 30 }) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects($industry: String) {
    projects(
      filters: { industry: { name: { eq: $industry } } }
      pagination: { limit: 30 }
    ) {
      data {
        id
        attributes {
          technologies {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          url
          mainInfo {
            item {
              title
              description
              image {
                data {
                  id
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
