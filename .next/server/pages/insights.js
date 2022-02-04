"use strict";
(() => {
var exports = {};
exports.id = 4210;
exports.ids = [4210,2197];
exports.modules = {

/***/ 1666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ insights),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/InsightsPage/HeaderInsights/HeaderInsights.style.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "HeaderInsightsstyle__Div",
  componentId: "sc-1qa54xc-0"
})(["position:relative;overflow:hidden;"]);
const PositionLoader = external_styled_components_default().div.withConfig({
  displayName: "HeaderInsightsstyle__PositionLoader",
  componentId: "sc-1qa54xc-1"
})(["position:absolute;right:0;top:72px;svg{transform:rotate(90deg);}@media only screen and (max-width:", "){top:0;}"], theme_get_default()("breakpoints.mobile"));
const PositionLoaderSemiCircle = external_styled_components_default().div.withConfig({
  displayName: "HeaderInsightsstyle__PositionLoaderSemiCircle",
  componentId: "sc-1qa54xc-2"
})(["position:absolute;right:104px;top:117px;svg{path{fill:", ";}}@media only screen and (max-width:", "){right:43px;top:143px;}@media only screen and (max-width:", "){right:-18px;top:110px;}"], theme_get_default()("colors.black"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "HeaderInsightsstyle__Wrapper",
  componentId: "sc-1qa54xc-3"
})(["max-width:1006px;margin:0 auto;padding:74px 0 10px;@media only screen and (max-width:", "){max-width:100%;padding:74px 25px 10px;}@media only screen and (max-width:", "){padding:40px 25px 10px;}@media only screen and (max-width:", "){padding:40px 15px 10px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "HeaderInsightsstyle__TextBlock",
  componentId: "sc-1qa54xc-4"
})(["display:flex;flex-direction:column;row-gap:25px;@media only screen and (max-width:", "){width:80%;}"], theme_get_default()("breakpoints.tablet"));
const H1 = external_styled_components_default().h1.withConfig({
  displayName: "HeaderInsightsstyle__H1",
  componentId: "sc-1qa54xc-5"
})(["max-width:749px;font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:81px;letter-spacing:0.05em;text-transform:capitalize;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-48);line-height:60px;}@media only screen and (max-width:", "){font-size:var(--fs-36);z-index:1;line-height:41px;}"], theme_get_default()("colors.black"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const Text = external_styled_components_default().p.withConfig({
  displayName: "HeaderInsightsstyle__Text",
  componentId: "sc-1qa54xc-6"
})(["max-width:788px;font-style:normal;font-weight:600;font-size:var(--fs-21);line-height:32px;letter-spacing:0.1em;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-16);line-height:26px;width:80%;}"], theme_get_default()("colors.black"), theme_get_default()("breakpoints.mobile"));
const SearchBlock = external_styled_components_default().div.withConfig({
  displayName: "HeaderInsightsstyle__SearchBlock",
  componentId: "sc-1qa54xc-7"
})(["position:relative;margin-top:41px;svg{position:absolute;top:50%;left:27px;transform:translate(-50%,-50%);}@media only screen and (max-width:", "){margin-top:30px;svg{left:10px;}}@media only screen and (max-width:", "){margin-top:20px;svg{left:10px;}}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const PositionTags = external_styled_components_default().div.withConfig({
  displayName: "HeaderInsightsstyle__PositionTags",
  componentId: "sc-1qa54xc-8"
})(["margin-top:25px;@media only screen and (max-width:", "){margin-top:10px;}"], theme_get_default()("breakpoints.tablet"));
const Search = external_styled_components_default().input.withConfig({
  displayName: "HeaderInsightsstyle__Search",
  componentId: "sc-1qa54xc-9"
})(["margin-top:30px;padding:15px 0px 15px 49px;width:100%;height:48px;display:flex;column-gap:15px;border:none;background-color:", ";&:focus-visible{outline:none;}&::placeholder{font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;letter-spacing:0.03em;color:", ";}@media only screen and (max-width:", "){padding-left:35px;margin-top:30px;}@media only screen and (max-width:", "){padding-left:35px;margin-top:20px;}"], theme_get_default()("colors.background5"), theme_get_default()("colors.grey2"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
;// CONCATENATED MODULE: ./public/SVG/magnifyingGlass.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgMagnifyingGlass = function SvgMagnifyingGlass(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 15,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M5.72 11.43a5.685 5.685 0 0 0 3.525-1.22l3.79 3.79.97-.97-3.791-3.79a5.715 5.715 0 1 0-4.495 2.19Zm0-10.059a4.344 4.344 0 1 1 0 8.688 4.344 4.344 0 0 1 0-8.688Z",
    fill: "#000"
  })));
};

