"use strict";
exports.id = 3727;
exports.ids = [3727];
exports.modules = {

/***/ 3727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Button)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Button/style.ts


const Btn = external_styled_components_default().button.withConfig({
  displayName: "style__Btn",
  componentId: "sc-1ikjaqf-0"
})(["position:relative;width:", ";height:", ";background-color:", ";border:none;display:flex;justify-content:center;column-gap:20px;align-items:center;cursor:pointer;&:after{position:absolute;left:0;top:0;height:100%;width:0;content:'';background-color:", ";transition:width ", ";}&:hover:after{width:100%;}label{z-index:1;cursor:pointer;font-weight:bold;font-size:var(--fs-14);line-height:21px;text-transform:capitalize;letter-spacing:", ";color:", ";}svg{z-index:1;path{fill:", ";}}&:hover{label{color:", ";}svg{path{fill:", ";}}}"], ({
  width
}) => `${width}px`, ({
  height
}) => `${height}px`, ({
  backgroundColor
}) => backgroundColor ? `${backgroundColor}` : theme_get_default()("colors.yellow"), theme_get_default()("colors.yellow"), theme_get_default()("transition.button"), theme_get_default()("letterSpacing.span"), ({
  textColor
}) => textColor ? `${textColor}` : theme_get_default()("colors.black"), ({
  arrow
}) => `${arrow}`, theme_get_default()("colors.black"), theme_get_default()("colors.black"));
// EXTERNAL MODULE: ./public/navButtonArrow.svg
var navButtonArrow = __webpack_require__(851);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Button/index.tsx







const Button = ({
  width,
  height,
  label,
  link,
  backgroundColor,
  textColor,
  arrow,
  onClick
}) => {
  const arrowCondition = arrow && /*#__PURE__*/jsx_runtime_.jsx(navButtonArrow/* default */.Z, {});

  const button = /*#__PURE__*/(0,jsx_runtime_.jsxs)(Btn, {
    textColor: textColor,
    backgroundColor: backgroundColor,
    width: width,
    height: height,
    arrow: arrow,
    onClick: onClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      children: label
    }), arrowCondition]
  });

  const linkCondition = link ? /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    href: link,
    passHref: true,
    children: button
  }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: button
  });
  return linkCondition;
};

/* harmony default export */ const components_Button = (Button);

/***/ })

};
;