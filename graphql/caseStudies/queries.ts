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

export const GET_PROJECT_PAGE = gql`
  query GetProjectPage($url: String) {
    projects(filters: { url: { eq: $url } }) {
      data {
        attributes {
          name
          description

          location {
            data {
              id
              attributes {
                city
                country
              }
            }
          }
          technologies {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          services {
            data {
              id
              attributes {
                url
                name
              }
            }
          }
          industry {
            data {
              attributes {
                url
                name
              }
            }
          }

          mainInfo {
            item {
              id
              title
              description
            }
          }
          projectOverview {
            title
            item {
              id
              title
              description
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
          feedback {
            data {
              id
              attributes {
                text
                clientName
                clientPosition
                clientPhoto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          nextProjectButton {
            intro
            project {
              data {
                id
                attributes {
                  url
                  name
                  mainInfo {
                    item {
                      image {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          gallery {
            intro
            pictures {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
