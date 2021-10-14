/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api-interface.js":
/*!******************************!*\
  !*** ./src/api-interface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"postData\": () => (/* binding */ postData),\n/* harmony export */   \"setGameID\": () => (/* binding */ setGameID)\n/* harmony export */ });\nconst apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\n\nlet gameId;\n\nconst createUrl = (choice) => {\n  if (choice === 'new-game') {\n    return `${apiUrl}games`;\n  }\n  return `${apiUrl}games/${gameId}/scores`;\n};\n\nconst getData = async () => {\n  const targetUrl = createUrl('get-score');\n  const response = await fetch(targetUrl);\n  return response.json();\n};\n\nconst postData = async (choice, data) => {\n  const targetUrl = createUrl(choice);\n  const response = await fetch(targetUrl, {\n    method: 'POST',\n    mode: 'cors',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n  return response.json();\n};\n\nconst setGameID = async () => {\n  gameId = window.localStorage.getItem('gameId');\n  gameId = JSON.parse(gameId);\n  if (gameId === null) {\n    const gameObj = {\n      name: 'Unique Leaderboard API',\n    };\n    const data = await postData('new-game', gameObj);\n    const pattern = /Game with ID: ([^ ]+)/;\n    [, gameId] = data.result.match(pattern);\n\n    window.localStorage.setItem('gameId', JSON.stringify(gameId));\n  }\n};\n\n\n\n//# sourceURL=webpack://leaderboard/./src/api-interface.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-interface.js */ \"./src/api-interface.js\");\n\n\nconst display = async () => {\n  const listElement = document.querySelector('#list');\n\n  const data = await (0,_api_interface_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\n\n  const leaderboard = data.result;\n  listElement.textContent = '';\n\n  Object.keys(leaderboard).forEach((key) => {\n    const listItem = document.createElement('li');\n    const { user, score } = leaderboard[key];\n    listItem.textContent = `${user}: ${score}`;\n    listElement.appendChild(listItem);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://leaderboard/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _api_interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-interface.js */ \"./src/api-interface.js\");\n\n\n\n\n\nconst newScoreBtn = document.querySelector('#new-score');\nconst scoreInput = document.querySelector('#score');\nconst nameInput = document.querySelector('#name');\nconst refreshBtn = document.querySelector('#refresh');\n\nconst clearInput = () => {\n  nameInput.value = '';\n  scoreInput.value = '';\n};\n\nnewScoreBtn.addEventListener('click', () => {\n  const newScore = scoreInput.value;\n  const newName = nameInput.value;\n\n  const scoreObj = {\n    user: newName,\n    score: newScore,\n  };\n  (0,_api_interface_js__WEBPACK_IMPORTED_MODULE_2__.postData)('new-score', scoreObj);\n  clearInput();\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_api_interface_js__WEBPACK_IMPORTED_MODULE_2__.setGameID)();\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nrefreshBtn.addEventListener('click', _display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;