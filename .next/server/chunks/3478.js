"use strict";
exports.id = 3478;
exports.ids = [3478];
exports.modules = {

/***/ 7864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FormClassic_FilesUploader)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/FormClassic/FilesUploader/FilesUploader.style.tsx



const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "FilesUploaderstyle__Wrapper",
  componentId: "sc-13anebj-0"
})(["display:flex;flex-direction:column;row-gap:20px;margin-top:10px;max-width:400px;"]);
const UploadFile = external_styled_components_default().div.withConfig({
  displayName: "FilesUploaderstyle__UploadFile",
  componentId: "sc-13anebj-1"
})(["box-sizing:border-box;height:max-content;position:relative;border:1px solid ", ";cursor:pointer;label{position:absolute;top:50%;left:50%;padding:", ";width:100%;transform:translate(-50%,-50%);cursor:pointer;color:", ";font-style:normal;font-weight:600;font-size:var(--fs-12);line-height:18px;text-align:center;letter-spacing:0.05em;div{span{color:", ";&:hover{color:", ";}}}p{padding:0 30px;font-style:normal;font-weight:normal;font-size:11px;line-height:16px;text-align:center;letter-spacing:0.1em;color:#BCBCC0;}}"], theme_get_default()("colors.grey2"), ({
  padding
}) => padding, ({
  formTheme
}) => formTheme ? theme_get_default()("colors.white") : theme_get_default()("colors.black"), theme_get_default()("colors.yellow2"), theme_get_default()("colors.yellow4"));
const SelectedFile = external_styled_components_default().p.withConfig({
  displayName: "FilesUploaderstyle__SelectedFile",
  componentId: "sc-13anebj-2"
})(["text-align:left;font-style:normal;font-weight:600;font-size:var(--fs-12);line-height:18px;"]);
const FilesSelected = external_styled_components_default().div.withConfig({
  displayName: "FilesUploaderstyle__FilesSelected",
  componentId: "sc-13anebj-3"
})(["display:", ";color:", ";"], ({
  showFiles
}) => showFiles, ({
  formTheme
}) => formTheme ? theme_get_default()("colors.white") : theme_get_default()("colors.black"));
const Input = external_styled_components_default().input.withConfig({
  displayName: "FilesUploaderstyle__Input",
  componentId: "sc-13anebj-4"
})(["padding-top:5px;height:", ";width:100%;opacity:0;cursor:pointer;box-sizing:content-box;padding-bottom:2px;display:inline-block;background-color:", ";font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;letter-spacing:0.03em;text-transform:capitalize;margin:0;text-decoration:none;border:none;box-shadow:inset 0 -1px 0 0 #9ca3a7;-webkit-transition:ease-in-out 0.4s;-moz-transition:ease-in-out 0.4s;transition:all ease-in-out 0.4s;@media only screen and (max-width:", "){width:100%;}"], ({
  height
}) => height, ({
  formTheme
}) => formTheme ? theme_get_default()("colors.black") : theme_get_default()("colors.white"), theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/FormClassic/FilesUploader/index.tsx





const FilesUploader = ({
  filesLabel,
  formTheme = false,
  setSelectedFile,
  padding = '15px 35px',
  inputHeight = '41px'
}) => {
  const {
    0: uploadFilesName,
    1: setUploadFilesName
  } = (0,external_react_.useState)([]);

  const handleOnchange = event => {
    const {
      target: {
        files
      }
    } = event;

    if (files) {
      const filesName = () => Object.values(files).map(({
        name
      }, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectedFile, {
        children: [index + 1, ". ", name]
      }, index));

      setSelectedFile(files);
      setUploadFilesName(filesName);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(UploadFile, {
      padding: padding,
      formTheme: formTheme,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input, {
        height: inputHeight,
        formTheme: formTheme,
        type: 'file',
        id: 'inputUploadFiles',
        multiple: true,
        onChange: handleOnchange
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: 'inputUploadFiles',
        children: filesLabel
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(FilesSelected, {
      formTheme: formTheme,
      showFiles: uploadFilesName.length !== 0 ? 'block' : 'none',
      children: uploadFilesName
    })]
  });
};

/* harmony default export */ const FormClassic_FilesUploader = (FilesUploader);

/***/ }),

/***/ 3478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_FormClassic)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/FormClassic/Form.style.tsx



