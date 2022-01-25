import { gql } from "@apollo/client";

export const GET_CASE_STUDIES = gql`
  query GetCaseStudies {
    caseStudiesPage(publicationState: LIVE) {
      data {
        attributes {
          title
          description
          projects {
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
          contactUs {
            title
            subtitle
          }
        }
      }
    }
  }
`;
