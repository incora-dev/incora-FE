"use strict";
exports.id = 6074;
exports.ids = [6074];
exports.modules = {

/***/ 6074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FormSelect)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/FormClassic/FormSelect/FormSelect.style.tsx


const DropListBlock = external_styled_components_default().div.withConfig({
  displayName: "FormSelectstyle__DropListBlock",
  componentId: "sc-7d487p-0"
})(["position:relative;padding-bottom:2px;display:inline-block;height:41px;background-color:", ";font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;cursor:pointer;letter-spacing:0.03em;text-transform:capitalize;margin:0;text-decoration:none;border:none;box-shadow:inset 0 -1px 0 0 #9ca3a7;-webkit-transition:ease-in-out 0.4s;-moz-transition:ease-in-out 0.4s;transition:all ease-in-out 0.4s;@media only screen and (max-width:", "){width:100%;}"], ({
  formTheme
}) => formTheme ? theme_get_default()("colors.black") : theme_get_default()("colors.white"), theme_get_default()("breakpoints.mobile"));
const SelectBlock = external_styled_components_default().div.withConfig({
  displayName: "FormSelectstyle__SelectBlock",
  componentId: "sc-7d487p-1"
})(["position:relative;width:", ";margin:0;padding-bottom:2px;display:flex;height:41px;background-color:", ";font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;cursor:pointer;letter-spacing:0.03em;text-transform:capitalize;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-decoration:none;border:none;box-shadow:inset 0 -1px 0 0 #9ca3a7;-webkit-transition:ease-in-out 0.4s;-moz-transition:ease-in-out 0.4s;transition:all ease-in-out 0.4s;@media only screen and (max-width:", "){width:100%;}"], ({
  width
}) => width, ({
  formTheme
}) => formTheme ? theme_get_default()("colors.black") : theme_get_default()("colors.white"), theme_get_default()("breakpoints.mobile"));
const Label = external_styled_components_default().div.withConfig({
  displayName: "FormSelectstyle__Label",
  componentId: "sc-7d487p-2"
})(["display:flex;column-gap:10px;"]);
const SelectPlaceholder = external_styled_components_default().p.withConfig({
  displayName: "FormSelectstyle__SelectPlaceholder",
  componentId: "sc-7d487p-3"
})(["font-style:normal;font-weight:500;font-size:12px;line-height:18px;letter-spacing:0.03em;color:", ";"], ({
  formTheme
}) => formTheme ? theme_get_default()("colors.font2") : theme_get_default()("colors.grey2"));
const SelectOption = external_styled_components_default().div.withConfig({
  displayName: "FormSelectstyle__SelectOption",
  componentId: "sc-7d487p-4"
})(["position:absolute;bottom:0;left:0;width:100%;height:100%;display:flex;align-items:flex-end;justify-content:space-between;font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;letter-spacing:0.03em;text-transform:capitalize;color:", ";p{margin-bottom:12px;}"], ({
  formTheme
}) => formTheme ? theme_get_default()("colors.white") : theme_get_default()("colors.black"));
const ArrowWrapper = external_styled_components_default().div.withConfig({
  displayName: "FormSelectstyle__ArrowWrapper",
  componentId: "sc-7d487p-5"
})(["svg{margin-bottom:18px;path{fill:", ";}}"], ({
  formTheme
}) => formTheme ? theme_get_default()("colors.white") : theme_get_default()("colors.black"));
const DropList = external_styled_components_default().div.withConfig({
  displayName: "FormSelectstyle__DropList",
  componentId: "sc-7d487p-6"
})(["z-index:4;position:absolute;top:0;width:100%;padding:16px 13px;display:", ";flex-direction:column;row-gap:6px;font-style:normal;font-weight:500;font-size:12px;line-height:18px;letter-spacing:0.03em;color:", ";background-color:", ";-webkit-box-shadow:4px 4px 8px 0 rgba(34,60,80,0.2);-moz-box-shadow:4px 4px 8px 0 rgba(34,60,80,0.2);box-shadow:4px 4px 8px 0 rgba(34,60,80,0.2);"], ({
  display
}) => display, ({
  formTheme
}) => formTheme ? theme_get_default()("colors.black") : theme_get_default()("colors.white"), ({
  formTheme
}) => formTheme ? theme_get_default()("colors.black") : theme_get_default()("colors.white"));
const Option = external_styled_components_default().option.withConfig({
  displayName: "FormSelectstyle__Option",
  componentId: "sc-7d487p-7"
})(["padding:8px 12px;color:", ";&:hover{color:", ";background-color:", ";}"], ({
  formTheme
}) => formTheme ? theme_get_default()("colors.white") : theme_get_default()("colors.black"), ({
  formTheme
}) => formTheme ? theme_get_default()("colors.black") : theme_get_default()("colors.white"), ({
  formTheme
}) => formTheme ? theme_get_default()("colors.white") : theme_get_default()("colors.black"));
// EXTERNAL MODULE: ./public/navArrow.svg
var navArrow = __webpack_require__(3995);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/FormClassic/FormSelect/index.tsx






const CreateFormSelect = ({
  fields,
  formTheme = false,
  setSelectedPurpose,
  placeHolder,
  width = "100%",
  Icon = null
}) => {
  const {
    0: shouldShowDropList,
    1: setShouldShowDropList
  } = (0,external_react_.useState)("none");
  const {
    0: selectedOption,
    1: setSelectedOption
  } = (0,external_react_.useState)(null);

  const DropListPlaceholder = selectedOption && /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: selectedOption
  });

  const DropListLabel = DropListPlaceholder || /*#__PURE__*/jsx_runtime_.jsx(SelectPlaceholder, {
    formTheme: formTheme,
    children: placeHolder
  });

  const dropList = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (shouldShowDropList === "none") return;

    function handleClick(event) {
      if (dropList.current && !dropList.current.contains(event.target)) {
        setShouldShowDropList("none");
      }
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [shouldShowDropList]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectBlock, {
    formTheme: formTheme,
    width: width,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectOption, {
      formTheme: formTheme,
      onClick: () => setShouldShowDropList("flex"),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Label, {
        className: "svgYellow",
        children: [Icon && /*#__PURE__*/jsx_runtime_.jsx(Icon, {}), DropListLabel]
      }), /*#__PURE__*/jsx_runtime_.jsx(ArrowWrapper, {
        formTheme: formTheme,
        children: /*#__PURE__*/jsx_runtime_.jsx(navArrow/* default */.Z, {
          width: "10.5",
          height: "6",
          viewBox: "0 0 10 5"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(DropList, {
      display: shouldShowDropList,
      formTheme: formTheme,
      ref: dropList,
      children: fields.map((label, index) => /*#__PURE__*/jsx_runtime_.jsx(Option, {
        onClick: e => {
          setSelectedOption(label);
          setShouldShowDropList("none");
          setSelectedPurpose(label);
        },
        formTheme: formTheme,
        children: label
      }, index))
    })]
  });
};

/* harmony default export */ const FormSelect = (CreateFormSelect);

/***/ })

};
;