"use strict";
exports.id = 5802;
exports.ids = [5802];
exports.modules = {

/***/ 5802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContactUs)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Homepage/ContactUs/ContactUs.style.ts


const Block = external_styled_components_default().div.withConfig({
  displayName: "ContactUsstyle__Block",
  componentId: "sc-1f3yty3-0"
})(["overflow:hidden;"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "ContactUsstyle__Container",
  componentId: "sc-1f3yty3-1"
})(["position:relative;max-width:1006px;display:flex;justify-content:space-between;margin:0 auto;padding:85px 0 120px;@media only screen and (max-width:", "){padding:40px 25px 50px;column-gap:115px;max-width:100%;}@media only screen and (max-width:", "){max-width:100%;column-gap:70px;}@media only screen and (max-width:", "){padding:40px 25px 50px;flex-wrap:wrap;justify-content:center;>div:first-of-type{width:100%;}}@media only screen and (max-width:", "){padding:20px 15px 50px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const Titles = external_styled_components_default().div.withConfig({
  displayName: "ContactUsstyle__Titles",
  componentId: "sc-1f3yty3-2"
})(["margin-bottom:38px;"]);
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "ContactUsstyle__H2",
  componentId: "sc-1f3yty3-3"
})(["font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;@media only screen and (max-width:", "){font-size:var(--fs-40);line-height:72px;}@media only screen and (max-width:", "){line-height:50px;}@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:60px;}letter-spacing:0.05em;white-space:nowrap;text-transform:capitalize;color:#000;"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.sTablet'));
const H4 = external_styled_components_default().h4.withConfig({
  displayName: "ContactUsstyle__H4",
  componentId: "sc-1f3yty3-4"
})(["max-width:361px;margin-top:-4px;font-style:normal;font-weight:bold;font-size:var(--fs-18);line-height:27px;letter-spacing:0.05em;color:#000000;"]);
const Form = external_styled_components_default().form.withConfig({
  displayName: "ContactUsstyle__Form",
  componentId: "sc-1f3yty3-5"
})(["font-family:Poppins;font-style:normal;font-weight:bold;font-size:var(--fs-18);line-height:27px;letter-spacing:0.05em;color:#000000;"]);
// EXTERNAL MODULE: ./components/FormClassic/index.tsx + 3 modules
var FormClassic = __webpack_require__(3478);
;// CONCATENATED MODULE: ./components/Homepage/ContactUs/Addresses/Addresses.style.ts


const Addresses_style_Container = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__Container",
  componentId: "sc-yntxzo-0"
})(["position:relative;right:-28px;margin-top:47px;margin-left:4px;@media only screen and (max-width:", "){svg{position:relative;left:55px;}margin-left:0;}@media only screen and (max-width:", "){margin-left:110px;}"], theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.xsMobile'));
const AddressesContainer = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__AddressesContainer",
  componentId: "sc-yntxzo-1"
})(["position:absolute;top:131px;left:-51px;max-width:302px;display:flex;flex-direction:column;row-gap:27px;margin:auto;@media only screen and (max-width:", "){left:-80px;}@media only screen and (max-width:", "){left:-5px;}@media only screen and (max-width:", "){left:20px;}@media only screen and (max-width:", "){left:-10px;width:90%;}"], theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mMobile'), theme_get_default()('breakpoints.xsMobile'));
const Address = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__Address",
  componentId: "sc-yntxzo-2"
})(["@media only screen and (max-width:", "){width:inherit;}"], theme_get_default()('breakpoints.mobile'));
const Country = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__Country",
  componentId: "sc-yntxzo-3"
})(["font-family:Poppins;font-style:normal;font-weight:400;font-size:var(--fs-14);line-height:28px;letter-spacing:0.1em;text-transform:capitalize;color:#9CA3A7;"]);
const Street = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__Street",
  componentId: "sc-yntxzo-4"
})(["font-style:normal;font-weight:600;font-size:var(--fs-16);line-height:30px;letter-spacing:0.1em;text-transform:capitalize;color:#000;"]);
const PositionLoading = external_styled_components_default().div.withConfig({
  displayName: "Addressesstyle__PositionLoading",
  componentId: "sc-yntxzo-5"
})(["position:absolute;top:-32px;right:-87px;svg{transform:rotate(-45deg);path{fill:#000;}}"]);
// EXTERNAL MODULE: ./public/SVG/hexagon1.svg
var hexagon1 = __webpack_require__(4109);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./public/loading1.svg
var loading1 = __webpack_require__(8855);
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
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionLoading, {
      children: /*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {})
    })]
  });
}

/* harmony default export */ const ContactUs_Addresses = (Addresses);
;// CONCATENATED MODULE: ./components/Homepage/ContactUs/index.tsx






function ContactUsComponent({
  title,
  text,
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
        }), /*#__PURE__*/jsx_runtime_.jsx(FormClassic/* default */.Z, {
          buttonLabel: buttonLabel
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ContactUs_Addresses, {
        addresses: addresses
      })]
    })
  });
}

/* harmony default export */ const ContactUs = (ContactUsComponent);

/***/ })

};
;