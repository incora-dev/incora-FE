"use strict";
exports.id = 5435;
exports.ids = [5435];
exports.modules = {

/***/ 5435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AttachCV)
});

// EXTERNAL MODULE: ./components/Form/index.tsx + 1 modules
var Form = __webpack_require__(3331);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Vacancy/AttachCV/style.ts


const AttachCvWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__AttachCvWrapper",
  componentId: "sc-17loby3-0"
})(["width:100%;h3{font-weight:800;font-size:", ";line-height:27px;letter-spacing:0.05em;margin-bottom:20px;color:", ";}.attach{margin-bottom:", ";}.personal{margin-bottom:", ";}"], ({
  big
}) => big ? "24px" : "18px", ({
  big
}) => big ? theme_get_default()("colors.white") : "black", ({
  big
}) => big ? "51px" : "0", ({
  big
}) => big ? "16px" : "11px");
const DragAndDropBox = external_styled_components_default().div.withConfig({
  displayName: "style__DragAndDropBox",
  componentId: "sc-17loby3-1"
})(["width:100%;height:", ";border:1px solid ", ";display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:", ";margin-bottom:", ";> span{font-weight:600;font-size:", ";line-height:", ";letter-spacing:0.05em;}.clickable{color:", ";margin-right:5px;}.non_clickable{color:", ";}p{width:167.8px;font-size:var(--fs-11);line-height:16px;text-align:center;color:", ";}"], ({
  big
}) => big ? "136px" : "103px", theme_get_default()("colors.grey2"), ({
  big
}) => big ? "50px" : "0", ({
  big
}) => big ? "75px" : "30px", ({
  big
}) => big ? "14px" : "12px", ({
  big
}) => big ? "21px" : "18px", theme_get_default()("colors.yellow"), theme_get_default()("colors.black"), theme_get_default()("colors.font1"));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Vacancy/AttachCV/index.tsx




const contactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  formLabels: ["name", "phone number", "email", "city"],
  addresses: [{
    "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine"
  }, {
    "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA"
  }],
  buttonLabel: "Join Us"
};

const AttachCv = ({
  big,
  formBlack
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AttachCvWrapper, {
    big: big,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "attach",
      children: "1. Attach Your CV"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DragAndDropBox, {
      big: big,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "clickable",
        children: ["Upload a file ", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "non_clickable",
          children: "or drag and drop here"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "We accept PDF, DOC, DOCX, JPG and PNG files."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "personal",
      children: "2. Personal information"
    }), /*#__PURE__*/jsx_runtime_.jsx(Form/* default */.Z, {
      fieldsLabels: contactUs.formLabels,
      buttonLabel: contactUs.buttonLabel,
      formBlack: formBlack
    })]
  });
};

/* harmony default export */ const AttachCV = (AttachCv);

/***/ })

};
;