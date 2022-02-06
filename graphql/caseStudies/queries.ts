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

          SEO {
            ogTitle
            ogImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            description
            ogDescription
          }
        }
      }
    }

    industries {
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
    projects(filters: { industry: { name: { eq: $industry } } }) {
      data {
        id
        attributes {
          technologies {
            data {
              id
              attributes {
                Technology_name
                url
              }
            }
          }
          name
          description
          url
          featuredImage {
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
`;

export const GET_PROJECT_PAGE = gql`
  query GetProjectPage($id: ID) {
    project(id: $id) {
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
                Technology_name
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
              id
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
                    width
                    height
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

          contactUs {
            title
            subtitle
          }
          
          SEO {
            ogTitle
            ogImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            description
            ogDescription
          }
        }
      }
    }
  }
`;
