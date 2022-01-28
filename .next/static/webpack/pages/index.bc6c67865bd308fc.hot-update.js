"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/mainMenu/navigation/navigation.tsx":
/*!*******************************************************!*\
  !*** ./components/mainMenu/navigation/navigation.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/navigation/styles.tsx\");\n/* harmony import */ var _ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ButtonWithArrow */ \"./components/ButtonWithArrow/index.tsx\");\n/* harmony import */ var _public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/navArrow.svg */ \"./public/navArrow.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/navigation/navigation.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Navigation(_ref) {\n  _s();\n\n  var _this = this;\n\n  var titles = _ref.titles,\n      titlesColor = _ref.titlesColor,\n      setOnHoverElement = _ref.setOnHoverElement,\n      onSelectedMenu = _ref.onSelectedMenu,\n      setOnSelectedMenu = _ref.setOnSelectedMenu;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      selectedTitle = _useState[0],\n      setSelectedTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      urlTitle = _useState2[0],\n      setUrlTitle = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setUrlTitle(titles.find(function (title) {\n      return window.location.pathname.includes(title.toLowerCase());\n    }));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Nav, {\n    color: titlesColor,\n    children: titles.map(function (title, index) {\n      var shouldAddLine = selectedTitle === title && onSelectedMenu === title || title === urlTitle;\n\n      if (title === \"Services\" || title === \"Expertise\" || title === \"Company\") {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n          shouldAddLine: shouldAddLine,\n          onMouseEnter: function onMouseEnter() {\n            setOnHoverElement(title);\n            setSelectedTitle(title);\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.PositionArrow, {\n            color: titlesColor,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this);\n      }\n\n      if (title === 'Contact Us') {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          buttonLabel: 'Contact Us',\n          redirectTo: '/contacts',\n          padding: '11.5px 14.5px;'\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, _this);\n      }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n        shouldAddLine: shouldAddLine,\n        onMouseEnter: function onMouseEnter() {\n          setOnHoverElement(title);\n          setSelectedTitle(title);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setOnSelectedMenu(null);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/\".concat(title.toLowerCase()),\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"dVybGybDl5ZnM4R9ZMPm8ouJzz8=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTUyxVQUFULE9BQWdIO0FBQUE7O0FBQUE7O0FBQUEsTUFBMUZDLE1BQTBGLFFBQTFGQSxNQUEwRjtBQUFBLE1BQWxGQyxXQUFrRixRQUFsRkEsV0FBa0Y7QUFBQSxNQUFyRUMsaUJBQXFFLFFBQXJFQSxpQkFBcUU7QUFBQSxNQUFsREMsY0FBa0QsUUFBbERBLGNBQWtEO0FBQUEsTUFBbENDLGlCQUFrQyxRQUFsQ0EsaUJBQWtDOztBQUM5RyxrQkFBMENQLCtDQUFRLENBQWdCLElBQWhCLENBQWxEO0FBQUEsTUFBT1EsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQWlDVCwrQ0FBUSxDQUE0QixJQUE1QixDQUF6QztBQUFBLE1BQVFVLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEI7O0FBRUFaLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkWSxJQUFBQSxXQUFXLENBQUNSLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLFVBQUNDLEtBQUQ7QUFBQSxhQUFXQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQ0osS0FBSyxDQUFDSyxXQUFOLEVBQWxDLENBQVg7QUFBQSxLQUFaLENBQUQsQ0FBWDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBRWQsV0FBWjtBQUFBLGNBQ0dELE1BQU0sQ0FBQ2dCLEdBQVAsQ0FBVyxVQUFDTixLQUFELEVBQWdCTyxLQUFoQixFQUFrQztBQUM1QyxVQUFNQyxhQUFhLEdBQUdiLGFBQWEsS0FBS0ssS0FBbEIsSUFBMkJQLGNBQWMsS0FBS08sS0FBOUMsSUFBdURBLEtBQUssS0FBS0gsUUFBdkY7O0FBRUEsVUFDRUcsS0FBSyxLQUFLLFVBQVYsSUFDQUEsS0FBSyxLQUFLLFdBRFYsSUFFQUEsS0FBSyxLQUFLLFNBSFosRUFJRTtBQUNBLDRCQUNFLDhEQUFDLHVDQUFEO0FBQ0UsdUJBQWEsRUFBRVEsYUFEakI7QUFHRSxzQkFBWSxFQUFFLHdCQUFNO0FBQ2xCaEIsWUFBQUEsaUJBQWlCLENBQUNRLEtBQUQsQ0FBakI7QUFDQUosWUFBQUEsZ0JBQWdCLENBQUNJLEtBQUQsQ0FBaEI7QUFDRCxXQU5IO0FBQUEsa0NBUUUsOERBQUMsdUNBQUQ7QUFBQSxzQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBVUUsOERBQUMsa0RBQUQ7QUFBZSxpQkFBSyxFQUFFVCxXQUF0QjtBQUFBLG1DQUNFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUEsV0FFT2dCLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWdCRDs7QUFFRCxVQUFJUCxLQUFLLEtBQUssWUFBZCxFQUE0QjtBQUMxQiw0QkFDRSw4REFBQyx3REFBRDtBQUVFLHFCQUFXLEVBQUUsWUFGZjtBQUdFLG9CQUFVLEVBQUUsV0FIZDtBQUlFLGlCQUFPLEVBQUU7QUFKWCxXQUNPTyxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFRRDs7QUFFRCwwQkFDRSw4REFBQyx1Q0FBRDtBQUNFLHFCQUFhLEVBQUVDLGFBRGpCO0FBR0Usb0JBQVksRUFBRSx3QkFBTTtBQUNsQmhCLFVBQUFBLGlCQUFpQixDQUFDUSxLQUFELENBQWpCO0FBQ0FKLFVBQUFBLGdCQUFnQixDQUFDSSxLQUFELENBQWhCO0FBQ0QsU0FOSDtBQVFFLG9CQUFZLEVBQUU7QUFBQSxpQkFBTU4saUJBQWlCLENBQUMsSUFBRCxDQUF2QjtBQUFBLFNBUmhCO0FBQUEsK0JBVUUsOERBQUMsdUNBQUQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLGFBQU1NLEtBQUssQ0FBQ0ssV0FBTixFQUFOLENBQVY7QUFBQSxzQkFDR0w7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGLFNBRU9PLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELEtBdkRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEREOztHQXBFUWxCOztLQUFBQTtBQXNFVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3g/NDNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOYXYsXG4gIFVsLFxuICBMaSxcbiAgUG9zaXRpb25BcnJvd1xufSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IElOYXZpZ2F0aW9uIH0gZnJvbSBcIkBpbnRlcmZhY2VzXCI7XG5pbXBvcnQgQnV0dG9uV2l0aEFycm93IGZyb20gXCIuLi8uLi9CdXR0b25XaXRoQXJyb3dcIjtcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi4vLi4vLi4vcHVibGljL25hdkFycm93LnN2Z1wiXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKHsgdGl0bGVzLCB0aXRsZXNDb2xvciwgc2V0T25Ib3ZlckVsZW1lbnQsIG9uU2VsZWN0ZWRNZW51LCBzZXRPblNlbGVjdGVkTWVudSB9OiBJTmF2aWdhdGlvbikge1xuICBjb25zdCBbc2VsZWN0ZWRUaXRsZSwgc2V0U2VsZWN0ZWRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgIFt1cmxUaXRsZSwgc2V0VXJsVGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVybFRpdGxlKHRpdGxlcy5maW5kKCh0aXRsZSkgPT4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKHRpdGxlLnRvTG93ZXJDYXNlKCkpKSk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPE5hdiBjb2xvcj17dGl0bGVzQ29sb3J9PlxuICAgICAge3RpdGxlcy5tYXAoKHRpdGxlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGluZSA9IHNlbGVjdGVkVGl0bGUgPT09IHRpdGxlICYmIG9uU2VsZWN0ZWRNZW51ID09PSB0aXRsZSB8fCB0aXRsZSA9PT0gdXJsVGl0bGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRpdGxlID09PSBcIlNlcnZpY2VzXCIgfHxcbiAgICAgICAgICB0aXRsZSA9PT0gXCJFeHBlcnRpc2VcIiB8fFxuICAgICAgICAgIHRpdGxlID09PSBcIkNvbXBhbnlcIlxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVsXG4gICAgICAgICAgICAgIHNob3VsZEFkZExpbmU9e3Nob3VsZEFkZExpbmV9XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldE9uSG92ZXJFbGVtZW50KHRpdGxlKTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpPnt0aXRsZX08L0xpPlxuXG4gICAgICAgICAgICAgIDxQb3NpdGlvbkFycm93IGNvbG9yPXt0aXRsZXNDb2xvcn0+XG4gICAgICAgICAgICAgICAgPEFycm93Lz5cbiAgICAgICAgICAgICAgPC9Qb3NpdGlvbkFycm93PlxuICAgICAgICAgICAgPC9VbD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpdGxlID09PSAnQ29udGFjdCBVcycpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbldpdGhBcnJvd1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBidXR0b25MYWJlbD17J0NvbnRhY3QgVXMnfVxuICAgICAgICAgICAgICByZWRpcmVjdFRvPXsnL2NvbnRhY3RzJ31cbiAgICAgICAgICAgICAgcGFkZGluZz17JzExLjVweCAxNC41cHg7J31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFVsXG4gICAgICAgICAgICBzaG91bGRBZGRMaW5lPXtzaG91bGRBZGRMaW5lfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRPbkhvdmVyRWxlbWVudCh0aXRsZSk7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkVGl0bGUodGl0bGUpO1xuICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPblNlbGVjdGVkTWVudShudWxsKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt0aXRsZS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgIDwvVWw+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L05hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbIk5hdiIsIlVsIiwiTGkiLCJQb3NpdGlvbkFycm93IiwiQnV0dG9uV2l0aEFycm93IiwiQXJyb3ciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJOYXZpZ2F0aW9uIiwidGl0bGVzIiwidGl0bGVzQ29sb3IiLCJzZXRPbkhvdmVyRWxlbWVudCIsIm9uU2VsZWN0ZWRNZW51Iiwic2V0T25TZWxlY3RlZE1lbnUiLCJzZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsInVybFRpdGxlIiwic2V0VXJsVGl0bGUiLCJmaW5kIiwidGl0bGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImluZGV4Iiwic2hvdWxkQWRkTGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainMenu/navigation/navigation.tsx\n");

/***/ })

});