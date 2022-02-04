"use strict";
exports.id = 7814;
exports.ids = [7814];
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

/***/ }),

/***/ 3535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Loader)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Loader/style.ts

const LoaderWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__LoaderWrapper",
  componentId: "sc-x41l1c-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]);
;// CONCATENATED MODULE: ./public/RhombusLoader.gif
/* harmony default export */ const RhombusLoader = ({"src":"/_next/static/media/RhombusLoader.20ac072e.gif","height":64,"width":64});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Loader/index.tsx





const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(LoaderWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
      src: RhombusLoader.src,
      width: RhombusLoader.width,
      height: RhombusLoader.height,
      alt: "loader"
    })
  });
};

/* harmony default export */ const common_Loader = (Loader);

/***/ })

};
;