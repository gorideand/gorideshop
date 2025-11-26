/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CartProvider({ children }) {\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const saved = localStorage.getItem(\"goride_cart\");\n        if (saved) setCart(JSON.parse(saved));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"goride_cart\", JSON.stringify(cart));\n    }, [\n        cart\n    ]);\n    const add = (product)=>{\n        setCart((prev)=>{\n            const existing = prev.find((p)=>p.id === product.id);\n            if (existing) return prev.map((p)=>p.id === product.id ? {\n                    ...p,\n                    qty: p.qty + 1\n                } : p);\n            return [\n                ...prev,\n                {\n                    ...product,\n                    qty: 1\n                }\n            ];\n        });\n    };\n    const remove = (id)=>setCart((prev)=>prev.filter((p)=>p.id !== id));\n    const clear = ()=>setCart([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            add,\n            remove,\n            clear\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Go Ride\\\\Documents\\\\web movil\\\\gorideshop\\\\components\\\\CartContext.js\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\nconst useCart = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0U7QUFFdEUsTUFBTUksNEJBQWNKLG9EQUFhQTtBQUUxQixTQUFTSyxhQUFhLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkMsSUFBSUYsT0FBT0QsUUFBUUksS0FBS0MsS0FBSyxDQUFDSjtJQUNoQyxHQUFHLEVBQUU7SUFFTFAsZ0RBQVNBLENBQUM7UUFDUlEsYUFBYUksT0FBTyxDQUFDLGVBQWVGLEtBQUtHLFNBQVMsQ0FBQ1I7SUFDckQsR0FBRztRQUFDQTtLQUFLO0lBRVQsTUFBTVMsTUFBTSxDQUFDQztRQUNYVCxRQUFRVSxDQUFBQTtZQUNOLE1BQU1DLFdBQVdELEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsRUFBRSxLQUFLTCxRQUFRSyxFQUFFO1lBQ25ELElBQUlILFVBQVUsT0FBT0QsS0FBS0ssR0FBRyxDQUFDRixDQUFBQSxJQUFLQSxFQUFFQyxFQUFFLEtBQUtMLFFBQVFLLEVBQUUsR0FBRztvQkFBRSxHQUFHRCxDQUFDO29CQUFFRyxLQUFLSCxFQUFFRyxHQUFHLEdBQUc7Z0JBQUUsSUFBSUg7WUFDcEYsT0FBTzttQkFBSUg7Z0JBQU07b0JBQUUsR0FBR0QsT0FBTztvQkFBRU8sS0FBSztnQkFBRTthQUFFO1FBQzFDO0lBQ0Y7SUFFQSxNQUFNQyxTQUFTLENBQUNILEtBQU9kLFFBQVFVLENBQUFBLE9BQVFBLEtBQUtRLE1BQU0sQ0FBQ0wsQ0FBQUEsSUFBS0EsRUFBRUMsRUFBRSxLQUFLQTtJQUNqRSxNQUFNSyxRQUFRLElBQU1uQixRQUFRLEVBQUU7SUFFOUIscUJBQU8sOERBQUNKLFlBQVl3QixRQUFRO1FBQUNDLE9BQU87WUFBRXRCO1lBQU1TO1lBQUtTO1lBQVFFO1FBQU07a0JBQUlyQjs7Ozs7O0FBQ3JFO0FBRU8sTUFBTXdCLFVBQVUsSUFBTTdCLGlEQUFVQSxDQUFDRyxhQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29yaWRlLXNob3AtdGVtcGxhdGUvLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzPzgyM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvcmlkZV9jYXJ0JylcbiAgICBpZiAoc2F2ZWQpIHNldENhcnQoSlNPTi5wYXJzZShzYXZlZCkpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dvcmlkZV9jYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpXG4gIH0sIFtjYXJ0XSlcblxuICBjb25zdCBhZGQgPSAocHJvZHVjdCkgPT4ge1xuICAgIHNldENhcnQocHJldiA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IHByZXYuZmluZChwID0+IHAuaWQgPT09IHByb2R1Y3QuaWQpXG4gICAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBwcmV2Lm1hcChwID0+IHAuaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLnAsIHF0eTogcC5xdHkgKyAxIH0gOiBwKVxuICAgICAgcmV0dXJuIFsuLi5wcmV2LCB7IC4uLnByb2R1Y3QsIHF0eTogMSB9XVxuICAgIH0pXG4gIH1cblxuICBjb25zdCByZW1vdmUgPSAoaWQpID0+IHNldENhcnQocHJldiA9PiBwcmV2LmZpbHRlcihwID0+IHAuaWQgIT09IGlkKSlcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiBzZXRDYXJ0KFtdKVxuXG4gIHJldHVybiA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2FydCwgYWRkLCByZW1vdmUsIGNsZWFyIH19PntjaGlsZHJlbn08L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHVzZUNvbnRleHQoQ2FydENvbnRleHQpXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0Iiwic2V0Q2FydCIsInNhdmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGQiLCJwcm9kdWN0IiwicHJldiIsImV4aXN0aW5nIiwiZmluZCIsInAiLCJpZCIsIm1hcCIsInF0eSIsInJlbW92ZSIsImZpbHRlciIsImNsZWFyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Rubik_arguments_subsets_latin_weight_400_500_600_700_variable_font_rubik_variableName_rubik___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\_app.js\",\"import\":\"Rubik\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"500\",\"600\",\"700\"],\"variable\":\"--font-rubik\"}],\"variableName\":\"rubik\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"Rubik\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\"],\\\"variable\\\":\\\"--font-rubik\\\"}],\\\"variableName\\\":\\\"rubik\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Rubik_arguments_subsets_latin_weight_400_500_600_700_variable_font_rubik_variableName_rubik___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_js_import_Rubik_arguments_subsets_latin_weight_400_500_600_700_variable_font_rubik_variableName_rubik___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Barlow_arguments_subsets_latin_weight_300_400_500_600_700_variable_font_barlow_variableName_barlow___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\_app.js\",\"import\":\"Barlow\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"300\",\"400\",\"500\",\"600\",\"700\"],\"variable\":\"--font-barlow\"}],\"variableName\":\"barlow\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"Barlow\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\"],\\\"variable\\\":\\\"--font-barlow\\\"}],\\\"variableName\\\":\\\"barlow\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Barlow_arguments_subsets_latin_weight_300_400_500_600_700_variable_font_barlow_variableName_barlow___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_js_import_Barlow_arguments_subsets_latin_weight_300_400_500_600_700_variable_font_barlow_variableName_barlow___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CartContext */ \"./components/CartContext.js\");\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: `${(next_font_google_target_css_path_pages_app_js_import_Rubik_arguments_subsets_latin_weight_400_500_600_700_variable_font_rubik_variableName_rubik___WEBPACK_IMPORTED_MODULE_3___default().variable)} ${(next_font_google_target_css_path_pages_app_js_import_Barlow_arguments_subsets_latin_weight_300_400_500_600_700_variable_font_barlow_variableName_barlow___WEBPACK_IMPORTED_MODULE_4___default().variable)} font-sans`,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Go Ride\\\\Documents\\\\web movil\\\\gorideshop\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Go Ride\\\\Documents\\\\web movil\\\\gorideshop\\\\pages\\\\_app.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Go Ride\\\\Documents\\\\web movil\\\\gorideshop\\\\pages\\\\_app.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBSU1BO0FBTUFDO0FBVndCO0FBRTBCO0FBY3pDLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILGlFQUFZQTtrQkFDWCw0RUFBQ0k7WUFBS0MsV0FBVyxDQUFDLEVBQUVQLG1NQUFjLENBQUMsQ0FBQyxFQUFFQywwTUFBZSxDQUFDLFVBQVUsQ0FBQztzQkFDL0QsNEVBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3JpZGUtc2hvcC10ZW1wbGF0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IHsgUnViaWssIEJhcmxvdyB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCJcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRDb250ZXh0XCJcblxuY29uc3QgcnViaWsgPSBSdWJpayh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjQwMFwiLCBcIjUwMFwiLCBcIjYwMFwiLCBcIjcwMFwiXSxcbiAgdmFyaWFibGU6IFwiLS1mb250LXJ1YmlrXCIsXG59KVxuXG5jb25zdCBiYXJsb3cgPSBCYXJsb3coe1xuICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcbiAgd2VpZ2h0OiBbXCIzMDBcIiwgXCI0MDBcIiwgXCI1MDBcIiwgXCI2MDBcIiwgXCI3MDBcIl0sXG4gIHZhcmlhYmxlOiBcIi0tZm9udC1iYXJsb3dcIixcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3J1YmlrLnZhcmlhYmxlfSAke2Jhcmxvdy52YXJpYWJsZX0gZm9udC1zYW5zYH0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0NhcnRQcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInJ1YmlrIiwiYmFybG93IiwiQ2FydFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWluIiwiY2xhc3NOYW1lIiwidmFyaWFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();