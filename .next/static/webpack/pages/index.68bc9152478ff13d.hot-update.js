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

/***/ "./src/components/Banner/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Banner/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst mockData = [\n    {\n        title: \"John Wick\",\n        src: \"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600\",\n        email: \"JohnWick234@gmail.com\",\n        description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illo aspernatur, veniam corrupti alias eos officia tempora est harum commodi, earum nulla voluptatem dolores aliquid perspiciatis iusto architecto? Sed, iusto!\"\n    },\n    {\n        title: \"Shane watson\",\n        src: \"https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600\",\n        email: \"ShaneWatson@gmail.com\",\n        description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illo aspernatur, veniam corrupti alias eos officia tempora est harum commodi, earum nulla voluptatem dolores aliquid perspiciatis iusto architecto? Sed, iusto!\"\n    },\n    {\n        title: \"Lex Luther\",\n        src: \"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600\",\n        email: \"LexLuther@gmail.com\",\n        description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illo aspernatur, veniam corrupti alias eos officia tempora est harum commodi, earum nulla voluptatem dolores aliquid perspiciatis iusto architecto? Sed, iusto!\"\n    }\n];\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({\n        title: {\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(34),\n            fontWeight: 900,\n            [theme.fn.smallerThan(\"sm\")]: {\n                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(24)\n            }\n        },\n        description: {\n            maxWidth: 600,\n            margin: \"auto\",\n            \"&::after\": {\n                content: '\"\"',\n                display: \"block\",\n                backgroundColor: theme.fn.primaryColor(),\n                width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(45),\n                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(2),\n                marginTop: theme.spacing.sm,\n                marginLeft: \"auto\",\n                marginRight: \"auto\"\n            }\n        },\n        card: {\n            border: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[5] : theme.colors.gray[1])\n        },\n        content: {\n            \"&\": {\n                marginBottom: 0\n            }\n        },\n        body: {\n            fontSize: theme.fontSizes.sm,\n            paddingTop: theme.spacing.sm,\n            paddingLeft: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(54)\n        },\n        cardTitle: {\n            \"&::after\": {\n                content: '\"\"',\n                display: \"block\",\n                backgroundColor: theme.fn.primaryColor(),\n                width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(45),\n                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(2),\n                marginTop: theme.spacing.sm\n            }\n        }\n    }));\nconst Banner = ()=>{\n    _s();\n    const { classes , theme  } = useStyles();\n    const features = mockData.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            shadow: \"md\",\n            radius: \"md\",\n            className: classes.card,\n            padding: \"xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            src: \"\".concat(feature.src),\n                            alt: \"it's me\",\n                            radius: \"xl\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                    fz: \"sm\",\n                                    children: feature.title\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                    fz: \"xs\",\n                                    c: \"dimmed\",\n                                    children: feature.email\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TypographyStylesProvider, {\n                    className: classes.body,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classes.content,\n                        dangerouslySetInnerHTML: {\n                            __html: \"\".concat(feature.description)\n                        }\n                    }, void 0, false, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, feature.title, true, {\n            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n            lineNumber: 96,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        size: \"lg\",\n        py: \"xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                order: 2,\n                className: classes.title,\n                ta: \"center\",\n                mt: \"sm\",\n                children: \"WHAT THEY SAY FOR OUR PRODUCTS\"\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                c: \"dimmed\",\n                className: classes.description,\n                ta: \"center\",\n                mt: \"md\",\n                children: \"Products are made in the factory, but brands are created in the mind.\"\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n                cols: 3,\n                spacing: \"xl\",\n                mt: 50,\n                breakpoints: [\n                    {\n                        maxWidth: \"md\",\n                        cols: 1\n                    }\n                ],\n                children: features\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Banner\\\\index.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Banner, \"avhQTiO0Ssiy923MeHB2DFavZOc=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dBbEIzRG9DLFFBQVF2QyxLQUFLOzs7OztJQXdCdEIscUJBQ0UsOERBQUNMLG9EQUFTQTtRQUFDdUQsTUFBSztRQUFLQyxJQUFHOzswQkFDdEIsOERBQUM1RCxnREFBS0E7Z0JBQUM2RCxPQUFPO2dCQUFHVixXQUFXTixRQUFRcEMsS0FBSztnQkFBRXFELElBQUc7Z0JBQVNDLElBQUc7MEJBQUs7Ozs7OzswQkFJL0QsOERBQUM5RCwrQ0FBSUE7Z0JBQUN1RCxHQUFFO2dCQUFTTCxXQUFXTixRQUFRakMsV0FBVztnQkFBRWtELElBQUc7Z0JBQVNDLElBQUc7MEJBQUs7Ozs7OzswQkFJckUsOERBQUM1RCxxREFBVUE7Z0JBQ1Q2RCxNQUFNO2dCQUNOcEMsU0FBUTtnQkFDUm1DLElBQUk7Z0JBQ0pFLGFBQWE7b0JBQUM7d0JBQUU5QyxVQUFVO3dCQUFNNkMsTUFBTTtvQkFBRTtpQkFBRTswQkFFekNsQjs7Ozs7Ozs7Ozs7O0FBSVQ7R0FoRE1GOztRQUN1Qi9COzs7S0FEdkIrQjtBQWtETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CYW5uZXIvaW5kZXgudHN4PzUyMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjcmVhdGVTdHlsZXMsXHJcbiAgQmFkZ2UsXHJcbiAgR3JvdXAsXHJcbiAgVGl0bGUsXHJcbiAgVGV4dCxcclxuICBDYXJkLFxyXG4gIFNpbXBsZUdyaWQsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFR5cG9ncmFwaHlTdHlsZXNQcm92aWRlcixcclxuICByZW0sXHJcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcblxyXG5jb25zdCBtb2NrRGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJKb2huIFdpY2tcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yMjA0NTMvcGV4ZWxzLXBob3RvLTIyMDQ1My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz02MDBcIixcclxuICAgIGVtYWlsOiBcIkpvaG5XaWNrMjM0QGdtYWlsLmNvbVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSwgaWxsbyBhc3Blcm5hdHVyLCB2ZW5pYW0gY29ycnVwdGkgYWxpYXMgZW9zIG9mZmljaWEgdGVtcG9yYSBlc3QgaGFydW0gY29tbW9kaSwgZWFydW0gbnVsbGEgdm9sdXB0YXRlbSBkb2xvcmVzIGFsaXF1aWQgcGVyc3BpY2lhdGlzIGl1c3RvIGFyY2hpdGVjdG8/IFNlZCwgaXVzdG8hXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTaGFuZSB3YXRzb25cIixcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNTU5NDg2L3BleGVscy1waG90by0xNTU5NDg2LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTYwMFwiLFxyXG4gICAgZW1haWw6IFwiU2hhbmVXYXRzb25AZ21haWwuY29tXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pLCBpbGxvIGFzcGVybmF0dXIsIHZlbmlhbSBjb3JydXB0aSBhbGlhcyBlb3Mgb2ZmaWNpYSB0ZW1wb3JhIGVzdCBoYXJ1bSBjb21tb2RpLCBlYXJ1bSBudWxsYSB2b2x1cHRhdGVtIGRvbG9yZXMgYWxpcXVpZCBwZXJzcGljaWF0aXMgaXVzdG8gYXJjaGl0ZWN0bz8gU2VkLCBpdXN0byFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxleCBMdXRoZXJcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82OTc1MDkvcGV4ZWxzLXBob3RvLTY5NzUwOS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz02MDBcIixcclxuICAgIGVtYWlsOiBcIkxleEx1dGhlckBnbWFpbC5jb21cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWksIGlsbG8gYXNwZXJuYXR1ciwgdmVuaWFtIGNvcnJ1cHRpIGFsaWFzIGVvcyBvZmZpY2lhIHRlbXBvcmEgZXN0IGhhcnVtIGNvbW1vZGksIGVhcnVtIG51bGxhIHZvbHVwdGF0ZW0gZG9sb3JlcyBhbGlxdWlkIHBlcnNwaWNpYXRpcyBpdXN0byBhcmNoaXRlY3RvPyBTZWQsIGl1c3RvIVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogcmVtKDM0KSxcclxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuXHJcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcclxuICAgICAgZm9udFNpemU6IHJlbSgyNCksXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBtYXhXaWR0aDogNjAwLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuXHJcbiAgICBcIiY6OmFmdGVyXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZm4ucHJpbWFyeUNvbG9yKCksXHJcbiAgICAgIHdpZHRoOiByZW0oNDUpLFxyXG4gICAgICBoZWlnaHQ6IHJlbSgyKSxcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxyXG4gICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBjYXJkOiB7XHJcbiAgICBib3JkZXI6IGAke3JlbSgxKX0gc29saWQgJHtcclxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbNV0gOiB0aGVtZS5jb2xvcnMuZ3JheVsxXVxyXG4gICAgfWAsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBcIiZcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYm9keToge1xyXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcuc20sXHJcbiAgICBwYWRkaW5nTGVmdDogcmVtKDU0KSxcclxuICB9LFxyXG4gIGNhcmRUaXRsZToge1xyXG4gICAgXCImOjphZnRlclwiOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmZuLnByaW1hcnlDb2xvcigpLFxyXG4gICAgICB3aWR0aDogcmVtKDQ1KSxcclxuICAgICAgaGVpZ2h0OiByZW0oMiksXHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NlcywgdGhlbWUgfSA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGZlYXR1cmVzID0gbW9ja0RhdGEubWFwKChmZWF0dXJlKSA9PiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBrZXk9e2ZlYXR1cmUudGl0bGV9XHJcbiAgICAgIHNoYWRvdz1cIm1kXCJcclxuICAgICAgcmFkaXVzPVwibWRcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH1cclxuICAgICAgcGFkZGluZz1cInhsXCJcclxuICAgID5cclxuICAgICAgPEdyb3VwPlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPXtgJHtmZWF0dXJlLnNyY31gfSBhbHQ9XCJpdCdzIG1lXCIgcmFkaXVzPXtcInhsXCJ9IC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUZXh0IGZ6PVwic21cIj57ZmVhdHVyZS50aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBmej1cInhzXCIgYz1cImRpbW1lZFwiPlxyXG4gICAgICAgICAgICB7ZmVhdHVyZS5lbWFpbH1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Hcm91cD5cclxuICAgICAgPFR5cG9ncmFwaHlTdHlsZXNQcm92aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGAke2ZlYXR1cmUuZGVzY3JpcHRpb259YCB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvVHlwb2dyYXBoeVN0eWxlc1Byb3ZpZGVyPlxyXG4gICAgPC9DYXJkPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBzaXplPVwibGdcIiBweT1cInhsXCI+XHJcbiAgICAgIDxUaXRsZSBvcmRlcj17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB0YT1cImNlbnRlclwiIG10PVwic21cIj5cclxuICAgICAgICBXSEFUIFRIRVkgU0FZIEZPUiBPVVIgUFJPRFVDVFNcclxuICAgICAgPC9UaXRsZT5cclxuXHJcbiAgICAgIDxUZXh0IGM9XCJkaW1tZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259IHRhPVwiY2VudGVyXCIgbXQ9XCJtZFwiPlxyXG4gICAgICAgIFByb2R1Y3RzIGFyZSBtYWRlIGluIHRoZSBmYWN0b3J5LCBidXQgYnJhbmRzIGFyZSBjcmVhdGVkIGluIHRoZSBtaW5kLlxyXG4gICAgICA8L1RleHQ+XHJcblxyXG4gICAgICA8U2ltcGxlR3JpZFxyXG4gICAgICAgIGNvbHM9ezN9XHJcbiAgICAgICAgc3BhY2luZz1cInhsXCJcclxuICAgICAgICBtdD17NTB9XHJcbiAgICAgICAgYnJlYWtwb2ludHM9e1t7IG1heFdpZHRoOiBcIm1kXCIsIGNvbHM6IDEgfV19XHJcbiAgICAgID5cclxuICAgICAgICB7ZmVhdHVyZXN9XHJcbiAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdHlsZXMiLCJHcm91cCIsIlRpdGxlIiwiVGV4dCIsIkNhcmQiLCJTaW1wbGVHcmlkIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeVN0eWxlc1Byb3ZpZGVyIiwicmVtIiwiQXZhdGFyIiwibW9ja0RhdGEiLCJ0aXRsZSIsInNyYyIsImVtYWlsIiwiZGVzY3JpcHRpb24iLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZuIiwic21hbGxlclRoYW4iLCJtYXhXaWR0aCIsIm1hcmdpbiIsImNvbnRlbnQiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeUNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwic20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJjYXJkIiwiYm9yZGVyIiwiY29sb3JTY2hlbWUiLCJjb2xvcnMiLCJkYXJrIiwiZ3JheSIsIm1hcmdpbkJvdHRvbSIsImJvZHkiLCJmb250U2l6ZXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJjYXJkVGl0bGUiLCJCYW5uZXIiLCJjbGFzc2VzIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwic2hhZG93IiwicmFkaXVzIiwiY2xhc3NOYW1lIiwicGFkZGluZyIsImFsdCIsImRpdiIsImZ6IiwiYyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic2l6ZSIsInB5Iiwib3JkZXIiLCJ0YSIsIm10IiwiY29scyIsImJyZWFrcG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Banner/index.tsx\n"));

/***/ })

});