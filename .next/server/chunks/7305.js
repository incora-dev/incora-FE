"use strict";
exports.id = 7305;
exports.ids = [7305];
exports.modules = {

/***/ 7305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Projects_Technologies)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/Technologies/Technologies.style.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__Container",
  componentId: "sc-bypcp2-0"
})(["max-width:410px;display:flex;gap:7.4px;flex-wrap:wrap;"]);
const Strong = external_styled_components_default().strong.withConfig({
  displayName: "Technologiesstyle__Strong",
  componentId: "sc-bypcp2-1"
})(["margin:7px 10px;font-style:normal;font-weight:600;font-size:var(--fs-10);line-height:28px;letter-spacing:0.1em;color:", ";"], ({
  color
}) => color ? color : '#fff');
const A = external_styled_components_default().a.withConfig({
  displayName: "Technologiesstyle__A",
  componentId: "sc-bypcp2-2"
})(["display:flex;align-items:center;height:22px;left:calc(50% - 69px / 2 - 145.5px);top:0;cursor:pointer;background-color:", ";border-radius:5px;box-shadow:inset 0 0 0 0 #ffc400;-webkit-transition:ease-out 0.4s;-moz-transition:ease-out 0.4s;transition:ease-out 0.4s;&:hover{box-shadow:inset 100px 0 0 0 #ffc400;}"], ({
  bgColor
}) => bgColor ? bgColor : '#454A4D');
const ButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__ButtonContainer",
  componentId: "sc-bypcp2-3"
})(["display:inline-block;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/Technologies/index.tsx



function Technologies({
  technologies,
  textTagsColor,
  bgTagsColor
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: technologies.map(({
      id,
      attributes
    }) => {
      return /*#__PURE__*/jsx_runtime_.jsx(A, {
        href: (attributes === null || attributes === void 0 ? void 0 : attributes.url) || "",
        bgColor: bgTagsColor,
        children: /*#__PURE__*/jsx_runtime_.jsx(ButtonContainer, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Strong, {
            color: textTagsColor,
            children: attributes === null || attributes === void 0 ? void 0 : attributes.name
          })
        })
      }, id);
    })
  });
}

/* harmony default export */ const Projects_Technologies = (Technologies);

/***/ })

};
;