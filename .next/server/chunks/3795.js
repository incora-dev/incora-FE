"use strict";
exports.id = 3795;
exports.ids = [3795];
exports.modules = {

/***/ 3795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CreatePosts)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Homepage/EmbodiedIdeas/Projects/Technologies/index.tsx + 1 modules
var Technologies = __webpack_require__(7305);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/News/Categories/Categories.style.tsx

const Div = external_styled_components_default().div.withConfig({
  displayName: "Categoriesstyle__Div",
  componentId: "sc-1bmegyu-0"
})(["display:flex;column-gap:5px;"]);
const P = external_styled_components_default().p.withConfig({
  displayName: "Categoriesstyle__P",
  componentId: "sc-1bmegyu-1"
})(["font-family:Poppins;font-style:normal;font-weight:600;font-size:var(--fs-12);line-height:22px;letter-spacing:0.1em;text-transform:uppercase;color:#FEC602;cursor:pointer;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/News/Categories/index.tsx





const Categories = ({
  categories
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    children: categories.map(({
      id,
      attributes
    }, index) => {
      const url = attributes === null || attributes === void 0 ? void 0 : attributes.url;
      const name = attributes === null || attributes === void 0 ? void 0 : attributes.name;
      return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: `/technologies/${url}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(P, {
            children: [name, categories.length - 1 !== index && ","]
          })
        })
      }, id);
    })
  });
};

/* harmony default export */ const News_Categories = (Categories);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/News/CreatePosts/CreatePosts.style.tsx


const NewsContainer = external_styled_components_default().div.withConfig({
  displayName: "CreatePostsstyle__NewsContainer",
  componentId: "sc-pdvhfv-0"
})(["display:flex;flex-direction:column;row-gap:14px;a{h3{margin-top:-10px;}}"]);
const ImgBlock = external_styled_components_default().a.withConfig({
  displayName: "CreatePostsstyle__ImgBlock",
  componentId: "sc-pdvhfv-1"
})(["display:flex;cursor:pointer;img{border-radius:0 20px 0 0;}"]);
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "CreatePostsstyle__H3",
  componentId: "sc-pdvhfv-2"
})(["max-width:308px;font-style:normal;font-weight:bold;font-size:var(--fs-18);line-height:22px;letter-spacing:0.05em;text-transform:capitalize;color:", ";"], theme_get_default()("colors.black"));
const Element = external_styled_components_default().div.withConfig({
  displayName: "CreatePostsstyle__Element",
  componentId: "sc-pdvhfv-3"
})(["align-self:flex-end;width:15px;height:171px;background:", ";border-radius:0 0 0 30px;"], theme_get_default()("colors.yellow"));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/News/CreatePosts/index.tsx











const CreateNews = ({
  id,
  title,
  url,
  tags,
  categories,
  image
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(NewsContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: `insights/${url}`,
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ImgBlock, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Element, {}), /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            loader: () => image,
            src: image,
            width: 293,
            height: 201,
            alt: "article preview"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Technologies/* default */.Z, {
        technologies: tags,
        textTagsColor: theme/* theme.colors.black */.r.colors.black,
        bgTagsColor: theme/* theme.colors.grey */.r.colors.grey
      }), /*#__PURE__*/jsx_runtime_.jsx(News_Categories, {
        categories: categories
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: `insights/${url}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(H3, {
            children: title
          })
        })
      })]
    }, id)
  });
};

/* harmony default export */ const CreatePosts = (CreateNews);

/***/ })

};
;