/* harmony default export */ const magnifyingGlass = (SvgMagnifyingGlass);
// EXTERNAL MODULE: ./components/CaseStudies/CaseFilter/components/Tags/index.tsx + 3 modules
var Tags = __webpack_require__(8482);
;// CONCATENATED MODULE: ./components/InsightsPage/Posts/Posts.style.tsx


const Posts_style_Div = external_styled_components_default().div.withConfig({
  displayName: "Postsstyle__Div",
  componentId: "sc-1vvzdb1-0"
})(["overflow:hidden;display:flex;justify-content:center;background-color:", ";"], theme_get_default()("colors.white"));
const Posts_style_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Postsstyle__Wrapper",
  componentId: "sc-1vvzdb1-1"
})(["min-height:220px;width:1040px;padding:70px 0 90px;display:flex;flex-direction:column;row-gap:100px;@media only screen and (max-width:", "){padding:70px 25px 90px;}@media only screen and (max-width:", "){padding:50px 25px 50px;row-gap:45px;}@media only screen and (max-width:", "){padding:35px 15px 40px;row-gap:45px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const NewsBlock = external_styled_components_default().div.withConfig({
  displayName: "Postsstyle__NewsBlock",
  componentId: "sc-1vvzdb1-2"
})(["display:flex;flex-wrap:wrap;row-gap:50px;.news-container{margin-right:50px;:nth-child(3n){margin-right:0;}}@media only screen and (max-width:", "){.news-container{margin-right:25px;:nth-child(3n){margin-right:25px;}}}"], theme_get_default()("breakpoints.tabletPro"));
const NoPostsFound = external_styled_components_default().div.withConfig({
  displayName: "Postsstyle__NoPostsFound",
  componentId: "sc-1vvzdb1-3"
})(["width:100%;height:100%;display:flex;justify-content:center;"]);
const Pagination = external_styled_components_default().div.withConfig({
  displayName: "Postsstyle__Pagination",
  componentId: "sc-1vvzdb1-4"
})([""]);
// EXTERNAL MODULE: ./components/News/CreatePosts/index.tsx + 3 modules
var CreatePosts = __webpack_require__(3795);
;// CONCATENATED MODULE: ./public/SVG/paginationArrow.svg
var paginationArrow_path;

function paginationArrow_extends() { paginationArrow_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paginationArrow_extends.apply(this, arguments); }



var SvgPaginationArrow = function SvgPaginationArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", paginationArrow_extends({
    width: 6,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), paginationArrow_path || (paginationArrow_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M.818.75 0 1.59 4.353 6 0 10.41l.818.84L6 6 .818.75Z",
    fill: "#000"
  })));
};

/* harmony default export */ const paginationArrow = (SvgPaginationArrow);
;// CONCATENATED MODULE: ./components/Pagination/Pagination.style.tsx


