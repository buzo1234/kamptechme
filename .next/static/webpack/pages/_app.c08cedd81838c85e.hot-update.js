"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layouts/index.tsx":
/*!*******************************!*\
  !*** ./src/layouts/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.tsx\");\n/* harmony import */ var _components_Footer_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Footer/data */ \"./src/components/Footer/data.ts\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n\n\n\n\nconst navData = {\n    links: [\n        {\n            link: \"/\",\n            label: \"Home\"\n        },\n        {\n            link: \"/\",\n            label: \"Products\",\n            links: [\n                {\n                    link: \"/\",\n                    icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconBuildingCarousel,\n                    label: \"Air solution\"\n                },\n                {\n                    link: \"/\",\n                    icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconDropletFilled,\n                    label: \"Water Solution\"\n                },\n                {\n                    link: \"/\",\n                    icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconDropletFilled,\n                    label: \"Water Solution\"\n                }\n            ]\n        },\n        {\n            link: \"/about\",\n            label: \"About us\"\n        },\n        {\n            link: \"/contact\",\n            label: \"Contact us\"\n        }\n    ]\n};\nfunction Layout(param) {\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Navbar, {\n                links: navData.links\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\layouts\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\layouts\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Footer, {\n                data: _components_Footer_data__WEBPACK_IMPORTED_MODULE_2__.data.data\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\layouts\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QztBQUNFO0FBQ3NDO0FBS3RGLE1BQU1LLFVBQVU7SUFDZEMsT0FBTztRQUNMO1lBQ0VDLE1BQU07WUFDTkMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxPQUFPO1lBQ1BGLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05FLE1BQU1MLHFFQUFvQkE7b0JBQzFCSSxPQUFPO2dCQUNUO2dCQUNBO29CQUNFRCxNQUFNO29CQUNORSxNQUFNTixrRUFBaUJBO29CQUN2QkssT0FBTztnQkFDVDtnQkFDQTtvQkFDRUQsTUFBTTtvQkFDTkUsTUFBTU4sa0VBQWlCQTtvQkFDdkJLLE9BQU87Z0JBQ1Q7YUFDRDtRQUNIO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE9BQU87UUFDVDtLQUNEO0FBQ0g7QUFDZSxTQUFTRSxPQUFPLEtBQXlCLEVBQUU7UUFBM0IsRUFBRUMsU0FBUSxFQUFlLEdBQXpCO0lBQzdCLHFCQUNFOzswQkFDRSw4REFBQ1gsK0NBQU1BO2dCQUFDTSxPQUFPRCxRQUFRQyxLQUFLOzs7Ozs7MEJBQzVCLDhEQUFDTTswQkFBTUQ7Ozs7OzswQkFDUCw4REFBQ1YsK0NBQU1BO2dCQUFDQyxNQUFNQSw4REFBUzs7Ozs7Ozs7QUFHN0IsQ0FBQztLQVJ1QlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvaW5kZXgudHN4PzljZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyLCBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3Rlci9kYXRhXCI7XHJcbmltcG9ydCB7IEljb25Ecm9wbGV0RmlsbGVkLCBJY29uQnVpbGRpbmdDYXJvdXNlbCwgSWNvbml0IH0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcclxuXHJcbnR5cGUgTGF5b3V0UHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufTtcclxuY29uc3QgbmF2RGF0YSA9IHtcclxuICBsaW5rczogW1xyXG4gICAge1xyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgbGFiZWw6IFwiSG9tZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgIGxhYmVsOiBcIlByb2R1Y3RzXCIsXHJcbiAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgICAgICBpY29uOiBJY29uQnVpbGRpbmdDYXJvdXNlbCxcclxuICAgICAgICAgIGxhYmVsOiBcIkFpciBzb2x1dGlvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgICAgICBpY29uOiBJY29uRHJvcGxldEZpbGxlZCxcclxuICAgICAgICAgIGxhYmVsOiBcIldhdGVyIFNvbHV0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgICAgIGljb246IEljb25Ecm9wbGV0RmlsbGVkLFxyXG4gICAgICAgICAgbGFiZWw6IFwiV2F0ZXIgU29sdXRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGluazogXCIvYWJvdXRcIixcclxuICAgICAgbGFiZWw6IFwiQWJvdXQgdXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxpbms6IFwiL2NvbnRhY3RcIixcclxuICAgICAgbGFiZWw6IFwiQ29udGFjdCB1c1wiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyIGxpbmtzPXtuYXZEYXRhLmxpbmtzfSAvPlxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIGRhdGE9e2RhdGEuZGF0YX0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsImRhdGEiLCJJY29uRHJvcGxldEZpbGxlZCIsIkljb25CdWlsZGluZ0Nhcm91c2VsIiwibmF2RGF0YSIsImxpbmtzIiwibGluayIsImxhYmVsIiwiaWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/index.tsx\n"));

/***/ })

});