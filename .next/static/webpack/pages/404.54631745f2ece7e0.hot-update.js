"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./components/mainMenu/sideMainMenu/index.tsx":
/*!****************************************************!*\
  !*** ./components/mainMenu/sideMainMenu/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideMenu\": function() { return /* binding */ SideMenu; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_context_mainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/context/mainMenu */ \"./services/context/mainMenu.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/sideMainMenu/styles.tsx\");\n/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation */ \"./components/mainMenu/navigation/navigation.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/sideMainMenu/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar titles = [\"Services\", \"Expertise\", \"Case Studies\", \"Company\", \"Insights\", \"Contact Us\"];\nvar SideMenu = function SideMenu(_ref) {\n  _s();\n\n  var backgroundColor = _ref.backgroundColor,\n      titlesColor = _ref.titlesColor,\n      titles = _ref.titles,\n      setOnHoverElement = _ref.setOnHoverElement,\n      onSelectedMenu = _ref.onSelectedMenu,\n      setOnSelectedMenu = _ref.setOnSelectedMenu;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_services_context_mainMenu__WEBPACK_IMPORTED_MODULE_1__.MenuContext),\n      isMenuOpen = _useContext.isMenuOpen;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n    open: isMenuOpen,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      titles: titles,\n      titlesColor: titlesColor,\n      setOnHoverElement: setOnHoverElement,\n      onSelectedMenu: onSelectedMenu,\n      setOnSelectedMenu: setOnSelectedMenu,\n      backgroundColor: backgroundColor\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideMenu, \"AgFn8K/yZAq5NVmSeJSS48O7ADg=\");\n\n_c = SideMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L3NpZGVNYWluTWVudS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1LLE1BQU0sR0FBRyxDQUNiLFVBRGEsRUFFYixXQUZhLEVBR2IsY0FIYSxFQUliLFNBSmEsRUFLYixVQUxhLEVBTWIsWUFOYSxDQUFmO0FBYU8sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FPRztBQUFBOztBQUFBLE1BTnZCQyxlQU11QixRQU52QkEsZUFNdUI7QUFBQSxNQUx2QkMsV0FLdUIsUUFMdkJBLFdBS3VCO0FBQUEsTUFKdkJILE1BSXVCLFFBSnZCQSxNQUl1QjtBQUFBLE1BSHZCSSxpQkFHdUIsUUFIdkJBLGlCQUd1QjtBQUFBLE1BRnZCQyxjQUV1QixRQUZ2QkEsY0FFdUI7QUFBQSxNQUR2QkMsaUJBQ3VCLFFBRHZCQSxpQkFDdUI7O0FBQ3pCLG9CQUF1QlYsaURBQVUsQ0FBQ0MsbUVBQUQsQ0FBakM7QUFBQSxNQUFRVSxVQUFSLGVBQVFBLFVBQVI7O0FBRUEsc0JBQ0UsOERBQUMseUNBQUQ7QUFBTSxRQUFJLEVBQUVBLFVBQVo7QUFBQSwyQkFDSSw4REFBQyw4REFBRDtBQUNJLFlBQU0sRUFBRVAsTUFEWjtBQUVJLGlCQUFXLEVBQUVHLFdBRmpCO0FBR0ksdUJBQWlCLEVBQUVDLGlCQUh2QjtBQUlJLG9CQUFjLEVBQUVDLGNBSnBCO0FBS0ksdUJBQWlCLEVBQUVDLGlCQUx2QjtBQU1JLHFCQUFlLEVBQUVKO0FBTnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQXRCTTs7R0FBTUQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbk1lbnUvc2lkZU1haW5NZW51L2luZGV4LnRzeD85YmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jb250ZXh0L21haW5NZW51JztcbmltcG9ydCB7IElNZW51LCBJTmF2aWdhdGlvbiB9IGZyb20gJ0BpbnRlcmZhY2VzJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuXG5jb25zdCB0aXRsZXMgPSBbXG4gIFwiU2VydmljZXNcIixcbiAgXCJFeHBlcnRpc2VcIixcbiAgXCJDYXNlIFN0dWRpZXNcIixcbiAgXCJDb21wYW55XCIsXG4gIFwiSW5zaWdodHNcIixcbiAgXCJDb250YWN0IFVzXCIsXG5dO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJTWVudSB7XG4gICAgY2hpbGRyZW4/OiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBTaWRlTWVudSA9ICh7IFxuICAgIGJhY2tncm91bmRDb2xvciwgXG4gICAgdGl0bGVzQ29sb3IsXG4gICAgdGl0bGVzLFxuICAgIHNldE9uSG92ZXJFbGVtZW50LFxuICAgIG9uU2VsZWN0ZWRNZW51LFxuICAgIHNldE9uU2VsZWN0ZWRNZW51LFxufTpQcm9wcyAmIElOYXZpZ2F0aW9uICkgPT4ge1xuICBjb25zdCB7IGlzTWVudU9wZW4gfSA9IHVzZUNvbnRleHQoTWVudUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPE1lbnUgb3Blbj17aXNNZW51T3Blbn0+XG4gICAgICAgIDxOYXZpZ2F0aW9uXG4gICAgICAgICAgICB0aXRsZXM9e3RpdGxlc31cbiAgICAgICAgICAgIHRpdGxlc0NvbG9yPXt0aXRsZXNDb2xvcn1cbiAgICAgICAgICAgIHNldE9uSG92ZXJFbGVtZW50PXtzZXRPbkhvdmVyRWxlbWVudH1cbiAgICAgICAgICAgIG9uU2VsZWN0ZWRNZW51PXtvblNlbGVjdGVkTWVudX1cbiAgICAgICAgICAgIHNldE9uU2VsZWN0ZWRNZW51PXtzZXRPblNlbGVjdGVkTWVudX1cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICAgICAgLz5cbiAgICA8L01lbnU+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTWVudUNvbnRleHQiLCJNZW51IiwiTmF2aWdhdGlvbiIsInRpdGxlcyIsIlNpZGVNZW51IiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGVzQ29sb3IiLCJzZXRPbkhvdmVyRWxlbWVudCIsIm9uU2VsZWN0ZWRNZW51Iiwic2V0T25TZWxlY3RlZE1lbnUiLCJpc01lbnVPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainMenu/sideMainMenu/index.tsx\n");

/***/ })

});