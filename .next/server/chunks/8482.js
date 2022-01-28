"use strict";
exports.id = 8482;
exports.ids = [8482];
exports.modules = {

/***/ 8482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Tags)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseFilter/components/Tags/style.ts

const TagsWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__TagsWrapper",
  componentId: "sc-6yt7kw-0"
})(["width:100%;display:flex;flex-flow:wrap row;gap:15px;"]);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseFilter/components/Tags/Tag/style.ts


const TagWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__TagWrapper",
  componentId: "sc-16zb936-0"
})(["display:flex;justify-content:center;align-items:center;cursor:pointer;height:34px;padding:0 15px;border:1px solid ", ";background-color:", ";span{font-weight:600;font-size:var(--fs-12);line-height:18px;letter-spacing:0.05em;color:", ";}"], theme_get_default()("colors.grey"), ({
  currentIndex,
  index
}) => currentIndex === index ? theme_get_default()("colors.black") : theme_get_default()("colors.white"), ({
  currentIndex,
  index
}) => currentIndex === index ? theme_get_default()("colors.white") : theme_get_default()("colors.black"));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseFilter/components/Tags/Tag/index.tsx



const Tag = ({
  label,
  index,
  currentIndex,
  setCurrentIndex,
  setCurrentIndustryTag
}) => {
  const onClick = () => {
    setCurrentIndustryTag(label);
    setCurrentIndex(index);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(TagWrapper, {
    currentIndex: currentIndex,
    index: index,
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: label
    })
  });
};

/* harmony default export */ const Tags_Tag = (Tag);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseFilter/components/Tags/index.tsx






const Tags = ({
  labels,
  setCurrentIndustryTag
}) => {
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = (0,external_react_.useState)(0);
  const tagsArray = labels.map(label => {
    var _label$attributes;

    const id = label.id;
    const name = (_label$attributes = label.attributes) === null || _label$attributes === void 0 ? void 0 : _label$attributes.name;
    return {
      id,
      name
    };
  });
  tagsArray.unshift({
    id: "0",
    name: "all"
  });
  const tags = tagsArray.map((label, index) => {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: label.name && /*#__PURE__*/jsx_runtime_.jsx(Tags_Tag, {
        label: label.name,
        index: index,
        currentIndex: currentIndex,
        setCurrentIndex: setCurrentIndex,
        setCurrentIndustryTag: setCurrentIndustryTag
      }, label.id)
    });
  });
  return /*#__PURE__*/jsx_runtime_.jsx(TagsWrapper, {
    children: tags
  });
};

/* harmony default export */ const components_Tags = (Tags);

/***/ })

};
;