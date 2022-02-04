"use strict";
exports.id = 2867;
exports.ids = [2867];
exports.modules = {

/***/ 2867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ News)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/News/news.style.tsx


const Component = external_styled_components_default().div.withConfig({
  displayName: "newsstyle__Component",
  componentId: "sc-ls4lse-0"
})(["height:623px;width:100%;padding-top:100px;background-color:", ";@media only screen and (max-width:", "){height:fit-content;padding-top:50px;}@media only screen and (max-width:", "){height:fit-content;padding-top:40px;}"], ({
  bgColor
}) => bgColor, theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const HeaderContainer = external_styled_components_default().div.withConfig({
  displayName: "newsstyle__HeaderContainer",
  componentId: "sc-ls4lse-1"
})(["width:100%;max-width:1006px;margin:0 auto;@media only screen and (max-width:", "){padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const HeaderWrap = external_styled_components_default().div.withConfig({
  displayName: "newsstyle__HeaderWrap",
  componentId: "sc-ls4lse-2"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;@media only screen and (max-width:", "){margin-bottom:0;}svg{margin:auto 0;cursor:pointer;@media only screen and (max-width:", "){position:relative;top:2px;}}"], theme_get_default()("breakpoints.smallDesk"), theme_get_default()('breakpoints.mobile'));
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "newsstyle__H2",
  componentId: "sc-ls4lse-3"
})(["display:block;font-style:normal;font-weight:800;font-size:var(--fs-26);line-height:39px;letter-spacing:0.05em;text-transform:uppercase;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-23);}"], ({
  color
}) => color, theme_get_default()('breakpoints.mobile'));
const NewsWrap = external_styled_components_default().div.withConfig({
  displayName: "newsstyle__NewsWrap",
  componentId: "sc-ls4lse-4"
})(["width:100%;margin-top:58px;@media only screen and (max-width:", "){margin-top:35px;}"], theme_get_default()('breakpoints.sTablet'));
// EXTERNAL MODULE: ./public/SVG/index.ts + 1 modules
var SVG = __webpack_require__(9285);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./constants/routes.ts
var routes = __webpack_require__(1624);
// EXTERNAL MODULE: ./components/News/CreatePosts/index.tsx + 3 modules
var CreatePosts = __webpack_require__(3795);
// EXTERNAL MODULE: ./constants/links.ts
var links = __webpack_require__(7449);
;// CONCATENATED MODULE: ./components/News/ArticlesBlock/ArticlesBlock.styles.ts


const Container = external_styled_components_default().div.withConfig({
  displayName: "ArticlesBlockstyles__Container",
  componentId: "sc-tf8o9p-0"
})(["display:flex;width:", ";margin-left:auto;padding:0;overflow:visible;&::-webkit-scrollbar{display:none;}@media only screen and (max-width:", "){padding:0 25px;column-gap:40px;margin-left:0;width:100%;}@media only screen and (max-width:", "){padding:0 25px;column-gap:20px;}@media only screen and (max-width:", "){padding:0 25px;column-gap:15px;}@media only screen and (max-width:", "){padding:0 15px;row-gap:30px;display:flex;flex-direction:column;}"], ({
  maxWidth
}) => `calc((100vw - ${maxWidth}px) / 2 + ${maxWidth}px)`, theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const ArticlesContainer = external_styled_components_default().div.withConfig({
  displayName: "ArticlesBlockstyles__ArticlesContainer",
  componentId: "sc-tf8o9p-1"
})(["display:-webkit-box;width:100%;;overflow:scroll;-ms-overflow-style:none;::-webkit-scrollbar{width:0 !important;}@media only screen and (max-width:", "){display:flex;flex-direction:column;}"], theme_get_default()('breakpoints.mobile'));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/News/ArticlesBlock/index.tsx






const ArticlesBlock = ({
  articles
}) => {
  const articlesPreviews = articles.map(article => {
    var _article$attributes, _article$attributes2, _article$attributes3, _article$attributes3$, _article$attributes4, _article$attributes4$, _article$attributes5, _article$attributes5$, _article$attributes5$2;

    const id = article.id;
    const title = (_article$attributes = article.attributes) === null || _article$attributes === void 0 ? void 0 : _article$attributes.title;
    const url = (_article$attributes2 = article.attributes) === null || _article$attributes2 === void 0 ? void 0 : _article$attributes2.url;
    const tags = (_article$attributes3 = article.attributes) === null || _article$attributes3 === void 0 ? void 0 : (_article$attributes3$ = _article$attributes3.tags) === null || _article$attributes3$ === void 0 ? void 0 : _article$attributes3$.data;
    const categories = (_article$attributes4 = article.attributes) === null || _article$attributes4 === void 0 ? void 0 : (_article$attributes4$ = _article$attributes4.industries) === null || _article$attributes4$ === void 0 ? void 0 : _article$attributes4$.data;
    const image = links/* IMAGES_LINK */.rS + ((_article$attributes5 = article.attributes) === null || _article$attributes5 === void 0 ? void 0 : (_article$attributes5$ = _article$attributes5.previewImage.data) === null || _article$attributes5$ === void 0 ? void 0 : (_article$attributes5$2 = _article$attributes5$.attributes) === null || _article$attributes5$2 === void 0 ? void 0 : _article$attributes5$2.url);
    const renderCondition = id && title && url && tags && categories;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: renderCondition && /*#__PURE__*/jsx_runtime_.jsx(CreatePosts/* default */.Z, {
        id: id,
        title: title,
        url: url,
        tags: tags,
        categories: categories,
        image: image
      }, id)
    });
  });
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    maxWidth: 1006,
    children: /*#__PURE__*/jsx_runtime_.jsx(ArticlesContainer, {
      children: articlesPreviews
    })
  });
};

/* harmony default export */ const News_ArticlesBlock = (ArticlesBlock);
;// CONCATENATED MODULE: ./components/News/index.tsx










function NewsComponent({
  title,
  bgColor,
  articles
}) {
  const bgColorWhite = theme/* theme.colors.white */.r.colors.white;
  const bgColorBlack = theme/* theme.colors.black */.r.colors.black;
  let articlesLength = articles.length;

  const getBgColor = () => bgColor ? bgColor : bgColorWhite;

  const getTitleColor = () => {
    if (bgColor === bgColorWhite) {
      return bgColorBlack;
    }

    if (bgColor === bgColorBlack) {
      return bgColorWhite;
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: articlesLength ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Component, {
      bgColor: getBgColor(),
      children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderContainer, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderWrap, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(H2, {
            color: getTitleColor(),
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: routes/* ROUTES.INSIGHTS */.Z.INSIGHTS,
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(SVG/* default */.Z, {})
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NewsWrap, {
        children: /*#__PURE__*/jsx_runtime_.jsx(News_ArticlesBlock, {
          articles: articles
        })
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
  });
}

/* harmony default export */ const News = (NewsComponent);

/***/ }),

/***/ 9285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SVG)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SVG/Arrow4.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrow4 = function SvgArrow4(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 44,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m34.419 17.49-.093.1.093.102 1.196 1.31.11.12.111-.12 8.275-9.055.092-.101-.092-.101L35.837.69 35.726.57l-.111.12L34.418 2l-.092.1.093.102L40.42 8.77H.85v2.152h39.57l-6.002 6.568Z",
    fill: "#FEC602",
    stroke: "#FEC602",
    strokeWidth: 0.3
  })));
};

/* harmony default export */ const Arrow4 = (SvgArrow4);
;// CONCATENATED MODULE: ./public/SVG/index.ts

/* harmony default export */ const SVG = (Arrow4);

/***/ })

};
;