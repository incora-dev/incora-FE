import { gql } from "@apollo/client";

export const GET_INDUSTRY_PAGE = gql`
  query GetIndustryPage($url: String) {
    industries(filters: { url: { eq: $url } }) {
      data {
        id
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
          offeredSolutions {
            intro
            items {
              id
              title
              description
              image {
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
          insights {
            intro
            articles {
              data {
                id
                attributes {
                  url
                  title
                  previewImage {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                  industries {
                    data {
                      id
                      attributes {
                        url
                        name
                      }
                    }
                  }
                  tags {
                    data {
                      id
                      attributes {
                        name
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
