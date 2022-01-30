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
                description
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
                        name
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
            meta {
              id
              name
              content
            }
            keywords
            description
          }
        }
      }
    }
  }
`;
