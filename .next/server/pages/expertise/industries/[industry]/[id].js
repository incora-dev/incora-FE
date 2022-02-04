"use strict";
(() => {
var exports = {};
exports.id = 1478;
exports.ids = [1478,2197];
exports.modules = {

/***/ 5539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
// EXTERNAL MODULE: ./components/ServicePage/HeaderService/index.tsx + 1 modules
var HeaderService = __webpack_require__(6153);
// EXTERNAL MODULE: ./components/BenefitsAndSolutions/index.tsx + 1 modules
var BenefitsAndSolutions = __webpack_require__(8786);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ExpertisePage/OfferedSolutions/OfferedSolutions.style.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "OfferedSolutionsstyle__Div",
  componentId: "sc-vhnt9a-0"
})(["margin-top:-104px;width:100%;height:1047px;position:relative;@media only screen and (max-width:", "){height:fit-content;}"], theme_get_default()('breakpoints.tabletPro'));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ExpertisePage/OfferedSolutions/index.tsx






const OfferedSolutions = ({
  intro,
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    children: /*#__PURE__*/jsx_runtime_.jsx(BenefitsAndSolutions/* default */.Z, {
      header: intro,
      gridData: data,
      gridItemWidth: 288,
      rowGap: 135,
      bgColor: theme/* theme.colors.black */.r.colors.black
    })
  });
};

/* harmony default export */ const ExpertisePage_OfferedSolutions = (OfferedSolutions);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/News/index.tsx + 3 modules
var News = __webpack_require__(2867);
// EXTERNAL MODULE: ./components/Homepage/ContactUs/index.tsx + 3 modules
var ContactUs = __webpack_require__(5802);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./graphql/industries/queries.ts

