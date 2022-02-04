import { gql } from "@apollo/client";

export const GET_SERVICES_PAGE = gql`
  query GetServicesPage {
    servicesPage {
      data {
        attributes {
          banner {
            title
            description
          }
          services {
            data {
              id
              attributes {
                url
                outcomes
                name
                estimatedTime
                descriptionForServicesPage
              }
            }
          }
          techStack {
            title
            tech_stacks {
              data {
                id
                attributes {
                  name
                  description
                  technologies {
                    data {
                      id
                      attributes {
                        Technology_name
                        url
                        icon {
                          data {
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
          }
          contactUs {
            title
            subtitle
          }

          SEO {
            id
            keywords
            description
            ogTitle
            ogDescription
            ogImage {
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

export const GET_SERVICE = gql`
  query GetService($id: ID) {
    service(id: $id) {
      data {
        attributes {
          name
          description

          icon {
            data {
              id
              attributes {
                url
                width
                height
              }
            }
          }
          whyDoYouNeed {
            intro
            items {
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
          bestSuitedFor {
            intro
            items {
              id
              title
            }
          }
          workflow {
            intro
            items {
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
          projects {
            data {
              id
              attributes {
                url
                name
                description
                technologies {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
                featuredImage {
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
          faq {
            intro
            items {
              id
              title
              description
            }
          }

          contactUs {
            title
            subtitle
          }

          SEO {
            id
            keywords
            description
            ogTitle
            ogDescription
            ogImage {
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
