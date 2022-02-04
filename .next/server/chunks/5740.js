"use strict";
exports.id = 5740;
exports.ids = [5740];
exports.modules = {

/***/ 5740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_HexagonsBackground)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/HexagonsBackground/style.ts


const HexagonsWrap = external_styled_components_default().div.withConfig({
  displayName: "style__HexagonsWrap",
  componentId: "sc-1qplko2-0"
})(["width:100%;height:100%;background-color:", ";position:absolute;overflow:hidden;"], (0,theme_get_.themeGet)("colors.black"));
const Position = external_styled_components_default().div.withConfig({
  displayName: "style__Position",
  componentId: "sc-1qplko2-1"
})(["position:absolute;top:", ";left:", ";right:", ";"], ({
  top
}) => top ? `${top}px` : "0", ({
  left
}) => left ? `${left}px` : "none", ({
  right
}) => right ? `${right}px` : "none");
// EXTERNAL MODULE: ./public/hexagonBordered.svg
var hexagonBordered = __webpack_require__(3177);
// EXTERNAL MODULE: ./public/hexagonFilled.svg
var hexagonFilled = __webpack_require__(8866);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/HexagonsBackground/index.tsx






const HexagonsBackground = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HexagonsWrap, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: 111,
      left: -70,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: 350,
      left: -100,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: 365,
      left: 30,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: 505,
      left: 267,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: 530,
      left: 340,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: -130,
      left: 210,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: -50,
      left: 310,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: -20,
      right: -30,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: 130,
      right: -65,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: 535,
      right: -60,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Position, {
      top: 310,
      right: 20,
      children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
    })]
  });
};

/* harmony default export */ const components_HexagonsBackground = (HexagonsBackground);

/***/ })

};
;