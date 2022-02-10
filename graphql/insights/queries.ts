import { gql } from "@apollo/client";

export const GET_INSIGHTS_PAGE = gql`
  query GetInsightsPage {
    insightsPage {
      data {
        attributes {
          title
          description
          searchBarText

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

export const GET_ARTICLES_LIST = gql`
  query GetArticlesList($query: String, $industry: String, $page: Int) {
    articles(
      filters: {
        or: [
          { title: { containsi: $query } }
          { author: { name: { containsi: $query } } }
        ]
        and: { industries: { name: { eq: $industry } } }
      }
      pagination: { page: $page, pageSize: 9 }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          url
          title

          industries {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          previewImage {
            data {
              id
              attributes {
                url
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

export const GET_ARTICLE = gql`
  query GetArticle($id: ID) {
    article(id: $id) {
      data {
        id
        attributes {
          title
          content
          createdAt
          count {
            views
            likes
            valuable
            exciting
            unsatisfied
          }

          industries {
            data {
              id
              attributes {
                name
              }
            }
          }
          author {
            data {
              attributes {
                name
                position
                facebook
                linkedin
                profilePhoto {
                  data {
                    attributes {
                      url
                      width
                    }
                  }
                }
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

          impressions {
            intro
          }
          count {
            id
            likes
            valuable
            exciting
            unsatisfied
          }

          contactUs {
            title
            subtitle
          }

          relatedArticles {
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
