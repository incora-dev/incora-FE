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
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/Technologies/Technologies.style.ts


const Container = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__Container",
  componentId: "sc-bypcp2-0"
})(["max-width:410px;display:flex;gap:7.4px;flex-wrap:wrap;"]);
const Strong = external_styled_components_default().strong.withConfig({
  displayName: "Technologiesstyle__Strong",
  componentId: "sc-bypcp2-1"
})(["z-index:1;position:relative;margin:7px 10px;font-style:normal;font-weight:600;font-size:var(--fs-10);line-height:28px;letter-spacing:0.1em;color:", ";"], ({
  color
}) => color ? color : '#fff');
const Div = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__Div",
  componentId: "sc-bypcp2-2"
})(["position:relative;display:flex;align-items:center;height:22px;top:0;cursor:pointer;background-color:", ";border-radius:5px;&:after{position:absolute;top:0;height:100%;width:0;content:'';border-radius:5px;background-color:", ";transition:width ", ";}&:hover:after{width:100%;}"], ({
  bgColor
}) => bgColor ? bgColor : '#454A4D', theme_get_default()("colors.yellow"), theme_get_default()("transition.button"));
const ButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__ButtonContainer",
  componentId: "sc-bypcp2-3"
})(["display:inline-block;"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./constants/routes.ts
var routes = __webpack_require__(1624);
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
      return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: routes/* ROUTES.EXPERTISE.TECHNOLOGIES */.Z.EXPERTISE.TECHNOLOGIES + `${attributes === null || attributes === void 0 ? void 0 : attributes.url}/${id}`,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Div, {
          bgColor: bgTagsColor,
          children: /*#__PURE__*/jsx_runtime_.jsx(ButtonContainer, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Strong, {
              color: textTagsColor,
              children: attributes === null || attributes === void 0 ? void 0 : attributes.Technology_name
            })
          })
        })
      }, id);
    })
  });
}

/* harmony default export */ const Projects_Technologies = (Technologies);

/***/ }),

/***/ 1624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = {
  EXPERTISE: {
    TECHNOLOGIES: "/expertise/technologies/"
  },
  CASE_STUDIES: "/case_studies/",
  SERVICES: "/services/",
  INSIGHTS: "/insights/",
  CONTACTS: "/contacts/",
  COMPANY: {
    DEFAULT: "/company/",
    ABOUT: "/about/",
    CAREER: "/career/",
    SEND_CV: "send_cv"
  }
};

/***/ })

};
;