"use strict";
exports.id = 9124;
exports.ids = [9124];
exports.modules = {

/***/ 5802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContactUs)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/Homepage/ContactUs/ContactUs.style.ts


const Block = external_styled_components_default().div.withConfig({
  displayName: "ContactUsstyle__Block",
  componentId: "sc-1f3yty3-0"
})(["overflow:hidden;"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "ContactUsstyle__Container",
  componentId: "sc-1f3yty3-1"
})(["position:relative;max-width:1006px;display:flex;column-gap:242px;margin:0 auto;padding:85px 0 122px;@media only screen and (max-width:", "){padding:53px 20px 53px;flex-wrap:wrap;justify-content:center;>div:first-of-type{width:100%;}}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const PositionLoading = external_styled_components_default().div.withConfig({
  displayName: "ContactUsstyle__PositionLoading",
  componentId: "sc-1f3yty3-2"
})(["position:absolute;top:101px;right:-114px;svg{transform:rotate(-45deg);path{fill:#000;}}"]);
const Titles = external_styled_components_default().div.withConfig({
  displayName: "ContactUsstyle__Titles",
  componentId: "sc-1f3yty3-3"
})(["margin-bottom:38px;"]);
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "ContactUsstyle__H2",
  componentId: "sc-1f3yty3-4"
})(["font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;letter-spacing:0.05em;white-space:nowrap;text-transform:capitalize;color:#000;"]);
const H4 = external_styled_components_default().h4.withConfig({
  displayName: "ContactUsstyle__H4",
  componentId: "sc-1f3yty3-5"
})(["max-width:361px;margin-top:-4px;font-style:normal;font-weight:bold;font-size:var(--fs-18);line-height:27px;letter-spacing:0.05em;color:#000000;"]);
const Form = external_styled_components_default().form.withConfig({
  displayName: "ContactUsstyle__Form",
  componentId: "sc-1f3yty3-6"
})(["font-family:Poppins;font-style:normal;font-weight:bold;font-size:var(--fs-18);line-height:27px;letter-spacing:0.05em;color:#000000;"]);
// EXTERNAL MODULE: ./components/Form/index.tsx + 1 modules
var components_Form = __webpack_require__(3331);
;// CONCATENATED MODULE: ./components/Homepage/ContactUs/Addresses/Addresses.style.ts


const Addresses_style_Container = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__Container",
  componentId: "sc-yntxzo-0"
})(["position:relative;margin-top:47px;margin-left:4px;@media only screen and (max-width:", "){svg{position:relative;left:55px;}margin-left:0;}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const AddressesContainer = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__AddressesContainer",
  componentId: "sc-yntxzo-1"
})(["position:absolute;top:131px;left:-51px;max-width:302px;display:flex;flex-direction:column;row-gap:27px;margin:auto;@media only screen and (max-width:", "){left:20px;}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const Address = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__Address",
  componentId: "sc-yntxzo-2"
})([""]);
const Country = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__Country",
  componentId: "sc-yntxzo-3"
})(["font-family:Poppins;font-style:normal;font-weight:400;font-size:var(--fs-14);line-height:28px;letter-spacing:0.1em;text-transform:capitalize;color:#9CA3A7;"]);
const Street = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__Street",
  componentId: "sc-yntxzo-4"
})(["font-family:Poppins;font-style:normal;font-weight:600;font-size:var(--fs-16);line-height:30px;letter-spacing:0.1em;text-transform:capitalize;color:#000;"]);
// EXTERNAL MODULE: ./public/SVG/hexagon1.svg
var hexagon1 = __webpack_require__(4109);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Homepage/ContactUs/Addresses/index.tsx






function createAddresses({
  addresses
}) {
  return Object.values(addresses).map((address, index) => Object.keys(address).map(county => Object.values(address).map(street => /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Address, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Country, {
        children: county
      }), /*#__PURE__*/jsx_runtime_.jsx(Street, {
        children: street
      })]
    })
  }, index))));
}

function Addresses(addresses) {
  const addressesBlock = createAddresses(addresses);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Addresses_style_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(hexagon1/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(AddressesContainer, {
      children: addressesBlock
    })]
  });
}

/* harmony default export */ const ContactUs_Addresses = (Addresses);
// EXTERNAL MODULE: ./public/loading1.svg
var loading1 = __webpack_require__(8855);
;// CONCATENATED MODULE: ./components/Homepage/ContactUs/index.tsx







function ContactUsComponent({
  title,
  text,
  formLabels,
  addresses,
  buttonLabel
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Block, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Titles, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(H2, {
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx(H4, {
            children: text
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(components_Form/* default */.Z, {
          fieldsLabels: formLabels,
          buttonLabel: buttonLabel
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ContactUs_Addresses, {
        addresses: addresses
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionLoading, {
        children: /*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {})
      })]
    })
  });
}

/* harmony default export */ const ContactUs = (ContactUsComponent);

/***/ }),

/***/ 9285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SVG)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SVG/Arrow4.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrow4 = function SvgArrow4(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 44,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m34.419 17.49-.093.1.093.102 1.196 1.31.11.12.111-.12 8.275-9.055.092-.101-.092-.101L35.837.69 35.726.57l-.111.12L34.418 2l-.092.1.093.102L40.42 8.77H.85v2.152h39.57l-6.002 6.568Z",
    fill: "#FEC602",
    stroke: "#FEC602",
    strokeWidth: 0.3
  })));
};

/* harmony default export */ const Arrow4 = (SvgArrow4);
;// CONCATENATED MODULE: ./public/SVG/index.ts

/* harmony default export */ const SVG = (Arrow4);

/***/ })

};
;