const Container = external_styled_components_default().div.withConfig({
  displayName: "Formstyle__Container",
  componentId: "sc-spbvxq-0"
})(["display:flex;flex-direction:column;row-gap:35.5px;a{margin-top:5px;}"]);
const InputBlock = external_styled_components_default().div.withConfig({
  displayName: "Formstyle__InputBlock",
  componentId: "sc-spbvxq-1"
})(["display:flex;flex-direction:column;row-gap:31px;"]);
const FormContainer = external_styled_components_default().form.withConfig({
  displayName: "Formstyle__FormContainer",
  componentId: "sc-spbvxq-2"
})(["max-width:400px;display:flex;flex-direction:column;row-gap:21px;"]);
const Input = external_styled_components_default().input.withConfig({
  displayName: "Formstyle__Input",
  componentId: "sc-spbvxq-3"
})(["box-sizing:content-box;width:100%;padding-bottom:2px;display:inline-block;height:41px;background-color:", ";color:", ";font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;letter-spacing:0.03em;text-transform:capitalize;margin:0;text-decoration:none;border:none;box-shadow:inset 0 -1px 0 0 #9ca3a7;-webkit-transition:ease-in-out 0.4s;-moz-transition:ease-in-out 0.4s;transition:all ease-in-out 0.4s;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}&[type=number]{-moz-appearance:textfield;}@media only screen and (max-width:", "){width:100%;}&::placeholder{font-style:normal;font-weight:500;font-size:var(--fs-12);line-height:18px;letter-spacing:0.03em;text-transform:capitalize;}&:focus-visible{outline:none;box-shadow:inset 0 -2px 0 0 #e5b100;-webkit-transition:ease-in-out 0.4s;-moz-transition:ease-in-out 0.4s;transition:all ease-in-out 0.4s;}"], ({
  formTheme
}) => formTheme ? theme_get_default()("colors.black") : theme_get_default()("colors.white"), ({
  formTheme
}) => formTheme ? theme_get_default()("colors.white") : theme_get_default()("colors.black"), theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/FormClassic/FormSelect/index.tsx + 1 modules
var FormSelect = __webpack_require__(6074);
;// CONCATENATED MODULE: ./components/FormClassic/SubmitButton/SubmitButton.style.tsx


const Button = external_styled_components_default().button.withConfig({
  displayName: "SubmitButtonstyle__Button",
  componentId: "sc-8ribep-0"
})(["margin-top:33px;position:relative;width:max-content;display:flex;padding:", ";align-items:center;column-gap:20px;cursor:pointer;background-color:", ";border:none;svg{z-index:1;}&:after{position:absolute;left:0;width:0;height:100%;content:'';background-color:", ";transition:width ", ";}&:hover:after{width:100%;}"], ({
  padding = '24px 48px;'
}) => padding, ({
  bgColor
}) => bgColor, theme_get_default()("colors.yellow4"), theme_get_default()("transition.button"));
const Label = external_styled_components_default().p.withConfig({
  displayName: "SubmitButtonstyle__Label",
  componentId: "sc-8ribep-1"
})(["z-index:1;font-style:normal;font-weight:bold;font-size:14px;line-height:21px;text-align:center;letter-spacing:0.03em;text-transform:capitalize;"]);
// EXTERNAL MODULE: ./public/navButtonArrow.svg
var navButtonArrow = __webpack_require__(851);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/FormClassic/SubmitButton/index.tsx






const SubmitButton = ({
  bgColor = theme/* theme.colors.yellow */.r.colors.yellow,
  text
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button, {
    type: 'submit',
    onSubmit: event => event.preventDefault(),
    bgColor: bgColor,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
      children: text
    }), /*#__PURE__*/jsx_runtime_.jsx(navButtonArrow/* default */.Z, {})]
  });
};

/* harmony default export */ const FormClassic_SubmitButton = (SubmitButton);
// EXTERNAL MODULE: ./components/FormClassic/FilesUploader/index.tsx + 1 modules
var FilesUploader = __webpack_require__(7864);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/FormClassic/index.tsx











