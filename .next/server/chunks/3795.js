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
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/News/Categories/Categories.style.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "Categoriesstyle__Div",
  componentId: "sc-1bmegyu-0"
})(["display:flex;column-gap:5px;@media only screen and (max-width:", "){flex-direction:column;}"], theme_get_default()("breakpoints.sTablet"));
const P = external_styled_components_default().p.withConfig({
  displayName: "Categoriesstyle__P",
  componentId: "sc-1bmegyu-1"
})(["font-family:Poppins;font-style:normal;font-weight:600;font-size:var(--fs-12);line-height:22px;letter-spacing:0.1em;text-transform:uppercase;color:#FEC602;cursor:pointer;@media only screen and (max-width:", "){line-height:21px;}"], theme_get_default()("breakpoints.sTablet"));
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
;// CONCATENATED MODULE: ./components/News/CreatePosts/CreatePosts.style.tsx


const NewsContainer = external_styled_components_default().div.withConfig({
  displayName: "CreatePostsstyle__NewsContainer",
  componentId: "sc-pdvhfv-0"
})(["display:flex;width:308px;height:343px;flex-direction:column;row-gap:14px;margin-right:67px;@media only screen and (max-width:", "){margin-right:40px;}@media only screen and (max-width:", "){margin-right:20px;}@media only screen and (max-width:", "){margin-right:15px;}@media only screen and (max-width:", "){margin-right:30px;}:last-child{margin-right:0;}a{h3{margin-top:-10px;}}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.sTablet"), theme_get_default()("breakpoints.mobile"));
const ImgBlock = external_styled_components_default().a.withConfig({
  displayName: "CreatePostsstyle__ImgBlock",
  componentId: "sc-pdvhfv-1"
})(["display:flex;cursor:pointer;img{border-radius:0 20px 0 0;}"]);
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "CreatePostsstyle__H3",
  componentId: "sc-pdvhfv-2"
})(["max-width:308px;font-style:normal;font-weight:bold;font-size:var(--fs-18);line-height:22px;letter-spacing:0.05em;text-transform:capitalize;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-14);line-height:21px;}@media only screen and (max-width:", "){font-size:var(--fs-16);line-height:26px;}"], theme_get_default()("colors.black"), theme_get_default()("breakpoints.sTablet"), theme_get_default()("breakpoints.sTablet"));
const Element = external_styled_components_default().div.withConfig({
  displayName: "CreatePostsstyle__Element",
  componentId: "sc-pdvhfv-3"
})(["align-self:flex-end;width:15px;height:171px;background:", ";border-radius:0 0 0 30px;@media only screen and (max-width:", "){height:130px;}"], theme_get_default()("colors.yellow"), theme_get_default()("breakpoints.sTablet"));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./constants/routes.ts
var routes = __webpack_require__(1624);
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
      className: "news-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: routes/* ROUTES.INSIGHTS */.Z.INSIGHTS + `${url}/${id}`,
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
        href: routes/* ROUTES.INSIGHTS */.Z.INSIGHTS + `${url}/${id}`,
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