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

/***/ "./components/mainMenu/navigation/navigation.tsx":
/*!*******************************************************!*\
  !*** ./components/mainMenu/navigation/navigation.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/navigation/styles.tsx\");\n/* harmony import */ var _ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ButtonWithArrow */ \"./components/ButtonWithArrow/index.tsx\");\n/* harmony import */ var _public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/navArrow.svg */ \"./public/navArrow.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BurgerMenuButton */ \"./components/BurgerMenuButton/index.tsx\");\n/* harmony import */ var _sideMainMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sideMainMenu */ \"./components/mainMenu/sideMainMenu/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/navigation/navigation.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Navigation(_ref) {\n  _s();\n\n  var _this = this;\n\n  var titles = _ref.titles,\n      titlesColor = _ref.titlesColor,\n      setOnHoverElement = _ref.setOnHoverElement,\n      onSelectedMenu = _ref.onSelectedMenu,\n      setOnSelectedMenu = _ref.setOnSelectedMenu,\n      backgroundColor = _ref.backgroundColor;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      selectedTitle = _useState[0],\n      setSelectedTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      urlTitle = _useState2[0],\n      setUrlTitle = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      isMobile = _useState3[0],\n      setIsMobile = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var width = window.innerWidth;\n    var mobileWidth = +_styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme.breakpoints.mobile.replace('px', '');\n    var isMobile = mobileWidth > width;\n    setIsMobile(isMobile);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setUrlTitle(titles.find(function (title) {\n      return window.location.pathname.includes(title.toLowerCase());\n    }));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Nav, {\n    color: titlesColor,\n    children: [!isMobile, titles.map(function (title, index) {\n      var shouldAddLine = selectedTitle === title && onSelectedMenu === title || title === urlTitle;\n\n      if (title === \"Services\" || title === \"Expertise\" || title === \"Company\") {\n        if (!isMobile) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n            shouldAddLine: shouldAddLine,\n            onMouseEnter: function onMouseEnter() {\n              setOnHoverElement(title);\n              setSelectedTitle(title);\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.PositionArrow, {\n              color: titlesColor,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, _this);\n        } else {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_sideMainMenu__WEBPACK_IMPORTED_MODULE_7__.SideMenu, {\n              backgroundColor: backgroundColor,\n              titlesColor: \"\",\n              children: undefined,\n              titles: []\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true);\n        }\n      }\n\n      if (title === 'Contact Us') {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          buttonLabel: 'Contact Us',\n          redirectTo: '/contacts',\n          padding: '11.5px 14.5px;'\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this);\n      }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n        shouldAddLine: shouldAddLine,\n        onMouseEnter: function onMouseEnter() {\n          setOnHoverElement(title);\n          setSelectedTitle(title);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setOnSelectedMenu(null);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/\".concat(title.toLowerCase()),\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 13\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 11\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"1Jwd0RakRANFBCy5XE2lcbVVXBs=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU2EsVUFBVCxPQU9FO0FBQUE7O0FBQUE7O0FBQUEsTUFOQUMsTUFNQSxRQU5BQSxNQU1BO0FBQUEsTUFMQUMsV0FLQSxRQUxBQSxXQUtBO0FBQUEsTUFKQUMsaUJBSUEsUUFKQUEsaUJBSUE7QUFBQSxNQUhBQyxjQUdBLFFBSEFBLGNBR0E7QUFBQSxNQUZBQyxpQkFFQSxRQUZBQSxpQkFFQTtBQUFBLE1BREFDLGVBQ0EsUUFEQUEsZUFDQTs7QUFDQSxrQkFBMENYLCtDQUFRLENBQWdCLElBQWhCLENBQWxEO0FBQUEsTUFBT1ksYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQWlDYiwrQ0FBUSxDQUE0QixJQUE1QixDQUF6QztBQUFBLE1BQVFjLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEI7O0FBQ0EsbUJBQWdDZiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTW1CLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDbkIsMkVBQUEsQ0FBaUMsSUFBakMsRUFBdUMsRUFBdkMsQ0FBckI7QUFDQSxRQUFNYyxRQUFRLEdBQUdLLFdBQVcsR0FBR0gsS0FBL0I7QUFDQUQsSUFBQUEsV0FBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxHQUxRLEVBS1AsRUFMTyxDQUFUO0FBT0FqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGdCLElBQUFBLFdBQVcsQ0FBQ1QsTUFBTSxDQUFDbUIsSUFBUCxDQUFZLFVBQUNDLEtBQUQ7QUFBQSxhQUFXUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQ0gsS0FBSyxDQUFDSSxXQUFOLEVBQWxDLENBQVg7QUFBQSxLQUFaLENBQUQsQ0FBWDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBRXZCLFdBQVo7QUFBQSxlQUNHLENBQUNTLFFBREosRUFFR1YsTUFBTSxDQUFDeUIsR0FBUCxDQUFXLFVBQUNMLEtBQUQsRUFBZ0JNLEtBQWhCLEVBQWtDO0FBQzVDLFVBQU1DLGFBQWEsR0FBR3JCLGFBQWEsS0FBS2MsS0FBbEIsSUFBMkJqQixjQUFjLEtBQUtpQixLQUE5QyxJQUF1REEsS0FBSyxLQUFLWixRQUF2Rjs7QUFFQSxVQUNFWSxLQUFLLEtBQUssVUFBVixJQUNBQSxLQUFLLEtBQUssV0FEVixJQUVBQSxLQUFLLEtBQUssU0FIWixFQUlFO0FBQ0EsWUFBSSxDQUFDVixRQUFMLEVBQWU7QUFDYiw4QkFDRSw4REFBQyx1Q0FBRDtBQUNFLHlCQUFhLEVBQUVpQixhQURqQjtBQUdFLHdCQUFZLEVBQUUsd0JBQU07QUFDbEJ6QixjQUFBQSxpQkFBaUIsQ0FBQ2tCLEtBQUQsQ0FBakI7QUFDQWIsY0FBQUEsZ0JBQWdCLENBQUNhLEtBQUQsQ0FBaEI7QUFDRCxhQU5IO0FBQUEsb0NBUUUsOERBQUMsdUNBQUQ7QUFBQSx3QkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBVUUsOERBQUMsa0RBQUQ7QUFBZSxtQkFBSyxFQUFFbkIsV0FBdEI7QUFBQSxxQ0FDRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBLGFBRU95QixLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFnQkQsU0FqQkQsTUFpQk87QUFDTCw4QkFDRTtBQUFBLG9DQUNFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFVLDZCQUFlLEVBQUVyQixlQUEzQjtBQUE0Qyx5QkFBVyxFQUFFLEVBQXpEO0FBQTZELHNCQUFRLEVBQUV1QixTQUF2RTtBQUFrRixvQkFBTSxFQUFFO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQSwwQkFERjtBQU1EO0FBQ0Y7O0FBRUQsVUFBSVIsS0FBSyxLQUFLLFlBQWQsRUFBNEI7QUFDMUIsNEJBQ0UsOERBQUMsd0RBQUQ7QUFFRSxxQkFBVyxFQUFFLFlBRmY7QUFHRSxvQkFBVSxFQUFFLFdBSGQ7QUFJRSxpQkFBTyxFQUFFO0FBSlgsV0FDT00sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBUUQ7O0FBRUQsMEJBQ0UsOERBQUMsdUNBQUQ7QUFDRSxxQkFBYSxFQUFFQyxhQURqQjtBQUdFLG9CQUFZLEVBQUUsd0JBQU07QUFDbEJ6QixVQUFBQSxpQkFBaUIsQ0FBQ2tCLEtBQUQsQ0FBakI7QUFDQWIsVUFBQUEsZ0JBQWdCLENBQUNhLEtBQUQsQ0FBaEI7QUFDRCxTQU5IO0FBUUUsb0JBQVksRUFBRTtBQUFBLGlCQUFNaEIsaUJBQWlCLENBQUMsSUFBRCxDQUF2QjtBQUFBLFNBUmhCO0FBQUEsK0JBVUUsOERBQUMsdUNBQUQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLGFBQU1nQixLQUFLLENBQUNJLFdBQU4sRUFBTixDQUFWO0FBQUEsc0JBQ0dKO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRixTQUVPTSxLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxLQWhFQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0VEOztHQTdGUTNCOztLQUFBQTtBQStGVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3g/NDNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOYXYsXG4gIFVsLFxuICBMaSxcbiAgUG9zaXRpb25BcnJvd1xufSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IElOYXZpZ2F0aW9uIH0gZnJvbSBcIkBpbnRlcmZhY2VzXCI7XG5pbXBvcnQgQnV0dG9uV2l0aEFycm93IGZyb20gXCIuLi8uLi9CdXR0b25XaXRoQXJyb3dcIjtcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi4vLi4vLi4vcHVibGljL25hdkFycm93LnN2Z1wiXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IEhhbWJ1cmdlckJ1dHRvbiBmcm9tIFwiLi4vLi4vQnVyZ2VyTWVudUJ1dHRvblwiO1xuaW1wb3J0IHsgU2lkZU1lbnUgfSBmcm9tIFwiLi4vc2lkZU1haW5NZW51XCI7XG5cbmZ1bmN0aW9uIE5hdmlnYXRpb24oeyBcbiAgdGl0bGVzLCBcbiAgdGl0bGVzQ29sb3IsIFxuICBzZXRPbkhvdmVyRWxlbWVudCwgXG4gIG9uU2VsZWN0ZWRNZW51LCBcbiAgc2V0T25TZWxlY3RlZE1lbnUsIFxuICBiYWNrZ3JvdW5kQ29sb3IgfTogSU5hdmlnYXRpb24pIFxuICB7XG4gIGNvbnN0IFtzZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCAgW3VybFRpdGxlLCBzZXRVcmxUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9ICt0aGVtZS5icmVha3BvaW50cy5tb2JpbGUucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSBtb2JpbGVXaWR0aCA+IHdpZHRoO1xuICAgIHNldElzTW9iaWxlKGlzTW9iaWxlKTtcbiAgfSxbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRVcmxUaXRsZSh0aXRsZXMuZmluZCgodGl0bGUpID0+IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyh0aXRsZS50b0xvd2VyQ2FzZSgpKSkpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxOYXYgY29sb3I9e3RpdGxlc0NvbG9yfT5cbiAgICAgIHshaXNNb2JpbGV9XG4gICAgICB7dGl0bGVzLm1hcCgodGl0bGU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBzaG91bGRBZGRMaW5lID0gc2VsZWN0ZWRUaXRsZSA9PT0gdGl0bGUgJiYgb25TZWxlY3RlZE1lbnUgPT09IHRpdGxlIHx8IHRpdGxlID09PSB1cmxUaXRsZTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGl0bGUgPT09IFwiU2VydmljZXNcIiB8fFxuICAgICAgICAgIHRpdGxlID09PSBcIkV4cGVydGlzZVwiIHx8XG4gICAgICAgICAgdGl0bGUgPT09IFwiQ29tcGFueVwiXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxVbFxuICAgICAgICAgICAgICAgIHNob3VsZEFkZExpbmU9e3Nob3VsZEFkZExpbmV9XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldE9uSG92ZXJFbGVtZW50KHRpdGxlKTtcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGl0bGUodGl0bGUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGk+e3RpdGxlfTwvTGk+XG4gIFxuICAgICAgICAgICAgICAgIDxQb3NpdGlvbkFycm93IGNvbG9yPXt0aXRsZXNDb2xvcn0+XG4gICAgICAgICAgICAgICAgICA8QXJyb3cvPlxuICAgICAgICAgICAgICAgIDwvUG9zaXRpb25BcnJvdz5cbiAgICAgICAgICAgICAgPC9VbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEhhbWJ1cmdlckJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDxTaWRlTWVudSBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn0gdGl0bGVzQ29sb3I9e1wiXCJ9IGNoaWxkcmVuPXt1bmRlZmluZWR9IHRpdGxlcz17W119IC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJ0NvbnRhY3QgVXMnKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25XaXRoQXJyb3dcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9eydDb250YWN0IFVzJ31cbiAgICAgICAgICAgICAgcmVkaXJlY3RUbz17Jy9jb250YWN0cyd9XG4gICAgICAgICAgICAgIHBhZGRpbmc9eycxMS41cHggMTQuNXB4Oyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxVbFxuICAgICAgICAgICAgc2hvdWxkQWRkTGluZT17c2hvdWxkQWRkTGluZX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0T25Ib3ZlckVsZW1lbnQodGl0bGUpO1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0T25TZWxlY3RlZE1lbnUobnVsbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dGl0bGUudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICA8L1VsPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9OYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJOYXYiLCJVbCIsIkxpIiwiUG9zaXRpb25BcnJvdyIsIkJ1dHRvbldpdGhBcnJvdyIsIkFycm93IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ0aGVtZSIsIkhhbWJ1cmdlckJ1dHRvbiIsIlNpZGVNZW51IiwiTmF2aWdhdGlvbiIsInRpdGxlcyIsInRpdGxlc0NvbG9yIiwic2V0T25Ib3ZlckVsZW1lbnQiLCJvblNlbGVjdGVkTWVudSIsInNldE9uU2VsZWN0ZWRNZW51IiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0ZWRUaXRsZSIsInNldFNlbGVjdGVkVGl0bGUiLCJ1cmxUaXRsZSIsInNldFVybFRpdGxlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1vYmlsZVdpZHRoIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJyZXBsYWNlIiwiZmluZCIsInRpdGxlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJpbmRleCIsInNob3VsZEFkZExpbmUiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mainMenu/navigation/navigation.tsx\n");

/***/ })

});