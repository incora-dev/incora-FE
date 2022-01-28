"use strict";
exports.id = 8203;
exports.ids = [8203];
exports.modules = {

/***/ 7234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgSmallStar = function SvgSmallStar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 15,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m7.5.602 2.202 4.765L15 5.95l-3.938 3.527 1.073 5.125L7.5 12.017l-4.635 2.585 1.073-5.125L0 5.95l5.298-.583L7.5.602Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSmallStar);

/***/ }),

/***/ 4268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Selector)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Selector/style.ts


const SelectorWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__SelectorWrapper",
  componentId: "sc-hq6zfx-0"
})(["width:300px;height:33px;.react-select-container,.react-select__control{width:100%;height:33px;min-height:33px;box-shadow:none;border:none;border-bottom:1px solid ", ";border-radius:0;&:hover{border-bottom:1px solid ", ";}}.react-select__placeholder{position:absolute;letter-spacing:0.5px;font-weight:500;font-size:12px;text-transform:capitalize;color:", ";}.react-select__indicator-separator{display:none;f}.react-select__menu{}.react-select__option{&:hover{background-color:", ";}&::selection{background-color:", ";}}.react-select__option--is-focused{background-color:none;}"], theme_get_default()("colors.grey"), theme_get_default()("colors.grey"), theme_get_default()("colors.grey2"), theme_get_default()("colors.grey"), theme_get_default()("colors.grey"));
const Input = external_styled_components_default().input.withConfig({
  displayName: "style__Input",
  componentId: "sc-hq6zfx-1"
})(["width:100%;height:100%;border:none;cursor:pointer;position:absolute;top:0;padding-left:25px;&:focus-visible{outline:none;}&::placeholder{position:absolute;letter-spacing:0.5px;font-weight:500;text-transform:capitalize;font-size:var(--fs-12);color:", ";}"], theme_get_default()("colors.grey2"));
const Option = external_styled_components_default().div.withConfig({
  displayName: "style__Option",
  componentId: "sc-hq6zfx-2"
})(["position:absolute;border:1px solid red;width:300px;cursor:pointer;"]);
const OptionButton = external_styled_components_default().button.withConfig({
  displayName: "style__OptionButton",
  componentId: "sc-hq6zfx-3"
})([""]);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(1929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Selector/index.tsx




const Selector = ({
  placeholder,
  options,
  icon,
  value,
  setValue
}) => {
  const onChange = value => {
    setValue(value);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(SelectorWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
      className: "react-select-container",
      classNamePrefix: "react-select",
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      options: options
    })
  });
};

/* harmony default export */ const components_Selector = (Selector);

/***/ })

};
;