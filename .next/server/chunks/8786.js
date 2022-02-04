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
})(["width:100%;height:100%;display:flex;justify-content:center;position:relative;background-color:", ";@media only screen and (max-width:", "){padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px 15px;}"], ({
  bgColor
}) => bgColor, theme_get_default()("breakpoints.smallDesk"), theme_get_default()("breakpoints.mobile"));
const ContentWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrap",
  componentId: "sc-1njmeed-1"
})(["padding-top:111px;position:relative;width:1006px;@media only screen and (max-width:", "){padding-top:100px;}@media only screen and (max-width:", "){max-width:100%;width:100%;padding:100px 25px;}@media only screen and (max-width:", "){padding:50px 0 60px;}@media only screen and (max-width:", "){padding:25px 0;}h1{font-weight:800;font-size:var(--fs-26);line-height:54px;letter-spacing:0.05em;color:", ";text-transform:capitalize;margin-bottom:65px;@media only screen and (max-width:", "){font-size:var(--fs-26);line-height:34px;margin-bottom:40px;}@media only screen and (max-width:", "){line-height:40px;}}"], theme_get_default()("breakpoints.mDesk"), theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.smallDesk"), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.white"), theme_get_default()("breakpoints.tablet"), theme_get_default()('breakpoints.mobile'));
const Grid = external_styled_components_default().div.withConfig({
  displayName: "style__Grid",
  componentId: "sc-1njmeed-2"
})(["display:flex;flex-flow:wrap;column-gap:70px;row-gap:", ";@media only screen and (max-width:", "){column-gap:55px;}@media only screen and (max-width:", "){row-gap:50px;}@media only screen and (max-width:", "){row-gap:40px;}"], ({
  rowGap
}) => `${rowGap}px`, theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const GridItemWrap = external_styled_components_default().div.withConfig({
  displayName: "style__GridItemWrap",
  componentId: "sc-1njmeed-3"
})(["width:", ";display:flex;flex-direction:column;align-items:flex-start;@media only screen and (max-width:", "){width:calc((100% - 60px) / 2);}@media only screen and (max-width:", "){width:100%;flex-direction:column;align-items:center;row-gap:10px;}svg{margin-bottom:5px;width:51px;}.image{max-height:37px;}h3{font-weight:800;font-size:var(--fs-18);font-style:normal;line-height:27px;letter-spacing:", ";color:", ";margin:13px 0 10px;@media only screen and (max-width:", "){font-size:14px;line-height:24px;}@media only screen and (max-width:", "){padding-left:10px;max-width:calc(100% - 51px);}}p{font-style:normal;font-weight:500;font-size:var(--fs-14);line-height:30px;letter-spacing:0.05em;text-transform:capitalize;color:", ";}"], ({
  width
}) => `${width}px`, theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"), theme_get_default()("letterSpacing.span"), theme_get_default()("colors.white"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"), theme_get_default()("colors.font1"));
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: ./constants/links.ts
var links = __webpack_require__(7449);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
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
    var _item$image, _item$image$data, _item$image$data$attr, _item$image2, _item$image2$data, _item$image2$data$att, _item$image3, _item$image3$data, _item$image3$data$att;

    const title = item === null || item === void 0 ? void 0 : item.title;
    const src = links/* IMAGES_LINK */.rS + (item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : (_item$image$data = _item$image.data) === null || _item$image$data === void 0 ? void 0 : (_item$image$data$attr = _item$image$data.attributes) === null || _item$image$data$attr === void 0 ? void 0 : _item$image$data$attr.url);
    const width = item === null || item === void 0 ? void 0 : (_item$image2 = item.image) === null || _item$image2 === void 0 ? void 0 : (_item$image2$data = _item$image2.data) === null || _item$image2$data === void 0 ? void 0 : (_item$image2$data$att = _item$image2$data.attributes) === null || _item$image2$data$att === void 0 ? void 0 : _item$image2$data$att.width;
    const height = item === null || item === void 0 ? void 0 : (_item$image3 = item.image) === null || _item$image3 === void 0 ? void 0 : (_item$image3$data = _item$image3.data) === null || _item$image3$data === void 0 ? void 0 : (_item$image3$data$att = _item$image3$data.attributes) === null || _item$image3$data$att === void 0 ? void 0 : _item$image3$data$att.height;

    const textCondition = (item === null || item === void 0 ? void 0 : item.description) && /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: item.description
    });

    const renderCondition = title && width && height;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: renderCondition && /*#__PURE__*/(0,jsx_runtime_.jsxs)(GridItemWrap, {
        width: gridItemWidth,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          loader: () => src,
          src: src,
          width: width,
          height: height,
          alt: "icon",
          className: "image"
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: title
        }), textCondition]
      }, index * Math.random())
    });
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