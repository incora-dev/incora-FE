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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/navigation/styles.tsx\");\n/* harmony import */ var _ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ButtonWithArrow */ \"./components/ButtonWithArrow/index.tsx\");\n/* harmony import */ var _public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/navArrow.svg */ \"./public/navArrow.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/navigation/navigation.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Navigation(_ref) {\n  _s();\n\n  var _this = this;\n\n  var titles = _ref.titles,\n      titlesColor = _ref.titlesColor,\n      setOnHoverElement = _ref.setOnHoverElement,\n      onSelectedMenu = _ref.onSelectedMenu,\n      setOnSelectedMenu = _ref.setOnSelectedMenu;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      selectedTitle = _useState[0],\n      setSelectedTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      urlTitle = _useState2[0],\n      setUrlTitle = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      isMobile = _useState3[0],\n      setIsMobile = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var width = window.innerWidth;\n    var mobileWidth = +_styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme.breakpoints.mobile.replace('px', '');\n    var isMobile = mobileWidth > width;\n    setIsMobile(isMobile);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setUrlTitle(titles.find(function (title) {\n      return window.location.pathname.includes(title.toLowerCase());\n    }));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Nav, {\n    color: titlesColor,\n    children: titles.map(function (title, index) {\n      var shouldAddLine = selectedTitle === title && onSelectedMenu === title || title === urlTitle;\n\n      if (title === \"Services\" || title === \"Expertise\" || title === \"Company\") {\n        if (!isMobile) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n            shouldAddLine: shouldAddLine,\n            onMouseEnter: function onMouseEnter() {\n              setOnHoverElement(title);\n              setSelectedTitle(title);\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.PositionArrow, {\n              color: titlesColor,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this);\n        } else {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"men\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 20\n          }, _this);\n        }\n      }\n\n      if (title === 'Contact Us') {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          buttonLabel: 'Contact Us',\n          redirectTo: '/contacts',\n          padding: '11.5px 14.5px;'\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, _this);\n      }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n        shouldAddLine: shouldAddLine,\n        onMouseEnter: function onMouseEnter() {\n          setOnHoverElement(title);\n          setSelectedTitle(title);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setOnSelectedMenu(null);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/\".concat(title.toLowerCase()),\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 13\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"1Jwd0RakRANFBCy5XE2lcbVVXBs=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTVSxVQUFULE9BQWdIO0FBQUE7O0FBQUE7O0FBQUEsTUFBMUZDLE1BQTBGLFFBQTFGQSxNQUEwRjtBQUFBLE1BQWxGQyxXQUFrRixRQUFsRkEsV0FBa0Y7QUFBQSxNQUFyRUMsaUJBQXFFLFFBQXJFQSxpQkFBcUU7QUFBQSxNQUFsREMsY0FBa0QsUUFBbERBLGNBQWtEO0FBQUEsTUFBbENDLGlCQUFrQyxRQUFsQ0EsaUJBQWtDOztBQUM5RyxrQkFBMENSLCtDQUFRLENBQWdCLElBQWhCLENBQWxEO0FBQUEsTUFBT1MsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQWlDViwrQ0FBUSxDQUE0QixJQUE1QixDQUF6QztBQUFBLE1BQVFXLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEI7O0FBQ0EsbUJBQWdDWiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9hLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUFmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1nQixLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBckI7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ2hCLDJFQUFBLENBQWlDLElBQWpDLEVBQXVDLEVBQXZDLENBQXJCO0FBQ0EsUUFBTVcsUUFBUSxHQUFHSyxXQUFXLEdBQUdILEtBQS9CO0FBQ0FELElBQUFBLFdBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0QsR0FMUSxFQUtQLEVBTE8sQ0FBVDtBQU9BZCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGEsSUFBQUEsV0FBVyxDQUFDUixNQUFNLENBQUNrQixJQUFQLENBQVksVUFBQ0MsS0FBRDtBQUFBLGFBQVdQLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFFBQXpCLENBQWtDSCxLQUFLLENBQUNJLFdBQU4sRUFBbEMsQ0FBWDtBQUFBLEtBQVosQ0FBRCxDQUFYO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLDhEQUFDLHdDQUFEO0FBQUssU0FBSyxFQUFFdEIsV0FBWjtBQUFBLGNBQ0dELE1BQU0sQ0FBQ3dCLEdBQVAsQ0FBVyxVQUFDTCxLQUFELEVBQWdCTSxLQUFoQixFQUFrQztBQUM1QyxVQUFNQyxhQUFhLEdBQUdyQixhQUFhLEtBQUtjLEtBQWxCLElBQTJCaEIsY0FBYyxLQUFLZ0IsS0FBOUMsSUFBdURBLEtBQUssS0FBS1osUUFBdkY7O0FBRUEsVUFDRVksS0FBSyxLQUFLLFVBQVYsSUFDQUEsS0FBSyxLQUFLLFdBRFYsSUFFQUEsS0FBSyxLQUFLLFNBSFosRUFJRTtBQUNBLFlBQUksQ0FBQ1YsUUFBTCxFQUFlO0FBQ2IsOEJBQ0UsOERBQUMsdUNBQUQ7QUFDRSx5QkFBYSxFQUFFaUIsYUFEakI7QUFHRSx3QkFBWSxFQUFFLHdCQUFNO0FBQ2xCeEIsY0FBQUEsaUJBQWlCLENBQUNpQixLQUFELENBQWpCO0FBQ0FiLGNBQUFBLGdCQUFnQixDQUFDYSxLQUFELENBQWhCO0FBQ0QsYUFOSDtBQUFBLG9DQVFFLDhEQUFDLHVDQUFEO0FBQUEsd0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVVFLDhEQUFDLGtEQUFEO0FBQWUsbUJBQUssRUFBRWxCLFdBQXRCO0FBQUEscUNBQ0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQSxhQUVPd0IsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBZ0JELFNBakJELE1BaUJPO0FBQ0wsOEJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSU4sS0FBSyxLQUFLLFlBQWQsRUFBNEI7QUFDMUIsNEJBQ0UsOERBQUMsd0RBQUQ7QUFFRSxxQkFBVyxFQUFFLFlBRmY7QUFHRSxvQkFBVSxFQUFFLFdBSGQ7QUFJRSxpQkFBTyxFQUFFO0FBSlgsV0FDT00sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBUUQ7O0FBRUQsMEJBQ0UsOERBQUMsdUNBQUQ7QUFDRSxxQkFBYSxFQUFFQyxhQURqQjtBQUdFLG9CQUFZLEVBQUUsd0JBQU07QUFDbEJ4QixVQUFBQSxpQkFBaUIsQ0FBQ2lCLEtBQUQsQ0FBakI7QUFDQWIsVUFBQUEsZ0JBQWdCLENBQUNhLEtBQUQsQ0FBaEI7QUFDRCxTQU5IO0FBUUUsb0JBQVksRUFBRTtBQUFBLGlCQUFNZixpQkFBaUIsQ0FBQyxJQUFELENBQXZCO0FBQUEsU0FSaEI7QUFBQSwrQkFVRSw4REFBQyx1Q0FBRDtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksYUFBTWUsS0FBSyxDQUFDSSxXQUFOLEVBQU4sQ0FBVjtBQUFBLHNCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkYsU0FFT00sS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsS0EzREE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRUQ7O0dBaEZRMUI7O0tBQUFBO0FBa0ZULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbk1lbnUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnRzeD80M2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5hdixcbiAgVWwsXG4gIExpLFxuICBQb3NpdGlvbkFycm93XG59IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgSU5hdmlnYXRpb24gfSBmcm9tIFwiQGludGVyZmFjZXNcIjtcbmltcG9ydCBCdXR0b25XaXRoQXJyb3cgZnJvbSBcIi4uLy4uL0J1dHRvbldpdGhBcnJvd1wiO1xuaW1wb3J0IEFycm93IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvbmF2QXJyb3cuc3ZnXCJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvdGhlbWVcIjtcblxuZnVuY3Rpb24gTmF2aWdhdGlvbih7IHRpdGxlcywgdGl0bGVzQ29sb3IsIHNldE9uSG92ZXJFbGVtZW50LCBvblNlbGVjdGVkTWVudSwgc2V0T25TZWxlY3RlZE1lbnUgfTogSU5hdmlnYXRpb24pIHtcbiAgY29uc3QgW3NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0ICBbdXJsVGl0bGUsIHNldFVybFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpO1xuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gK3RoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICBjb25zdCBpc01vYmlsZSA9IG1vYmlsZVdpZHRoID4gd2lkdGg7XG4gICAgc2V0SXNNb2JpbGUoaXNNb2JpbGUpO1xuICB9LFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVybFRpdGxlKHRpdGxlcy5maW5kKCh0aXRsZSkgPT4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKHRpdGxlLnRvTG93ZXJDYXNlKCkpKSk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPE5hdiBjb2xvcj17dGl0bGVzQ29sb3J9PlxuICAgICAge3RpdGxlcy5tYXAoKHRpdGxlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGluZSA9IHNlbGVjdGVkVGl0bGUgPT09IHRpdGxlICYmIG9uU2VsZWN0ZWRNZW51ID09PSB0aXRsZSB8fCB0aXRsZSA9PT0gdXJsVGl0bGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRpdGxlID09PSBcIlNlcnZpY2VzXCIgfHxcbiAgICAgICAgICB0aXRsZSA9PT0gXCJFeHBlcnRpc2VcIiB8fFxuICAgICAgICAgIHRpdGxlID09PSBcIkNvbXBhbnlcIlxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VWxcbiAgICAgICAgICAgICAgICBzaG91bGRBZGRMaW5lPXtzaG91bGRBZGRMaW5lfVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRPbkhvdmVyRWxlbWVudCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpPnt0aXRsZX08L0xpPlxuICBcbiAgICAgICAgICAgICAgICA8UG9zaXRpb25BcnJvdyBjb2xvcj17dGl0bGVzQ29sb3J9PlxuICAgICAgICAgICAgICAgICAgPEFycm93Lz5cbiAgICAgICAgICAgICAgICA8L1Bvc2l0aW9uQXJyb3c+XG4gICAgICAgICAgICAgIDwvVWw+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPG1lbiAvPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJ0NvbnRhY3QgVXMnKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25XaXRoQXJyb3dcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9eydDb250YWN0IFVzJ31cbiAgICAgICAgICAgICAgcmVkaXJlY3RUbz17Jy9jb250YWN0cyd9XG4gICAgICAgICAgICAgIHBhZGRpbmc9eycxMS41cHggMTQuNXB4Oyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxVbFxuICAgICAgICAgICAgc2hvdWxkQWRkTGluZT17c2hvdWxkQWRkTGluZX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0T25Ib3ZlckVsZW1lbnQodGl0bGUpO1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0T25TZWxlY3RlZE1lbnUobnVsbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dGl0bGUudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICA8L1VsPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9OYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJOYXYiLCJVbCIsIkxpIiwiUG9zaXRpb25BcnJvdyIsIkJ1dHRvbldpdGhBcnJvdyIsIkFycm93IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidGhlbWUiLCJOYXZpZ2F0aW9uIiwidGl0bGVzIiwidGl0bGVzQ29sb3IiLCJzZXRPbkhvdmVyRWxlbWVudCIsIm9uU2VsZWN0ZWRNZW51Iiwic2V0T25TZWxlY3RlZE1lbnUiLCJzZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsInVybFRpdGxlIiwic2V0VXJsVGl0bGUiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibW9iaWxlV2lkdGgiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInJlcGxhY2UiLCJmaW5kIiwidGl0bGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImluZGV4Iiwic2hvdWxkQWRkTGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainMenu/navigation/navigation.tsx\n");

/***/ })

});