const Pagination_style_Div = external_styled_components_default().div.withConfig({
  displayName: "Paginationstyle__Div",
  componentId: "sc-65m39n-0"
})(["display:flex;justify-content:center;align-items:center;user-select:none;"]);
const NumberBlock = external_styled_components_default().div.withConfig({
  displayName: "Paginationstyle__NumberBlock",
  componentId: "sc-65m39n-1"
})(["display:flex;justify-content:center;align-items:center;width:366px;.paginator{display:flex;column-gap:7px;li{cursor:pointer;list-style-type:none;width:35px;height:34px;display:flex;justify-content:center;align-items:center;font-style:normal;font-weight:600;font-size:var(--fs-12);line-height:18px;letter-spacing:0.05em;}}.active{background-color:", ";color:", ";}"], theme_get_default()("colors.yellow"), theme_get_default()("colors.black"));
const LeftArrow = external_styled_components_default().div.withConfig({
  displayName: "Paginationstyle__LeftArrow",
  componentId: "sc-65m39n-2"
})(["width:35px;height:34px;display:flex;justify-content:center;align-items:center;cursor:pointer;svg{transform:rotate(180deg);opacity:", ";}"], ({
  changeColor
}) => changeColor ? "0.2" : "1");
const RightArrow = external_styled_components_default().div.withConfig({
  displayName: "Paginationstyle__RightArrow",
  componentId: "sc-65m39n-3"
})(["width:35px;height:34px;display:flex;justify-content:center;align-items:center;cursor:pointer;svg{opacity:", ";}"], ({
  changeColor
}) => changeColor ? "0.2" : "1");
;// CONCATENATED MODULE: external "react-paginate"
const external_react_paginate_namespaceObject = require("react-paginate");
var external_react_paginate_default = /*#__PURE__*/__webpack_require__.n(external_react_paginate_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Pagination/index.tsx






const Pagination_Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChanged
}) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const leftChangeColorCondition = currentPage === 0;
  const rightChangeColorCondition = currentPage === totalPageCount;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Pagination_style_Div, {
      children: /*#__PURE__*/jsx_runtime_.jsx(NumberBlock, {
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_paginate_default()), {
          previousLabel: /*#__PURE__*/jsx_runtime_.jsx(LeftArrow, {
            changeColor: leftChangeColorCondition,
            children: /*#__PURE__*/jsx_runtime_.jsx(paginationArrow, {})
          }),
          className: "paginator",
          activeClassName: "active",
          pageCount: totalPageCount,
          breakLabel: "...",
          pageRangeDisplayed: 3,
          onPageChange: page => onPageChanged(page.selected + 1),
          nextLabel: /*#__PURE__*/jsx_runtime_.jsx(RightArrow, {
            changeColor: rightChangeColorCondition,
            children: /*#__PURE__*/jsx_runtime_.jsx(paginationArrow, {})
          })
        })
      })
    })
  });
};

/* harmony default export */ const components_Pagination = (Pagination_Pagination);
// EXTERNAL MODULE: ./constants/links.ts
var links = __webpack_require__(7449);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./graphql/insights/queries.ts
var queries = __webpack_require__(7362);
// EXTERNAL MODULE: ./components/common/Loader/index.tsx + 2 modules
var Loader = __webpack_require__(3535);
;// CONCATENATED MODULE: ./components/InsightsPage/Posts/index.tsx












const Posts = ({
  query,
  industry,
  totalPageCount
}) => {
  var _data$articles;

  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const industryCondition = industry === "all" ? undefined : industry;
  const {
    data,
    loading
  } = (0,client_.useQuery)(queries/* GET_ARTICLES_LIST */.iG, {
    variables: {
      query: query,
      industry: industryCondition,
      page: currentPage
    }
  });
  const articles = data === null || data === void 0 ? void 0 : (_data$articles = data.articles) === null || _data$articles === void 0 ? void 0 : _data$articles.data;
  const articlesList = articles && articles.map(({
    id,
    attributes
  }) => {
    var _attributes$previewIm, _attributes$previewIm2, _attributes$tags, _attributes$industrie;

    const title = attributes === null || attributes === void 0 ? void 0 : attributes.title;
    const image = links/* IMAGES_LINK */.rS + (attributes === null || attributes === void 0 ? void 0 : (_attributes$previewIm = attributes.previewImage.data) === null || _attributes$previewIm === void 0 ? void 0 : (_attributes$previewIm2 = _attributes$previewIm.attributes) === null || _attributes$previewIm2 === void 0 ? void 0 : _attributes$previewIm2.url);
    const url = attributes === null || attributes === void 0 ? void 0 : attributes.url;
    const tags = attributes === null || attributes === void 0 ? void 0 : (_attributes$tags = attributes.tags) === null || _attributes$tags === void 0 ? void 0 : _attributes$tags.data;
    const categories = attributes === null || attributes === void 0 ? void 0 : (_attributes$industrie = attributes.industries) === null || _attributes$industrie === void 0 ? void 0 : _attributes$industrie.data;
    const renderCondition = id && title && image && url && tags && categories;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: renderCondition && /*#__PURE__*/jsx_runtime_.jsx(CreatePosts/* default */.Z, {
        id: id,
        title: title,
        image: image,
        categories: categories,
        url: url,
        tags: tags
      })
    });
  });

  const onPageChanged = page => {
    setCurrentPage(page);
  };

  const articlesCondition = () => {
    if (articles && articles.length <= 0) {
      return /*#__PURE__*/jsx_runtime_.jsx(NoPostsFound, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "No posts found"
        })
      });
    } else if (articles && !loading) {
      return /*#__PURE__*/jsx_runtime_.jsx(NewsBlock, {
        children: articlesList
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {});
    }
  };

  const paginationCondition = articles && articles.length > 0;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Posts_style_Div, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Posts_style_Wrapper, {
        children: [articlesCondition(), paginationCondition && /*#__PURE__*/jsx_runtime_.jsx(components_Pagination, {
          totalCount: totalPageCount,
          currentPage: currentPage,
          pageSize: 9,
          onPageChanged: onPageChanged
        })]
      })
    })
  });
};

