"use strict";
exports.id = 5130;
exports.ids = [5130];
exports.modules = {

/***/ 5130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VI": () => (/* binding */ GET_CASE_STUDIES),
/* harmony export */   "J": () => (/* binding */ GET_INDUSTRIES_NAMES),
/* harmony export */   "fM": () => (/* binding */ GET_PROJECTS),
/* harmony export */   "rA": () => (/* binding */ GET_PROJECT_PAGE)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_CASE_STUDIES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
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
const GET_INDUSTRIES_NAMES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
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
const GET_PROJECTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
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
          name
          description
          url
          featuredImage {
            data {
              attributes {
                width
                height
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GET_PROJECT_PAGE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
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
        }
      }
    }
  }
`;

/***/ })

};
;