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

/***/ "./src/components/Carousels/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Carousels/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst mockdata = [\n    {\n        title: \"Air Purification\",\n        description: \"Airocide is the most technologically advanced air purifier on the market. Our mission was to make sure that the look complemented the performance. We have won an Edison award for our efforts, and our customers tell us that our air purifiers are a perfect match for the modern home. But, our design is not just meant to look good. It is critical to making sure that our NASA developed technology gets just the right amount of air to be as efficient as possible. This name for this is the Coanda effect.\",\n        icon: \"airocide.webp\"\n    },\n    {\n        title: \"Water Solution\",\n        description: \"The STABFOR unit\\xae is not an ordinary drinking water filter –⁠ it is not a filter at all. It is a flow-through device that comprehensively purifies water throughout the entire household and makes it living, clean and healthy without chemicals.\",\n        icon: \"11024.jpg\"\n    },\n    {\n        title: \"IT Solutions\",\n        description: \"MSI has more than 30 years’ of experience in motherboard design & manufacturing, ranked among the world’s top 3 largest motherboard manufacturers, recognized internationally for high quality and stability by clients and individual users.\",\n        icon: \"msi_it.jpg\"\n    }\n];\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({\n        title: {\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(34),\n            fontWeight: 900,\n            [theme.fn.smallerThan(\"sm\")]: {\n                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(24)\n            }\n        },\n        description: {\n            maxWidth: 600,\n            margin: \"auto\",\n            \"&::after\": {\n                content: '\"\"',\n                display: \"block\",\n                backgroundColor: theme.fn.primaryColor(),\n                width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(45),\n                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(2),\n                marginTop: theme.spacing.sm,\n                marginLeft: \"auto\",\n                marginRight: \"auto\"\n            }\n        },\n        card: {\n            cursor: \"pointer\",\n            border: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[5] : theme.colors.gray[1]),\n            \":hover\": {\n                border: \"1px solid \".concat(theme.primaryColor),\n                background: \"rgba(9,82,165,0.2)\"\n            }\n        },\n        cardTitle: {\n            \"&::after\": {\n                content: '\"\"',\n                display: \"block\",\n                backgroundColor: theme.fn.primaryColor(),\n                width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(45),\n                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(2),\n                marginTop: theme.spacing.sm\n            }\n        },\n        image: {\n            objectFit: \"cover\",\n            minHeight: \"250px\"\n        }\n    }));\nconst FeaturesCards = ()=>{\n    _s();\n    const { classes , theme  } = useStyles();\n    const features = mockdata.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            shadow: \"md\",\n            radius: \"md\",\n            className: classes.card,\n            padding: \"xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.CardSection, {\n                    style: {\n                        height: \"70%\",\n                        overflow: \"hidden\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: feature.icon,\n                        classNames: {\n                            image: classes.image\n                        },\n                        alt: \"loading...\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            fz: \"md\",\n                            fw: 500,\n                            style: {\n                                display: \"block\"\n                            },\n                            children: feature.title\n                        }, void 0, false, {\n                            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            fz: \"xs\",\n                            c: \"dimmed\",\n                            style: {\n                                display: \"block\"\n                            },\n                            children: feature.description\n                        }, void 0, false, {\n                            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, feature.title, true, {\n            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n            lineNumber: 94,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                order: 2,\n                className: classes.title,\n                ta: \"center\",\n                mt: \"sm\",\n                children: \"Designing products for sustainable future!\"\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                c: \"dimmed\",\n                className: classes.description,\n                ta: \"center\",\n                mt: \"md\",\n                children: \"We believe that technology can be a solution to the world's biggest problems and we're working to make it happen.\"\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 my-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full col-span-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                    src: \"airocide.webp\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full col-span-1 md:px-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"font-bold text-5xl\",\n                                        children: \"Air Purification\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-10\",\n                                        children: \"Airocide is the most technologically advanced air purifier on the market. Our mission was to make sure that the look complemented the performance. We have won an Edison award for our efforts, and our customers tell us that our air purifiers are a perfect match for the modern home. But, our design is not just meant to look good. It is critical to making sure that our NASA developed technology gets just the right amount of air to be as efficient as possible. This name for this is the Coanda effect.\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 165,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full col-span-1 px-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"font-bold text-5xl\",\n                                        children: \"Water Solutions\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 170,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-10\",\n                                        children: \"The STABFOR unit\\xae is not an ordinary drinking water filter –⁠ it is not a filter at all. It is a flow-through device that comprehensively purifies water throughout the entire household and makes it living, clean and healthy without chemicals.\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full col-span-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                    src: \"11024.jpg\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full col-span-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                    src: \"msi_it.jpg\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 177,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full col-span-1 px-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"font-bold text-5xl\",\n                                        children: \"IT Solutions\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 180,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-10\",\n                                        children: \"MSI has more than 30 years’ of experience in motherboard design & manufacturing, ranked among the world’s top 3 largest motherboard manufacturers, recognized internationally for high quality and stability by clients and individual users.\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 181,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 179,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FeaturesCards, \"avhQTiO0Ssiy923MeHB2DFavZOc=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = FeaturesCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturesCards);\nvar _c;\n$RefreshReg$(_c, \"FeaturesCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWF1QjtBQUd2QixNQUFNUSxXQUFXO0lBQ2Y7UUFDRUMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyxZQUFZWiwyREFBWUEsQ0FBQyxDQUFDYSxRQUFXO1FBQ3pDSixPQUFPO1lBQ0xLLFVBQVVSLGtEQUFHQSxDQUFDO1lBQ2RTLFlBQVk7WUFFWixDQUFDRixNQUFNRyxFQUFFLENBQUNDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQzVCSCxVQUFVUixrREFBR0EsQ0FBQztZQUNoQjtRQUNGO1FBRUFJLGFBQWE7WUFDWFEsVUFBVTtZQUNWQyxRQUFRO1lBRVIsWUFBWTtnQkFDVkMsU0FBUztnQkFDVEMsU0FBUztnQkFDVEMsaUJBQWlCVCxNQUFNRyxFQUFFLENBQUNPLFlBQVk7Z0JBQ3RDQyxPQUFPbEIsa0RBQUdBLENBQUM7Z0JBQ1htQixRQUFRbkIsa0RBQUdBLENBQUM7Z0JBQ1pvQixXQUFXYixNQUFNYyxPQUFPLENBQUNDLEVBQUU7Z0JBQzNCQyxZQUFZO2dCQUNaQyxhQUFhO1lBQ2Y7UUFDRjtRQUVBQyxNQUFNO1lBQ0pDLFFBQVE7WUFDUkMsUUFBUSxHQUNOcEIsT0FEU1Asa0RBQUdBLENBQUMsSUFBRyxXQUVqQixPQURDTyxNQUFNcUIsV0FBVyxLQUFLLFNBQVNyQixNQUFNc0IsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHdkIsTUFBTXNCLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLEVBQUU7WUFFNUUsVUFBVTtnQkFDUkosUUFBUSxhQUFnQyxPQUFuQnBCLE1BQU1VLFlBQVk7Z0JBQ3ZDZSxZQUFZO1lBQ2Q7UUFDRjtRQUVBQyxXQUFXO1lBQ1QsWUFBWTtnQkFDVm5CLFNBQVM7Z0JBQ1RDLFNBQVM7Z0JBQ1RDLGlCQUFpQlQsTUFBTUcsRUFBRSxDQUFDTyxZQUFZO2dCQUN0Q0MsT0FBT2xCLGtEQUFHQSxDQUFDO2dCQUNYbUIsUUFBUW5CLGtEQUFHQSxDQUFDO2dCQUNab0IsV0FBV2IsTUFBTWMsT0FBTyxDQUFDQyxFQUFFO1lBQzdCO1FBQ0Y7UUFDQVksT0FBTztZQUNMQyxXQUFXO1lBQ1hDLFdBQVc7UUFDYjtJQUNGO0FBRUEsTUFBTUMsZ0JBQWdCLElBQU07O0lBQzFCLE1BQU0sRUFBRUMsUUFBTyxFQUFFL0IsTUFBSyxFQUFFLEdBQUdEO0lBQzNCLE1BQU1pQyxXQUFXckMsU0FBU3NDLEdBQUcsQ0FBQyxDQUFDQyx3QkFDN0IsOERBQUMxQywrQ0FBSUE7WUFFSDJDLFFBQU87WUFDUEMsUUFBTztZQUNQQyxXQUFXTixRQUFRYixJQUFJO1lBQ3ZCb0IsU0FBUTs7OEJBRVIsOERBQUM1QyxzREFBV0E7b0JBQ1Y2QyxPQUFPO3dCQUNMM0IsUUFBUTt3QkFDUjRCLFVBQVU7b0JBQ1o7OEJBRUEsNEVBQUNuRCxnREFBS0E7d0JBQ0pvRCxLQUFLUCxRQUFRcEMsSUFBSTt3QkFDakI0QyxZQUFZOzRCQUNWZixPQUFPSSxRQUFRSixLQUFLO3dCQUN0Qjt3QkFDQWdCLEtBQUk7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDdkQsZ0RBQUtBOztzQ0FDSiw4REFBQ0csK0NBQUlBOzRCQUNIcUQsSUFBSTs0QkFDSkMsSUFBSTs0QkFDSk4sT0FBTztnQ0FDTC9CLFNBQVM7NEJBQ1g7c0NBRUMwQixRQUFRdEMsS0FBSzs7Ozs7O3NDQUVoQiw4REFBQ0wsK0NBQUlBOzRCQUNIcUQsSUFBSTs0QkFDSkUsR0FBRTs0QkFDRlAsT0FBTztnQ0FDTC9CLFNBQVM7NEJBQ1g7c0NBRUMwQixRQUFRckMsV0FBVzs7Ozs7Ozs7Ozs7OztXQXJDbkJxQyxRQUFRdEMsS0FBSzs7Ozs7SUEyQ3RCLHFCQUNFLDhEQUFDbUQ7UUFBSVYsV0FBVTs7MEJBQ2IsOERBQUMvQyxnREFBS0E7Z0JBQUMwRCxPQUFPO2dCQUFHWCxXQUFXTixRQUFRbkMsS0FBSztnQkFBRXFELElBQUc7Z0JBQVNDLElBQUc7MEJBQUs7Ozs7OzswQkFJL0QsOERBQUMzRCwrQ0FBSUE7Z0JBQUN1RCxHQUFFO2dCQUFTVCxXQUFXTixRQUFRbEMsV0FBVztnQkFBRW9ELElBQUc7Z0JBQVNDLElBQUc7MEJBQUs7Ozs7OzswQkFhckUsOERBQUNIO2dCQUFJVixXQUFVOztrQ0FFYiw4REFBQ1U7d0JBQUlWLFdBQVU7OzBDQUNiLDhEQUFDVTtnQ0FBSVYsV0FBVTswQ0FDYiw0RUFBQ2hELGdEQUFLQTtvQ0FBQ29ELEtBQUs7Ozs7Ozs7Ozs7OzBDQUVkLDhEQUFDTTtnQ0FBSVYsV0FBVTs7a0RBQ2IsOERBQUNjO3dDQUFHZCxXQUFVO2tEQUFxQjs7Ozs7O2tEQUNuQyw4REFBQ2U7d0NBQUVmLFdBQVU7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHekIsOERBQUNVO3dCQUFJVixXQUFVOzswQ0FDYiw4REFBQ1U7Z0NBQUlWLFdBQVU7O2tEQUNmLDhEQUFDYzt3Q0FBR2QsV0FBVTtrREFBcUI7Ozs7OztrREFDakMsOERBQUNlO3dDQUFFZixXQUFVO2tEQUFROzs7Ozs7Ozs7Ozs7MENBQ3ZCLDhEQUFDVTtnQ0FBSVYsV0FBVTswQ0FDZiw0RUFBQ2hELGdEQUFLQTtvQ0FBQ29ELEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDTTt3QkFBSVYsV0FBVTs7MENBQ2IsOERBQUNVO2dDQUFJVixXQUFVOzBDQUNmLDRFQUFDaEQsZ0RBQUtBO29DQUFDb0QsS0FBSzs7Ozs7Ozs7Ozs7MENBQ1osOERBQUNNO2dDQUFLVixXQUFVOztrREFDaEIsOERBQUNjO3dDQUFHZCxXQUFVO2tEQUFxQjs7Ozs7O2tEQUNqQyw4REFBQ2U7d0NBQUVmLFdBQVU7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQztHQWpHTVA7O1FBQ3VCL0I7OztLQUR2QitCO0FBbUdOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2Vscy9pbmRleC50c3g/OWUxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNyZWF0ZVN0eWxlcyxcclxuICBCYWRnZSxcclxuICBHcm91cCxcclxuICBJbWFnZSxcclxuICBUaXRsZSxcclxuICBUZXh0LFxyXG4gIENhcmQsXHJcbiAgU2ltcGxlR3JpZCxcclxuICBDb250YWluZXIsXHJcbiAgcmVtLFxyXG4gIENhcmRTZWN0aW9uLFxyXG4gIGdldFN0eWxlc1JlZixcclxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5pbXBvcnQgeyBJY29uR2F1Z2UsIEljb25Vc2VyLCBJY29uQ29va2llIH0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcclxuXHJcbmNvbnN0IG1vY2tkYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFpciBQdXJpZmljYXRpb25cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFpcm9jaWRlIGlzIHRoZSBtb3N0IHRlY2hub2xvZ2ljYWxseSBhZHZhbmNlZCBhaXIgcHVyaWZpZXIgb24gdGhlIG1hcmtldC4gT3VyIG1pc3Npb24gd2FzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBsb29rIGNvbXBsZW1lbnRlZCB0aGUgcGVyZm9ybWFuY2UuIFdlIGhhdmUgd29uIGFuIEVkaXNvbiBhd2FyZCBmb3Igb3VyIGVmZm9ydHMsIGFuZCBvdXIgY3VzdG9tZXJzIHRlbGwgdXMgdGhhdCBvdXIgYWlyIHB1cmlmaWVycyBhcmUgYSBwZXJmZWN0IG1hdGNoIGZvciB0aGUgbW9kZXJuIGhvbWUuIEJ1dCwgb3VyIGRlc2lnbiBpcyBub3QganVzdCBtZWFudCB0byBsb29rIGdvb2QuIEl0IGlzIGNyaXRpY2FsIHRvIG1ha2luZyBzdXJlIHRoYXQgb3VyIE5BU0EgZGV2ZWxvcGVkIHRlY2hub2xvZ3kgZ2V0cyBqdXN0IHRoZSByaWdodCBhbW91bnQgb2YgYWlyIHRvIGJlIGFzIGVmZmljaWVudCBhcyBwb3NzaWJsZS4gVGhpcyBuYW1lIGZvciB0aGlzIGlzIHRoZSBDb2FuZGEgZWZmZWN0LlwiLFxyXG4gICAgaWNvbjogXCJhaXJvY2lkZS53ZWJwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXYXRlciBTb2x1dGlvblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhlIFNUQUJGT1IgdW5pdMKuIGlzIG5vdCBhbiBvcmRpbmFyeSBkcmlua2luZyB3YXRlciBmaWx0ZXIg4oCT4oGgIGl0IGlzIG5vdCBhIGZpbHRlciBhdCBhbGwuIEl0IGlzIGEgZmxvdy10aHJvdWdoIGRldmljZSB0aGF0IGNvbXByZWhlbnNpdmVseSBwdXJpZmllcyB3YXRlciB0aHJvdWdob3V0IHRoZSBlbnRpcmUgaG91c2Vob2xkIGFuZCBtYWtlcyBpdCBsaXZpbmcsIGNsZWFuIGFuZCBoZWFsdGh5IHdpdGhvdXQgY2hlbWljYWxzLlwiLFxyXG4gICAgaWNvbjogXCIxMTAyNC5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIklUIFNvbHV0aW9uc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTVNJIGhhcyBtb3JlIHRoYW4gMzAgeWVhcnPigJkgb2YgZXhwZXJpZW5jZSBpbiBtb3RoZXJib2FyZCBkZXNpZ24gJiBtYW51ZmFjdHVyaW5nLCByYW5rZWQgYW1vbmcgdGhlIHdvcmxk4oCZcyB0b3AgMyBsYXJnZXN0IG1vdGhlcmJvYXJkIG1hbnVmYWN0dXJlcnMsIHJlY29nbml6ZWQgaW50ZXJuYXRpb25hbGx5IGZvciBoaWdoIHF1YWxpdHkgYW5kIHN0YWJpbGl0eSBieSBjbGllbnRzIGFuZCBpbmRpdmlkdWFsIHVzZXJzLlwiLFxyXG4gICAgaWNvbjogXCJtc2lfaXQuanBnXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiByZW0oMzQpLFxyXG4gICAgZm9udFdlaWdodDogOTAwLFxyXG5cclxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInNtXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogcmVtKDI0KSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIG1heFdpZHRoOiA2MDAsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG5cclxuICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5mbi5wcmltYXJ5Q29sb3IoKSxcclxuICAgICAgd2lkdGg6IHJlbSg0NSksXHJcbiAgICAgIGhlaWdodDogcmVtKDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcuc20sXHJcbiAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGNhcmQ6IHtcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBib3JkZXI6IGAke3JlbSgxKX0gc29saWQgJHtcclxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbNV0gOiB0aGVtZS5jb2xvcnMuZ3JheVsxXVxyXG4gICAgfWAsXHJcbiAgICBcIjpob3ZlclwiOiB7XHJcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnByaW1hcnlDb2xvcn1gLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoOSw4MiwxNjUsMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBjYXJkVGl0bGU6IHtcclxuICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5mbi5wcmltYXJ5Q29sb3IoKSxcclxuICAgICAgd2lkdGg6IHJlbSg0NSksXHJcbiAgICAgIGhlaWdodDogcmVtKDIpLFxyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcuc20sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgbWluSGVpZ2h0OiBcIjI1MHB4XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRmVhdHVyZXNDYXJkcyA9ICgpID0+IHtcclxuICBjb25zdCB7IGNsYXNzZXMsIHRoZW1lIH0gPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBmZWF0dXJlcyA9IG1vY2tkYXRhLm1hcCgoZmVhdHVyZSkgPT4gKFxyXG4gICAgPENhcmRcclxuICAgICAga2V5PXtmZWF0dXJlLnRpdGxlfVxyXG4gICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgIHJhZGl1cz1cIm1kXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9XHJcbiAgICAgIHBhZGRpbmc9XCJ4bFwiXHJcbiAgICA+XHJcbiAgICAgIDxDYXJkU2VjdGlvblxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNzAlXCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e2ZlYXR1cmUuaWNvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcclxuICAgICAgICAgICAgaW1hZ2U6IGNsYXNzZXMuaW1hZ2UsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYWx0PVwibG9hZGluZy4uLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkU2VjdGlvbj5cclxuICAgICAgPEdyb3VwPlxyXG4gICAgICAgIDxUZXh0XHJcbiAgICAgICAgICBmej17XCJtZFwifVxyXG4gICAgICAgICAgZnc9ezUwMH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ZlYXR1cmUudGl0bGV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0XHJcbiAgICAgICAgICBmej17XCJ4c1wifVxyXG4gICAgICAgICAgYz1cImRpbW1lZFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtmZWF0dXJlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Hcm91cD5cclxuICAgIDwvQ2FyZD5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjBcIj5cclxuICAgICAgPFRpdGxlIG9yZGVyPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHRhPVwiY2VudGVyXCIgbXQ9XCJzbVwiPlxyXG4gICAgICAgIERlc2lnbmluZyBwcm9kdWN0cyBmb3Igc3VzdGFpbmFibGUgZnV0dXJlIVxyXG4gICAgICA8L1RpdGxlPlxyXG5cclxuICAgICAgPFRleHQgYz1cImRpbW1lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0gdGE9XCJjZW50ZXJcIiBtdD1cIm1kXCI+XHJcbiAgICAgIFdlIGJlbGlldmUgdGhhdCB0ZWNobm9sb2d5IGNhbiBiZSBhIHNvbHV0aW9uIHRvIHRoZSB3b3JsZCdzIGJpZ2dlc3QgcHJvYmxlbXMgYW5kIHdlJ3JlIHdvcmtpbmcgdG8gbWFrZSBpdCBoYXBwZW4uXHJcbiAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgIHsvKiA8U2ltcGxlR3JpZFxyXG4gICAgICAgIGNvbHM9ezN9XHJcbiAgICAgICAgc3BhY2luZz1cInhsXCJcclxuICAgICAgICBtdD17NTB9XHJcbiAgICAgICAgYnJlYWtwb2ludHM9e1t7IG1heFdpZHRoOiBcInNtXCIsIGNvbHM6IDEgfV19XHJcbiAgICAgID5cclxuICAgICAgICB7ZmVhdHVyZXN9XHJcbiAgICAgIDwvU2ltcGxlR3JpZD4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG10LThcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0yIG15LTEwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17XCJhaXJvY2lkZS53ZWJwXCJ9ICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGNvbC1zcGFuLTEgbWQ6cHgtMjBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTV4bFwiPkFpciBQdXJpZmljYXRpb248L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xMFwiPkFpcm9jaWRlIGlzIHRoZSBtb3N0IHRlY2hub2xvZ2ljYWxseSBhZHZhbmNlZCBhaXIgcHVyaWZpZXIgb24gdGhlIG1hcmtldC4gT3VyIG1pc3Npb24gd2FzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBsb29rIGNvbXBsZW1lbnRlZCB0aGUgcGVyZm9ybWFuY2UuIFdlIGhhdmUgd29uIGFuIEVkaXNvbiBhd2FyZCBmb3Igb3VyIGVmZm9ydHMsIGFuZCBvdXIgY3VzdG9tZXJzIHRlbGwgdXMgdGhhdCBvdXIgYWlyIHB1cmlmaWVycyBhcmUgYSBwZXJmZWN0IG1hdGNoIGZvciB0aGUgbW9kZXJuIGhvbWUuIEJ1dCwgb3VyIGRlc2lnbiBpcyBub3QganVzdCBtZWFudCB0byBsb29rIGdvb2QuIEl0IGlzIGNyaXRpY2FsIHRvIG1ha2luZyBzdXJlIHRoYXQgb3VyIE5BU0EgZGV2ZWxvcGVkIHRlY2hub2xvZ3kgZ2V0cyBqdXN0IHRoZSByaWdodCBhbW91bnQgb2YgYWlyIHRvIGJlIGFzIGVmZmljaWVudCBhcyBwb3NzaWJsZS4gVGhpcyBuYW1lIGZvciB0aGlzIGlzIHRoZSBDb2FuZGEgZWZmZWN0LjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBjb2wtc3Bhbi0xIHB4LTIwXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNXhsXCI+V2F0ZXIgU29sdXRpb25zPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMTBcIj5UaGUgU1RBQkZPUiB1bml0wq4gaXMgbm90IGFuIG9yZGluYXJ5IGRyaW5raW5nIHdhdGVyIGZpbHRlciDigJPigaAgaXQgaXMgbm90IGEgZmlsdGVyIGF0IGFsbC4gSXQgaXMgYSBmbG93LXRocm91Z2ggZGV2aWNlIHRoYXQgY29tcHJlaGVuc2l2ZWx5IHB1cmlmaWVzIHdhdGVyIHRocm91Z2hvdXQgdGhlIGVudGlyZSBob3VzZWhvbGQgYW5kIG1ha2VzIGl0IGxpdmluZywgY2xlYW4gYW5kIGhlYWx0aHkgd2l0aG91dCBjaGVtaWNhbHMuPC9wPjwvZGl2PiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17XCIxMTAyNC5qcGdcIn0gIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17XCJtc2lfaXQuanBnXCJ9ICAvPjwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGNvbC1zcGFuLTEgcHgtMjBcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC01eGxcIj5JVCBTb2x1dGlvbnM8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xMFwiPk1TSSBoYXMgbW9yZSB0aGFuIDMwIHllYXJz4oCZIG9mIGV4cGVyaWVuY2UgaW4gbW90aGVyYm9hcmQgZGVzaWduICYgbWFudWZhY3R1cmluZywgcmFua2VkIGFtb25nIHRoZSB3b3JsZOKAmXMgdG9wIDMgbGFyZ2VzdCBtb3RoZXJib2FyZCBtYW51ZmFjdHVyZXJzLCByZWNvZ25pemVkIGludGVybmF0aW9uYWxseSBmb3IgaGlnaCBxdWFsaXR5IGFuZCBzdGFiaWxpdHkgYnkgY2xpZW50cyBhbmQgaW5kaXZpZHVhbCB1c2Vycy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVzQ2FyZHM7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdHlsZXMiLCJHcm91cCIsIkltYWdlIiwiVGl0bGUiLCJUZXh0IiwiQ2FyZCIsInJlbSIsIkNhcmRTZWN0aW9uIiwibW9ja2RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsInVzZVN0eWxlcyIsInRoZW1lIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm4iLCJzbWFsbGVyVGhhbiIsIm1heFdpZHRoIiwibWFyZ2luIiwiY29udGVudCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5Q29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJzbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImNhcmQiLCJjdXJzb3IiLCJib3JkZXIiLCJjb2xvclNjaGVtZSIsImNvbG9ycyIsImRhcmsiLCJncmF5IiwiYmFja2dyb3VuZCIsImNhcmRUaXRsZSIsImltYWdlIiwib2JqZWN0Rml0IiwibWluSGVpZ2h0IiwiRmVhdHVyZXNDYXJkcyIsImNsYXNzZXMiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJzaGFkb3ciLCJyYWRpdXMiLCJjbGFzc05hbWUiLCJwYWRkaW5nIiwic3R5bGUiLCJvdmVyZmxvdyIsInNyYyIsImNsYXNzTmFtZXMiLCJhbHQiLCJmeiIsImZ3IiwiYyIsImRpdiIsIm9yZGVyIiwidGEiLCJtdCIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Carousels/index.tsx\n"));

/***/ })

});