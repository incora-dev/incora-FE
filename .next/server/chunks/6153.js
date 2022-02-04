"use strict";
exports.id = 6153;
exports.ids = [6153];
exports.modules = {

/***/ 6153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ServicePage_HeaderService)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/ServicePage/styles.ts



const Div = external_styled_components_default().div.withConfig({
  displayName: "styles__Div",
  componentId: "sc-1t11kdf-0"
})(["position:relative;top:-104px;overflow:hidden;background-color:", ";"], ({
  bgColor
}) => bgColor);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1t11kdf-1"
})(["position:relative;max-width:1006px;margin:0 auto;@media only screen and (max-width:", "){max-width:100%;padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const TextContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__TextContainer",
  componentId: "sc-1t11kdf-2"
})(["position:relative;z-index:1;padding:184px 0 129px;@media only screen and (max-width:", "){width:calc(100% - 260px);padding-right:20px;}@media only screen and (max-width:", "){width:calc(100% - 200px);padding:165px 0 100px;}@media only screen and (max-width:", "){width:calc(100% - 200px);}@media only screen and (max-width:", "){padding:120px 0 50px;width:100%;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "styles__TextBlock",
  componentId: "sc-1t11kdf-3"
})(["display:flex;flex-direction:column;row-gap:19px;max-width:650px;color:", ";"], ({
  bgColor
}) => bgColor === theme/* theme.colors.black */.r.colors.black ? theme/* theme.colors.white */.r.colors.white : theme/* theme.colors.black */.r.colors.black);
const H1 = external_styled_components_default().h1.withConfig({
  displayName: "styles__H1",
  componentId: "sc-1t11kdf-4"
})(["max-width:766px;font-style:normal;font-weight:800;font-size:", ";line-height:", ";letter-spacing:0.05em;@media only screen and (max-width:", "){font-size:var(--fs-48);line-height:72px;}@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:48px;}@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:46px;margin-top:6px;width:calc(100% - 100px);}@media only screen and (max-width:", "){width:100%;}text-transform:capitalize;"], ({
  titleSize
}) => titleSize, ({
  titleSize
}) => titleSize === '48px' ? '72px' : '96px', theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mMobile'));
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "styles__H2",
  componentId: "sc-1t11kdf-5"
})(["font-style:normal;font-weight:800;font-size:var(--fs-26);line-height:37px;letter-spacing:0.05em;text-transform:uppercase;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-22);}"], theme_get_default()("colors.yellow"), theme_get_default()('breakpoints.tablet'));
const Text = external_styled_components_default().p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1t11kdf-6"
})(["max-width:", ";font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;"], ({
  textWidth
}) => textWidth);
const PositionIcon = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionIcon",
  componentId: "sc-1t11kdf-7"
})(["position:absolute;z-index:1;top:169px;right:48px;@media only screen and (max-width:", "){right:15px;}@media only screen and (max-width:", "){width:200px;top:165px;}@media only screen and (max-width:", "){width:160px;}@media only screen and (max-width:", "){width:90px;top:130px;}@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mMobile'));
// EXTERNAL MODULE: ./components/Elements/index.tsx + 1 modules
var Elements = __webpack_require__(9064);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ServicePage/HeaderService/index.tsx









const HeaderService = ({
  title,
  titleSize = "48px",
  text,
  icon,
  label,
  textWidth,
  hexagonColor = theme/* theme.elements.hexagonBorderedBlack */.r.elements.hexagonBorderedBlack,
  bgColor = theme/* theme.colors.black */.r.colors.black
}) => {
  const src = constants/* IMAGES_LINK */.rS + icon.url;
  const width = icon.width;
  const height = icon.height;

  const labelText = label && /*#__PURE__*/jsx_runtime_.jsx(H2, {
    children: label
  });

  const renderCondition = width && height;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: renderCondition && /*#__PURE__*/jsx_runtime_.jsx(Div, {
      bgColor: bgColor,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TextContainer, {
          children: [labelText, /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
            bgColor: bgColor,
            children: [/*#__PURE__*/jsx_runtime_.jsx(H1, {
              titleSize: titleSize,
              children: title
            }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
              textWidth: textWidth,
              children: text
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionIcon, {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            loader: () => src,
            src: src,
            width: width,
            height: height,
            alt: "icon"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Elements/* default */.Z, {
          color: hexagonColor
        })]
      })
    })
  });
};

/* harmony default export */ const ServicePage_HeaderService = (HeaderService);

/***/ })

};
;