/* harmony default export */ const InsightsPage_Posts = (Posts);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
// EXTERNAL MODULE: ./public/loading2.svg
var loading2 = __webpack_require__(4955);
// EXTERNAL MODULE: ./public/loading1.svg
var loading1 = __webpack_require__(8855);
;// CONCATENATED MODULE: ./graphql/industries/meta.ts

const GET_TOTAL_PAGE_COUNT = client_.gql`
  query GetTotalPageCount {
    articles {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;
;// CONCATENATED MODULE: ./components/InsightsPage/HeaderInsights/index.tsx













const HeaderInsights = ({
  title,
  text,
  inputPlaceholder,
  industries
}) => {
  var _data$articles, _data$articles$meta, _data$articles$meta$p;

  const {
    data
  } = (0,client_.useQuery)(GET_TOTAL_PAGE_COUNT);
  const totalPageCount = data === null || data === void 0 ? void 0 : (_data$articles = data.articles) === null || _data$articles === void 0 ? void 0 : (_data$articles$meta = _data$articles.meta) === null || _data$articles$meta === void 0 ? void 0 : (_data$articles$meta$p = _data$articles$meta.pagination) === null || _data$articles$meta$p === void 0 ? void 0 : _data$articles$meta$p.total;
  const {
    0: query,
    1: setQuery
  } = (0,external_react_.useState)();
  const {
    0: currentIndustryTag,
    1: setCurrentIndustryTag
  } = (0,external_react_.useState)("all");

  const onKeyPress = event => {
    if (event.key === "Enter") {
      setQuery(event.target.value);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PositionLoader, {
      children: /*#__PURE__*/jsx_runtime_.jsx(loading2/* default */.Z, {
        width: 181.74,
        height: 180.99,
        viewBox: "0 0 54 54"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionLoaderSemiCircle, {
      children: /*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {
        width: 91.36,
        height: 91.36,
        viewBox: "0 0 96 96"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H1, {
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
          children: text
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Search, {
          onKeyPress: onKeyPress,
          type: "text",
          placeholder: inputPlaceholder
        }), /*#__PURE__*/jsx_runtime_.jsx(magnifyingGlass, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionTags, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Tags/* default */.Z, {
          labels: industries,
          setCurrentIndustryTag: setCurrentIndustryTag
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(InsightsPage_Posts, {
      query: query,
      industry: currentIndustryTag,
      totalPageCount: 14
    })]
  });
};

/* harmony default export */ const InsightsPage_HeaderInsights = (HeaderInsights);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: ./pages/404.tsx + 3 modules
var _404 = __webpack_require__(6652);
// EXTERNAL MODULE: ./graphql/client.ts
var graphql_client = __webpack_require__(6557);
;// CONCATENATED MODULE: ./pages/insights/index.tsx
















const Insights = ({
  data,
  networkStatus
}) => {
  var _data$insightsPage, _data$insightsPage$da, _data$industries, _data$insightsPage2, _data$insightsPage2$d, _entry$SEO, _entry$SEO2, _entry$SEO3, _entry$SEO4, _entry$SEO4$ogImage, _entry$SEO4$ogImage$d, _entry$SEO4$ogImage$d2, _entry$SEO5, _entry$SEO5$ogImage, _entry$SEO5$ogImage$d, _entry$SEO5$ogImage$d2;

  const entry = data === null || data === void 0 ? void 0 : (_data$insightsPage = data.insightsPage) === null || _data$insightsPage === void 0 ? void 0 : (_data$insightsPage$da = _data$insightsPage.data) === null || _data$insightsPage$da === void 0 ? void 0 : _data$insightsPage$da.attributes;
  const industries = data === null || data === void 0 ? void 0 : (_data$industries = data.industries) === null || _data$industries === void 0 ? void 0 : _data$industries.data;
  const insightsEntry = data === null || data === void 0 ? void 0 : (_data$insightsPage2 = data.insightsPage) === null || _data$insightsPage2 === void 0 ? void 0 : (_data$insightsPage2$d = _data$insightsPage2.data) === null || _data$insightsPage2$d === void 0 ? void 0 : _data$insightsPage2$d.attributes;
  const title = insightsEntry === null || insightsEntry === void 0 ? void 0 : insightsEntry.title;
  const text = insightsEntry === null || insightsEntry === void 0 ? void 0 : insightsEntry.description;
  const inputPlaceholder = insightsEntry === null || insightsEntry === void 0 ? void 0 : insightsEntry.searchBarText;
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  const seoTitle = entry === null || entry === void 0 ? void 0 : (_entry$SEO = entry.SEO) === null || _entry$SEO === void 0 ? void 0 : _entry$SEO.ogTitle;
  const seoKeywords = entry === null || entry === void 0 ? void 0 : (_entry$SEO2 = entry.SEO) === null || _entry$SEO2 === void 0 ? void 0 : _entry$SEO2.keywords;
  const seoDescription = entry === null || entry === void 0 ? void 0 : (_entry$SEO3 = entry.SEO) === null || _entry$SEO3 === void 0 ? void 0 : _entry$SEO3.description;
  const seoImage = (entry === null || entry === void 0 ? void 0 : (_entry$SEO4 = entry.SEO) === null || _entry$SEO4 === void 0 ? void 0 : (_entry$SEO4$ogImage = _entry$SEO4.ogImage) === null || _entry$SEO4$ogImage === void 0 ? void 0 : (_entry$SEO4$ogImage$d = _entry$SEO4$ogImage.data) === null || _entry$SEO4$ogImage$d === void 0 ? void 0 : (_entry$SEO4$ogImage$d2 = _entry$SEO4$ogImage$d.attributes) === null || _entry$SEO4$ogImage$d2 === void 0 ? void 0 : _entry$SEO4$ogImage$d2.url) !== undefined && `${constants/* IMAGES_LINK */.rS}${entry === null || entry === void 0 ? void 0 : (_entry$SEO5 = entry.SEO) === null || _entry$SEO5 === void 0 ? void 0 : (_entry$SEO5$ogImage = _entry$SEO5.ogImage) === null || _entry$SEO5$ogImage === void 0 ? void 0 : (_entry$SEO5$ogImage$d = _entry$SEO5$ogImage.data) === null || _entry$SEO5$ogImage$d === void 0 ? void 0 : (_entry$SEO5$ogImage$d2 = _entry$SEO5$ogImage$d.attributes) === null || _entry$SEO5$ogImage$d2 === void 0 ? void 0 : _entry$SEO5$ogImage$d2.url}`;
  const {
    0: menuColor,
    1: setMenuColor
  } = (0,external_react_.useState)("none");

  const handleScroll = () => {
    window.scrollY >= 25 ? setMenuColor(theme/* theme.colors.white */.r.colors.white) : setMenuColor("none");
  };

  console.log("error", networkStatus);
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("error", networkStatus);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const renderCondition = industries && title && text && inputPlaceholder;
  if (networkStatus !== 7) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
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
        children: [/*#__PURE__*/jsx_runtime_.jsx(mainMenu/* default */.Z, {
          backgroundColor: isMobile || isTablet || isSmallTablet ? theme/* theme.colors.white */.r.colors.white : menuColor,
          titlesColor: theme/* theme.colors.black */.r.colors.black,
          titles: constants/* titles */.F8,
          children: /*#__PURE__*/jsx_runtime_.jsx(InsightsPage_HeaderInsights, {
            industries: industries,
            title: title,
            text: text,
            inputPlaceholder: inputPlaceholder
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
      })]
    })
  });
};

async function getServerSideProps() {
  const client = (0,graphql_client/* initializeApollo */["in"])();
  const {
    data,
    networkStatus
  } = await client.query({
    query: queries/* GET_INSIGHTS_PAGE */.Ze
  });
  return {
    props: {
      data,
      networkStatus
    }
  };
}
/* harmony default export */ const insights = (Insights);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,8040,6604,6652,6557,7305,3795,7362,7814], () => (__webpack_exec__(1666)));
module.exports = __webpack_exports__;

})();