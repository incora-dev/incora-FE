"use strict";
exports.id = 8786;
exports.ids = [8786];
exports.modules = {

/***/ 8786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_BenefitsAndSolutions)
});

// EXTERNAL MODULE: ./components/HexagonsBackground/index.tsx + 1 modules
var HexagonsBackground = __webpack_require__(5740);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/BenefitsAndSolutions/style.ts


const BenefitsAndSolutionsWrap = external_styled_components_default().div.withConfig({
  displayName: "style__BenefitsAndSolutionsWrap",
  componentId: "sc-1njmeed-0"
})(["width:100%;height:100%;display:flex;justify-content:center;position:relative;background-color:", ";"], ({
  bgColor
}) => bgColor);
const ContentWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrap",
  componentId: "sc-1njmeed-1"
})(["padding-top:120px;position:absolute;width:1006px;h1{font-weight:800;font-size:var(--fs-36);line-height:54px;color:", ";letter-spacing:", ";text-transform:capitalize;margin-bottom:58.6px;}"], theme_get_default()("colors.white"), theme_get_default()("letterSpacing.h1"));
const Grid = external_styled_components_default().div.withConfig({
  displayName: "style__Grid",
  componentId: "sc-1njmeed-2"
})(["display:flex;flex-flow:wrap;column-gap:70px;row-gap:", ";"], ({
  rowGap
}) => `${rowGap}px`);
const GridItemWrap = external_styled_components_default().div.withConfig({
  displayName: "style__GridItemWrap",
  componentId: "sc-1njmeed-3"
})(["width:", ";display:flex;flex-direction:column;row-gap:15px;svg{margin-bottom:5px;}h3{font-weight:800;font-size:var(--fs-18);font-style:normal;line-height:27px;letter-spacing:", ";color:", ";}p{font-style:normal;font-weight:500;font-size:var(--fs-14);line-height:30px;letter-spacing:0.05em;text-transform:capitalize;color:", ";}"], ({
  width
}) => `${width}px`, theme_get_default()("letterSpacing.span"), theme_get_default()("colors.white"), theme_get_default()("colors.font1"));
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/BenefitsAndSolutions/index.tsx







const BenefitsAndSolutions = ({
  header,
  gridData,
  gridItemWidth,
  rowGap,
  bgColor = theme/* theme.colors.black */.r.colors.black
}) => {
  const gridItems = gridData.map((item, index) => {
    const {
      icon,
      title,
      text
    } = item;
    const Icon = icon;

    const textCondition = text && /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: text
    });

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(GridItemWrap, {
      width: gridItemWidth,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: title
      }), textCondition]
    }, index * Math.random());
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BenefitsAndSolutionsWrap, {
    bgColor: bgColor,
    children: [/*#__PURE__*/jsx_runtime_.jsx(HexagonsBackground/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrap, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: header
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid, {
        rowGap: rowGap,
        children: gridItems
      })]
    })]
  });
};

/* harmony default export */ const components_BenefitsAndSolutions = (BenefitsAndSolutions);

/***/ })

};
;