"use strict";
exports.id = 7362;
exports.ids = [7362];
exports.modules = {

/***/ 7362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ze": () => (/* binding */ GET_INSIGHTS_PAGE),
/* harmony export */   "iG": () => (/* binding */ GET_ARTICLES_LIST),
/* harmony export */   "Rh": () => (/* binding */ GET_ARTICLE)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_INSIGHTS_PAGE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
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
const GET_ARTICLES_LIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
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
const GET_ARTICLE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
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

/***/ })

};
;