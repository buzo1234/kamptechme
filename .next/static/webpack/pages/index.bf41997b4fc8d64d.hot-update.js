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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst mockdata = [\n    {\n        title: \"Air Purification\",\n        description: \"Airocide is the most technologically advanced air purifier on the market. Our mission was to make sure that the look complemented the performance. We have won an Edison award for our efforts, and our customers tell us that our air purifiers are a perfect match for the modern home. But, our design is not just meant to look good. It is critical to making sure that our NASA developed technology gets just the right amount of air to be as efficient as possible. This name for this is the Coanda effect.\",\n        icon: \"airocide.webp\"\n    },\n    {\n        title: \"Water Solution\",\n        description: \"The STABFOR unit\\xae is not an ordinary drinking water filter –⁠ it is not a filter at all. It is a flow-through device that comprehensively purifies water throughout the entire household and makes it living, clean and healthy without chemicals.\",\n        icon: \"11024.jpg\"\n    },\n    {\n        title: \"IT Solutions\",\n        description: \"MSI has more than 30 years’ of experience in motherboard design & manufacturing, ranked among the world’s top 3 largest motherboard manufacturers, recognized internationally for high quality and stability by clients and individual users.\",\n        icon: \"msi_it.jpg\"\n    }\n];\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({\n        title: {\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(34),\n            fontWeight: 900,\n            [theme.fn.smallerThan(\"sm\")]: {\n                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(24)\n            }\n        },\n        description: {\n            maxWidth: 600,\n            margin: \"auto\",\n            \"&::after\": {\n                content: '\"\"',\n                display: \"block\",\n                backgroundColor: theme.fn.primaryColor(),\n                width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(45),\n                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(2),\n                marginTop: theme.spacing.sm,\n                marginLeft: \"auto\",\n                marginRight: \"auto\"\n            }\n        },\n        card: {\n            cursor: \"pointer\",\n            border: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[5] : theme.colors.gray[1]),\n            \":hover\": {\n                border: \"1px solid \".concat(theme.primaryColor),\n                background: \"rgba(9,82,165,0.2)\"\n            }\n        },\n        cardTitle: {\n            \"&::after\": {\n                content: '\"\"',\n                display: \"block\",\n                backgroundColor: theme.fn.primaryColor(),\n                width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(45),\n                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(2),\n                marginTop: theme.spacing.sm\n            }\n        },\n        image: {\n            objectFit: \"cover\",\n            minHeight: \"250px\"\n        }\n    }));\nconst FeaturesCards = ()=>{\n    _s();\n    const { classes , theme  } = useStyles();\n    const features = mockdata.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            shadow: \"md\",\n            radius: \"md\",\n            className: classes.card,\n            padding: \"xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.CardSection, {\n                    style: {\n                        height: \"70%\",\n                        overflow: \"hidden\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: feature.icon,\n                        classNames: {\n                            image: classes.image\n                        },\n                        alt: \"loading...\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            fz: \"md\",\n                            fw: 500,\n                            style: {\n                                display: \"block\"\n                            },\n                            children: feature.title\n                        }, void 0, false, {\n                            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            fz: \"xs\",\n                            c: \"dimmed\",\n                            style: {\n                                display: \"block\"\n                            },\n                            children: feature.description\n                        }, void 0, false, {\n                            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, feature.title, true, {\n            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n            lineNumber: 94,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                order: 2,\n                className: classes.title,\n                ta: \"center\",\n                mt: \"sm\",\n                children: \"Designing products for sustainable future!\"\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                c: \"dimmed\",\n                className: classes.description,\n                ta: \"center\",\n                mt: \"md\",\n                children: \"We believe that technology can be a solution to the world's biggest problems and we're working to make it happen.\"\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full mt-14\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full col-span-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                    src: \"airocide.webp\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full col-span-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"font-bold \",\n                                        children: \"Air Purification\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Airocide is the most technologically advanced air purifier on the market. Our mission was to make sure that the look complemented the performance. We have won an Edison award for our efforts, and our customers tell us that our air purifiers are a perfect match for the modern home. But, our design is not just meant to look good. It is critical to making sure that our NASA developed technology gets just the right amount of air to be as efficient as possible. This name for this is the Coanda effect.\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 165,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full col-span-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Water Solutions\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 170,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"The STABFOR unit\\xae is not an ordinary drinking water filter –⁠ it is not a filter at all. It is a flow-through device that comprehensively purifies water throughout the entire household and makes it living, clean and healthy without chemicals.\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full col-span-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                    src: \"11024.jpg\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full col-span-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                    src: \"msi_it.jpg\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 177,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full col-span-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"IT Solutions\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 180,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"MSI has more than 30 years’ of experience in motherboard design & manufacturing, ranked among the world’s top 3 largest motherboard manufacturers, recognized internationally for high quality and stability by clients and individual users.\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                        lineNumber: 181,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                                lineNumber: 179,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Carousels\\\\index.tsx\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FeaturesCards, \"avhQTiO0Ssiy923MeHB2DFavZOc=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = FeaturesCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturesCards);\nvar _c;\n$RefreshReg$(_c, \"FeaturesCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWF1QjtBQUd2QixNQUFNUSxXQUFXO0lBQ2Y7UUFDRUMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyxZQUFZWiwyREFBWUEsQ0FBQyxDQUFDYSxRQUFXO1FBQ3pDSixPQUFPO1lBQ0xLLFVBQVVSLGtEQUFHQSxDQUFDO1lBQ2RTLFlBQVk7WUFFWixDQUFDRixNQUFNRyxFQUFFLENBQUNDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQzVCSCxVQUFVUixrREFBR0EsQ0FBQztZQUNoQjtRQUNGO1FBRUFJLGFBQWE7WUFDWFEsVUFBVTtZQUNWQyxRQUFRO1lBRVIsWUFBWTtnQkFDVkMsU0FBUztnQkFDVEMsU0FBUztnQkFDVEMsaUJBQWlCVCxNQUFNRyxFQUFFLENBQUNPLFlBQVk7Z0JBQ3RDQyxPQUFPbEIsa0RBQUdBLENBQUM7Z0JBQ1htQixRQUFRbkIsa0RBQUdBLENBQUM7Z0JBQ1pvQixXQUFXYixNQUFNYyxPQUFPLENBQUNDLEVBQUU7Z0JBQzNCQyxZQUFZO2dCQUNaQyxhQUFhO1lBQ2Y7UUFDRjtRQUVBQyxNQUFNO1lBQ0pDLFFBQVE7WUFDUkMsUUFBUSxHQUNOcEIsT0FEU1Asa0RBQUdBLENBQUMsSUFBRyxXQUVqQixPQURDTyxNQUFNcUIsV0FBVyxLQUFLLFNBQVNyQixNQUFNc0IsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHdkIsTUFBTXNCLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLEVBQUU7WUFFNUUsVUFBVTtnQkFDUkosUUFBUSxhQUFnQyxPQUFuQnBCLE1BQU1VLFlBQVk7Z0JBQ3ZDZSxZQUFZO1lBQ2Q7UUFDRjtRQUVBQyxXQUFXO1lBQ1QsWUFBWTtnQkFDVm5CLFNBQVM7Z0JBQ1RDLFNBQVM7Z0JBQ1RDLGlCQUFpQlQsTUFBTUcsRUFBRSxDQUFDTyxZQUFZO2dCQUN0Q0MsT0FBT2xCLGtEQUFHQSxDQUFDO2dCQUNYbUIsUUFBUW5CLGtEQUFHQSxDQUFDO2dCQUNab0IsV0FBV2IsTUFBTWMsT0FBTyxDQUFDQyxFQUFFO1lBQzdCO1FBQ0Y7UUFDQVksT0FBTztZQUNMQyxXQUFXO1lBQ1hDLFdBQVc7UUFDYjtJQUNGO0FBRUEsTUFBTUMsZ0JBQWdCLElBQU07O0lBQzFCLE1BQU0sRUFBRUMsUUFBTyxFQUFFL0IsTUFBSyxFQUFFLEdBQUdEO0lBQzNCLE1BQU1pQyxXQUFXckMsU0FBU3NDLEdBQUcsQ0FBQyxDQUFDQyx3QkFDN0IsOERBQUMxQywrQ0FBSUE7WUFFSDJDLFFBQU87WUFDUEMsUUFBTztZQUNQQyxXQUFXTixRQUFRYixJQUFJO1lBQ3ZCb0IsU0FBUTs7OEJBRVIsOERBQUM1QyxzREFBV0E7b0JBQ1Y2QyxPQUFPO3dCQUNMM0IsUUFBUTt3QkFDUjRCLFVBQVU7b0JBQ1o7OEJBRUEsNEVBQUNuRCxnREFBS0E7d0JBQ0pvRCxLQUFLUCxRQUFRcEMsSUFBSTt3QkFDakI0QyxZQUFZOzRCQUNWZixPQUFPSSxRQUFRSixLQUFLO3dCQUN0Qjt3QkFDQWdCLEtBQUk7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDdkQsZ0RBQUtBOztzQ0FDSiw4REFBQ0csK0NBQUlBOzRCQUNIcUQsSUFBSTs0QkFDSkMsSUFBSTs0QkFDSk4sT0FBTztnQ0FDTC9CLFNBQVM7NEJBQ1g7c0NBRUMwQixRQUFRdEMsS0FBSzs7Ozs7O3NDQUVoQiw4REFBQ0wsK0NBQUlBOzRCQUNIcUQsSUFBSTs0QkFDSkUsR0FBRTs0QkFDRlAsT0FBTztnQ0FDTC9CLFNBQVM7NEJBQ1g7c0NBRUMwQixRQUFRckMsV0FBVzs7Ozs7Ozs7Ozs7OztXQXJDbkJxQyxRQUFRdEMsS0FBSzs7Ozs7SUEyQ3RCLHFCQUNFLDhEQUFDbUQ7UUFBSVYsV0FBVTs7MEJBQ2IsOERBQUMvQyxnREFBS0E7Z0JBQUMwRCxPQUFPO2dCQUFHWCxXQUFXTixRQUFRbkMsS0FBSztnQkFBRXFELElBQUc7Z0JBQVNDLElBQUc7MEJBQUs7Ozs7OzswQkFJL0QsOERBQUMzRCwrQ0FBSUE7Z0JBQUN1RCxHQUFFO2dCQUFTVCxXQUFXTixRQUFRbEMsV0FBVztnQkFBRW9ELElBQUc7Z0JBQVNDLElBQUc7MEJBQUs7Ozs7OzswQkFhckUsOERBQUNIO2dCQUFJVixXQUFVOztrQ0FFYiw4REFBQ1U7d0JBQUlWLFdBQVU7OzBDQUNiLDhEQUFDVTtnQ0FBSVYsV0FBVTswQ0FDYiw0RUFBQ2hELGdEQUFLQTtvQ0FBQ29ELEtBQUs7Ozs7Ozs7Ozs7OzBDQUVkLDhEQUFDTTtnQ0FBSVYsV0FBVTs7a0RBQ2IsOERBQUNjO3dDQUFHZCxXQUFVO2tEQUFhOzs7Ozs7a0RBQzNCLDhEQUFDZTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdQLDhEQUFDTDt3QkFBSVYsV0FBVTs7MENBQ2IsOERBQUNVO2dDQUFJVixXQUFVOztrREFDZiw4REFBQ2M7a0RBQUc7Ozs7OztrREFDRiw4REFBQ0M7a0RBQUU7Ozs7Ozs7Ozs7OzswQ0FDTCw4REFBQ0w7Z0NBQUlWLFdBQVU7MENBQ2YsNEVBQUNoRCxnREFBS0E7b0NBQUNvRCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ007d0JBQUlWLFdBQVU7OzBDQUNiLDhEQUFDVTtnQ0FBSVYsV0FBVTswQ0FDZiw0RUFBQ2hELGdEQUFLQTtvQ0FBQ29ELEtBQUs7Ozs7Ozs7Ozs7OzBDQUNaLDhEQUFDTTtnQ0FBSVYsV0FBVTs7a0RBQ2YsOERBQUNjO2tEQUFHOzs7Ozs7a0RBQ0YsOERBQUNDO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZjtHQWpHTXRCOztRQUN1Qi9COzs7S0FEdkIrQjtBQW1HTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbHMvaW5kZXgudHN4PzllMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjcmVhdGVTdHlsZXMsXHJcbiAgQmFkZ2UsXHJcbiAgR3JvdXAsXHJcbiAgSW1hZ2UsXHJcbiAgVGl0bGUsXHJcbiAgVGV4dCxcclxuICBDYXJkLFxyXG4gIFNpbXBsZUdyaWQsXHJcbiAgQ29udGFpbmVyLFxyXG4gIHJlbSxcclxuICBDYXJkU2VjdGlvbixcclxuICBnZXRTdHlsZXNSZWYsXHJcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuaW1wb3J0IHsgSWNvbkdhdWdlLCBJY29uVXNlciwgSWNvbkNvb2tpZSB9IGZyb20gXCJAdGFibGVyL2ljb25zLXJlYWN0XCI7XHJcblxyXG5jb25zdCBtb2NrZGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJBaXIgUHVyaWZpY2F0aW9uXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBaXJvY2lkZSBpcyB0aGUgbW9zdCB0ZWNobm9sb2dpY2FsbHkgYWR2YW5jZWQgYWlyIHB1cmlmaWVyIG9uIHRoZSBtYXJrZXQuIE91ciBtaXNzaW9uIHdhcyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgbG9vayBjb21wbGVtZW50ZWQgdGhlIHBlcmZvcm1hbmNlLiBXZSBoYXZlIHdvbiBhbiBFZGlzb24gYXdhcmQgZm9yIG91ciBlZmZvcnRzLCBhbmQgb3VyIGN1c3RvbWVycyB0ZWxsIHVzIHRoYXQgb3VyIGFpciBwdXJpZmllcnMgYXJlIGEgcGVyZmVjdCBtYXRjaCBmb3IgdGhlIG1vZGVybiBob21lLiBCdXQsIG91ciBkZXNpZ24gaXMgbm90IGp1c3QgbWVhbnQgdG8gbG9vayBnb29kLiBJdCBpcyBjcml0aWNhbCB0byBtYWtpbmcgc3VyZSB0aGF0IG91ciBOQVNBIGRldmVsb3BlZCB0ZWNobm9sb2d5IGdldHMganVzdCB0aGUgcmlnaHQgYW1vdW50IG9mIGFpciB0byBiZSBhcyBlZmZpY2llbnQgYXMgcG9zc2libGUuIFRoaXMgbmFtZSBmb3IgdGhpcyBpcyB0aGUgQ29hbmRhIGVmZmVjdC5cIixcclxuICAgIGljb246IFwiYWlyb2NpZGUud2VicFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2F0ZXIgU29sdXRpb25cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoZSBTVEFCRk9SIHVuaXTCriBpcyBub3QgYW4gb3JkaW5hcnkgZHJpbmtpbmcgd2F0ZXIgZmlsdGVyIOKAk+KBoCBpdCBpcyBub3QgYSBmaWx0ZXIgYXQgYWxsLiBJdCBpcyBhIGZsb3ctdGhyb3VnaCBkZXZpY2UgdGhhdCBjb21wcmVoZW5zaXZlbHkgcHVyaWZpZXMgd2F0ZXIgdGhyb3VnaG91dCB0aGUgZW50aXJlIGhvdXNlaG9sZCBhbmQgbWFrZXMgaXQgbGl2aW5nLCBjbGVhbiBhbmQgaGVhbHRoeSB3aXRob3V0IGNoZW1pY2Fscy5cIixcclxuICAgIGljb246IFwiMTEwMjQuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJJVCBTb2x1dGlvbnNcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk1TSSBoYXMgbW9yZSB0aGFuIDMwIHllYXJz4oCZIG9mIGV4cGVyaWVuY2UgaW4gbW90aGVyYm9hcmQgZGVzaWduICYgbWFudWZhY3R1cmluZywgcmFua2VkIGFtb25nIHRoZSB3b3JsZOKAmXMgdG9wIDMgbGFyZ2VzdCBtb3RoZXJib2FyZCBtYW51ZmFjdHVyZXJzLCByZWNvZ25pemVkIGludGVybmF0aW9uYWxseSBmb3IgaGlnaCBxdWFsaXR5IGFuZCBzdGFiaWxpdHkgYnkgY2xpZW50cyBhbmQgaW5kaXZpZHVhbCB1c2Vycy5cIixcclxuICAgIGljb246IFwibXNpX2l0LmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogcmVtKDM0KSxcclxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuXHJcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcclxuICAgICAgZm9udFNpemU6IHJlbSgyNCksXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBtYXhXaWR0aDogNjAwLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuXHJcbiAgICBcIiY6OmFmdGVyXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZm4ucHJpbWFyeUNvbG9yKCksXHJcbiAgICAgIHdpZHRoOiByZW0oNDUpLFxyXG4gICAgICBoZWlnaHQ6IHJlbSgyKSxcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxyXG4gICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBjYXJkOiB7XHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgYm9yZGVyOiBgJHtyZW0oMSl9IHNvbGlkICR7XHJcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzVdIDogdGhlbWUuY29sb3JzLmdyYXlbMV1cclxuICAgIH1gLFxyXG4gICAgXCI6aG92ZXJcIjoge1xyXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wcmltYXJ5Q29sb3J9YCxcclxuICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDksODIsMTY1LDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgY2FyZFRpdGxlOiB7XHJcbiAgICBcIiY6OmFmdGVyXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZm4ucHJpbWFyeUNvbG9yKCksXHJcbiAgICAgIHdpZHRoOiByZW0oNDUpLFxyXG4gICAgICBoZWlnaHQ6IHJlbSgyKSxcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgIG1pbkhlaWdodDogXCIyNTBweFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZlYXR1cmVzQ2FyZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc2VzLCB0aGVtZSB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZmVhdHVyZXMgPSBtb2NrZGF0YS5tYXAoKGZlYXR1cmUpID0+IChcclxuICAgIDxDYXJkXHJcbiAgICAgIGtleT17ZmVhdHVyZS50aXRsZX1cclxuICAgICAgc2hhZG93PVwibWRcIlxyXG4gICAgICByYWRpdXM9XCJtZFwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfVxyXG4gICAgICBwYWRkaW5nPVwieGxcIlxyXG4gICAgPlxyXG4gICAgICA8Q2FyZFNlY3Rpb25cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBcIjcwJVwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtmZWF0dXJlLmljb259XHJcbiAgICAgICAgICBjbGFzc05hbWVzPXt7XHJcbiAgICAgICAgICAgIGltYWdlOiBjbGFzc2VzLmltYWdlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFsdD1cImxvYWRpbmcuLi5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZFNlY3Rpb24+XHJcbiAgICAgIDxHcm91cD5cclxuICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgZno9e1wibWRcIn1cclxuICAgICAgICAgIGZ3PXs1MDB9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtmZWF0dXJlLnRpdGxlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgZno9e1wieHNcIn1cclxuICAgICAgICAgIGM9XCJkaW1tZWRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZmVhdHVyZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvR3JvdXA+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwXCI+XHJcbiAgICAgIDxUaXRsZSBvcmRlcj17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB0YT1cImNlbnRlclwiIG10PVwic21cIj5cclxuICAgICAgICBEZXNpZ25pbmcgcHJvZHVjdHMgZm9yIHN1c3RhaW5hYmxlIGZ1dHVyZSFcclxuICAgICAgPC9UaXRsZT5cclxuXHJcbiAgICAgIDxUZXh0IGM9XCJkaW1tZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259IHRhPVwiY2VudGVyXCIgbXQ9XCJtZFwiPlxyXG4gICAgICBXZSBiZWxpZXZlIHRoYXQgdGVjaG5vbG9neSBjYW4gYmUgYSBzb2x1dGlvbiB0byB0aGUgd29ybGQncyBiaWdnZXN0IHByb2JsZW1zIGFuZCB3ZSdyZSB3b3JraW5nIHRvIG1ha2UgaXQgaGFwcGVuLlxyXG4gICAgICA8L1RleHQ+XHJcblxyXG4gICAgICB7LyogPFNpbXBsZUdyaWRcclxuICAgICAgICBjb2xzPXszfVxyXG4gICAgICAgIHNwYWNpbmc9XCJ4bFwiXHJcbiAgICAgICAgbXQ9ezUwfVxyXG4gICAgICAgIGJyZWFrcG9pbnRzPXtbeyBtYXhXaWR0aDogXCJzbVwiLCBjb2xzOiAxIH1dfVxyXG4gICAgICA+XHJcbiAgICAgICAge2ZlYXR1cmVzfVxyXG4gICAgICA8L1NpbXBsZUdyaWQ+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtdC0xNFwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcImFpcm9jaWRlLndlYnBcIn0gIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIFwiPkFpciBQdXJpZmljYXRpb248L2gxPlxyXG4gICAgICAgICAgICA8cD5BaXJvY2lkZSBpcyB0aGUgbW9zdCB0ZWNobm9sb2dpY2FsbHkgYWR2YW5jZWQgYWlyIHB1cmlmaWVyIG9uIHRoZSBtYXJrZXQuIE91ciBtaXNzaW9uIHdhcyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgbG9vayBjb21wbGVtZW50ZWQgdGhlIHBlcmZvcm1hbmNlLiBXZSBoYXZlIHdvbiBhbiBFZGlzb24gYXdhcmQgZm9yIG91ciBlZmZvcnRzLCBhbmQgb3VyIGN1c3RvbWVycyB0ZWxsIHVzIHRoYXQgb3VyIGFpciBwdXJpZmllcnMgYXJlIGEgcGVyZmVjdCBtYXRjaCBmb3IgdGhlIG1vZGVybiBob21lLiBCdXQsIG91ciBkZXNpZ24gaXMgbm90IGp1c3QgbWVhbnQgdG8gbG9vayBnb29kLiBJdCBpcyBjcml0aWNhbCB0byBtYWtpbmcgc3VyZSB0aGF0IG91ciBOQVNBIGRldmVsb3BlZCB0ZWNobm9sb2d5IGdldHMganVzdCB0aGUgcmlnaHQgYW1vdW50IG9mIGFpciB0byBiZSBhcyBlZmZpY2llbnQgYXMgcG9zc2libGUuIFRoaXMgbmFtZSBmb3IgdGhpcyBpcyB0aGUgQ29hbmRhIGVmZmVjdC48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgPGgxPldhdGVyIFNvbHV0aW9uczwvaDE+XHJcbiAgICAgICAgICAgIDxwPlRoZSBTVEFCRk9SIHVuaXTCriBpcyBub3QgYW4gb3JkaW5hcnkgZHJpbmtpbmcgd2F0ZXIgZmlsdGVyIOKAk+KBoCBpdCBpcyBub3QgYSBmaWx0ZXIgYXQgYWxsLiBJdCBpcyBhIGZsb3ctdGhyb3VnaCBkZXZpY2UgdGhhdCBjb21wcmVoZW5zaXZlbHkgcHVyaWZpZXMgd2F0ZXIgdGhyb3VnaG91dCB0aGUgZW50aXJlIGhvdXNlaG9sZCBhbmQgbWFrZXMgaXQgbGl2aW5nLCBjbGVhbiBhbmQgaGVhbHRoeSB3aXRob3V0IGNoZW1pY2Fscy48L3A+PC9kaXY+ICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIjExMDI0LmpwZ1wifSAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIm1zaV9pdC5qcGdcIn0gIC8+PC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICA8aDE+SVQgU29sdXRpb25zPC9oMT5cclxuICAgICAgICAgICAgPHA+TVNJIGhhcyBtb3JlIHRoYW4gMzAgeWVhcnPigJkgb2YgZXhwZXJpZW5jZSBpbiBtb3RoZXJib2FyZCBkZXNpZ24gJiBtYW51ZmFjdHVyaW5nLCByYW5rZWQgYW1vbmcgdGhlIHdvcmxk4oCZcyB0b3AgMyBsYXJnZXN0IG1vdGhlcmJvYXJkIG1hbnVmYWN0dXJlcnMsIHJlY29nbml6ZWQgaW50ZXJuYXRpb25hbGx5IGZvciBoaWdoIHF1YWxpdHkgYW5kIHN0YWJpbGl0eSBieSBjbGllbnRzIGFuZCBpbmRpdmlkdWFsIHVzZXJzLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXNDYXJkcztcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsIkdyb3VwIiwiSW1hZ2UiLCJUaXRsZSIsIlRleHQiLCJDYXJkIiwicmVtIiwiQ2FyZFNlY3Rpb24iLCJtb2NrZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwidXNlU3R5bGVzIiwidGhlbWUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmbiIsInNtYWxsZXJUaGFuIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJjb250ZW50IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsInByaW1hcnlDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsInNtIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiY2FyZCIsImN1cnNvciIsImJvcmRlciIsImNvbG9yU2NoZW1lIiwiY29sb3JzIiwiZGFyayIsImdyYXkiLCJiYWNrZ3JvdW5kIiwiY2FyZFRpdGxlIiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJtaW5IZWlnaHQiLCJGZWF0dXJlc0NhcmRzIiwiY2xhc3NlcyIsImZlYXR1cmVzIiwibWFwIiwiZmVhdHVyZSIsInNoYWRvdyIsInJhZGl1cyIsImNsYXNzTmFtZSIsInBhZGRpbmciLCJzdHlsZSIsIm92ZXJmbG93Iiwic3JjIiwiY2xhc3NOYW1lcyIsImFsdCIsImZ6IiwiZnciLCJjIiwiZGl2Iiwib3JkZXIiLCJ0YSIsIm10IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Carousels/index.tsx\n"));

/***/ })

});