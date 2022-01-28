"use strict";
exports.id = 4096;
exports.ids = [4096];
exports.modules = {

/***/ 4096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services_LetsTalk)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/Services/LetsTalk/LetsTalk.style.ts



const Div = external_styled_components_default().div.withConfig({
  displayName: "LetsTalkstyle__Div",
  componentId: "sc-17ei7m3-0"
})(["background-color:", ";overflow:hidden;color:", ";"], ({
  isWhite
}) => isWhite ? theme_get_default()("colors.white") : theme_get_default()("colors.black"), ({
  isWhite
}) => isWhite ? "black" : theme_get_default()("colors.white"));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "LetsTalkstyle__Wrapper",
  componentId: "sc-17ei7m3-1"
})(["padding:87px 0 99px 0;max-width:1006px;margin:0 auto;@media only screen and (max-width:", "){padding:53px 20px;}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const Block = external_styled_components_default().div.withConfig({
  displayName: "LetsTalkstyle__Block",
  componentId: "sc-17ei7m3-2"
})(["display:flex;flex-direction:column;row-gap:43px;"]);
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "LetsTalkstyle__TextBlock",
  componentId: "sc-17ei7m3-3"
})(["max-width:565px;display:flex;flex-direction:", ";row-gap:10px;"], ({
  flexDirection
}) => flexDirection);
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "LetsTalkstyle__H2",
  componentId: "sc-17ei7m3-4"
})(["font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;letter-spacing:0.05em;text-transform:capitalize;"]);
const Text = external_styled_components_default().p.withConfig({
  displayName: "LetsTalkstyle__Text",
  componentId: "sc-17ei7m3-5"
})(["font-style:normal;font-weight:300;font-size:var(--fs-18);line-height:30px;letter-spacing:0.05em;"]);
const PositionHexagon = external_styled_components_default().div.withConfig({
  displayName: "LetsTalkstyle__PositionHexagon",
  componentId: "sc-17ei7m3-6"
})(["position:absolute;top:", ";right:-47px;@media only screen and (max-width:", "){display:none;}"], ({
  isWhite
}) => isWhite ? "70px" : "-239px", theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const PositionButtonWithArrow = external_styled_components_default().div.withConfig({
  displayName: "LetsTalkstyle__PositionButtonWithArrow",
  componentId: "sc-17ei7m3-7"
})(["margin-top:43px;"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "LetsTalkstyle__Container",
  componentId: "sc-17ei7m3-8"
})(["position:relative;display:flex;justify-content:space-between;"]);
// EXTERNAL MODULE: ./components/ButtonWithArrow/index.tsx + 1 modules
var ButtonWithArrow = __webpack_require__(5982);
// EXTERNAL MODULE: ./public/SVG/hexagon1.svg
var hexagon1 = __webpack_require__(4109);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Services/LetsTalk/index.tsx






const LetsTalk = ({
  flexDirection = "column",
  title,
  text,
  isWhite
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    isWhite: isWhite,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Block, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
            flexDirection: flexDirection,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text, {
              children: text
            }), /*#__PURE__*/jsx_runtime_.jsx(H2, {
              children: title
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagon, {
          isWhite: isWhite,
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagon1/* default */.Z, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionButtonWithArrow, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ButtonWithArrow/* default */.Z, {
          buttonLabel: "Contact us",
          redirectTo: "Contact us",
          padding: "23px 25.5px"
        })
      })]
    })
  });
};

/* harmony default export */ const Services_LetsTalk = (LetsTalk);

/***/ })

};
;