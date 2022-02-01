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
