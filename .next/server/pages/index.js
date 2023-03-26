"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof window.ethereum !== \"undefined\") {\n            window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            getData();\n        }\n    }, []);\n    async function getData() {\n        if (typeof window.ethereum !== \"undefined\") {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n            const signer = provider.getSigner();\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0, SimpleStorage.abi, signer);\n            try {\n                const storedData = await contract.get();\n                setData(storedData.toString());\n            } catch (err) {\n                console.error(err);\n            }\n        }\n    }\n    async function setDataValue() {\n        if (typeof window.ethereum !== \"undefined\") {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n            const signer = provider.getSigner();\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0, SimpleStorage.abi, signer);\n            try {\n                const transaction = await contract.set(inputValue);\n                await transaction.wait();\n                getData();\n            } catch (err) {\n                console.error(err);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Simple Storage\"\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/meine-dapp/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Stored value: \",\n                    data\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/codespaces-blank/meine-dapp/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: inputValue,\n                onChange: (e)=>setInputValue(e.target.value)\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/meine-dapp/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: setDataValue,\n                children: \"Set Value\"\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/meine-dapp/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/codespaces-blank/meine-dapp/pages/index.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNuQjtBQUVoQyxTQUFTSSxPQUFPO0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksT0FBT08sT0FBT0MsUUFBUSxLQUFLLGFBQWE7WUFDMUNELE9BQU9DLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQXNCO1lBQ3hEQztRQUNGLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxlQUFlQSxVQUFVO1FBQ3ZCLElBQUksT0FBT0osT0FBT0MsUUFBUSxLQUFLLGFBQWE7WUFDMUMsTUFBTUksV0FBVyxJQUFJWCxpRUFBNkIsQ0FBQ00sT0FBT0MsUUFBUTtZQUNsRSxNQUFNTyxTQUFTSCxTQUFTSSxTQUFTO1lBQ2pDLE1BQU1DLFdBQVcsSUFBSWhCLG1EQUFlLENBQUMsNENBQTRDa0IsY0FBY0MsR0FBRyxFQUFFTDtZQUVwRyxJQUFJO2dCQUNGLE1BQU1NLGFBQWEsTUFBTUosU0FBU0ssR0FBRztnQkFDckNsQixRQUFRaUIsV0FBV0UsUUFBUTtZQUM3QixFQUFFLE9BQU9DLEtBQUs7Z0JBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDaEI7UUFDRixDQUFDO0lBQ0g7SUFFQSxlQUFlRyxlQUFlO1FBQzVCLElBQUksT0FBT3BCLE9BQU9DLFFBQVEsS0FBSyxhQUFhO1lBQzFDLE1BQU1JLFdBQVcsSUFBSVgsaUVBQTZCLENBQUNNLE9BQU9DLFFBQVE7WUFDbEUsTUFBTU8sU0FBU0gsU0FBU0ksU0FBUztZQUNqQyxNQUFNQyxXQUFXLElBQUloQixtREFBZSxDQUFDLDRDQUE0Q2tCLGNBQWNDLEdBQUcsRUFBRUw7WUFFcEcsSUFBSTtnQkFDRixNQUFNYSxjQUFjLE1BQU1YLFNBQVNZLEdBQUcsQ0FBQ3hCO2dCQUN2QyxNQUFNdUIsWUFBWUUsSUFBSTtnQkFDdEJuQjtZQUNGLEVBQUUsT0FBT2EsS0FBSztnQkFDWkMsUUFBUUMsS0FBSyxDQUFDRjtZQUNoQjtRQUNGLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDTzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztvQkFBRTtvQkFBZTlCOzs7Ozs7OzBCQUNsQiw4REFBQytCO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPL0I7Z0JBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxjQUFjZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBRS9DLDhEQUFDSTtnQkFBT0MsU0FBU2Q7MEJBQWM7Ozs7Ozs7Ozs7OztBQUdyQztBQUVBLGlFQUFlekIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21laW5lLWRhcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICAgIGdldERhdGEoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoMHg5ZkU0NjczNjY3OWQyRDlhNjVGMDk5MkYyMjcyZEU5ZjNjN2ZhNmUwLCBTaW1wbGVTdG9yYWdlLmFiaSwgc2lnbmVyKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IGF3YWl0IGNvbnRyYWN0LmdldCgpO1xuICAgICAgICBzZXREYXRhKHN0b3JlZERhdGEudG9TdHJpbmcoKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNldERhdGFWYWx1ZSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KDB4OWZFNDY3MzY2NzlkMkQ5YTY1RjA5OTJGMjI3MmRFOWYzYzdmYTZlMCwgU2ltcGxlU3RvcmFnZS5hYmksIHNpZ25lcik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3Quc2V0KGlucHV0VmFsdWUpO1xuICAgICAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KCk7XG4gICAgICAgIGdldERhdGEoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlNpbXBsZSBTdG9yYWdlPC9oMT5cbiAgICAgIDxwPlN0b3JlZCB2YWx1ZToge2RhdGF9PC9wPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldERhdGFWYWx1ZX0+U2V0IFZhbHVlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiZ2V0RGF0YSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsIlNpbXBsZVN0b3JhZ2UiLCJhYmkiLCJzdG9yZWREYXRhIiwiZ2V0IiwidG9TdHJpbmciLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXREYXRhVmFsdWUiLCJ0cmFuc2FjdGlvbiIsInNldCIsIndhaXQiLCJkaXYiLCJoMSIsInAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();