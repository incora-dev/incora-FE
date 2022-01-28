"use strict";
exports.id = 7218;
exports.ids = [7218];
exports.modules = {

/***/ 7218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ News)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/News/news.style.tsx


const Component = external_styled_components_default().div.withConfig({
  displayName: "newsstyle__Component",
  componentId: "sc-ls4lse-0"
})(["height:623px;width:100%;padding-top:100px;background-color:", ";"], ({
  bgColor
}) => bgColor);
const HeaderContainer = external_styled_components_default().div.withConfig({
  displayName: "newsstyle__HeaderContainer",
  componentId: "sc-ls4lse-1"
})(["width:100%;padding-left:180px;padding-right:80px;@media only screen and (max-width:", "){padding:0 20px;}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const HeaderWrap = external_styled_components_default().div.withConfig({
  displayName: "newsstyle__HeaderWrap",
  componentId: "sc-ls4lse-2"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;svg{margin:auto 0;cursor:pointer;}"]);
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "newsstyle__H2",
  componentId: "sc-ls4lse-3"
})(["display:block;font-style:normal;font-weight:800;font-size:var(--fs-26);line-height:39px;letter-spacing:0.05em;text-transform:uppercase;color:", ";"], ({
  color
}) => color);
const NewsWrap = external_styled_components_default().div.withConfig({
  displayName: "newsstyle__NewsWrap",
  componentId: "sc-ls4lse-4"
})(["width:100%;margin-top:58px;"]);
// EXTERNAL MODULE: ./public/SVG/index.ts + 1 modules
var SVG = __webpack_require__(9285);
;// CONCATENATED MODULE: ./components/News/NewsBLock/NewsBlock.styles.ts


const Container = external_styled_components_default().div.withConfig({
  displayName: "NewsBlockstyles__Container",
  componentId: "sc-1drr9xd-0"
})(["display:grid;grid-template-columns:", ";column-gap:70px;padding:0 164px;overflow:scroll;&::-webkit-scrollbar{display:none;}@media only screen and (max-width:", "){padding:0 15%;}"], ({
  number
}) => `repeat(${number},1fr)`, theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
// EXTERNAL MODULE: ./components/News/CreatePosts/index.tsx + 3 modules
var CreatePosts = __webpack_require__(3795);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/News/NewsBLock/index.tsx




const NewsBLock = ({
  news
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    number: news.length,
    children: /*#__PURE__*/jsx_runtime_.jsx(CreatePosts/* default */.Z, {
      id: "",
      title: "",
      url: "",
      tags: [],
      categories: [],
      image: ""
    })
  });
};

/* harmony default export */ const News_NewsBLock = (NewsBLock);
;// CONCATENATED MODULE: ./components/News/index.tsx







function NewsComponent({
  title,
  bgColor,
  articles
}) {
  const bgColorWhite = theme/* theme.colors.white */.r.colors.white;
  const bgColorBlack = theme/* theme.colors.black */.r.colors.black;

  const getBgColor = () => bgColor ? bgColor : bgColorWhite;

  const getTitleColor = () => {
    if (bgColor === bgColorWhite) {
      return bgColorBlack;
    }

    if (bgColor === bgColorBlack) {
      return bgColorWhite;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Component, {
    bgColor: getBgColor(),
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderWrap, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H2, {
          color: getTitleColor(),
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: title,
          children: /*#__PURE__*/jsx_runtime_.jsx(SVG/* default */.Z, {})
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(NewsWrap, {
      children: /*#__PURE__*/jsx_runtime_.jsx(News_NewsBLock, {
        news: articles
      })
    })]
  });
}

/* harmony default export */ const News = (NewsComponent);

/***/ })

};
;