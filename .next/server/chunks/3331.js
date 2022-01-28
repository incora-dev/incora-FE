"use strict";
exports.id = 3331;
exports.ids = [3331];
exports.modules = {

/***/ 3331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Form)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/Form/Form.style.ts



const Container = external_styled_components_default().div.withConfig({
  displayName: "Formstyle__Container",
  componentId: "sc-1im18f2-0"
})(["display:flex;flex-direction:column;row-gap:35.5px;a{margin-top:5px;}"]);
const InputBlock = external_styled_components_default().div.withConfig({
  displayName: "Formstyle__InputBlock",
  componentId: "sc-1im18f2-1"
})(["display:flex;flex-direction:column;row-gap:31px;"]);
const FormContainer = external_styled_components_default().div.withConfig({
  displayName: "Formstyle__FormContainer",
  componentId: "sc-1im18f2-2"
})(["max-width:400px;display:flex;flex-direction:column;row-gap:21px;"]);
const FormInputFile = external_styled_components_default().div.withConfig({
  displayName: "Formstyle__FormInputFile",
  componentId: "sc-1im18f2-3"
})(["margin-top:-4px;box-sizing:border-box;height:max-content;position:relative;border:1px solid ", ";input{padding-top:5px;height:56px;opacity:0;::file-selector-button{display:none;}::-webkit-file-upload-button{display:none;}}label{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;padding:0 35px;font-style:normal;font-weight:600;font-size:var(--fs-12);line-height:18px;text-align:center;letter-spacing:0.05em;color:", ";}"], theme_get_default()("colors.grey2"), theme_get_default()("colors.black"));
const Input = external_styled_components_default().input.withConfig({
  displayName: "Formstyle__Input",
  componentId: "sc-1im18f2-4"
})(["box-sizing:content-box;width:400px;padding-bottom:2px;display:inline-block;height:41px;background-color:", ";font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;letter-spacing:0.03em;text-transform:capitalize;margin:0;text-decoration:none;border:none;box-shadow:inset 0 -1px 0 0 #9ca3a7;-webkit-transition:ease-in-out 0.4s;-moz-transition:ease-in-out 0.4s;transition:all ease-in-out 0.4s;@media only screen and (max-width:", "){width:100%;}&::placeholder{font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;letter-spacing:0.03em;text-transform:capitalize;}&:focus-visible{outline:none;box-shadow:inset 0 -2px 0 0 #e5b100;-webkit-transition:ease-in-out 0.4s;-moz-transition:ease-in-out 0.4s;transition:all ease-in-out 0.4s;}"], ({
  formBlack
}) => formBlack ? theme_get_default()("colors.black") : theme_get_default()("colors.white"), theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const SelectedFile = external_styled_components_default().p.withConfig({
  displayName: "Formstyle__SelectedFile",
  componentId: "sc-1im18f2-5"
})(["text-align:left;font-style:normal;font-weight:600;font-size:var(--fs-12);line-height:18px;color:", ";"], theme_get_default()("colors.black"));
const FilesSelected = external_styled_components_default().div.withConfig({
  displayName: "Formstyle__FilesSelected",
  componentId: "sc-1im18f2-6"
})(["margin-top:35.5px;"]);
// EXTERNAL MODULE: ./components/ButtonWithArrow/index.tsx + 1 modules
var ButtonWithArrow = __webpack_require__(5982);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Form/index.tsx






const optionsSelect = (/* unused pure expression or super */ null && (['What\'s your purpose?\'', 'Project from scratch', 'Estimation & Proposal', 'Team extension', 'Partnership development', 'Business analysis & Tech consultancy', 'Job offering', 'Other'])); // function createFormSelect(fields: string[], formBlack = false) {
//   return (
//     <SelectBlock>
//       <select>
//         {fields.map((label, index) => {
//           return (
//             <option value={label} key={index}>{label}</option>
//           );
//         })}
//       </select>
//     </SelectBlock>
//   );
// }

function createFormFields(fields, formBlack = false) {
  return /*#__PURE__*/jsx_runtime_.jsx(FormContainer, {
    children: fields.map((label, index) => {
      const type = index === 2 ? "email" : "text";
      return /*#__PURE__*/jsx_runtime_.jsx(Input, {
        formBlack: formBlack,
        type: type,
        placeholder: label
      }, index);
    })
  });
}

function CreateUploadFilesInput(filesLabel, formBlack = false) {
  const {
    0: uploadFilesName,
    1: setUploadFilesName
  } = (0,external_react_.useState)([]);

  const handleOnchange = ({
    target
  }) => {
    console.log(target.files);

    if (target.files) {
      const filesName = () => Object.values(target.files).map(({
        name
      }, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectedFile, {
        children: [index + 1, ". ", name]
      }, index));

      setUploadFilesName(filesName);
    } // target.value = null;

  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FormInputFile, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input, {
        formBlack: formBlack,
        type: 'file',
        id: 'inputUploadFiles',
        multiple: true,
        onChange: handleOnchange
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: 'inputUploadFiles',
        children: filesLabel
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(FilesSelected, {
      children: uploadFilesName
    })]
  });
}

function Form({
  fieldsLabels,
  buttonLabel,
  formBlack,
  isUploadFiles = false,
  uploadFilesLabel = /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
}) {
  const inputs = createFormFields(fieldsLabels, formBlack);
  const uploadFiles = isUploadFiles && CreateUploadFilesInput(uploadFilesLabel, formBlack); // const formSelect = createFormSelect(optionsSelect, formBlack)

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(InputBlock, {
      children: inputs
    }), uploadFiles, /*#__PURE__*/jsx_runtime_.jsx(ButtonWithArrow/* default */.Z, {
      buttonLabel: buttonLabel,
      redirectTo: buttonLabel
    })]
  });
}

/* harmony default export */ const components_Form = (Form);

/***/ })

};
;