function FormClassic({
  dropListLabels,
  buttonLabel = 'send',
  linkedIn = false,
  dropList = false,
  formBlack = false,
  isUploadFiles = false,
  uploadFilesLabel = /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
  selectedFiles
}) {
  const {
    0: inputNameValue,
    1: setInputNameValue
  } = (0,external_react_.useState)('');
  const {
    0: inputPhoneNumberValue,
    1: setInputPhoneNumberValue
  } = (0,external_react_.useState)('');
  const {
    0: inputEmailValue,
    1: setInputEmailValue
  } = (0,external_react_.useState)('');
  const {
    0: inputLinkedInValue,
    1: setInputLinkedInValue
  } = (0,external_react_.useState)('');
  const {
    0: inputMainGoalsValue,
    1: setInputMainGoalsValue
  } = (0,external_react_.useState)('');
  const {
    0: inputSelectedPurpose,
    1: setSelectedPurpose
  } = (0,external_react_.useState)('');
  const {
    0: inputSelectedFile,
    1: setSelectedFile
  } = (0,external_react_.useState)('');
  const url = (0,router_.useRouter)().pathname;

  function inputNameOnChange(event) {
    const currentInputNameValue = event.target.value.replace(/[^a-zA-Z ]/g, '');
    setInputNameValue(currentInputNameValue);
  }

  ;

  function formSubmit(event) {
    event.preventDefault();
    const request = new XMLHttpRequest();
    const files = inputSelectedFile || selectedFiles || null;
    const sendUrl = url.includes('/career') || url.includes('/send_cv') ? `${constants/* IMAGES_LINK */.rS}/api/candidate-responses` : `${constants/* IMAGES_LINK */.rS}/api/client-responses`;
    const formData = new FormData();
    const dataValues = {
      name: inputNameValue,
      phoneNumber: inputPhoneNumberValue,
      email: inputEmailValue,
      goals: inputMainGoalsValue,
      linkedin: inputLinkedInValue,
      purpose: inputSelectedPurpose
    };

    if (files) {
      Object.values(files).forEach(file => formData.append(`files.content`, file, file.name));
    }

    formData.append('data', JSON.stringify(dataValues));
    request.open('POST', sendUrl);
    request.send(formData);
  }

  ;
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(InputBlock, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormContainer, {
        onSubmit: formSubmit,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Input, {
          formTheme: formBlack,
          type: 'text',
          placeholder: 'Name',
          name: 'name',
          value: inputNameValue,
          onChange: inputNameOnChange,
          required: true
        }), /*#__PURE__*/jsx_runtime_.jsx(Input, {
          formTheme: formBlack,
          type: 'number',
          placeholder: 'Phone Number',
          value: inputPhoneNumberValue,
          name: 'phone Number',
          onChange: ({
            target
          }) => setInputPhoneNumberValue(target.value),
          required: true
        }), /*#__PURE__*/jsx_runtime_.jsx(Input, {
          formTheme: formBlack,
          type: 'email',
          placeholder: 'Email',
          value: inputEmailValue,
          onChange: ({
            target
          }) => setInputEmailValue(target.value),
          required: true
        }), linkedIn && /*#__PURE__*/jsx_runtime_.jsx(Input, {
          formTheme: formBlack,
          type: 'text',
          placeholder: 'linkedIn',
          value: inputLinkedInValue,
          onChange: ({
            target
          }) => setInputLinkedInValue(target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx(Input, {
          formTheme: formBlack,
          type: 'text',
          placeholder: 'what is your main goal?',
          name: 'main goal',
          value: inputMainGoalsValue,
          onChange: ({
            target
          }) => setInputMainGoalsValue(target.value)
        }), dropListLabels && dropList && /*#__PURE__*/jsx_runtime_.jsx(FormSelect/* default */.Z, {
          fields: dropListLabels,
          formTheme: formBlack,
          setSelectedPurpose: setSelectedPurpose,
          placeHolder: `What\'s your purpose?`,
          width: '403px'
        }), isUploadFiles && /*#__PURE__*/jsx_runtime_.jsx(FilesUploader/* default */.Z, {
          padding: '15px 35px',
          inputHeight: '65px',
          filesLabel: uploadFilesLabel,
          formTheme: formBlack,
          setSelectedFile: setSelectedFile
        }), /*#__PURE__*/jsx_runtime_.jsx(FormClassic_SubmitButton, {
          text: buttonLabel
        })]
      })
    })
  });
}

/* harmony default export */ const components_FormClassic = (FormClassic);

/***/ })

};
;