const GET_INDUSTRY_PAGE = client_.gql`
  query GetIndustryPage($id: ID) {
    industry(id: $id) {
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
// EXTERNAL MODULE: ./pages/404.tsx + 3 modules
var _404 = __webpack_require__(6652);
// EXTERNAL MODULE: ./components/Homepage/EmbodiedIdeas/index.tsx + 15 modules
var EmbodiedIdeas = __webpack_require__(2910);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
// EXTERNAL MODULE: ./graphql/client.ts
var graphql_client = __webpack_require__(6557);
;// CONCATENATED MODULE: ./pages/expertise/industries/[industry]/[id].tsx



















const colorWhite = theme/* theme.colors.white */.r.colors.white;
const colorBlack = theme/* theme.colors.black */.r.colors.black;
const hexagonColorGrey = theme/* theme.elements.hexagonBorderedGrey */.r.elements.hexagonBorderedGrey;
const contactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  addresses: [{
    "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine"
  }, {
    "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA"
  }],
  buttonLabel: "send"
};

const Industry = ({
  data,
  networkStatus
}) => {
  var _data$industry, _data$industry$data, _entry$icon, _entry$icon$data, _entry$offeredSolutio, _entry$offeredSolutio2, _entry$contactUs, _entry$contactUs2, _entry$insights$artic, _entry$projects, _entry$SEO, _entry$SEO2, _entry$SEO3, _entry$SEO4, _entry$SEO4$ogImage, _entry$SEO4$ogImage$d, _entry$SEO4$ogImage$d2, _entry$SEO5, _entry$SEO5$ogImage, _entry$SEO5$ogImage$d, _entry$SEO5$ogImage$d2, _data$industry2;

  const entry = (_data$industry = data.industry) === null || _data$industry === void 0 ? void 0 : (_data$industry$data = _data$industry.data) === null || _data$industry$data === void 0 ? void 0 : _data$industry$data.attributes;
  const headerTitle = entry === null || entry === void 0 ? void 0 : entry.name;
  const headerDescription = entry === null || entry === void 0 ? void 0 : entry.description;
  const headerIcon = entry === null || entry === void 0 ? void 0 : (_entry$icon = entry.icon) === null || _entry$icon === void 0 ? void 0 : (_entry$icon$data = _entry$icon.data) === null || _entry$icon$data === void 0 ? void 0 : _entry$icon$data.attributes;
  const offeredSolutionsIntro = entry === null || entry === void 0 ? void 0 : (_entry$offeredSolutio = entry.offeredSolutions) === null || _entry$offeredSolutio === void 0 ? void 0 : _entry$offeredSolutio.intro;
  const offeredSolutionsData = entry === null || entry === void 0 ? void 0 : (_entry$offeredSolutio2 = entry.offeredSolutions) === null || _entry$offeredSolutio2 === void 0 ? void 0 : _entry$offeredSolutio2.items;
  const contactUsTitle = entry === null || entry === void 0 ? void 0 : (_entry$contactUs = entry.contactUs) === null || _entry$contactUs === void 0 ? void 0 : _entry$contactUs.title;
  const contactUsSubtitle = entry === null || entry === void 0 ? void 0 : (_entry$contactUs2 = entry.contactUs) === null || _entry$contactUs2 === void 0 ? void 0 : _entry$contactUs2.subtitle;
  const newsTitle = entry === null || entry === void 0 ? void 0 : entry.insights.intro;
  const articles = entry === null || entry === void 0 ? void 0 : (_entry$insights$artic = entry.insights.articles) === null || _entry$insights$artic === void 0 ? void 0 : _entry$insights$artic.data;
  const projects = entry === null || entry === void 0 ? void 0 : (_entry$projects = entry.projects) === null || _entry$projects === void 0 ? void 0 : _entry$projects.data;
  const seoTitle = entry === null || entry === void 0 ? void 0 : (_entry$SEO = entry.SEO) === null || _entry$SEO === void 0 ? void 0 : _entry$SEO.ogTitle;
  const seoKeywords = entry === null || entry === void 0 ? void 0 : (_entry$SEO2 = entry.SEO) === null || _entry$SEO2 === void 0 ? void 0 : _entry$SEO2.keywords;
  const seoDescription = entry === null || entry === void 0 ? void 0 : (_entry$SEO3 = entry.SEO) === null || _entry$SEO3 === void 0 ? void 0 : _entry$SEO3.description;
  const seoImage = (entry === null || entry === void 0 ? void 0 : (_entry$SEO4 = entry.SEO) === null || _entry$SEO4 === void 0 ? void 0 : (_entry$SEO4$ogImage = _entry$SEO4.ogImage) === null || _entry$SEO4$ogImage === void 0 ? void 0 : (_entry$SEO4$ogImage$d = _entry$SEO4$ogImage.data) === null || _entry$SEO4$ogImage$d === void 0 ? void 0 : (_entry$SEO4$ogImage$d2 = _entry$SEO4$ogImage$d.attributes) === null || _entry$SEO4$ogImage$d2 === void 0 ? void 0 : _entry$SEO4$ogImage$d2.url) !== undefined && `${constants/* IMAGES_LINK */.rS}${entry === null || entry === void 0 ? void 0 : (_entry$SEO5 = entry.SEO) === null || _entry$SEO5 === void 0 ? void 0 : (_entry$SEO5$ogImage = _entry$SEO5.ogImage) === null || _entry$SEO5$ogImage === void 0 ? void 0 : (_entry$SEO5$ogImage$d = _entry$SEO5$ogImage.data) === null || _entry$SEO5$ogImage$d === void 0 ? void 0 : (_entry$SEO5$ogImage$d2 = _entry$SEO5$ogImage$d.attributes) === null || _entry$SEO5$ogImage$d2 === void 0 ? void 0 : _entry$SEO5$ogImage$d2.url}`;
  const {
    0: menuColor,
    1: setMenuColor
  } = (0,external_react_.useState)("none");

  const handleScroll = () => {
    window.scrollY >= 50 ? setMenuColor(colorWhite) : setMenuColor("none");
  };

  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const renderCondition = headerTitle && headerDescription && headerIcon && offeredSolutionsIntro && offeredSolutionsData && contactUsTitle && contactUsSubtitle && newsTitle && articles && projects;
  if (networkStatus !== 7 || ((_data$industry2 = data.industry) === null || _data$industry2 === void 0 ? void 0 : _data$industry2.data) === null) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: renderCondition && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [seoTitle && /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: seoTitle
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:site_name",
          content: "Incora - European software development company"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:type",
          content: "article"
        }), seoTitle && /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: seoTitle
        }), seoDescription && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: seoDescription
        }), seoKeywords && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "keywords",
          content: seoKeywords
        }), seoTitle && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:title",
          content: seoTitle
        }), seoDescription && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:description",
          content: seoDescription
        }), seoImage && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:url",
          content: seoImage
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(mainMenu/* default */.Z, {
          backgroundColor: isMobile || isTablet || isSmallTablet ? colorWhite : menuColor,
          titlesColor: colorBlack,
          titles: constants/* titles */.F8,
          children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderService/* default */.Z, {
            title: headerTitle,
            titleSize: isMobile || isTablet || isSmallTablet ? "50px" : "64px",
            icon: headerIcon,
            text: headerDescription,
            textWidth: "560px",
            hexagonColor: hexagonColorGrey,
            bgColor: colorWhite
          }), /*#__PURE__*/jsx_runtime_.jsx(ExpertisePage_OfferedSolutions, {
            intro: offeredSolutionsIntro,
            data: offeredSolutionsData
          }), /*#__PURE__*/jsx_runtime_.jsx(EmbodiedIdeas/* default */.Z, {
            bgColor: theme/* theme.colors.yellow */.r.colors.yellow,
            elementsColor: theme/* theme.colors.black */.r.colors.black,
            projects: projects,
            disablePadding: true,
            disableSeeMore: true
          }), /*#__PURE__*/jsx_runtime_.jsx(News/* default */.Z, {
            title: newsTitle,
            articles: articles
          }), /*#__PURE__*/jsx_runtime_.jsx(ContactUs/* default */.Z, {
            title: contactUsTitle,
            text: contactUsSubtitle,
            addresses: contactUs.addresses,
            buttonLabel: contactUs.buttonLabel
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
      })]
    })
  });
};

async function getServerSideProps(context) {
  const client = (0,graphql_client/* initializeApollo */["in"])();
  const {
    id
  } = context.query;
  const {
    data,
    networkStatus
  } = await client.query({
    query: GET_INDUSTRY_PAGE,
    variables: {
      id
    }
  });
  return {
    props: {
      data,
      networkStatus
    }
  };
}
/* harmony default export */ const _id_ = (Industry);

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 5986:
/***/ ((module) => {

module.exports = require("@apollo/client/link/http");

/***/ }),

/***/ 9099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,8040,6604,6652,6557,4109,6074,3478,7305,9210,3795,2910,2867,9064,5802,5740,6153,8786], () => (__webpack_exec__(5539)));
module.exports = __webpack_exports__;

})();