"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/case_studies",{

/***/ "./components/mainMenu/sideMainMenu/index.tsx":
/*!****************************************************!*\
  !*** ./components/mainMenu/sideMainMenu/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideMenu\": function() { return /* binding */ SideMenu; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_context_mainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/context/mainMenu */ \"./services/context/mainMenu.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/sideMainMenu/styles.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/sideMainMenu/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar titles = [\"Services\", \"Expertise\", \"Case Studies\", \"Company\", \"Insights\", \"Contact Us\"];\nvar SideMenu = function SideMenu(_ref) {\n  _s();\n\n  var backgroundColor = _ref.backgroundColor,\n      titlesColor = _ref.titlesColor,\n      titles = _ref.titles;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_services_context_mainMenu__WEBPACK_IMPORTED_MODULE_1__.MenuContext),\n      isMenuOpen = _useContext.isMenuOpen;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n    open: isMenuOpen,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Navigation, {\n      titles: titles,\n      titlesColor: titlesColor,\n      setOnHoverElement: setOnHoverElement,\n      onSelectedMenu: onSelectedMenu,\n      setOnSelectedMenu: setOnSelectedMenu,\n      backgroundColor: backgroundColor\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideMenu, \"AgFn8K/yZAq5NVmSeJSS48O7ADg=\");\n\n_c = SideMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L3NpZGVNYWluTWVudS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUlBOztBQUVBLElBQU1JLE1BQU0sR0FBRyxDQUNiLFVBRGEsRUFFYixXQUZhLEVBR2IsY0FIYSxFQUliLFNBSmEsRUFLYixVQUxhLEVBTWIsWUFOYSxDQUFmO0FBV08sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FJRztBQUFBOztBQUFBLE1BSHZCQyxlQUd1QixRQUh2QkEsZUFHdUI7QUFBQSxNQUZ2QkMsV0FFdUIsUUFGdkJBLFdBRXVCO0FBQUEsTUFEdkJILE1BQ3VCLFFBRHZCQSxNQUN1Qjs7QUFDekIsb0JBQXVCSCxpREFBVSxDQUFDQyxtRUFBRCxDQUFqQztBQUFBLE1BQVFNLFVBQVIsZUFBUUEsVUFBUjs7QUFFQSxzQkFDRSw4REFBQyx5Q0FBRDtBQUFNLFFBQUksRUFBRUEsVUFBWjtBQUFBLDJCQUNJLDhEQUFDLFVBQUQ7QUFDSSxZQUFNLEVBQUVKLE1BRFo7QUFFSSxpQkFBVyxFQUFFRyxXQUZqQjtBQUdJLHVCQUFpQixFQUFFRSxpQkFIdkI7QUFJSSxvQkFBYyxFQUFFQyxjQUpwQjtBQUtJLHVCQUFpQixFQUFFQyxpQkFMdkI7QUFNSSxxQkFBZSxFQUFFTDtBQU5yQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FuQk07O0dBQU1EOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5NZW51L3NpZGVNYWluTWVudS9pbmRleC50c3g/OWJhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IE1lbnVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY29udGV4dC9tYWluTWVudSc7XG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vYXJyb3cuc3ZnJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuLi9tYWluTWVudSc7XG5pbXBvcnQgeyBJTWVudSwgSU5hdmlnYXRpb24gfSBmcm9tICdAaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCB0aXRsZXMgPSBbXG4gIFwiU2VydmljZXNcIixcbiAgXCJFeHBlcnRpc2VcIixcbiAgXCJDYXNlIFN0dWRpZXNcIixcbiAgXCJDb21wYW55XCIsXG4gIFwiSW5zaWdodHNcIixcbiAgXCJDb250YWN0IFVzXCIsXG5dO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJTWVudSB7fVxuXG5leHBvcnQgY29uc3QgU2lkZU1lbnUgPSAoeyBcbiAgICBiYWNrZ3JvdW5kQ29sb3IsIFxuICAgIHRpdGxlc0NvbG9yLFxuICAgIHRpdGxlcyxcbn06UHJvcHMgJiBJTmF2aWdhdGlvbiApID0+IHtcbiAgY29uc3QgeyBpc01lbnVPcGVuIH0gPSB1c2VDb250ZXh0KE1lbnVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxNZW51IG9wZW49e2lzTWVudU9wZW59PlxuICAgICAgICA8TmF2aWdhdGlvblxuICAgICAgICAgICAgdGl0bGVzPXt0aXRsZXN9XG4gICAgICAgICAgICB0aXRsZXNDb2xvcj17dGl0bGVzQ29sb3J9XG4gICAgICAgICAgICBzZXRPbkhvdmVyRWxlbWVudD17c2V0T25Ib3ZlckVsZW1lbnR9XG4gICAgICAgICAgICBvblNlbGVjdGVkTWVudT17b25TZWxlY3RlZE1lbnV9XG4gICAgICAgICAgICBzZXRPblNlbGVjdGVkTWVudT17c2V0T25TZWxlY3RlZE1lbnV9XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICAgIC8+XG4gICAgPC9NZW51PlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIk1lbnVDb250ZXh0IiwiTWVudSIsInRpdGxlcyIsIlNpZGVNZW51IiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGVzQ29sb3IiLCJpc01lbnVPcGVuIiwic2V0T25Ib3ZlckVsZW1lbnQiLCJvblNlbGVjdGVkTWVudSIsInNldE9uU2VsZWN0ZWRNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainMenu/sideMainMenu/index.tsx\n");

/***/ })

});